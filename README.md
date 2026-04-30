# TravelWise

A travel and hospitality demo platform built as an Adobe Target Capstone project. This site demonstrates personalization capabilities including A/B testing, recommendations, audience targeting, and more.

## Tech Stack

- Vanilla JavaScript (ES6+)
- HTML5
- CSS3 with custom properties
- Single Page Application (SPA) with History API routing
- Deployed on Vercel

## Project Structure

```
travelwiseV1/
├── index.html
├── vercel.json
├── README.md
├── .gitignore
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── data/
    │   ├── destinations.js
    │   └── hotels.js
    ├── pages/
    │   ├── home.js
    │   ├── destinations.js
    │   ├── destinationDetail.js
    │   ├── hotels.js
    │   ├── hotelDetail.js
    │   ├── about.js
    │   └── contact.js
    └── components/
        ├── header.js
        ├── footer.js
        ├── destinationCard.js
        └── hotelCard.js
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, featured destinations, popular hotels |
| `/destinations` | All 20 destinations with filters |
| `/destinations/:slug` | Individual destination detail |
| `/hotels` | All 30 hotels with filters and sort |
| `/hotels/:slug` | Individual hotel detail |
| `/about` | About TravelWise |
| `/contact` | Contact form |

## Data

- **20 Destinations**: 10 domestic (India) + 10 international
- **30 Hotels**: 1–2 hotels per destination

## Adobe Target Integration

Adobe Target will be configured via Adobe Launch (Tags) after the site is live. The site dispatches a `pagechange` custom event on every route change, which Launch will use to fire Target activities.

## Running Locally

Simply open `index.html` in a browser, or use a local server:

```bash
npx serve .
```

## Deployment

Deployed on Vercel. The `vercel.json` rewrites all routes to `index.html` for SPA routing support.
