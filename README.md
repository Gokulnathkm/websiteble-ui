# Websiteble UI – React Implementation

This project is a responsive React implementation of a landing page based on a Figma design. The goal was to convert the design into a clean and functional UI while keeping the code simple, readable, and reusable.

---

## Overview

The page represents a modern learning/product platform with a strong focus on layout, spacing, and typography. Each section is built as a separate React component to keep the structure organized and easy to maintain.

---

## Tech Stack

- React (Vite)  
- Tailwind CSS  
- JavaScript (ES6+)  

---

## Features

- Fully responsive layout (mobile, tablet, desktop)  
- Component-based structure  
- Clean and minimal UI  
- Basic hover interactions and smooth transitions  
- Consistent spacing and typography  

---

## Project Structure

src/
├── components/
├── sections/
│ ├── Hero.jsx
│ ├── Highlights.jsx
│ ├── Growth.jsx
│ ├── Offerings.jsx
│ ├── Testimonials.jsx
│ ├── Newsletter.jsx
│ └── Footer.jsx
├── App.jsx
└── main.jsx

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/websiteble-ui.git
cd websiteble-ui

Install dependencies

npm install

Run development server

npm run dev

Build for production

npm run build

Run with Docker
I added Docker support so the project can run easily in any environment.
Build and run

docker compose up --build

Open in browser
http://localhost:3000
Stop container
docker compose down

Notes
I focused on matching the Figma design as closely as possible, especially in terms of spacing, alignment, and typography. Some decorative elements were simplified where needed, but the overall structure and feel of the design are preserved. Tailwind CSS helped speed up styling while keeping everything consistent.

What I Learned
•	Converting design to code requires careful attention to spacing and alignment
•	Small UI details (hover states, typography, layout balance) make a big difference
•	Structuring components early helps avoid unnecessary refactoring

Future Improvements
•	Add subtle animations for better user experience
•	Improve accessibility (ARIA roles, keyboard navigation)
•	Optimize performance and image handling

Feel free to explore the project and share any feedback or suggestions!

