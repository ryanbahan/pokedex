![Size](https://github-size-badge.herokuapp.com/ryanbahan/learnable.svg)

###[View the live deploy](https://pokedex-ten-gold.vercel.app)

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
- There's a console error in prod deploy related to a known Next.js bug, which I'm still working on fixing. It doesn't affect the app performance at all. [Link to documented bug](https://spectrum.chat/next-js/general/next-static-pages-js-404-not-found-build-issue~de17fd85-fd62-47e2-a324-93abd35f6837?m=MTU1Mzk0MjY4NjIzMQ==)
