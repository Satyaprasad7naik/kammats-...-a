

# T-Brand E-Commerce Platform

This project is a full-stack e-commerce application built with React, Node.js, Express, and Prisma.

## Prerequisites

- Node.js (v18 or later)
- npm
- A running PostgreSQL database.

## Project Setup

1.  **Configure Backend Environment:**
    Navigate to the `server` directory, and create a `.env` file for your environment variables. You will need to provide your `DATABASE_URL` and Stripe API keys.

2.  **Run Database Migrations:**
    From the `server` directory, apply the database schema.
    ```bash
    cd server
    npx prisma migrate dev
    cd ..
    ```

## Running in Development

You will need two separate terminal windows to run the frontend and backend servers.

**Terminal 1: Start the Backend**
```bash
cd server
npm install
npx tsx src/index.ts
```

**Terminal 2: Start the Frontend**
```bash
cd client
npm install
npm run dev



```

-   Frontend will be available at `http://localhost:5173`
-   Backend API will be available at `http://localhost:5000`


Option 1: Quick workaround : 
cd /Users/satyaprasadnaik/Downloads/kammats-tea-fix-ecommerce-stripe-migration-163555641861900473-2-main/client
npm install --legacy-peer-deps
npm run dev

  option  2 : 
frondend : 
cd /Users/satyaprasadnaik/Downloads/kammats tea ../client
npm install
npm run dev


backend : 
cd /Users/satyaprasadnaik/Downloads/kammats tea ../server
npm install
npx tsx src/index.ts




I’m giving you the exact commands to run in the right folders so you can start the app without ambiguity.

Use these commands exactly:

Backend:
cd /Users/satyaprasadnaik/Downloads/kammats tea ../server
JWT_SECRET=dev-secret PORT=5000 npx tsx src/index.ts 


Frontend:
cd /Users/satyaprasadnaik/Downloads/kammats tea ../client
npm run dev -- --host 0.0.0.0


Open the admin panel at:

http://localhost:5173/admin




The products API is now returning product data from http://localhost:5000/api/products.


Quick checklist added. Next, try these steps to view the Shop page on your phone:

Start the frontend so it listens on all interfaces:
In terminal:
cd client
npm install
npm run dev -- --host 0.0.0.0

Find your Mac's local IP (on the same Wi‑Fi as your phone):
macOS (Wi‑Fi):

ipconfig getifaddr en0

Or using ifconfig:
ifconfig | grep "inet " | grep -v 127.0.0.1

On your phone open the app URL:
In browser use: http://<MAC_IP>:5173/shop
(replace <MAC_IP> with the IP from step 2)
If it still doesn't load:
Make sure phone and Mac are on same network.
Disable any macOS firewall or allow incoming connections for Node/Vite.
Check the terminal running npm run dev for errors.
Open browser devtools on your phone (or inspect via desktop remote debugging) and check console/network errors.
Extra checks (if route exists but clicking Shop doesn't navigate on mobile):

