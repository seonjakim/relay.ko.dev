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
* `variables`: query를 fetch할 변수 값을 포함한 객체입니다. 이 변수들은 query 내부에 선언된 GraphQL 변수와 일치해야 합니다.
* `options`: *_[Optional]_* options object
    * `networkCacheConfig`: *_[Optional]_* 캐시 설정 옵션이 포함된 객체
        * `force`: Boolean 값. true인 경우 네트워크 응답 캐시를 무시합니다. 기본값은 true입니다.

### Flow Type Parameters

* `TQuery`: 지정된 query의 Flow type에 해당하는 Type 매개변수입니다. 이 type은 자동 생성된 파일에서 가져올 수 있습니다: `<query_name>.graphql.js`. observable에서 제공하는 데이터 type이 query의 형태와 일치하는지 확인하고, `fetchQuery`에 전달된 `variables`가 query에서 지정된 변수 type과 일치하도록 강제합니다.

### Return Value

* `observable`: observable 인스턴스를 반환합니다. 요청을 시작하려면 observable에서 `subscribe` 또는 `toPromise`를 반드시 호출해야 합니다. 다음과 같은 methods를 가집니다:
    * `subscribe`: 네트워크 요청에 대한 observable을 구독하기 위해 호출할 수 있는 함수
        * Arguments:
            * `observer`: 네트워크 요청 observable에서 발생하는 다양한 이벤트에 대해 observer 기능을 지정하는 객체입니다. 다음의 event handlers를 observer 객체의 키로 지정할 수 있습니다:
                * `start`: 네트워크 요청이 시작될 때 호출될 함수입니다. 네트워크 observable에 대한 구독을 나타내는 단일 `subscription` 인자를 받습니다.
                * `complete`: 네트워크 요청이 성공적으로 완료되면 호출되는 함수입니다.
                * `next`: 네트워크에서 payload를 받을 때마다 호출되는 함수입니다. 서버에서 payload를 받는 순간 Relay store에서 읽어오는 query 데이터의 snapshot을 나타내는 단일 `data` 인수를 전달받습니다.
                * `error`:  네트워크 요청 중에 오류가 발생하면 호출되는 함수입니다. 발생한 오류를 담고있는 단일 `error` 인수를 전달받습니다.
                * `unsubscribe`: 구독이 취소(unsubscribe)될 때마다 호출되는 함수입니다. 네트워크 observable에 대한 구독(subscription)을 나타내는 단일 `subscription` 인수를 전달받습니다.
        * Return Value:
            * `subscription`: observable에 대한 구독(subscription)을 나타내는 객체입니다. `subscription.unsubscribe()`을 호출하면 네트워크 요청이 취소됩니다.
    * `toPromise`:
        * Return Value:
            * `promise`: 서버에서 첫 네트워크 응답을 받을 때 이행(resolve)할 promise를 반환합니다. 요청이 실패하면 promise는 실패(reject)됩니다. 취소할 수 없습니다.

<FbInternalOnly>

> `next`함수는 Relay의 [Incremental Data Delivery](../../guides/incremental-data-delivery/) 기능을 통해 서버에서 여러 payload를 받을 때, 여러번 호출될 수 있습니다.

</FbInternalOnly>

### Behavior

* `fetchQuery`는 fetch된 데이터를 in-memory Relay store에 자동으로 저장하고 관련 데이터를 구독하는 모든 component에 알립니다.
* `fetchQuery`는 query에 대한 data를 유지하지 **않습니다**, 즉 요청 완료 후에 데이터가 Relay store에 저장된다는 보장이 없습니다. 데이터를 요청 범위 밖에서 유지하기 위해서는 `environment.retain()`를 query에 직접적으로 호출하여 삭제되지 않도록 해야 합니다. 더 자세한 사항은 [Controlling Relay's GC Policy](../../guided-tour/reusing-cached-data/availability-of-data) 섹션을 참조하세요.
* `fetchQuery`는 동시에 진행 중이고 `fetchQuery`로 시작된 동일한 네트워크 요청(동일한 query 및 변수)를 자동으로 중복 제거합니다.

### Behavior with `.toPromise()`

원한다면 `**.toPromise()**`를 사용해 요청을 Promise로 변환할 수 있습니다. toPromise는 query를 시작하고 *첫 번째* 데이터 조각이 서버에서 반환되고 *이후의 처리를 취소*할 때 이행(resolve)되는 Promise를 반환합니다. 즉, query의 지연(defer) 또는 3D 데이터는 처리되지 않을 수 있습니다. **이러한 이유로 일반적으로 toPromise()사용을 권장하지 않습니다.**

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

* `toPromise` 서버에서 첫 변째 네트워크 응답이 수신될 때 이행(resolve)될 promise를 반환합니다. 요청이 실패하면 promise는 실패(reject)합니다. 취소할 수 없습니다.

<DocsRating />
