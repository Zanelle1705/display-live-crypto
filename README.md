# Crypto Prices Display

A modern web application that displays live cryptocurrency prices and details using the CoinGecko API. Built with React, TypeScript, and Tailwind CSS.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [API](#api)
- [Author](#author)

---

## Features

- Real-time display of top 10 cryptocurrencies by market cap
- Detailed view for each cryptocurrency including:
  - Current price in ZAR
  - 24-hour price change
  - Market cap and rank
  - Circulating and total supply
  - All-time high and low prices
  - Expandable description
- Responsive design with modern UI
- Clean and intuitive user interface

---

## Tech Stack

- **React 19** - Component-based UI library
- **TypeScript** - Static type checking for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Vite** - Modern build tool and dev server

---

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zanellebotha/display-live-crypto.git
cd display-live-crypto/crypto-prices-display
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Project Structure

```
crypto-prices-display/
├── src/
│   ├── assets/
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── types/         # TypeScript interfaces
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public assets
└── index.html         # HTML template
```

---

## API

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch cryptocurrency data. The API is free to use with rate limiting.

---

## Author

Zanelle Botha  
Email: zanelle1705@gmail.com  
GitHub: [Zanelle1705](https://github.com/Zanelle1705)
