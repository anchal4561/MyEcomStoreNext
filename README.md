This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


/// shadcn UI->

npx shadcn@latest init






//Database
PostgreSQL 

->




PRISMA->
install
npm i -D prisma @prisma/client
initaialize->
npx prisma init

copy database url from craeated in vercel.com-> storage-> neon-> create
into the env file

prisma extension in vs code


ctrl+shift+p->  "[prisma]":{
        "editor.defaultFormatter":"Prisma.prisma"
    } 
    add this at end of obj

Schema and Models

-> schema.prisma->
create product model

model Product{
id String @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid

name String
slug String @unique(map:"product_slug_idx")
category String
images String[]
brand String
description String
stock Int
price Decimal @defaul(0) @db.Decimal(12,2)
rating Decimal @defaul(0) @db.Decimal(12,2)
numReviews Int @defaul(0)
isFeatured Boolean
banner String?
createdAt DateTime @default(now()) @db.Timestamp(6)

}


-> package.json->
"scripts":{
    "postinstall":"prisma generate"
}

npx prisma generate


migration file create->
npx prisma migrate dev --name init

to check
localhost:5555
npx prisma studio

Migrations
Seeding Data-> sample data to database

->
under db folder-> create seed.ts

write  code

-> run->
npx tsx ./db/seed


--> Load Product from database

server actions-> async function that are executed on the server

"use Server" at top


create folder inside lib-> actions



Zod Type Validator ---->

-> Typescript schema validation  with static type inference-> runtime validation


create  folder in main types-> index.ts file

npm i zod


create file in the lib folder-> validator.ts


Serverless Driver->

-->
npm i @neondatabase/serverless @prisma/adapter-neon ws

npm i -D @types/ws bufferutil


add in schema.prisma
  previewFeatures = ["driverAdapters"]

 npx prisma generate

Home & details page
Product images component
Initial Vercal Deployment
