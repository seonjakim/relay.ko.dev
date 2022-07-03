---
id: relay-environment-provider
title: RelayEnvironmentProvider
slug: /api-reference/relay-environment-provider/
description: API reference for RelayEnvironmentProvider, which sets a Relay environment in React context
keywords:
  - environment
  - context
---

import DocsRating from '@site/src/core/DocsRating';

## `RelayEnvironmentProvider`

이 component는 React Context에서 Relay 환경을 설정하는데 사용되었습니다. 일반적으로 component의 *단일* 인스턴스는 전체 애플리케이션에 대한 Relay 환경을 설정하기 위해 애플리케이션의 root에서 렌더링되어야 합니다:

```js
const React = require('React');

const {RelayEnvironmentProvider} = require('react-relay');

const Environment = createNewEnvironment();

function Root() {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <App />
    </RelayEnvironmentProvider>
  );
}

module.exports = Root;
```

### Props

* `environment`: React Context에서 설정할 Relay 환경입니다. 이 provider component의 하위 component에 사용되는 모든 Relay Hooks(like [`useLazyLoadQuery`](../use-lazy-load-query) or [`useFragment`](../use-fragment))는 여기 지정된 Relay 환경을 사용합니다.

<DocsRating/>
