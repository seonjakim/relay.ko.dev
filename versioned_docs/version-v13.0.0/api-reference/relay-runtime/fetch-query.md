---
id: fetch-query
title: fetchQuery
slug: /api-reference/fetch-query/
description: API reference for fetchQuery, which imperatively fetches data for a query and returns an observable
keywords:
  - observable
  - query
  - fetch
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';

## `fetchQuery`

React 외부에서 쿼리를 가져오려면 `react-relay`에서 `fetchQuery` 함수를 사용할 수 있습니다:

```js
import type {AppQuery} from 'AppQuery.graphql';

// You should prefer passing an environment that was returned from useRelayEnvironment()
const MyEnvironment = require('MyEnvironment');
const {fetchQuery} = require('react-relay');

fetchQuery<AppQuery>(
  environment,
  graphql`
    query AppQuery($id: ID!) {
      user(id: $id) {
        name
      }
    }
  `,
  {id: 4},
)
.subscribe({
  start: () => {...},
  complete: () => {...},
  error: (error) => {...},
  next: (data) => {...}
});
```

### Arguments

* `environment`: 요청을 실행할 Relay Environment 인스턴스입니다. React component 내에서 이 요청을 시작할 경우 [`useRelayEnvironment`](../use-relay-environment/)를 사용해 environment를 가져올 수 있습니다.
* `query`: fetch하고자 하는 GraphQL query로 `graphql` 템플릿 리터럴을 사용하여 지정합니다.
* `variables`: query를 fetch할 변수 값을 포함한 객체입니다. 이 변수들은 query 내부에 선언된 GraphQL 변수와 일치해야 합ㄴ디ㅏ.
* `options`: *_[Optional]_* options object
    * `networkCacheConfig`: *_[Optional]_* 캐시 설정 옵션이 포함된 객체
        * `force`: Boolean 값. true인 경우 네트워크 응답 캐시를 무시합니다. 기본값은 true입니다.

### Flow Type Parameters

* `TQuery`: 지정된 query의 Flow type에 해당하는 Type 매개변수입니다. 이 type은 자동 생성된 파일에서 가져올 수 있습니다: `<query_name>.graphql.js`. observable에서 제공하는 데이터 type이 query의 형태와 일치하는지 확인하고, `fetchQuery`에 전달된 `variables`가 query에서 지정된 변수 type과 일치하도록 강제합니다.

### Return Value

* `observable`: Returns an observable instance. To start the request, `subscribe` or `toPromise` must be called on the observable. Exposes the following methods:
    * `subscribe`: Function that can be called to subscribe to the observable for the network request
        * Arguments:
            * `observer`: Object that specifies observer functions for different events occurring on the network request observable. May specify the following event handlers as keys in the observer object:
                * `start`: Function that will be called when the network requests starts. It will receive a single `subscription` argument, which represents the subscription on the network observable.
                * `complete`: Function that will be called if and when the network request completes successfully.
                * `next`: Function that will be called every time a payload is received from the network. It will receive a single `data` argument, which represents a snapshot of the query data read from the Relay store at the moment a payload was received from the server.
                * `error`:  Function that will be called if an error occurs during the network request. It will receive a single `error` argument, containing the error that occurred.
                * `unsubscribe`: Function that will be called whenever the subscription is unsubscribed. It will receive a single `subscription` argument, which represents the subscription on the network observable.
        * Return Value:
            * `subscription`: Object representing a subscription to the observable. Calling `subscription.unsubscribe()` will cancel the network request.
    * `toPromise`:
        * Return Value:
            * `promise`: Returns a promise that will resolve when the first network response is received from the server. If the request fails, the promise will reject. Cannot be cancelled.

<FbInternalOnly>

> The `next` function may be called multiple times when using Relay's [Incremental Data Delivery](../../guides/incremental-data-delivery/) capabilities to receive multiple payloads from the server.

</FbInternalOnly>

### Behavior

* `fetchQuery`는 fetch된 데이터를 in-memory Relay store에 자동으로 저장하고 관련 데이터를 구독하는 모든 component에 알립니다.
* `fetchQuery`는 query에 대한 data를 유지하지 **않습니다**, 즉 요청 완료 후에 데이터가 Relay store에 저장된다는 보장이 없습니다. 데이터를 요청 범위 밖에서 유지하기 위해서는 `environment.retain()`를 query에 직접적으로 호출하여 삭제되지 않도록 해야 합니다. 더 자세한 사항은 [Controlling Relay's GC Policy](../../guided-tour/reusing-cached-data/availability-of-data) 섹션을 참조하세요.
* `fetchQuery`는 동시에 진행 중이고 `fetchQuery`로 시작된 동일한 네트워크 요청(동일한 query 및 변수)를 자동으로 중복 제거합니다.

### Behavior with `.toPromise()`

If desired, you can convert the request into a Promise using `**.toPromise()**`. Note that toPromise will start the query and return a Promise that will resolve when the *first* piece of data returns from the server and *cancel further processing*. That means any deferred or 3D data in the query may not be processed. **We generally recommend against using toPromise() for this reason.**

```js
import type {AppQuery} from 'AppQuery.graphql';

const {fetchQuery} = require('react-relay');

fetchQuery<AppQuery>(
  environment,
  graphql`
    query AppQuery($id: ID!) {
      user(id: $id) {
        name
      }
    }
  `,
  {id: 4},
)
.toPromise() // NOTE: don't use, this can cause data to be missing!
.then(data => {...})
.catch(error => {...};
```

* `toPromise` Returns a promise that will resolve when the first network response is received from the server. If the request fails, the promise will reject. Cannot be cancelled.

<DocsRating />
