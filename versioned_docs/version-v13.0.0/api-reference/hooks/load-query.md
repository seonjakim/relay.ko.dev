---
id: load-query
title: loadQuery
slug: /api-reference/load-query/
description: API reference for loadQuery, which imperatively fetches data for a query, retains that query and returns a query reference
keywords:
  - preload
  - fetch
  - query
  - render-as-you-fetch
  - retain
  - query reference
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';

## `loadQuery`

이 함수는 "render-as-you-fetch"를 구현하기 위해 `usePreloadedQuery()` hook과 함께 사용되도록 디자인되었습니다. 

`loadQuery`에서 반환되는 query references는 더이상 참조되지 않을 때, `.dispose()`가 호출되지 않으면 데이터 누출이 발생합니다.가능한 경우 query references를 삭제해주는 `useQueryLoader`를 사용하시길 권장합니다.

See the [`usePreloadedQuery`](../use-preloaded-query) docs for a more complete example.

```js
const MyEnvironment = require('MyEnvironment');
const {loadQuery} = require('react-relay');

const query = graphql`
  query AppQuery($id: ID!) {
    user(id: $id) {
      name
    }
  }
`;

// Note: you should generally not call loadQuery at the top level.
// Instead, it should be called in response to an event (such a route navigation,
// click, etc.).
const queryReference = loadQuery(
  MyEnvironment,
  query,
  {id: '4'},
  {fetchPolicy: 'store-or-network'},
);

// later: pass queryReference to usePreloadedQuery()
// Note that query reference should have .dispose() called on them,
// which is missing in this example.
```

### Arguments

* `environment`: A Relay Environment instance on which to execute the request. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using [`useRelayEnvironment`](#userelayenvironment).
* `query`: GraphQL query to fetch, specified using a `graphql` template literal, or a preloadable concrete request, which can be acquired by requiring the file `<name-of-query>$Parameters.graphql`. Relay will only generate the `$Parameters` file if the query is annotated with `@preloadable`.
* `variables`: Object containing the variable values to fetch the query. These variables need to match GraphQL variables declared inside the query.
* `options`: *_[Optional]_* options object
    * `fetchPolicy`: Determines if cached data should be used, and whether to send a network request based on the cached data that is currently available in the Relay store (for more details, see our [Fetch Policies](../../guided-tour/reusing-cached-data/fetch-policies) and [Garbage Collection](../../guided-tour/reusing-cached-data/availability-of-data) guides):
        * "store-or-network": **(default)** *will* reuse locally cached data and will *only* send a network request if any data for the query is missing. If the query is fully cached, a network request will *not* be made.
        * "store-and-network": *will* reuse locally cached data and will *always* send a network request, regardless of whether any data was missing from the local cache or not.
        * "network-only": *will not* reuse locally cached data, and will *always* send a network request to fetch the query, ignoring any data that might be locally cached in Relay.
    * `networkCacheConfig`: *_[Optional]_* Default value: `{force: true}`. Object containing cache config options for the *network layer*. Note that the network layer may contain an *additional* query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass `{force: true}` as the value for this option.
* `environmentProviderOptions`: *[Optional]* options object
    * Options passed to an `environmentProvider` used in `prepareSurfaceEntryPoint.js`.

### Flow Type Parameters

* `TQuery`: Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: `<query_name>.graphql.js`.
* `TEnvironmentProviderOptions`: The type of the `environmentProviderOptions` parameter.

### Return Value

A query reference with the following properties:

* `dispose`: a method that will release the query reference from being retained by the store. This can cause the data referenced by the query reference to be garbage collected.

The exact format of the return value is *unstable and highly likely to change*. We strongly recommend not using any other properties of the return value, as such code would be highly likely to break when upgrading to future versions of Relay. Instead, pass the result of `loadQuery()` to `usePreloadedQuery()`.

### Behavior

* `loadQuery()` will fetch data if passed a query, or data and the query if passed a preloadable concrete request. Once both the query and data are available, the data from the query will be written to the store. This differs from the behavior of `preloadQuery_DEPRECATED`, which would only write data to the store if the query was passed to `usePreloadedQuery`.
* the query reference returned from `loadQuery` will be retained by the relay store, preventing it the data from being garbage collected. Once you call `.dispose()` on the query reference, it can be garbage collected.
* `loadQuery()` will throw an error if it is called during React's render phase.




<DocsRating />
