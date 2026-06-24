# British Transport L.L.C. — Heavy Machinery Rental & Site Logistics

An enterprise-grade, highly interactive heavy machinery rental and logistics platform built for **British Transport L.L.C.** operating in Dubai, Abu Dhabi, and across all 7 Emirates in the UAE.

---

## 🛠️ Technology Stack & Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript (ES6+)](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🚀 Key Features

*   **Premium Industrial Design System**: Features a high-contrast industrial theme with a dark-gold/olive color palette, robust typography, custom responsive spacing, and micro-interactions.
*   **Dynamic Fleet Catalog**: A searchable machinery list with instant checkbox-based category filtering (Excavators, Rollers & Compactors, Loaders & Shovels, Mobile Cranes), weight class filters, and brand tags.
*   **Deep-Linking Filtering & Auto-Scroll**: Footer links dynamically pass filtering criteria to the machinery page using React Router navigation state, automatically clearing conflicting filters and scrolling users to the top of the grid.
*   **Interactive Multi-Step Quote Wizard**: A progressive 3-step quote form:
    1.  *Business Details* (Company name, contact details).
    2.  *Machinery details* (Automatic dropdown selection from catalog, quantities, or custom request descriptions).
    3.  *Rental Duration & Location* (Est. start date, contract length, and site location).
*   **Web3Forms Email Integration**: Contact form submissions are processed securely through the Web3Forms API to send form payloads directly to company inboxes, featuring animated submit states and an in-app success confirmation screen.
*   **24/7 WhatsApp Hotline**: Integrated float button for immediate client-to-logistics desk inquiries.

---

## 📁 Project Directory Structure

```text
├── public/                 # Static assets (Favicons, Logo, background images)
│   ├── images/             # Catalog machinery photo assets
│   ├── Fav.png             # Active website favicon
│   └── Logo.png            # Active brand logo
├── src/
│   ├── components/         # Reusable layouts
│   │   ├── Navbar.jsx      # Sticky responsive navigation bar
│   │   ├── Footer.jsx      # Footer with links and contact details
│   │   ├── ScrollToTop.jsx # React Router page restoration utility
│   │   └── WhatsAppButton.jsx # Sticky floating desk hotline
│   ├── pages/              # Page view components
│   │   ├── Home.jsx        # Landing page with stats, carousel & call-to-actions
│   │   ├── About.jsx       # Corporate history, safety policies, and map coordinates
│   │   ├── Fleet.jsx       # Interactive catalog grid, filters, and product details modal
│   │   ├── Services.jsx    # Infrastructure and abnormal load logistics breakdown
│   │   ├── Projects.jsx    # Interactive masonry gallery of completed RTA & port projects
│   │   └── Contact.jsx     # Multi-step request wizard & Web3Forms integration
│   ├── App.jsx             # Main routing registry
│   ├── main.jsx            # React root mounting node
│   └── index.css           # Core styling, animations, and Tailwind variables
├── vercel.json             # Single Page Application (SPA) routing rules
├── tailwind.config.js      # Layout typography, container, and utility definitions
└── package.json            # Node project configuration and script run Registry
```

---

## 💻 Local Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Smmedy06/british-transport-llc.git
    cd british-transport-llc
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    *Open `http://localhost:5173` in your browser to view the application.*

4.  **Build for Production**:
    ```bash
    npm run build
    ```
    *Build outputs will compile to the `/dist` directory.*

---

## 🌐 Deployment Configuration

This site is optimized for deployment on **Vercel** or **Netlify**. Since it utilizes clean URLs using React Router `BrowserRouter` (removing the `#`), the repository includes a custom [vercel.json](file:///c:/Users/HP/Desktop/British%20Transport%20LLC/vercel.json) configuration mapping all route paths back to `index.html` to avoid 404 issues on manual page reloads in production.
