# simple-sls-nuxt

NuxtJS using a simple constitution serverless framework

## Constitution

### Server Nodejs Module

✗ Express + aws-serverless-express 
○ Fastify + aws-serverless-express 

## Development

```bash
$ cp sls-params.example.js sls-params.js
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

Serverless

```bash
$ yarn run deploy;
```

Cloudformation

```bash
# First (Create Stack)
$ aws cloudformation deploy --template-file aws/sls-cfn.yml --stack-name SimpleSlsNuxtCfn --parameter-overrides SlsStage=production SlsApiId=XXX --profile XXX;

# Second etc (Update Stack)
$ aws cloudformation deploy --template-file aws/sls-cfn.yml --stack-name SimpleSlsNuxtCfn --profile XXX;
```

> Built API Gateway URL 
> `https://{SlsApiId}.execute-api.ap-northeast-1.amazonaws.com/{SlsStage}/`

## Delete

Serverless

```bash
$ yarn run sls:remove;
```

Cloudformation

```bash
$ aws cloudformation delete-stack --stack-name SimpleSlsNuxtCfn --profile XXX;
```
