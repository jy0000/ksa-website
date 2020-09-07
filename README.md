# MIT KSA Website 2016

This is the source of the KSA website hosted on MIT infrastructure at <ksa.mit.edu>.

The goal is to have a modern-looking, easy to deploy and develop, static website.

## Design Decisions

Since MIT's hosting infrastructure available to the undergraduates runs very
outdated versions of Rails, Django and PHP, the best decision was to go with a
static website with all interactivity implemented in the client-side code.

This is how it came down to using [GatsbyJS](https://github.com/gatsbyjs/gatsby),
a tool that generated static pages with ReactJS powered transitions and
client-side interactivity.

## Goals

- Provide a welcoming information about MIT KSA to the wider MIT community
- Have an up to date information about the Culture show and current exec team
- Make the website usable on mobile (read: responsive design)

## Development

You would need `node` and `npm`.

Install `gatsby` globally:

```
npm install -g gatsby
```

Install dependencies:

```
npm install
```

Run locally:

```
npm run develop
```

Running in development mode will run a server on `localhost:8000`. CSS has hot-code-reloading. Hot module replacement also should work.

To lint:

```
npm run lint
```

## Deployment

The site is deployed on [MIT Scripts](https://scripts.mit.edu/), under the locker called `ksa`.

Since it is a club-owned locker, your MIT Kerberos account should be on
the `ksa-exec@mit.edu` mailing list in order to upload files there.

To deploy, just build files and put them into the Scripts root to be served
as static files.

Run the `./deploy-to-prod` bash script to save keystrokes and upload files
over `scp`.

---

Web design and development by Slava Kim'19.
Photographs were borrowed from the KSA archive.
