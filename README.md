# Personal Portfolio React & Next.js Project

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [Contact](#contact)

---

## Project Overview

This is a personal portfolio project built with Next.js (App Router) and React 19. It serves as a showcase for my skills, experience, and projects. The application is designed to be fully responsive, easily customizable, and heavily optimized using Next.js Server Components.

> **Note:** The project is actively maintained. Features and content are updated regularly.

## Features

- **Next.js App Router:** Deeply integrated Server and Client Components for maximum performance.
- **Dynamic Animations:** Interactive WebGL Aurora backgrounds (OGL), GSAP-powered scroll reveal, and Spotlight hover effects.
- **Performance Optimized:** Lazy loading & code-splitting using `next/dynamic` and Next.js Image optimization.
- **Mobile Responsive:** Smart animation rendering that disables heavy WebGL and hover effects on smaller screens to preserve battery and performance.
- **Homepage:** Engaging hero section with Lottie/LordIcon integration and decrypt text effects.
- **Services & Projects Gallery:** Dedicated layouts with interactive Splide.js carousels and dynamic filtering.
- **Contact Form:** Allows visitors to get in touch directly.

## Tech Stack

- **Framework:** Next.js 16, React 19
- **Styling:** Tailwind CSS v4, CSS Modules
- **Animations:** GSAP, OGL (WebGL Aurora), React Splide
- **Icons & Assets:** LordIcon, Lottie-web
- **Form Handling:** Email.js
- **Deployment:** Vercel

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YoussefHany1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your browser to view the development build.
- Global styles and layouts are located in `src/app/globals.css` and `src/app/layout.jsx`.
- Update project details in `src/data/projectsData.js`.

## Folder Structure

```
├── public/                 # Static assets
├── src/
│   ├── animations/         # Custom GSAP, WebGL, and Framer effects
│   ├── app/                # Next.js App Router (pages & layouts)
│   ├── components/         # Reusable UI components (Navbar, Footer, Home)
│   └── data/               # Static data files (Projects, Skills)
├── .env                    # Environment variables
├── postcss.config.mjs      # PostCSS configuration
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Contact

- **Name:** Youssef Hany
- **Email:** youssefhany.2005.yh@gmail.com
- **Website:** https://youssefhany.vercel.app/
- **GitHub:** https://github.com/YoussefHany1

---

Thank you for checking out my portfolio! Feel free to explore the code, provide feedback, or connect with me.
