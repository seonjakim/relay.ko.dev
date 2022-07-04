---
id: use-fragment
title: useFragment
slug: /api-reference/use-fragment/
description: API reference for useFragment, a React hook used to read fragment data from the Relay store using a fragment reference
keywords:
  - fragment
  - read
  - fragment reference
---

import DocsRating from '@site/src/core/DocsRating';

## `useFragment`

```js
import type {UserComponent_user$key} from 'UserComponent_user.graphql';

const React = require('React');

const {graphql, useFragment} = require('react-relay');

type Props = {
  user: UserComponent_user$key,
};

function UserComponent(props: Props) {
  const data = useFragment(
    graphql`
      fragment UserComponent_user on User {
        name
        profile_picture(scale: 2) {
          uri
        }
      }
    `,
    props.user,
  );

  return (
    <>
      <h1>{data.name}</h1>
      <div>
        <img src={data.profile_picture?.uri} />
      </div>
    </>
  );
}
```

### Arguments

* `fragment`: `graphql` 템플릿 리터럴을 사용하여 지정된 GraphQL fragment.
* `fragmentReference`: *fragment reference*는 Relay가 store에서 fragment에 대한 데이터를 읽는데 사용하는 불분명한 Relay 객체입니다. 보다 구체적으로 데이터가 읽어들여야 하는 특정 객체 인스턴스에 대한 정보를 포함합니다.
    * fragment reference의 type은 `<fragment_name>.graphql.js`파일에 생성된 Flow types을 가져올 수 있으며, `Props` type을 선언하는데 사용할 수 있습니다. fragment reference type의 이름은: `<fragment_name>$key`. fragment reference prop의 type이 올바로 선언되도록 하기 위해서 [lint rule](https://github.com/relayjs/eslint-plugin-relay)을 강제합니다.

### Return Value

* `data`: Relay store에서 읽은 데이터를 포함하는 객체입니다; 지정된 fragment와 형태가 일치하는 객체입니다.
    * 데이터의 Flow type 또한 이 형태와 일치하며 GraphQL Schema에서 파생된 type을 포함합니다. 예를 들어 위의 `data` type은 `{ name: ?string, profile_picture: ?{ uri: ?string } }`입니다.

### Behavior

* component는 자동으로 fragment 데이터의 업데이트를 구독합니다: 특정 `User`의 데이터가 앱의 어디에서나 업데이트되면 (예를들어 새 데이터 가져오기 또는 기존 데이터 변경), 해당 component는 자동으로 최신 데이터를 기반으로 re-render됩니다.
* 특정 frament에 대한 데이터가 누락되고 상위 query에서 현재 데이터를 가져오고 있는 중일 경우 component는 일시 중단됩니다.
    * Suspense에 관한 자세한 내용은 [Loading States with Suspense](../../guided-tour/rendering/loading-states) 가이드를 참조하세요.

<DocsRating />
