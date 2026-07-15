import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products';
import ordersRouter from './routes/orders';
import adminRouter from './routes/admin';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const parseAllowedOrigins = () => {
  const configuredOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URLS]
    .flatMap((value) => (value || '').split(',').map((origin) => origin.trim()).filter(Boolean));

  return Array.from(new Set([...configuredOrigins, 'http://localhost:5173', 'http://localhost:5174']));
};

const allowedOrigins = parseAllowedOrigins();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error('CORS policy: Origin not allowed'));
  },
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/admin', adminRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
