# Flomo API Routes 

https://user-images.githubusercontent.com/4997466/143256391-843cc4e7-96a6-4b7b-9a85-cbc0eb897e48.mp4

## Getting Started

e.g. Integrated with Roam Research [SmartBlocks](https://roamjs.com/extensions/roam42/smartblocks)

```shell
<%SET:result,<%JA:```javascript
roam42.loader.addScriptToPage('turndown', 'https://unpkg.com/turndown/dist/turndown.js');
var turndownService = new TurndownService();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const flomo_session = 'eyJpdiI6Ilxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx0%3D'; // todo: update to your session key
var text = '';
var settings = {
  "url": `https://flomo-api-proxy.vercel.app/api/flomo?flomo_session=${flomo_session}`,
  "method": "GET",
  "timeout": 0,
  "async": false
};

await $.ajax(settings).then(function (response) {
  console.log({ response });
  const random = getRandomInt(response?.memos?.length);
  const resource = response?.memos[random]?.content;
  text = turndownService.turndown(resource)
}).catch(error =>  console.info({ error }));
return JSON.stringify({text});``` %>%><%J:return JSON.parse(result).text%>
```

> How to find your Flomo session key?

![CleanShot 2021-11-24 at 22 19 41@2x](https://user-images.githubusercontent.com/4997466/143255420-d449b718-04f4-490a-8e11-07d8f8e6d569.png)

> How to use [#SmartBlock](https://roamjs.com/extensions/roam42/smartblocks) in Roam Research?

![CleanShot 2021-11-25 at 22 52 02@2x](https://user-images.githubusercontent.com/4997466/143462933-9c3187b1-9a3a-441f-aa76-3aa64d295d04.png)


Next.js ships with [API routes](https://nextjs.org/docs/api-routes/introduction) which provides an easy solution to build your own `API`.

This example shows how to create an `API` endpoint with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers, using the [cors](https://github.com/expressjs/cors) package.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/api-routes-cors)

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
