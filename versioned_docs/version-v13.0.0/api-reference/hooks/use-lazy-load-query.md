---
id: use-lazy-load-query
title: useLazyLoadQuery
slug: /api-reference/use-lazy-load-query/
description: API reference for useLazyLoadQuery, a React hook used to lazily fetch query data when a component renders
keywords:
  - lazy fetching
  - query
  - fetch
---

import DocsRating from '@site/src/core/DocsRating';

## `useLazyLoadQuery`

렌더링 중 GraphQL query를 가져오는데 사용되는 Hook입니다. 이 훅은 주의없이 사용하는 경우 중첩 또는 폭포식의 요청과 응답의 반복을 발생시킬 수 있으며, 렌더링이 될 때까지 데이터 fetch를 (일반적으로 렌더링보다 훨씬 빨리 시작할 수 있는 경우) 기다려서 성능을 저하시킬 수 있습니다. 대신에 [`usePreloadedQuery`](../use-preloaded-query)를 사용하세요.

```js
import type {AppQuery} from 'AppQuery.graphql';

const React = require('React');

const {graphql, useLazyLoadQuery} = require('react-relay');

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($id: ID!) {
        user(id: $id) {
          name
        }
      }
    `,
    {id: 4},
    {fetchPolicy: 'store-or-network'},
  );

 return <h1>{data.user?.name}</h1>;
}
```

### Arguments

* `query`: `graphql` template literal을 사용하여 지정된 GraphQL query.
* `variables`: query를 가져올 변수 값을 포함하는 객체입니다. 이 변수들은 query 내부에 선언된 GraphQL 변수들과 일치해야 합니다.
* `options`: _*[Optional]*_ options object
    * `fetchPolicy`: 캐시된 데이터를 사용해야 하는지 여부와 Relay store에서 현재 사용할 수 있는 캐시된 데이터를 기반으로 네트워크 요청을 보낼 시기를 결정합니다 (더 자세한 사항은 [Fetch Policies](../../guided-tour/reusing-cached-data/fetch-policies)와 [Garbage Collection](../../guided-tour/reusing-cached-data/presence-of-data)가이드를 참고해주세요.):
        * "store-or-network": _*(default)*_ 로컬에 캐시된 데이터를 *재사용*하고 query에 대한 데이터가 *누락된 경우에만* 네트워크 요청을 보냅니다. query가 완전히 캐시되면 네트워크 요청은 *일어나지 않습니다*.
        * "store-and-network": 로컬에 캐시된 데이터를 *재사용*하고 로컬 캐시에 누락된 데이터의 유무와 관계없이 *항상* 네트워크 요청을 보냅니다.
        * "network-only": 로컬에 캐시된 데이터를 *사용하지 않으며*, Relay에 로컬 캐시된 데이터는 무시하고 query를 가져오기 위해 *항상* 네트워크 요청을 보냅니다.
        * "store-only": 로컬에 캐시된 데이터만 *재사용하고* query를 가져오기 위해 네트워크 요청을 *절대* 보내지 않습니다. 이 경우 query를 가져오는 책임은 호출자에게 있지만 이 policy는 완전히 [local](../../guided-tour/updating-data/local-data-updates)인 데이터를 읽고 작동하는데 사용할 수 있습니다.
    * `fetchKey`: A `fetchKey` can be passed to force a re-evaluation of the current query and variables when the component re-renders, even if the variables didn't change, or even if the component isn't remounted (similarly to how passing a different `key` to a React component will cause it to remount). If the `fetchKey` is different from the one used in the previous render, the current query will be re-evaluated against the store, and it might be refetched depending on the current `fetchPolicy` and the state of the cache.
    * `networkCacheConfig`: *_[Optional] _* Default value: `{force: true}`. Object containing cache config options for the *network layer*. Note that the network layer may contain an *additional* query response cache which will reuse network responses for identical queries. If you want to bypass this cache completely (which is the default behavior), pass `{force: true}` as the value for this option.

### Flow Type Parameters

* `TQuery`: Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: `<query_name>.graphql.js`.

### Return Value

* `data`: Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.
    * The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of `data` above is: `{| user: ?{| name: ?string |} |}`.

### Behavior

* It is expected for `useLazyLoadQuery` to have been rendered under a [`RelayEnvironmentProvider`](../relay-environment-provider), in order to access the correct Relay environment, otherwise an error will be thrown.
* Calling `useLazyLoadQuery`  will fetch and render the data for this query, and it may [*_suspend_*](../../guided-tour/rendering/loading-states) while the network request is in flight, depending on the specified `fetchPolicy`, and whether cached data is available, or if it needs to send and wait for a network request. If `useLazyLoadQuery` causes the component to suspend, you'll need to make sure that there's a `Suspense` ancestor wrapping this component in order to show the appropriate loading state.
    * For more details on Suspense, see our [Loading States with Suspense](../../guided-tour/rendering/loading-states/) guide.
* The component is automatically subscribed to updates to the query data: if the data for this query is updated anywhere in the app, the component will automatically re-render with the latest updated data.
* After a component using `useLazyLoadQuery` has committed, re-rendering/updating the component will not cause the query to be fetched again.
    * If the component is re-rendered with *different query variables,* that will cause the query to be fetched again with the new variables, and potentially re-render with different data.
    * If the component *unmounts and remounts*, that will cause the current query and variables to be refetched (depending on the `fetchPolicy` and the state of the cache).

### Differences with `QueryRenderer`

* `useLazyLoadQuery` no longer takes a Relay environment as a parameter, and thus no longer sets the environment in React Context, like `QueryRenderer` did. Instead, `useLazyLoadQuery` should be used as a descendant of a [`RelayEnvironmentProvider`](../relay-environment-provider), which now sets the Relay environment in Context. Usually, you should render a single `RelayEnvironmentProvider` at the very root of the application, to set a single Relay environment for the whole application.
* `useLazyLoadQuery` will use [Suspense](../../guided-tour/rendering/loading-states) to allow developers to render loading states using Suspense boundaries, and will throw errors if network errors occur, which can be caught and rendered with Error Boundaries. This as opposed to providing error objects or null props to the `QueryRenderer` render function to indicate errors or loading states.
* `useLazyLoadQuery` fully supports fetch policies in order to reuse data that is cached in the Relay store instead of solely relying on the network response cache.
* `useLazyLoadQuery` has better type safety guarantees for the data it returns, which was not possible with QueryRenderer since we couldn't parametrize the type of the data with a renderer api.



<DocsRating />
