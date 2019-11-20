# Static Webpack Boilerplate

An enhanced webpack setup to start with. It has

- Webpack dev server ( HMR enabled )
- Babel transpiler
- LESS preprocessor
- Webpack bundle analyzer

## Commands

- `yarn start` Starts the webpack dev server in port 8000 ( its a default port )
- `yarn build` Runs webpack production build.
- `yarn analyze` Generates webpack bundle report
- `yarn build:server` Runs webpack production build & Serves it using a simple http server in port 8000

## Env variables

- `HOST` - Host name
- `PORT` - Development port
- `GENERATE_MANIFEST` - Whether to generate build manifest
- `GENERATE_BUILD_SOURCEMAP` - Whether to generate source map in production build
- `NO_HTML_EXTENSION_IN_URL` - Whether to have `.html` extension in url.\
  If true, puts every html files but `index.html` into `/{htmlfilename}/index.html`)
