---
id: store
title: Store
slug: /api-reference/store/
description: API reference for the Relay store
keywords:
  - store
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';

Relay Store는 [`updater` 함수들](../../guided-tour/updating-data/graphql-mutations/) 내부에 있는 client-side 정보를 업데이트할 수 있습니다. 다음은 Relay Store 인터페이스에 대한 참조입니다.

목차:

-   [RecordSourceSelectorProxy](#recordsourceselectorproxy)
-   [RecordProxy](#recordproxy)
-   [ConnectionHandler](#connectionhandler)

## RecordSourceSelectorProxy

`RecordSourceSelectorProxy`는 [`updater` 함수들](../../guided-tour/updating-data/graphql-mutations/)이 인수처럼 받는 store의 타입 중 하나입니다. 아래는 `RecordSourceSelectorProxy`의 인터페이스:

```javascript
interface RecordSourceSelectorProxy {
  create(dataID: string, typeName: string): RecordProxy;
  delete(dataID: string): void;
  get(dataID: string): ?RecordProxy;
  getRoot(): RecordProxy;
  getRootField(fieldName: string): ?RecordProxy;
  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;
  invalidateStore(): void;
}
```

### `create(dataID: string, typeName: string): RecordProxy`

store에 GraphQL 스키마에 정의된 `dataID`와 `typeName`를 이용하여 새롭게 record를 생성합니다. 새로 생성된 record를 변경하기 위한 인터페이스 역할을 하는 [`RecordProxy`](#recordproxy)를 반환합니다.

#### Example

```javascript
const record = store.create(dataID, 'Todo');
```

### `delete(dataID: string): void`

`dataID`를 이용해 store에서 record를 삭제합니다.

#### Example

```javascript
store.delete(dataID);
```

### `get(dataID: string): ?RecordProxy`

`dataID`를 이용해 store에서 record를 검색합니다. record를 변경하기 위한 인터페이스 역할을 하는 [`RecordProxy`](#recordproxy)를 반환합니다.

#### Example

```javascript
const record = store.get(dataID);
```

### `getRoot(): RecordProxy`

GraphQL 문서의 root를 나타내는 값인 [`RecordProxy`](#recordproxy)를 반환합니다.

#### Example

주어진 GraphQL 문서:

```graphql
viewer {
  id
}
```

Usage:

```javascript
// Represents root query
const root = store.getRoot();
```

### `getRootField(fieldName: string): ?RecordProxy`

GraphQL 문서에 정의된 `fileName`을 이용해 store에서 root field를 검색합니다. record를 변경하기 위한 인터페이스 역할을 하는 [`RecordProxy`](#recordproxy)를 반환합니다.

#### Example

주어진 GraphQL 문서:

```graphql
viewer {
  id
}
```

Usage:

```javascript
const viewer = store.getRootField('viewer');
```

### `getPluralRootField(fieldName: string): ?Array<?RecordProxy>`

GraphQL 문서에 정의된 대로 `fieldName`이 지정된 store에서 collection(더미, 수집)을 타나는 root field를 검색합니다. [`RecordProxies`](#recordproxy)의 배열을 반환합니다.

#### Example
   
주어진 GraphQL 문서:

```graphql
nodes(first: 10) {
  # ...
}
```

Usage:

```javascript
const nodes = store.getPluralRootField('nodes');
```

### `invalidateStore(): void`

Relay store를 전역적으로 무효화합니다. 이것은 무효화가 발생하기 전에 저장소에 기록된 모든 데이터를 오래된 것으로 간주하게 하고, 다음에 `environment.check()`로 query를 확인할 때 다시 가져와야 하는 것(refetching)으로 간주됩니다.

#### Example

```javascript
store.invalidateStore();
```

전역 무효화 후, refetching이 일어나기 전에 확인된 모든 query는 오래된(stale) 것으로 간주됨:

```javascript
environment.check(query) === 'stale'
```

## RecordProxy

record들을 변경할 수 있는 인터페이스 역할:

```javascript
interface RecordProxy {
  copyFieldsFrom(sourceRecord: RecordProxy): void;
  getDataID(): string;
  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;
  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;
  getOrCreateLinkedRecord(
    name: string,
    typeName: string,
    arguments?: ?Object,
  ): RecordProxy;
  getType(): string;
  getValue(name: string, arguments?: ?Object): mixed;
  setLinkedRecord(
    record: RecordProxy,
    name: string,
    arguments?: ?Object,
  ): RecordProxy;
  setLinkedRecords(
    records: Array<?RecordProxy>,
    name: string,
    arguments?: ?Object,
  ): RecordProxy;
  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;
  invalidateRecord(): void;
}
```

### `getDataID(): string`

현재 record의 `dataID`를 반환합니다.

#### Example

```javascript
const id = record.getDataID();
```

### `getType(): string`

GraphQL schema에 정의된 대로 현재 record의 타입을 가져옵니다.

#### Example

```javascript
const type = user.getType();  // User
```

### `getValue(name: string, arguments?: ?Object): mixed`

field 이름이 지정된 현재 record의 field 값을 가져옵니다.

#### Example

주어진 GraphQL 문서:

```graphql
viewer {
  id
  name
}
```

Usage:

```javascript
const name = viewer.getValue('name');
```

선택적으로 필드가 인수를 사용하는 경우, `변수들`의 집합체를 전달할 수 있습니다.

#### Example

주어진 GraphQL 문서:

```graphql
viewer {
  id
  name(arg: $arg)
}
```

Usage:

```javascript
const name = viewer.getValue('name', {arg: 'value'});
```

### `getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy`

GraphQL 문서에 정의된 대로 필드 이름이 지정된 현재 record와 연관된 record를 검색합니다. `RecordProxy`를 반환합니다.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  viewer {
    id
    name
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const viewer = rootField.getLinkedRecord('viewer');
```

연계된 record가 인수를 사용하는 경우 선택적으로 `변수들`의 집합체를 전달할 수 있습니다.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  viewer(arg: $arg) {
    id
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});
```

### `getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>`

GraphQL 문서에 정의된 대로 field 이름이 지정된 현재 record와 연관된 record 집합을 검색합니다. `RecordProxies`의 배열을 반환합니다.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  nodes {
    # ...
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const nodes = rootField.getLinkedRecords('nodes');
```

선택적으로 연계된 record가 인수를 사용하는 경우 `변수들`의 집합체도 전달할 수 있습니다.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  nodes(first: $count) {
    # ...
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const nodes = rootField.getLinkedRecords('nodes', {count: 10});
```

### `getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)`

GraphQL 문서에 정의된 대로 field 이름이 지정된 현재 record와 연계된 record를 검색합니다. 연계된 record가 없을 경우, type 이름이 지정되어 생성됩니다. `RecordProxy`를 반환합니다.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  viewer {
    id
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist
```

선택적으로 연계된 record가 인수를 사용하는 경우, `변수들`의 집합체도 전달할 수 있습니다.

### `setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy`

Mutates the current record by setting a new value on the specified field. Returns the mutated record.

주어진 GraphQL 문서:

```graphql
viewer {
  id
  name
}
```

Usage:

```javascript
viewer.setValue('New Name', 'name');
```

Optionally, if the field takes arguments, you can pass a bag of `variables`.

```javascript
viewer.setValue('New Name', 'name', {arg: 'value'});
```

### `copyFieldsFrom(sourceRecord: RecordProxy): void`

Mutates the current record by copying the fields over from the passed in record `sourceRecord`.

#### Example

```javascript
const record = store.get(id1);
const otherRecord = store.get(id2);
record.copyFieldsFrom(otherRecord); // Mutates `record`
```

### `setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)`

Mutates the current record by setting a new linked record on the given field name.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  viewer {
    id
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const newViewer = store.create(/* ... */);
rootField.setLinkedRecord(newViewer, 'viewer');
```

Optionally, if the linked record takes arguments, you can pass a bag of `variables` as well.

### `setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)`

Mutates the current record by setting a new set of linked records on the given field name.

#### Example

주어진 GraphQL 문서:

```graphql
rootField {
  nodes {
    # ...
  }
}
```

Usage:

```javascript
const rootField = store.getRootField('rootField');
const newNode = store.create(/* ... */);
const newNodes = [...rootField.getLinkedRecords('nodes'), newNode];
rootField.setLinkedRecords(newNodes, 'nodes');
```

Optionally, if the linked record takes arguments, you can pass a bag of `variables` as well.

### `invalidateRecord(): void`

Invalidates the record. This will cause any query that references this record to be considered stale until the next time it is refetched, and will be considered to require a refetch the next time such a query is checked with `environment.check()`.

#### Example

```javascript
const record = store.get('4');
record.invalidateRecord();
```

After invalidating a record, any query that references the invalidated record and that is checked before refetching it will be considered stale:

```javascript
environment.check(query) === 'stale'
```

## ConnectionHandler

`ConnectionHandler` is a utility module exposed by `relay-runtime` that aids in the manipulation of connections. `ConnectionHandler` exposes the following interface:

```javascript
interface ConnectionHandler {
  getConnection(
    record: RecordProxy,
    key: string,
    filters?: ?Object,
  ): ?RecordProxy,
  createEdge(
    store: RecordSourceProxy,
    connection: RecordProxy,
    node: RecordProxy,
    edgeType: string,
  ): RecordProxy,
  insertEdgeBefore(
    connection: RecordProxy,
    newEdge: RecordProxy,
    cursor?: ?string,
  ): void,
  insertEdgeAfter(
    connection: RecordProxy,
    newEdge: RecordProxy,
    cursor?: ?string,
  ): void,
  deleteNode(connection: RecordProxy, nodeID: string): void
}
```

### `getConnection(record: RecordProxy, key: string, filters?: ?Object)`

Given a record and a connection key, and optionally a set of filters, `getConnection` retrieves a [`RecordProxy`](#recordproxy) that represents a connection that was annotated with a `@connection` directive.

First, let's take a look at a plain connection:

```graphql
fragment FriendsFragment on User {
  friends(first: 10) {
    edges {
      node {
        id
      }
    }
  }
}
```

Accessing a plain connection field like this is the same as other regular fields:

```javascript
// The `friends` connection record can be accessed with:
const user = store.get(userID);
const friends = user && user.getLinkedRecord('friends');

// Access fields on the connection:
const edges = friends && friends.getLinkedRecords('edges');
```

When using [usePaginationFragment](../use-pagination-fragment/), we usually annotate the actual connection field with `@connection` to tell Relay which part needs to be paginated:

```graphql
fragment FriendsFragment on User {
  friends(first: 10, orderby: "firstname") @connection(
    key: "FriendsFragment_friends",
  ) {
    edges {
      node {
        id
      }
    }
  }
}
```

For connections like the above, `ConnectionHandler` helps us find the record:

```javascript
import {ConnectionHandler} from 'relay-runtime';

// The `friends` connection record can be accessed with:
const user = store.get(userID);
const friends = ConnectionHandler.getConnection(
 user,                        // parent record
 'FriendsFragment_friends',   // connection key
 {orderby: 'firstname'}       // 'filters' that is used to identify the connection
);
// Access fields on the connection:
const edges = friends.getLinkedRecords('edges');
```

### Edge creation and insertion

#### `createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)`

Creates an edge given a [`store`](#recordsourceselectorproxy), a connection, the edge node, and the edge type.

#### `insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)`

Given a connection, inserts the edge at the beginning of the connection, or before the specified `cursor`.

#### `insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)`

Given a connection, inserts the edge at the end of the connection, or after the specified `cursor`.

#### Example

```javascript
const user = store.get(userID);
const friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');
const newFriend = store.get(newFriendId);
const edge = ConnectionHandler.createEdge(store, friends, newFriend, 'UserEdge');

// No cursor provided, append the edge at the end.
ConnectionHandler.insertEdgeAfter(friends, edge);

// No cursor provided, insert the edge at the front:
ConnectionHandler.insertEdgeBefore(friends, edge);
```

### `deleteNode(connection: RecordProxy, nodeID: string): void`

Given a connection, deletes any edges whose node id matches the given id.

#### Example

```javascript
const user = store.get(userID);
const friends = ConnectionHandler.getConnection(user, 'FriendsFragment_friends');
ConnectionHandler.deleteNode(friends, idToDelete);
```

<DocsRating />
