## Getting Started

- Run the dev server: `yarn dev`
- Run the database: `pscale connect whatthedevnews main --port 3309`
- View the database: `npx prisma studio`
- To update the database, make schema changes then follow the [PlanetScale workflow](https://docs.planetscale.com/concepts/nonblocking-schema-changes#planetscale-workflow) guide

## Stack

- [NextJS](https://nextjs.org)
- [PlanetScale](https://planetscale.com) database-as-a-service
- [Prisma](https://www.prisma.io) ORM
- [tRPC](https://trpc.io) type-safety between client and server
- [Radix-ui](https://www.radix-ui.com) unstyled accessible component library
- [Radix-ui/colors](https://www.radix-ui.com/colors) color-palettes
- [Stitches](https://stitches.dev/) CSS in JS

## Todo

- [x] Add component library
- [x] Add PlanetScale
- [x] Add simple endpoint
- [x] Add simple design guide and CSS reset
- [x] Add simple Radix components
- [ ] Add tRPC
- [ ] Add BFF for consuming API of dev.to, medium, youtube etc. and enforcing a consistent client response
- [ ] Add localization
- [ ] Add tests
