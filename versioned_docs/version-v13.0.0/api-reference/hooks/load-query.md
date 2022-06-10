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

* `environment`: 요청을 실행할 Relay Environment instance입니다. React component에서 요청을 시작할 경우, [`useRelayEnvironment`](#userelayenvironment)에서 가져온 environment를 사용하고 싶을 것입니다.
* `query`: fetch를 위한 GraphQL query는 `graphql` 템플릿 리터럴을 사용하여 지정하거나 `<name-of-query>$Parameters.graphql`을 만들어 preload가 가능한 구체적인 요청입니다. Relay는 query가 `@preloadable` 주석 처리가 된 경우에만 `$Parameters` 파일을 생성합니다.
* `variables`: query를 fetch할 변수 값을 포함하는 객체입니다. 이 변수들은 query 내부에 선언된 GraphQL 변수들과 일치해야 합니다.
* `options`: *_[Optional]_* options object
    * `fetchPolicy`: Relay store에 현재 있는 cached data를 기반으로 cached data가 사용되어야 하는지, network 요청을 보내야 하는지 결정합니다 (자세한 정보는 [Fetch Policies](../../guided-tour/reusing-cached-data/fetch-policies)와 [Garbage Collection](../../guided-tour/reusing-cached-data/availability-of-data) 가이드에서 확인하실 수 있습니다):
        * "store-or-network": **(default)** 내부적으로 cached data가 재사용되게 *될 것이고*, query에 대한 데이터가 누락된 *경우에만* network 요청을 보냅니다. query가 완전히 cache되면 network 요청은 *되지 않습니다*.
        * "store-and-network": 내부적으로 cached data는 재사용*하고* 로컬 cache의 유무에 상관없이 *항상* network 요청을 보냅니다.
        * "network-only": 내부적으로 cached data는 재사용하지 *않고*, Relay에 cached된 데이터가 있더라도 *항상* query fetch를 위한 network 요청을 보냅니다.
    * `networkCacheConfig`: *_[Optional]_* Default value: `{force: true}`. *network layer*에 대한 cache config를 포함한 객체입니다. network layer는 동일한 query의 network 응답을 재사용하는 *추가적인* query 응답 cache가 포함될 수 있습니다. (기본 동작인) 해당 cache를 완전히 우회하려면 옵션 값으로 `{force: true}`을 전달하세요.
* `environmentProviderOptions`: *[Optional]* options object
    * 이 옵션은 `prepareSurfaceEntryPoint.js` 내부에서 사용되는 `environmentProvider`를 넘겨줍니다.

### Flow Type Parameters

* `TQuery`: 지정된 query의 Flow type에 해당하는 Type 매개변수입니다. 이 type은 자동생성된 파일: `<query_name>.graphql.js`에서 가져올 수 있습니다.  
* `TEnvironmentProviderOptions`: `environmentProviderOptions` 매개변수의 유형입니다.

### Return Value (반환 값)

다음 속성이 있는 query reference:

* `dispose`: store에 보관되어 있는 query reference를 해제하는 메서드입니다. query reference에서 참조하는 데이터가 garbage collect될 수 있게 합니다.

반환 값의 정확한 형식은 *불안정하고 변경될 가능성이 높습니다.* Relay의 버전 업그레이드로 인해 손상될 가능성을 방지하기 위해 반환 값의 다른 속성들은 사용하지 않을 것을 강력하게 추천드립니다. 대신 `loadQuery()`의 결과를 `usePreloadedQuery()`에 전달하세요.

### Behavior

* `loadQuery()`는 query가 전달되면 data를 fetch하거나, preload가 가능한 구체적인 요청을 전달한 경우 data와 query를 fetch합니다. query와 data가 모두 사용가능한 경우 query의 데이터는 store에 기록됩니다. `usePreloadedQuery`로 전달된 경우에만 store에 기록되는 `preloadQuery_DEPRECATED`의 동작과는 다릅니다.
* `loadQuery`에서 반환된 query reference는 relay store에 저장되며 데이터가 garbage collect되는 것을 방지합니다. query reference에서 `.dispose()`를 호출하면 garbage collect할 수 있습니다.
* React의 렌더링 단계에서 호출되면 `loadQuery()`는 오류를 발생(throw)합니다.




<DocsRating />
