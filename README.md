# simple-sls-nuxt

NuxtJS using a simple constitution serverless framework

## Constitution

### nodebrew

```bash
$ brew install nodebrew;
$ mkdir -p ~/.nodebrew/src;
$ nodebrew install-binary v12.13.1;
$ nodebrew use v12.13.1;
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile;
$ source ~/.bash_profile;
$ brew install yarn --ignore-dependencies;
```


### node-gyp Bug :)

```bash
$ sudo rm -rf /Library/Developer/CommandLineTools;
$ xcode-select --install;
```

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

[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)

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

Run on CodePipeline.

## Cloudformation

### 1. Deploy Environment

```bash
# First (Create Stack)
$ aws cloudformation deploy --template-file aws/deploy-cfn.yml --stack-name simple-sls-nuxt-deploy --capabilities CAPABILITY_NAMED_IAM --parameter-overrides ApiKey=XXX GitHubUser=XXX GitHubToken=XXX --profile XXX;

# Second etc (Update Stack)
$ aws cloudformation deploy --capabilities CAPABILITY_NAMED_IAM --template-file aws/deploy-cfn.yml --stack-name simple-sls-nuxt-deploy --profile XXX;
```

### 2. Front End Environment

```bash
# First (Create Stack)
$ aws cloudformation deploy --template-file aws/front-cfn.yml --stack-name simple-sls-nuxt-front --parameter-overrides SlsApiId=XXX SSLArn=XXX --profile XXX;

# Second etc (Update Stack)
$ aws cloudformation deploy --template-file aws/front-cfn.yml --stack-name simple-sls-nuxt-front --profile XXX;
```

**The first deployment takes about 40 minutes :(**

## Delete

### Serverless

```bash
$ export AWS_PROFILE=XXX;
$ yarn run sls:remove;
```

### Cloudformation

```bash
$ aws cloudformation delete-stack --stack-name simple-sls-nuxt-front --profile XXX;
$ aws s3 rm s3://simple-sls-nuxt-deploy --recursive --profile XXX;
$ aws cloudformation delete-stack --stack-name simple-sls-nuxt-deploy --profile XXX;
```
