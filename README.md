# simple-sls-nuxt

Nuxtjs using a simple constitution serverless framework

## Constitution

### Server Nodejs Module

✗ Express + aws-serverless-express 
○ Fastify + aws-serverless-express 

## Development

```bash
$ cp secrets.example.js secrets.js
$ yarn install;
$ yarn run dev;
```
___

## Create

```bash
$ yarn create nuxt-app simple-sls-nuxt;
✨  Generating Nuxt.js project in simple-sls-nuxt
? Project name simple-sls-nuxt
? Project description My first-rate Nuxt.js project
? Author name rcanai
? Choose the package manager Yarn
? Choose UI framework None
? Choose custom server framework None (Recommended)
? Choose Nuxt.js modules Axios, Progressive Web App (PWA) Support
? Choose linting tools ESLint
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
```

## Deploy

```bash
$ yarn run deploy;
```

Cloudformation

```bash
$ aws cloudformation deploy --template-file aws/sls-cfn.yml --stack-name SimpleSlsNuxtCfn --parameter-overrides SlsStage=production SlsRestApiId=XXX ApiKey=XXX --profile XXX;
```

## Delete

```bash
$ yarn run sls:remove;
```

Other params  
- enviroment -> --env   (default "production")
- stage      -> --stage (default "production")

