---
id: local-data-updates
title: Local Data Updates
slug: /guided-tour/updating-data/local-data-updates/
description: Relay guide to local data updates
keywords:
- client-only
- commitLocalUpdate
- commitPayload
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';
import FbLocalDataUpdatesFlow from './fb/FbLocalDataUpdatesFlow.md';

순수하게 Relay store의 local 업데이트를 위한 (즉, 서버 작업과 관련없는 업데이트) API를 제공하고 있습니다.

local 업데이트는 [client-only data](../client-only-data/) 또는 operation을 통해 서버에서 가져온 일반적인 데이터 모두에서 수행할 수 있습니다.

## commitLocalUpdate

[`updater`](../graphql-mutations/#updater-functions) 함수를 이용하여 업데이트하려면 `commitLocalUpdate` API를 사용할 수 있습니다:

```js
import type {Environment} from 'react-relay';

const {commitLocalUpdate, graphql} = require('react-relay');

function commitCommentCreateLocally(
  environment: Environment,
  feedbackID: string,
) {
  return commitLocalUpdate(environment, store => {
    const feedbackRecord = store.get(feedbackID);
    const connectionRecord = ConnectionHandler.getConnection(
      userRecord,
      'CommentsComponent_comments_connection',
    );

    // Create a new local Comment from scratch
    const id = `client:new_comment:${randomID()}`;
    const newCommentRecord = store.create(id, 'Comment');

    // ... update new comment with content

    // Create new edge from scratch
    const newEdge = ConnectionHandler.createEdge(
      store,
      connectionRecord,
      newCommentRecord,
      'CommentEdge' /* GraphQl Type for edge */,
    );

    // Add edge to the end of the connection
    ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);
  });
}

module.exports = {commit: commitCommentCreateLocally};
```

* `commitLocalUpdate` 업데이트는 단순히 environment와 updater 함수를 취합니다.
    * `updater`는 [`RecordSourceSelectorProxy`](../../../api-reference/store/)의 인스턴스인 *`store`* 인수를 사용합니다; 이 인터페이스는 Relay store에 직접 데이터를 *필수적으로* 쓰고 읽을 수 있게 도와줍니다. 이는 store 업데이트 방법을 완전히 제어할 수 있다는 의미입니다: *완전히 새로운 records를 생성*하거나 *기존 records를 업데이트 또는 삭제*할 수 있습니다.
* 특정한 예시에서 local store에서 새로운 comment를 추가하거나 connection에 새로운 item을 추가할 수 있습니다; 작동법에 대한 자세한 사항은 [Updating Connections](../../list-data/updating-connections/) 섹션에서 확인하실 수 있습니다.
* local data 업데이트는 해당 데이터를 구독하는 컴포넌트에게 변경사항을 알리고 자동으로 re-render하도록 합니다.

## commitPayload

`commitPayload`는 `OperationDescriptor`와 query의 payload를 가져와 Relay store에 작성합니다. payload는 query에 대한 일반 서버 응답처럼 해결되며, `JSResource`, `requireDefer` 등으로 전달되는 Data Driven Dependencies도 해결합니다.

```js
import type {FooQueryRawResponse} from 'FooQuery.graphql'

const {createOperationDescriptor} = require('relay-runtime');

const operationDescriptor = createOperationDescriptor(FooQuery, {
  id: 'an-id',
  otherVariable: 'value',
});

const payload: FooQueryRawResponse = {...};

environment.commitPayload(operation, payload);
```

* `OperationDescriptor`은 `createOperationDescriptor`로 생성할 수 있습니다; 이는 query와 query 변수를 사용합니다.
* 이 payload는 query에 `@raw_response_type`을 추가하여 생성된 Flow type을 이용하여 작성될 수 있습니다.
* local data 업데이트는 해당 데이터를 구독하는 컴포넌트에게 변경사항을 알리고 자동으로 re-render하도록 합니다.

<FbLocalDataUpdatesFlow />


<DocsRating />
