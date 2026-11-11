# NOOR — Luxury Fashion E-Commerce

React + Vite fashion e-commerce project for the NOOR internship build.

## Current customer flow
- Browse Men and Women without logging in.
- View product details, choose S–XXXL, add to Bag or Buy Now.
- Checkout requires a registered account.
- Sign Up creates a local demo account and assigns a NOOR user ID.
- Login now validates the supplied user ID/email and password against registered demo accounts.
- Forgot Password asks for the user ID first and confirms that the request will be processed within 2 hours.
- Theme stays black/gold by default; logged-in users can switch between dark luxury and warm ivory themes.
- Checkout collects phone number, address, city and PIN code.
- Checkout shows every ordered product, size, quantity, total and estimated shipment date.
- Payment page provides PhonePe, Google Pay and Cash on Delivery choices, a demo QR, a five-minute payment window, and “Confirm your order & pay on shipment day”.
- Timer expiry confirms the order without deducting payment.
- Confirmed orders show a green confirmation tick, order details and shipment date.
- My Orders stores and displays the customer's confirmed orders.

## Backend direction
`server/src/server.js` contains the Express/MongoDB/JWT/bcrypt foundation. The current customer UI uses local demo authentication so the shopping flow can be tested before MongoDB is connected. The next implementation phase can move user accounts, orders and admin permissions to MongoDB with JWT-based authentication and role-protected admin routes.

## Run
```bash
npm install
npm run dev
```

Backend:
```bash
cd server
npm install
npm run dev
```
