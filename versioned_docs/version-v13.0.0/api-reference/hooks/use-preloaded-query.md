---
id: use-preloaded-query
title: usePreloadedQuery
slug: /api-reference/use-preloaded-query/
description: API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference
keywords:
  - read
  - query
  - query reference
---

import DocsRating from '@site/src/core/DocsRating';

## `usePreloadedQuery`

[`loadQuery`](../load-query)에 대한 earlier call 또는 [`useQueryLoader`](../use-query-loader)로 가져온 데이터에 접근하기 위해 사용되는 hook입니다. "render-as-you-fetch" 패턴을 구현합니다:

* `useQueryLoader`에서 반환된 `loadQuery` 콜백을 호출합니다. React state에 query reference가 저장됩니다.
    * `loadQuery`를 직접 호출하여 query reference를 반환할 수도 있습니다. 이 경우 item을 state 또는 React ref에 저장하고 더이상 사용하지 않을 때 `dispose()`를 호출합니다.
* 렌더 메소드에서 `usePreloadedQuery()`를 사용하여 query reference를 사용합니다. 이 호출은 query가 아직 pending 중이면 일시 중단되고, 실패하면 오류가 발생하고, 그렇지 않으면 query 결과를 반환합니다.
* 이 패턴은 렌더링을 blocking하지 않으면서 데이터를 더 빠르게 가져올 수 있으므로 `useLazyLoadQuery()`보다 권장됩니다.

더 자세한 사항을 확인하고 싶다면 [Rendering Queries](../../guided-tour/rendering/queries)를 참고하세요.

```js
import type {AppQuery as AppQueryType} from 'AppQuery.graphql';

const React = require('React');

const {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');

const AppQuery = graphql`
  query AppQuery($id: ID!) {
    user(id: $id) {
      name
    }
  }
`;

type Props = {
  initialQueryRef: PreloadedQuery<AppQueryType>,
};

function NameLoader(props) {
  const [queryReference, loadQuery] = useQueryLoader(
    AppQuery,
    props.initialQueryRef, /* e.g. provided by router */
  );

  return (<>
    <Button
      onClick={() => loadQuery({id: '4'})}
      disabled={queryReference != null}
    >
      Reveal your name!
    </Button>
    <Suspense fallback="Loading...">
      {queryReference != null
        ? <NameDisplay queryReference={queryReference} />
        : null
      }
    </Suspense>
  </>);
}

function NameDisplay({ queryReference }) {
  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);

  return <h1>{data.user?.name}</h1>;
}
```

### Arguments

* `query`: `graphql` template literal을 사용하여 지정된 GraphQL query입니다.
* `preloadedQueryReference`: [`useQueryLoader`](../use-query-loader) 또는 [`loadQuery()`](../load-query)를 호출하여 가져올 수 있는 `PreloadedQuery` query reference입니다.

### Flow Type Parameters

* `TQuery`: 지정된 query의 Flow type에 부합해야하는 type 매개변수입니다. 해당 type은 자동 생성된 파일에서 가져올 수 있습니다: `<query_name>.graphql.js`.

### Return Value

* `data`: Relay store에서 읽어들인 data를 포함하고 있는 객체입니다; 해당 객체는 지정된 query의 모양과 일치합니다.
    * 데이터의 Flow type도 이 모양과 일치하며 GraphQL Schema에서 파생된 type을 포함합니다. 예를 들어 위의 `data` 유형은  `{ user: ?{ name: ?string } }`입니다.




<DocsRating />
