# Flomo API Proxy

## Getting Started

> forked from JimmyLv/flomo-api-proxy
> 增加页码过滤

请求示例

**curl**

```shell
curl --location --request GET 'https://duiliuliu.vercel.app/api/flomo?tag=&offset=50&tz=8:0&limit=10&flomo_session='
```

**fetch**

```js
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://duiliuliu.vercel.app/api/flomo?tag=&offset=50&tz=8:0&limit=10&flomo_session=",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors&project-name=api-routes-cors&repository-name=api-routes-cors)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example api-routes-cors api-routes-cors-app
# or
yarn create next-app --example api-routes-cors api-routes-cors-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
