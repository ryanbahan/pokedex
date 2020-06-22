![Size](https://github-size-badge.herokuapp.com/ryanbahan/learnable.svg)

[View the live deploy:](https://pokedex-ten-gold.vercel.app)

## Getting Started

```bash
npm i
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Developer notes

- I'm showing 'weaknesses' on the details page instead of the index page with all cards. This saves room and makes the UI cleaner, while still utilizing and presenting the data
- Bootstraped with React and Next.js for routing, small bundle size, link preloading, and SSR capabilities
- Utilizing styled components to create a consistent theme
- Utilizing Context API + Hooks for state management
- Custom babel/app config to support rendering all CSS on the server (no FOUC)
