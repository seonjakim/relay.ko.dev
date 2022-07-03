---
id: commit-mutation
title: commitMutation
slug: /api-reference/commit-mutation/
description: API reference for commitMutation, which imperatively executes a mutation
keywords:
  - mutation
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';
import MutationConfig from '../types/MutationConfig.md';
import Disposable from '../types/Disposable.md';

## `commitMutation`

강제로 `mutation`을 실행합니다.

[`useMutation`](../use-mutation/) API와 [데이터 업데이트를 위한 가이드](../../guided-tour/updating-data/)도 참조하십시오.

```js
import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';
const React = require('React');

const {graphql, useMutation} = require('react-relay');

function likeFeedback(environment: IEnvironment): Disposable {
  return commitMutation<FeedbackLikeMutation>(environment, {
    mutation: graphql`
      mutation FeedbackLikeMutation($input: FeedbackLikeData!) {
        feedback_like(data: $input) {
          feedback {
            id
            viewer_does_like
            like_count
          }
        }
      }
    `,
    variables: {
      input: {
        id: '123',
      },
    },
  });
}
```

### Arguments

* `environment`: `IEnvironment`. Relay 환경.
* `config`: [`MutationConfig<TMutation>`](#type-mutationconfigtmutationconfig-mutationparameters).

<MutationConfig />

### Flow Type Parameters

* `TMutation`: mutation query의 Flow type에 해당하는 type 매개변수입니다. 이 type은 자동생성된 파일에서 가져올 수 있습니다: `<mutationName>.graphql.js`.
  * 이 자동 생성 type은 `MutationParameters`를 구현합니다.

:::caution
이 type 매개변수를 **명시적으로** 전달하지 않으면 `onCompleted`에 전달된 변수, optimistic 응답 및 응답의 **type 점검이 되지 않습니다**!
:::

### Return Value

* A [`Disposable`](#interface-disposable) which:
  * 요청이 완료되기 전에 호출되면, optimistic updates를 취소하고 `onComplete`과 `onError` callback이 실행되지 않도록 합니다. 네트워크 요청을 취소하지는 않습니다. `onUnsubscribe` callback이 호출되도록 합니다.
  * 초기 요청이 완료된 후 호출되면 아무 작업도 수행하지 않습니다.

<Disposable />

<DocsRating />
