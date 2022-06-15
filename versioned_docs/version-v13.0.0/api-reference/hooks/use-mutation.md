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
        * `optimisticResponse`: local in-memory store을 optimistically update하기 위한 즉, mutation 요청이 완성되기 직전의, 데이터를 포함하는 객체입니다. 이 객체는 GraphQL schema에 정의된 mutations의 응답 타입과 반드시 동일한 형태를 가지고 있어야 합니다. 제공이 된다면 Relay는 로컬 데이터 store에 관련된 record를 업데이트하는 field  `optimisticResponse` data를 이용하여 관련된 record
        Object containing the data to optimistically update the local in-memory store, i.e. immediately, before the mutation request has completed. This object must have the same shape as the mutation's response type, as defined by the GraphQL schema. If provided, Relay will use the `optimisticResponse` data to update the fields on the relevant records in the local data store, *before* `optimisticUpdater` is executed. If an error occurs during the mutation request, the optimistic update will be rolled back.
        * `optimisticUpdater`: 로컬 in-memory store을 optimistically 업데이트하는데 즉, mutation 요청이 완료되기 바로 직전 사용되는 함수입니다. mutation 요청이 진행되는 동안 에러가 발생하면 optimistic 업데이트는 이전 상태로 되돌아갈 것입니다. in-memory [Relay Store](../store/)의 proxy인 `store`를 사용합니다. 이 함수에서 클라이언트는 `store` 인스턴스를 통해 local data 업데이트하는 방식을 정의합니다. 자세한 `store` 사용법은 [Relay Store API Reference](../store/)를 참고해주세요. 아래 사항도 참고해주세요:
            * fields 업데이트 (예를 들어 record 삭제 또는 collection에 항목 추가)보다 복잡한 local record 업데이트를 수행해야 하는 경우가 아니라면 일반적으로 `optimisticUpdater` 대신 `optimisticResponse` 옵션을 전달하는 것이 선호됩니다.
            * `optimisticUpdater`를 사용하기로 결정했다면 대부분의 경우 `updater`와 같은 기능을 한다고 볼 수 있습니다.
        * `updater`: mutation의 실제 서버 응답을 기반으로 local in-memory store을 업데이트하는데 사용되는 함수입니다. `updater`가 제공되지 않으면, 기본적으로 Relay는 mutation 응답에서 참조된 records의 fields를 자동으로 업데이트하게 되어 있습니다; 그러나 fields를 업데이트하는 것보다 더 복잡한 업데이트를 수행하는 경우 (예를 들어 records를 삭제하거나 collections 항목에 items 추가) `updater`를 전달해야 합니다. 서버 응답이 돌아오면, `optimisticUpdater` 또는 `optimisticResponse`에 의한 모든 변경사항을 되돌린 다음 `updater`를 실행합니다. 이 함수는 in-memory [Relay Store](../store/)의 proxy인 `store`를 사용합니다. 이 함수에서 client는 `store` instance를 통해 서버 응답을 기반으로 local data를 업데이트하는 방식을 정의합니다. 자세한 `store` 사용법은 [Relay Store API](../store/)를 참고해주세요.
        * `uploadables`: item 당 하나의 key를 가진 선택적 업로드가 가능한 map (업로드 가능한 item들을 나타내는 객체)입니다. 각 값은 `File` 또는 `Blob` type이어야 합니다.
        *  No environment argument: `useMutation`은 `RelayEnvironmentProvider`에서 제공하는 현재 environment를 자동으로 사용합니다.
    * Return value:
        * `disposable`: `dispose`함수가 포함된 객체입니다. `disposable.dispose()`을 호출하면 optimistic update가 복귀하고, Relay는 store를 update하거나 success/error 콜백을 호출하지 않지만 네트워크 요청이 취소된다는 보장은 없습니다. mutation이 성공한 후, `dispose`가 호출되면, Relay store에 update를 rollback하지 않습니다.
* [1] `areMutationsInFlight`: `commitMutation`을 호출하여 trigger된 mutation이 아직 진행 중인 경우 `true`가 됩니다. `commitMutation` 을 여러번 호출하면, 여러번의 mutation이 한번에 진행될 수 있습니다.


<DocsRating />
