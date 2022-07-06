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
    * `fetchKey`: 변수가 변경되지 않았거나 component가 remount되지 않은 경우에도 component가 리렌더링될 때 `fetchKey`를 전달해 현재 query와 변수를 강제로 재평가(re-evaluation)할 수 있습니다(React component에서 다른 `key`를 전달하면 remount되는 것과 비슷합니다.). `fetchKey`가 이전 렌더링에서 사용된 것 다를 경우, 현재 query는 store와 비교해서 재평가(re-evaluation)될 것이며 `fetchPolicy` 및 캐시 상태에 따라 fetch될 수 있습니다.
    * `networkCacheConfig`: *_[Optional] _* Default value: `{force: true}`. *네트워크 계층*에 대한 캐시 설정 옵션이 포함된 객체입니다. 네트워크 계층에는 동일한 query에 대해 네트워크 응답을 재사용하는 *추가* query 응답 캐시가 포함될 수 있습니다. 만약에 이 캐시를 완전히 우회하려면(기본 동작임), `{force: true}`를 옵션 값으로 전달하세요.

### Flow Type Parameters

* `TQuery`: 지정된 query의 Flow type에 해당하는 Type 매개변수입니다. 이 type은 자동 생성된 파일에서 가져올 수 있습니다: `<query_name>.graphql.js`.

### Return Value

* `data`: Relay store에서 읽은 데이터를 포함하는 객체입니다; 해당 객체는 지정된 query와 형태가 일치합니다.
    * 데이터의 Flow type 또한 이 형태와 일치하며 GraphQL Schema에서 파생된 type을 포함합니다. 예를 들어 상단의 `data` type은: `{| user: ?{| name: ?string |} |}`.

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
