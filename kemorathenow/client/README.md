# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


KEMO — Frontend Dependencies Explained

# react

Core library for building user interfaces using components and hooks.
Provides the foundation for state, lifecycle, and rendering logic.

## react-dom

Handles rendering React components into the browser DOM.
Acts as the bridge between React and the actual HTML page.

## react-router-dom

Enables client-side routing and navigation in React applications.
Allows building multi-page experiences without full page reloads.

## axios

Promise-based HTTP client for communicating with backend APIs.
Used for sending requests and handling responses efficiently.

## @tanstack/react-query

Manages server state, caching, and background data synchronization.
Reduces manual state handling and improves performance.

## react-hook-form

Lightweight library for managing forms and validation.
Optimizes performance by minimizing unnecessary re-renders.

## react-icons

Provides popular icon sets as React components.
Allows consistent, scalable icons across the application.

## react-toastify

Displays non-blocking toast notifications to users.
Used for success, error, and status feedback.

## jwt-decode

Decodes JSON Web Tokens on the client side.
Used to extract user data and roles from authentication tokens.

## zustand

Minimal and fast global state management solution.
Ideal for managing cart, user, and UI state with low boilerplate.

## tailwindcss

Utility-first CSS framework for rapid UI development.
Enables consistent styling without writing custom CSS files.

## postcss

Transforms CSS using JavaScript plugins.
Used internally by Tailwind to process styles efficiently.

## autoprefixer

Automatically adds vendor prefixes to CSS rules.
Ensures cross-browser compatibility.

## eslint

Static analysis tool for identifying JavaScript issues.
Helps maintain code quality and consistency.

## prettier

Opinionated code formatter for consistent styling.
Automatically formats code to a clean, readable standard.


# Site Map

client/

├─ public/
│  ├─ favicon.svg
│  └─ robots.txt
│
├─ src/
│  ├─ assets/
│  │  ├─ images/
│  │  ├─ icons/
│  │  └─ logos/
│  │
│  ├─ components/
│  │  ├─ ui/                 # Reusable UI components
│  │  │  ├─ Button.jsx
│  │  │  ├─ Input.jsx
│  │  │  ├─ Modal.jsx
│  │  │  └─ Loader.jsx
│  │  │
│  │  ├─ layout/             # App layout components
│  │  │  ├─ Header.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ ProtectedRoute.jsx
│  │  │
│  │  └─ common/             # Small shared components
│  │     ├─ Logo.jsx
│  │     └─ PageTitle.jsx
│  │
│  ├─ pages/
│  │  ├─ Home/
│  │  │  ├─ Home.jsx
│  │  │  ├─ Hero.jsx
│  │  │  └─ FeaturedProducts.jsx
│  │  │
│  │  ├─ Shop/
│  │  │  ├─ Shop.jsx
│  │  │  ├─ Filters.jsx
│  │  │  └─ ProductCard.jsx
│  │  │
│  │  ├─ Product/
│  │  │  └─ ProductDetails.jsx
│  │  │
│  │  ├─ Cart/
│  │  │  └─ Cart.jsx
│  │  │
│  │  ├─ Checkout/
│  │  │  ├─ Checkout.jsx
│  │  │  └─ Payment.jsx
│  │  │
│  │  ├─ Auth/
│  │  │  ├─ Login.jsx
│  │  │  └─ Register.jsx
│  │  │
│  │  ├─ Profile/
│  │  │  └─ Profile.jsx
│  │  │
│  │  ├─ Admin/
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Products.jsx
│  │  │  └─ Orders.jsx
│  │  │
│  │  └─ NotFound.jsx
│  │
│  ├─ context/
│  │  ├─ AuthContext.jsx
│  │  ├─ CartContext.jsx
│  │  └─ ThemeContext.jsx
│  │
│  ├─ hooks/
│  │  ├─ useAuth.js
│  │  ├─ useCart.js
│  │  └─ useDebounce.js
│  │
│  ├─ services/
│  │  ├─ api.js              # Axios instance
│  │  ├─ auth.service.js
│  │  ├─ product.service.js
│  │  ├─ order.service.js
│  │  └─ payment.service.js
│  │
│  ├─ utils/
│  │  ├─ formatPrice.js
│  │  ├─ validators.js
│  │  └─ constants.js
│  │
│  ├─ routes/
│  │  └─ AppRoutes.jsx
│  │
│  ├─ styles/
│  │  └─ globals.css
│  │
│  ├─ App.jsx
│  └─ main.jsx
│

├─ .env


├─ tailwind.config.js

├─ postcss.config.js

├─ vite.config.js

└─ package.json





