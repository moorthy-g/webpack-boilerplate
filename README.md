# Static Webpack Boilerplate

An enhanced webpack setup to start with.
Use this to create HTML/JS/SASS applications

- Webpack 5
- Babel transpiler
- SASS & Autoprefix (PostCSS)
- Webpack bundle analyzer
- Prettier
- Commitizen to enforce [conventional commit](https://www.conventionalcommits.org) message standards
- Husky for commit linting

## Important notes

- Install commitizen globally `npm install -g commitizen`
- Then, use `git cz` to commit changes
- Commit messages must follow [angular conventional commit
  standards](https://github.com/conventional-changelog/commitlint)
- To ensure code consistency, install `prettier` & `editorconfig` extensions for your editor
- Then, enable `Format on save` option in editor settings
- Additionally, Prettier auto formats all files as you commit
- HTML files are served without extension

## Commands

- `yarn dev` Starts the webpack dev server in port 8000 ( its a default port )
- `yarn start` Runs webpack production build & Serves it using a simple http server in port 8000
- `yarn build` Runs webpack production build.
- `yarn analyze` Generates webpack bundle report

## Env variables

- `HOST` - Host name
- `PORT` - Development port
- `GENERATE_MANIFEST` - Whether to generate build manifest
- `GENERATE_BUILD_SOURCEMAP` - Whether to generate source map in production build
