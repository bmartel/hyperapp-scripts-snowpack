const fs = require("fs");
const path = require("path");

const cwd = process.cwd();
const isTS = fs.existsSync(path.join(cwd, "tsconfig.json"));

module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-babel", "@snowpack/plugin-dotenv"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
