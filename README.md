# Astro Starter Kit: Minimal

DOCS: https://docs.astro.build/en/reference/configuration-reference/

FINAL TUTORIAL CODE: https://github.com/withastro/blog-tutorial-demo

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

### ASTRO NOTES

## JS Use
- JS written in frontmatter is run at build-time
- JS in `<script>` tags at the end of a file is run client-side, including the `import`ed ones. 
- Islands are added with client directives, such as "client:load" (runs when page is loaded) and "client:visible" (runs when content is visible).

## COLLECTIONS
- Collections are better in general since they define a schema for content and also optimize speed.
- Instead of simple markdown you have to define a content schema.
- These can be markdown but they won't be automatically turned into pages with astro's file-based routing.
- Instead, the collection name is declared on schema alongside specific directory with content files. An astro provided  function like `getCollection` is used to fetch content.
- Note that you will access each content item through the `data` property.
- See branch history for `01-make-posts-content-collection` for more details

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
