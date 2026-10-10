# Conference Booking & Event Order

A responsive starter page for creating conference booking event orders. It includes an event order form, a live summary, and a printable order.

## Run locally
Open `index.html` in a browser. No build step is required.

## GitHub setup
1. Create a new GitHub repository.
2. Upload the contents of this folder, keeping the folder structure.
3. To publish with GitHub Pages, go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Project structure
```text
conference-event-order/
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   └── logo-placeholder.svg
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── index.html
└── README.md
```

## Important
This is a front-end starter only. Orders are not saved to a database or shared between users. Before using it for live bookings, connect a backend/database, add authentication and role-based access, validate submissions server-side, and configure secure storage.
