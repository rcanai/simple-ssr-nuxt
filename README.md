# simple-ssr-nuxt

NuxtJS using a simple constitution  Server side render

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
$ yarn install;
$ yarn run dev;
```
___

## Create

[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)

```bash
$ yarn create nuxt-app simple-ssr-nuxt;
✨  Generating Nuxt.js project in simple-ssr-nuxt
? Project name simple-ssr-nuxt
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

## [sls] Deploy

Run on CodePipeline.  
(Serverless Framework)

## Cloudformation

```bash
# First (Create Stack)
$ aws cloudformation deploy \
  --template-file aws-sls/cfn.yml \
  --stack-name staging-sls-nuxt \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
  Env=staging \
  GitHubUser=XXX \
  GitHubToken=XXX \
  SSLArn=XXX \
  LambdaArn=XXX \
  ApiKey=XXX \
  --profile XXX;
```

**The first deployment takes about 40 minutes :(**

```bash
# Second etc (Update Stack)
$ aws cloudformation deploy \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file aws-sls/cfn.yml \
  --stack-name staging-sls-nuxt \
  --profile XXX;
```

```bash
# Remove Basic Auth
$ aws cloudformation deploy \
  --template-file aws-sls/cfn.yml \
  --stack-name staging-sls-nuxt \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
  LambdaArn="" \
  --profile XXX;
```

## [sls] Delete

### Cloudformation

```bash
$ aws cloudformation delete-stack --stack-name staging-sls-nuxt --profile XXX;
$ aws s3 rm s3://staging-sls-nuxt --recursive --profile XXX;
```

### Serverless

```bash
$ export AWS_PROFILE=XXX;
$ yarn run sls:remove;
```

## [static] Deploy

Run on CodePipeline.  
(Nuxt Generate Static pages)

### Cloudformation

```bash
# First (Create Stack)
$ aws cloudformation deploy \
  --template-file aws-static/cfn.yml \
  --stack-name staging-static-nuxt \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
  Env=staging \
  GitHubUser=XXX \
  GitHubToken=XXX \
  SSLArn=XXX \
  LambdaArn=XXX \
  --profile XXX;
```

**The first deployment takes about 40 minutes :(**

```bash
# Second etc (Update Stack)
$ aws cloudformation deploy \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file aws-static/cfn.yml \
  --stack-name staging-static-nuxt \
  --profile XXX;
```

## [sls] Delete

### Cloudformation

```bash
$ aws cloudformation delete-stack --stack-name staging-static-nuxt --profile XXX;
$ aws s3 rm s3://staging-static-nuxt --recursive --profile XXX;
```