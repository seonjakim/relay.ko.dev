---
id: prerequisites
title: Prerequisites
slug: /getting-started/prerequisites/
description: Prerequisites for setting up Relay
keywords:
- prerequisites
---

import DocsRating from '@site/src/core/DocsRating';
import {OssOnly, FbInternalOnly} from 'internaldocs-fb-helpers';


Relay를 시작하기 전에, 이미 다음의 인프라가 설정되어 있고 사용자가 아래의 주제에 대해 어느 정도 익숙하다고 가정합니다.

## JavaScript

Relay는 JavaScript로 구축된 프레임워크이므로, 사용자가 JavaScript 언어에 익숙하다고 가정합니다.

## React

Relay는 기본적으로 React 애플리케이션에 지원되는 데이터 관리를 위한 프레임워크이므로 사용자가 [React](https://reactjs.org/)에 익숙하다고 가정합니다.

## GraphQL

또한 [GraphQL](http://graphql.org/learn/)에 대한 기본적인 이해를 전제하고 있습니다. Relay를 사용하려면 다음의 개념들도 필요합니다:

### A GraphQL Schema

사용자의 애플리케이션이 필요할 수 있는 데이터를 fetch할 수 있는 resolve methods와 관련된 데이터 모델에 대한 설명입니다.

GraphQL은 광범위한 data access patterns를 지원하도록 설계되었습니다. 애플리케이션의 데이터 구조를 파악하기 위해 Relay는 특정 규칙에 따라 schema를 정의할 것을 요구합니다. [GraphQL Server Specification](../../guides/graphql-server-specification)에 문서화되어 있습니다.

-   **[graphql-js](https://github.com/graphql/graphql-js)** on [npm](https://www.npmjs.com/package/graphql)

    General-purpose tools for building a GraphQL schema using JavaScript

-   **[graphql-relay-js](https://github.com/graphql/graphql-relay-js)** on [npm](https://www.npmjs.com/package/graphql-relay)

    JavaScript helpers for defining connections between data, and mutations, in a way that smoothly integrates with Relay.

### A GraphQL Server

모든 서버는 schema를 로드하고 GraphQL로서 작동하도록 변동할 수 있습니다. [예시들](https://github.com/relayjs/relay-examples)은 Express로 작성했습니다.

-   **[express-graphql](https://github.com/graphql/express-graphql)** on [npm](https://www.npmjs.com/package/express-graphql)


<DocsRating />
