# Cadexchanger Frontend Assignment

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://bigcorp.netlify.app/)
[![Backend](https://img.shields.io/badge/backend-Render-blue)](https://cad-project-p5il.onrender.com)

### 🚀 Features

- Modern React 18 with TypeScript
- Frontend hosted on Netlify and backend hosted on Render
- Vite build system for fast development
- Container Queries for component-level responsiveness
- Scroll-Driven Animations (no JavaScript required)
- Optimized YouTube embeds (lite-youtube-embed)
- Responsive contact form with Express.js backend hosted on Render
- Material UI with styled-components theming


### 🛠️ Setup
1. Install dependencies
```bash
npm install
```
2. Environment variables
Create .env file:
```env
VITE_API_URL=https://your-render-backend.onrender.com
```
3. Development
```bash
npm run dev # frontend
npm run start # backend
```

### 🌐 Hosting
Frontend (Netlify)
  - Build Command: npm run build
  - Publish Directory: dist
  Environment Variables:
    - VITE_API_URL: Your Render backend URL

Backend (Render)
  - Runtime: Node 18
  - Build Command: npm install && npm run build
  - Start Command: npm run start
  Environment Variables:
    - PORT: 3001
    - NODE_ENV: production


## ✨ Cutting-Edge CSS Techniques

### 1. Container Queries
Replaced traditional media queries with modern container queries in the Hero component:
```
const StyledHero = styled.section`
  container-type: inline-size;
  
  @container (max-width: 1250px) {
    /* Mobile styles */
  }
```

### 2. Scroll-Driven Animations
Implemented the new CSS scroll-driven animations module that provides functionality
and builds on top of the CSS animations module and Web Animations API for JavaScript-free animations (still experimental, not available in Safari and Firefox):

```tsx
animation-timeline: view();
animation-range: entry 20% cover 30%;
```


### ⚡ Performance Optimizations
1. Lazy Loading
  - Route-based code splitting with React.lazy()
  - YouTube embed facade pattern (saves ~500KB initial load)

```tsx
const YouTubeEmbed = React.lazy(() => import('./YouTubeEmbed'));
```
2. Asset Optimization
  - Vite's built-in asset pipeline
  - Modern image formats (WebP)

3. Core Web Vitals
  - Proper image sizing (no layout shifts)
  - Reduced CLS to < 0.1
  - LCP optimization via lazy hydration


### 🎨 Styling System
 1. Component Library: Material UI v5
 2. CSS-in-JS: styled-components
 3. Design Tokens:
```ts
const theme = createTheme({
  palette: {
    primary: { main: 'rgb(15, 70, 124)' }
  }
});
```
 4. Responsive Patterns:
  - @container queries
  - @media queries
  - CSS Grid for layouts

### 🔍 SEO Implementation
 1. Meta Tags (Open Graph and Twitter Card meta tags)
 2. Semantic HTML
 3. Proper heading hierarchy (h1-h6) with built-in component attribute from Material UI

### 🧠 Technical Decisions
 1. Why Container Queries?  
 Since one of the requirements was to use cutting-edge CSS techniques and I've been wanting to use container queries,
 I decided to use that to align layout and elements in the top UI component. 
 But in the future I'd use it more globally for:
  - Future-proof component design
  - More maintainable than media queries
  - Better isolation for reusable components
  - They use new types of CSS length units that can be used to size elements by their container’s size.

 2. Why Vite?
  - 10x faster HMR than something like Create React App
  - Built-in TypeScript support
  - Rollup's simpler configuration and faster initial builds make it ideal for libraries and smaller applications like this one.
