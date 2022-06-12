---
id: use-mutation
title: useMutation
slug: /api-reference/use-mutation/
description: API reference for useMutation, a React hook used to execute a GraphQL mutation
keywords:
  - mutation
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';
import FbUseMutationParameter from './fb/FbUseMutationParameter.md';

## `useMutation`

React component에서 mutation을 실행하기 위한 hook입니다.

```js
import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';
const React = require('React');

const {graphql, useMutation} = require('react-relay');

function LikeButton() {
  const [commit, isInFlight] = useMutation<FeedbackLikeMutation>(graphql`
    mutation FeedbackLikeMutation($input: FeedbackLikeData!) {
      feedback_like(data: $input) {
        feedback {
          id
          viewer_does_like
          like_count
        }
      }
    }
  `);

  if (isInFlight) {
    return <Spinner />;
  }

  return (
    <button
      onClick={() => {
        commit({
          variables: {
            input: {
              id: '123',
              text: 'text',
            },
          },
          onCompleted(data) {
            console.log(data);
          },
        });
      }}
    />
  );
}
```

### Arguments

* `mutation`: `graphql` template literal을 사용하여 지정된 GraphQL mutation.

<OssOnly>

* `commitMutationFn`: `<T: MutationParameters>(IEnvironment, MutationConfig<T>): Disposable`. *_[Optional]_* [`commitMutation`](../commit-mutation)와 동일한 특징을 가진 함수로 기본값인 `commitMutation` 대신 호출되기도 합니다.

</OssOnly>

<FbUseMutationParameter />


### Flow Type Parameters

* `TMutation`: mutation query의 Flow type과 일치해야 하는 Type 매개변수입니다. 해당 타입은 자동 생성된 파일에서 가져올 수 있습니다: `<mutationName>.graphql.js`.

### Return Value

다음 값들을 포함하는 Tuple:

* [0] `commitMutation`: mutation을 실행할 함수
    * 인수들, syntax 특징은 `commitMutation` API와 거의 동일합니다.
        * `variables`: mutation을 위한 변수를 포함하는 객체입니다. 예를 들어 mutation이 `$input` 변수를 정의하는 경우, 해당 객체는 `input`키를 포함하고 있어야 하며, GraphQL schema에 정의된 mutation과 데이터 모양이 일치해야 합니다.
        * `onCompleted`: 요청이 완료되고 메모리 내 Relay store가 `updater`함수에 의해 업데이트될 때 실행되는 callback 함수입니다. "원시" 서버 응답인 `response` 객체를 사용합니다. 내부적으로 `errors`는 허용되지 않으며, `onError` 핸들러에서 `CRITICAL` 오류가 발생(thrown)합니다.
        * `onError`: Relay가 요청하는 동안 오류가 발생하면 실행되는 callback 함수입니다. 서버의 mutation 결과를 읽는 동안 내부적으로 `CRITICAL` 오류가 발생했습니다.
        * `optimisticResponse`: 로컬 메모리 내 store을 optimistically update하기 위한 즉, mutation 요청이 완성되기 직전의 데이터를 포함하는 객체입니다. 이 객체는 GraphQL schema에 정의된 mutations의 응답 타입과 반드시 동일한 형태를 가지고 있어야 합니다. 제공이 된다면 Relay는 로컬 데이터 store에  `optimisticResponse`를 이용하여 
        Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the `optimisticResponse` data to update the fields on the relevant records in the local data store, *before* `optimisticUpdater` is executed. If an error occurs during the mutation request, the optimistic update will be rolled back.
        * `optimisticUpdater`: Function used to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. If an error occurs during the mutation request, the optimistic update will be rolled back. This function takes a `store`, which is a proxy of the in-memory [Relay Store](../store/). In this function, the client defines how to update the local data via the `store` instance. For details on how to use the `store`, please refer to our [Relay Store API Reference](../store/). Please note:
            * It is usually preferable to just pass an `optimisticResponse` option instead of an `optimisticUpdater`, unless you need to perform updates on the local records that are more complicated than just updating fields (e.g. deleting records or adding items to collections).
            * If you do decide to use an `optimisticUpdater`, often times it can be the same function as `updater`.
        * `updater`: Function used to update the local in-memory store based on the real server response from the mutation. If `updater` is not provided, by default, Relay will know to automatically update the fields on the records referenced in the mutation response; however, you should pass an `updater` if you need to make more complicated updates than just updating fields (e.g. deleting records or adding items to collections). When the server response comes back, Relay first reverts any changes introduced by `optimisticUpdater` or `optimisticResponse` and will then execute `updater`. This function takes a `store`, which is a proxy of the in-memory [Relay Store](../store/). In this function, the client defines how to update the local data based on the server response via the `store` instance. For details on how to use the `store`, please refer to our [Relay Store API](../store/)
        * `uploadables`: An optional uploadable map, an object representing any number of uploadable items, with one key per item. Each value must be of type `File` or `Blob`.
        *  No environment argument: `useMutation` will automatically use the current environment provided by `RelayEnvironmentProvider`
    * Return value:
        * `disposable`: Object containing a `dispose` function. Calling `disposable.dispose()` will revert the optimistic update, and Relay won't update the store or call any success/error callback, but the network request is not guaranteed to be cancelled. If the `dispose` is called after the mutation has succeeded, it will not rollback the update in Relay store.
* [1] `areMutationsInFlight`: `commitMutation`이 진행 중에 작동된 모든 mutation에 대해   Will be `true` if any mutation triggered by calling `commitMutation` is still in flight. If you call `commitMutation` multiple times, there can be multiple mutations in flight at once.


<DocsRating />
