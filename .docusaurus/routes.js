
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/relay.ko.dev/',
    component: ComponentCreator('/relay.ko.dev/','88e'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/',
    component: ComponentCreator('/relay.ko.dev/blog/','c9d'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/2021/03/09/introducing-relay-hooks/',
    component: ComponentCreator('/relay.ko.dev/blog/2021/03/09/introducing-relay-hooks/','237'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/2021/12/08/introducing-the-new-relay-compiler/',
    component: ComponentCreator('/relay.ko.dev/blog/2021/12/08/introducing-the-new-relay-compiler/','da6'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/archive/',
    component: ComponentCreator('/relay.ko.dev/blog/archive/','0ea'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/tags/',
    component: ComponentCreator('/relay.ko.dev/blog/tags/','d3b'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/tags/relay-compiler/',
    component: ComponentCreator('/relay.ko.dev/blog/tags/relay-compiler/','4a5'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/tags/relay-hooks/',
    component: ComponentCreator('/relay.ko.dev/blog/tags/relay-hooks/','764'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/tags/required/',
    component: ComponentCreator('/relay.ko.dev/blog/tags/required/','34a'),
    exact: true
  },
  {
    path: '/relay.ko.dev/blog/tags/rust/',
    component: ComponentCreator('/relay.ko.dev/blog/tags/rust/','99b'),
    exact: true
  },
  {
    path: '/relay.ko.dev/compiler-explorer/',
    component: ComponentCreator('/relay.ko.dev/compiler-explorer/','685'),
    exact: true
  },
  {
    path: '/relay.ko.dev/help/',
    component: ComponentCreator('/relay.ko.dev/help/','947'),
    exact: true
  },
  {
    path: '/relay.ko.dev/search/',
    component: ComponentCreator('/relay.ko.dev/search/','dac'),
    exact: true
  },
  {
    path: '/relay.ko.dev/users/',
    component: ComponentCreator('/relay.ko.dev/users/','58a'),
    exact: true
  },
  {
    path: '/relay.ko.dev/versions/',
    component: ComponentCreator('/relay.ko.dev/versions/','3b9'),
    exact: true
  },
  {
    path: '/relay.ko.dev/docs/next/',
    component: ComponentCreator('/relay.ko.dev/docs/next/','f65'),
    routes: [
      {
        path: '/relay.ko.dev/docs/next/',
        component: ComponentCreator('/relay.ko.dev/docs/next/','729'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/commit-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/commit-mutation/','5e9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/entrypoint-container/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/entrypoint-container/','0f5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/fetch-query/','002'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/graphql-and-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/graphql-and-directives/','ab1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/legacy-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/legacy-apis/','b3d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/load-entrypoint/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/load-entrypoint/','e99'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/load-query/','02b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/relay-environment-provider/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/relay-environment-provider/','fe9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/request-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/request-subscription/','72a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/store/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/store/','037'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/CacheConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/CacheConfig/','76d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/Disposable/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/Disposable/','cae'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/GraphQLSubscriptionConfig/','035'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/MutationConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/MutationConfig/','481'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/SelectorStoreUpdater/','8b3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/types/UploadableMap/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/types/UploadableMap/','d6d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-entrypoint-loader/','d31'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-fragment/','509'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-lazy-load-query/','bdb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-mutation/','2bc'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-pagination-fragment/','9c5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-preloaded-query/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-preloaded-query/','1da'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-query-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-query-loader/','f2f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-refetchable-fragment/','3d7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-relay-environment/','a33'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/api-reference/use-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/next/api-reference/use-subscription/','ca7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/next/community-learning-resources/','988'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/next/debugging/declarative-mutation-directives/','ea7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/relay.ko.dev/docs/next/debugging/inconsistent-typename-error/','130'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/debugging/relay-devtools/',
        component: ComponentCreator('/relay.ko.dev/docs/next/debugging/relay-devtools/','409'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/getting-started/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/next/getting-started/installation-and-setup/','7fb'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/getting-started/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/next/getting-started/prerequisites/','cb0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/getting-started/step-by-step-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/next/getting-started/step-by-step-guide/','8b2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/glossary/',
        component: ComponentCreator('/relay.ko.dev/docs/next/glossary/','ba6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/','6f9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/prefetching-queries/','bd7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/reading-fragments/','810'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/reading-queries/','f27'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/retaining-queries/','151'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/accessing-data-without-react/subscribing-to-queries/','478'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/advanced-pagination/','7f8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/connections/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/connections/','cc4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/pagination/','6d3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/refetching-connections/','3c8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/rendering-connections/','f29'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/streaming-pagination/','a2f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/list-data/updating-connections/','2d2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/','81d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/OssAvoidSuspenseNote/','ba0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/refetching-fragments-with-different-data/','593'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/refetching-queries-with-different-data/','fe5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/refreshing-fragments/','9d8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/refetching/refreshing-queries/','76f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/environment/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/environment/','b7c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/error-states/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/error-states/','696'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/fragments/','74f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/loading-states/','567'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/queries/','f36'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/rendering/variables/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/rendering/variables/','cd3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/','309'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/availability-of-data/','f8c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/fetch-policies/','85d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/','a31'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/presence-of-data/','ed3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/rendering-partially-cached-data/','a9e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/staleness-of-data/','cc2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/','c60'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/client-only-data/','661'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/graphql-mutations/','564'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/graphql-subscriptions/','f33'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-linked-fields/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-linked-fields/','7f3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/','849'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-store-data/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-store-data/','2c7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/local-data-updates/','40f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/updating-data/typesafe-updaters-faq/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/updating-data/typesafe-updaters-faq/','f03'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/next/guided-tour/workflow/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guided-tour/workflow/','2c9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/client-schema-extensions/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/client-schema-extensions/','e0f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/compiler/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/compiler/','a34'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/graphql-server-specification/','151'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/network-layer/','ade'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/persisted-queries/','c04'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/relay-resolvers/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/relay-resolvers/','9ed'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/required-directive/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/required-directive/','1d1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/testing-relay-components/','15e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/testing-relay-with-preloaded-queries/','f5f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/guides/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/next/guides/type-emission/','b34'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/migration-and-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/next/migration-and-compatibility/','3f3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','8db'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/next/migration-and-compatibility/suspense-compatibility/','15d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/architecture-overview/','911'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/compiler-architecture/','3d7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/runtime-architecture/','f88'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/thinking-in-graphql/','b93'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/thinking-in-relay/','1e9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/relay.ko.dev/docs/next/principles-and-architecture/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/next/principles-and-architecture/videos/','611'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.4.1/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/','514'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.4.1/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/','917'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/api-cheatsheet/','808'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/architecture-overview/','3a6'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/community-learning-resources/','bd0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/compatibility-cheatsheet/','5b0'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/compiler-architecture/','965'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/conversion-playbook/','6d0'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/conversion-scripts/','ec5'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/converting-mutations/','bac'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/fetch-query/','8a0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/fragment-container/','cb7'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/graphql-in-relay/','a1e'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/graphql-server-specification/','5ce'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/installation-and-setup/','075'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/local-state-management/','085'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/migration-setup/','919'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/mutations/','c09'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/network-layer/','127'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/new-in-relay-modern/','149'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/pagination-container/','ba8'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/persisted-queries/','716'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/prerequisites/','fe9'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/query-renderer/','8fa'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/quick-start-guide/','4ca'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/refetch-container/','af7'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/relay-compat/','bbc'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/relay-debugging/','1ee'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/relay-environment/','f86'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/relay-store/','c14'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/routing/','cf2'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/runtime-architecture/','583'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/subscriptions/','086'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/testing-relay-components/','40f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/thinking-in-graphql/','36a'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/thinking-in-relay/','70b'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/type-emission/','b94'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/upgrading-setvariables/','98c'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.4.1/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.4.1/videos/','842'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.5.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/','674'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.5.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/','7f4'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/api-cheatsheet/','3b8'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/architecture-overview/','5e9'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/community-learning-resources/','2b4'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/compatibility-cheatsheet/','656'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/compiler-architecture/','8ab'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/conversion-playbook/','6b8'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/conversion-scripts/','558'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/converting-mutations/','d96'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/fetch-query/','614'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/fragment-container/','7a7'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/graphql-in-relay/','612'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/graphql-server-specification/','d84'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/installation-and-setup/','894'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/local-state-management/','04e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/migration-setup/','49c'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/mutations/','c79'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/network-layer/','cff'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/new-in-relay-modern/','c79'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/pagination-container/','4e8'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/persisted-queries/','a74'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/prerequisites/','e57'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/query-renderer/','28a'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/quick-start-guide/','901'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/refetch-container/','30c'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/relay-compat/','50f'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/relay-debugging/','c06'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/relay-environment/','51b'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/relay-store/','597'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/routing/','eb5'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/runtime-architecture/','29f'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/subscriptions/','db8'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/testing-relay-components/','42a'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/thinking-in-graphql/','4b2'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/thinking-in-relay/','ca2'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/type-emission/','3e3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/upgrading-setvariables/','6af'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.5.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.5.0/videos/','41b'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.6.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/','a7d'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.6.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/','5ca'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/api-cheatsheet/','61e'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/architecture-overview/','26b'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/community-learning-resources/','b37'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/compatibility-cheatsheet/','4b2'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/compiler-architecture/','f17'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/conversion-playbook/','9e8'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/conversion-scripts/','5c6'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/converting-mutations/','097'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/fetch-query/','45f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/fragment-container/','ed9'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/graphql-in-relay/','ca1'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/graphql-server-specification/','860'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/installation-and-setup/','fb4'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/local-state-management/','a47'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/migration-setup/','4ee'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/mutations/','abc'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/network-layer/','4f7'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/new-in-relay-modern/','bb2'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/pagination-container/','f05'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/persisted-queries/','e30'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/prerequisites/','4a0'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/query-renderer/','bbb'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/quick-start-guide/','dfa'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/refetch-container/','251'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/relay-compat/','74b'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/relay-debugging/','682'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/relay-environment/','50a'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/relay-store/','f40'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/routing/','dae'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/runtime-architecture/','491'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/subscriptions/','e6c'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/testing-relay-components/','51d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/thinking-in-graphql/','310'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/thinking-in-relay/','d37'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/type-emission/','4e3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/upgrading-setvariables/','7f7'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.0/videos/','8f1'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.6.1/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/','e15'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.6.1/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/','c0b'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/api-cheatsheet/','9b4'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/architecture-overview/','19b'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/community-learning-resources/','2e0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/compatibility-cheatsheet/','004'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/compiler-architecture/','192'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/conversion-playbook/','f77'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/conversion-scripts/','7d2'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/converting-mutations/','41e'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/fetch-query/','232'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/fragment-container/','268'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/graphql-in-relay/','1b1'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/graphql-server-specification/','499'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/installation-and-setup/','0f4'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/local-state-management/','4c7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/migration-setup/','021'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/mutations/','da2'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/network-layer/','1cb'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/new-in-relay-modern/','4bf'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/pagination-container/','f14'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/persisted-queries/','bde'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/prerequisites/','401'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/query-renderer/','9f6'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/quick-start-guide/','921'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/refetch-container/','3fd'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/relay-compat/','31c'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/relay-debugging/','f5f'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/relay-environment/','999'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/relay-store/','94b'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/routing/','7bd'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/runtime-architecture/','0c3'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/subscriptions/','907'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/testing-relay-components/','d49'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/thinking-in-graphql/','702'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/thinking-in-relay/','e86'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/type-emission/','f06'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/upgrading-setvariables/','109'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.1/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.1/videos/','8e8'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.6.2/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/','4de'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.6.2/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/','7d2'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/api-cheatsheet/','8d7'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/architecture-overview/','743'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/community-learning-resources/','972'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/compatibility-cheatsheet/','c2d'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/compiler-architecture/','e1b'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/conversion-playbook/','74a'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/conversion-scripts/','a1d'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/converting-mutations/','ab9'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/fetch-query/','eb6'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/fragment-container/','e48'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/graphql-in-relay/','6b6'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/graphql-server-specification/','d46'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/installation-and-setup/','bce'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/local-state-management/','625'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/migration-setup/','08f'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/mutations/','b54'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/network-layer/','f2a'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/new-in-relay-modern/','0a4'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/pagination-container/','5f7'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/persisted-queries/','1f8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/prerequisites/','a8c'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/query-renderer/','275'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/quick-start-guide/','1be'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/refetch-container/','086'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/relay-compat/','d04'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/relay-debugging/','b82'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/relay-environment/','c1f'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/relay-store/','273'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/routing/','cc7'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/runtime-architecture/','aee'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/subscriptions/','b58'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/testing-relay-components/','c92'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/thinking-in-graphql/','ef4'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/thinking-in-relay/','3da'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/type-emission/','39f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/upgrading-setvariables/','259'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.6.2/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.6.2/videos/','82a'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v1.7.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/','50b'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v1.7.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/','b4e'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/api-cheatsheet/','aed'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/architecture-overview/','fc7'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/community-learning-resources/','7d3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/compatibility-cheatsheet/','e54'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/compiler-architecture/','ca4'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/conversion-playbook/','b3f'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/conversion-scripts/','382'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/converting-mutations/','79b'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/fetch-query/','25c'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/fragment-container/','bab'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/graphql-in-relay/','ed5'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/graphql-server-specification/','cfd'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/installation-and-setup/','bf4'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/local-state-management/','d24'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/migration-setup/','c87'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/mutations/','a59'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/network-layer/','fb5'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/new-in-relay-modern/','cc5'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/pagination-container/','2a7'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/persisted-queries/','d81'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/prerequisites/','912'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/query-renderer/','ece'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/quick-start-guide/','1a0'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/refetch-container/','b45'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/relay-compat/','2c3'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/relay-debugging/','ad8'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/relay-environment/','3f8'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/relay-store/','43f'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/routing/','d86'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/runtime-architecture/','8df'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/subscriptions/','865'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/testing-relay-components/','15d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/thinking-in-graphql/','588'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/thinking-in-relay/','15e'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/type-emission/','31f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/upgrading-setvariables/','743'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v1.7.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v1.7.0/videos/','4ee'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/','c50'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/','919'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/api-cheatsheet/','b72'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/architecture-overview/','536'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/community-learning-resources/','cf6'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/compatibility-cheatsheet/','1a2'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/compiler-architecture/','952'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/conversion-playbook/','9d4'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/conversion-scripts/','60a'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/converting-mutations/','cb3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/fetch-query/','ed5'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/fragment-container/','c39'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/graphql-in-relay/','d98'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/graphql-server-specification/','c91'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/installation-and-setup/','804'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/local-state-management/','8d1'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/migration-setup/','7f4'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/mutations/','495'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/network-layer/','215'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/new-in-relay-modern/','a54'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/pagination-container/','9c9'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/persisted-queries/','a1a'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/prerequisites/','9a6'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/query-renderer/','6f0'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/quick-start-guide/','657'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/refetch-container/','8f8'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/relay-compat/','de6'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/relay-debugging/','187'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/relay-environment/','01f'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/relay-store/','d9e'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/routing/','f28'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/runtime-architecture/','438'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/subscriptions/','21c'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/testing-relay-components/','b26'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/thinking-in-graphql/','486'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/thinking-in-relay/','f3b'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/type-emission/','ecb'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/upgrading-setvariables/','a95'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.0/videos/','dce'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.0.1/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/','b68'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.0.1/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/','321'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/api-cheatsheet/','73c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/architecture-overview/','b88'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/community-learning-resources/','710'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/compatibility-cheatsheet/','262'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/compiler-architecture/','d4c'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/conversion-playbook/','7e1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/conversion-scripts/','fcd'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/converting-mutations/','680'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/fetch-query/','37d'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/fragment-container/','f3c'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/graphql-in-relay/','7da'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/graphql-server-specification/','778'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/installation-and-setup/','f9d'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/local-state-management/','cf0'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/migration-setup/','42a'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/mutations/','ae8'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/network-layer/','1fb'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/new-in-relay-modern/','f94'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/pagination-container/','6ef'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/persisted-queries/','b5d'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/prerequisites/','31e'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/query-renderer/','fb7'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/quick-start-guide/','516'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/refetch-container/','f89'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/relay-compat/','77b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/relay-debugging/','5a4'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/relay-environment/','e04'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/relay-store/','f6b'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/routing/','54a'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/runtime-architecture/','9b4'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/subscriptions/','a5b'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/testing-relay-components/','38f'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/thinking-in-graphql/','de6'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/thinking-in-relay/','147'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/type-emission/','4aa'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/upgrading-setvariables/','1a9'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.0.1/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.0.1/videos/','b85'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.1.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/','ecd'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.1.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/','e41'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/api-cheatsheet/','424'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/architecture-overview/','f31'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/community-learning-resources/','b39'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/compatibility-cheatsheet/','cdd'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/compiler-architecture/','c15'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/conversion-playbook/','567'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/conversion-scripts/','3a3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/converting-mutations/','98d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/fetch-query/','ba7'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/fragment-container/','823'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/graphql-in-relay/','b05'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/graphql-server-specification/','d9c'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/installation-and-setup/','6bb'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/local-state-management/','4fd'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/migration-setup/','815'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/mutations/','ff5'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/network-layer/','94d'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/new-in-relay-modern/','6bb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/pagination-container/','cb3'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/persisted-queries/','87a'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/prerequisites/','ebe'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/query-renderer/','d0e'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/quick-start-guide/','8f7'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/refetch-container/','842'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/relay-compat/','d34'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/relay-debugging/','6d5'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/relay-environment/','946'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/relay-store/','07b'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/routing/','13c'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/runtime-architecture/','f2d'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/subscriptions/','290'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/testing-relay-components/','99d'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/thinking-in-graphql/','f99'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/thinking-in-relay/','ba7'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/type-emission/','12f'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/upgrading-setvariables/','a2b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.0/videos/','dae'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.1.1/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/','718'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.1.1/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/','57f'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/api-cheatsheet/','681'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/architecture-overview/','851'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/community-learning-resources/','a4b'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/compatibility-cheatsheet/','0ce'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/compiler-architecture/','15f'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/conversion-playbook/','dab'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/conversion-scripts/','33c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/converting-mutations/','9c0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/fetch-query/','ce5'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/fragment-container/','44d'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/graphql-in-relay/','03b'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/graphql-server-specification/','548'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/installation-and-setup/','b98'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/local-state-management/','fda'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/migration-setup/','95d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/mutations/','799'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/network-layer/','bba'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/new-in-relay-modern/','c23'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/pagination-container/','9e2'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/persisted-queries/','df9'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/prerequisites/','00d'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/query-renderer/','78f'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/quick-start-guide/','205'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/refetch-container/','784'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/relay-compat/','1bd'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/relay-debugging/','24b'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/relay-environment/','f27'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/relay-store/','2c3'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/routing/','9c9'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/runtime-architecture/','070'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/subscriptions/','2c9'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/testing-relay-components/','80f'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/thinking-in-graphql/','5b6'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/thinking-in-relay/','5de'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/type-emission/','780'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/upgrading-setvariables/','982'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.1/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.1/videos/','6df'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.1.2/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/','7d3'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.1.2/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/','424'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/api-cheatsheet/','435'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/architecture-overview/','75e'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/community-learning-resources/','ad9'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/compatibility-cheatsheet/','c8e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/compiler-architecture/','8f0'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/conversion-playbook/','40d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/conversion-scripts/','3d7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/converting-mutations/','890'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/fetch-query/','ed9'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/fragment-container/','f46'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/graphql-in-relay/','b76'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/graphql-server-specification/','fb0'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/installation-and-setup/','284'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/local-state-management/','ae5'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/migration-setup/','d87'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/mutations/','678'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/network-layer/','912'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/new-in-relay-modern/','511'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/pagination-container/','a13'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/persisted-queries/','4de'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/prerequisites/','dc1'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/query-renderer/','c9e'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/quick-start-guide/','777'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/refetch-container/','b83'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/relay-compat/','c79'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/relay-debugging/','1a4'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/relay-environment/','27a'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/relay-store/','bf2'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/routing/','0ad'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/runtime-architecture/','3a1'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/subscriptions/','046'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/testing-relay-components/','7bc'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/thinking-in-graphql/','e96'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/thinking-in-relay/','286'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/type-emission/','a94'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/upgrading-setvariables/','6cb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.2/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.2/videos/','68b'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v10.1.3/',
    component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/','22e'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v10.1.3/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/','4f2'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/api-cheatsheet/','abb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/architecture-overview/','8b6'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/community-learning-resources/','d5b'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/compatibility-cheatsheet/','b6e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/compiler-architecture/','2b8'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/conversion-playbook/','839'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/conversion-scripts/','adf'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/converting-mutations/','4a3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/fetch-query/','79c'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/fragment-container/','d49'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/graphql-in-relay/','854'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/graphql-server-specification/','5fc'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/installation-and-setup/','2fa'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/local-state-management/','1b3'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/migration-setup/','0a7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/mutations/','3da'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/network-layer/','628'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/new-in-relay-modern/','a90'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/pagination-container/','898'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/persisted-queries/','410'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/prerequisites/','ea9'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/query-renderer/','a27'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/quick-start-guide/','66c'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/refetch-container/','c1f'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/relay-compat/','9ed'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/relay-debugging/','a95'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/relay-environment/','594'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/relay-store/','cc1'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/routing/','bc5'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/runtime-architecture/','b36'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/subscriptions/','eb3'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/testing-relay-components/','db2'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/thinking-in-graphql/','96e'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/thinking-in-relay/','b70'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/type-emission/','6a5'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/upgrading-setvariables/','c88'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v10.1.3/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v10.1.3/videos/','b9f'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v11.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/','69e'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v11.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/','168'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/commit-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/commit-mutation/','780'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/entrypoint-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/entrypoint-container/','7a8'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/fetch-query/','1f1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/graphql-and-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/graphql-and-directives/','0f7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/legacy-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/legacy-apis/','753'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/load-entrypoint/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/load-entrypoint/','baa'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/load-query/','55b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/relay-environment-provider/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/relay-environment-provider/','59a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/request-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/request-subscription/','6d9'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/store/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/store/','9f3'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/CacheConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/CacheConfig/','e21'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/Disposable/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/Disposable/','af3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/GraphQLSubscriptionConfig/','7df'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/MutationConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/MutationConfig/','619'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/SelectorStoreUpdater/','733'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/types/UploadableMap/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/types/UploadableMap/','fbb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-entrypoint-loader/','4e7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-fragment/','1fe'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-lazy-load-query/','e2b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-mutation/','ebf'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-pagination-fragment/','1e2'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-preloaded-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-preloaded-query/','711'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-query-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-query-loader/','8ca'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-refetchable-fragment/','395'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-relay-environment/','fb6'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/api-reference/use-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/api-reference/use-subscription/','155'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/community-learning-resources/','f7a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/debugging/declarative-mutation-directives/','ede'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/debugging/inconsistent-typename-error/','11b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/debugging/relay-devtools/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/debugging/relay-devtools/','dab'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/getting-started/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/getting-started/installation-and-setup/','2a7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/getting-started/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/getting-started/prerequisites/','04b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/getting-started/step-by-step-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/getting-started/step-by-step-guide/','080'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/glossary/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/glossary/','05d'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/','891'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/prefetching-queries/','26b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-fragments/','45e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-queries/','3b5'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/retaining-queries/','d74'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/','249'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/advanced-pagination/','9ce'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/connections/','107'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/pagination/','b03'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/refetching-connections/','6c4'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/rendering-connections/','b8c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/streaming-pagination/','3f4'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/list-data/updating-connections/','1b1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/','1d3'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote/','5b1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data/','cd0'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refetching-queries-with-different-data/','5b1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refreshing-fragments/','b6c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/refetching/refreshing-queries/','a40'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/environment/','3d7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/error-states/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/error-states/','b1c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/fragments/','b2c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/loading-states/','8d5'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/queries/','926'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/variables/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/rendering/variables/','124'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/','525'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/availability-of-data/','65e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/fetch-policies/','365'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/','9dc'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/presence-of-data/','7e4'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/','268'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/reusing-cached-data/staleness-of-data/','9a3'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/','f82'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/client-only-data/','1c5'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/graphql-mutations/','369'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/graphql-subscriptions/','432'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/updating-data/local-data-updates/','a49'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guided-tour/workflow/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guided-tour/workflow/','74e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/client-schema-extensions/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/client-schema-extensions/','58e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/compiler/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/compiler/','230'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/graphql-server-specification/','b08'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/network-layer/','158'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/persisted-queries/','eed'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/testing-relay-components/','305'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/','7ad'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/guides/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/guides/type-emission/','47d'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/','033'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','05e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/','07c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/architecture-overview/','1fa'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/compiler-architecture/','cff'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/runtime-architecture/','627'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/thinking-in-graphql/','a27'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/thinking-in-relay/','63a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v11.0.0/principles-and-architecture/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v11.0.0/principles-and-architecture/videos/','fb0'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v12.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/','edb'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v12.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/','678'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/commit-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/commit-mutation/','ea6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/entrypoint-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/entrypoint-container/','99c'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/fetch-query/','e6b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/graphql-and-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/graphql-and-directives/','99e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/legacy-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/legacy-apis/','727'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/load-entrypoint/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/load-entrypoint/','575'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/load-query/','772'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/relay-environment-provider/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/relay-environment-provider/','28c'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/request-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/request-subscription/','f97'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/store/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/store/','0e2'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/CacheConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/CacheConfig/','3c3'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/Disposable/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/Disposable/','558'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/GraphQLSubscriptionConfig/','82f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/MutationConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/MutationConfig/','84c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/SelectorStoreUpdater/','8ce'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/types/UploadableMap/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/types/UploadableMap/','529'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-entrypoint-loader/','d03'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-fragment/','aff'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-lazy-load-query/','13f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-mutation/','2e6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-pagination-fragment/','20d'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-preloaded-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-preloaded-query/','d18'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-query-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-query-loader/','583'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-refetchable-fragment/','4e9'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-relay-environment/','1d8'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/api-reference/use-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/api-reference/use-subscription/','305'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/community-learning-resources/','bd5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/debugging/declarative-mutation-directives/','077'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/debugging/inconsistent-typename-error/','d71'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/debugging/relay-devtools/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/debugging/relay-devtools/','069'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/getting-started/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/getting-started/installation-and-setup/','150'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/getting-started/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/getting-started/prerequisites/','d08'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/getting-started/step-by-step-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/getting-started/step-by-step-guide/','d0a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/glossary/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/glossary/','dff'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/','bd5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/prefetching-queries/','5b5'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-fragments/','099'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-queries/','c99'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/retaining-queries/','0eb'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/','7b1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/advanced-pagination/','ef5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/connections/','38a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/pagination/','a70'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/refetching-connections/','c18'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/rendering-connections/','632'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/streaming-pagination/','b3b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/list-data/updating-connections/','b10'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/','de7'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote/','c6b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refetching-fragments-with-different-data/','4b0'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/','39f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/','223'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/refetching/refreshing-queries/','838'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/environment/','5b5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/error-states/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/error-states/','ed7'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/fragments/','579'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/loading-states/','001'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/queries/','dd3'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/variables/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/rendering/variables/','cc9'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/','5e1'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/availability-of-data/','969'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/fetch-policies/','ed6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/','6a5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/presence-of-data/','bbb'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/','45d'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/reusing-cached-data/staleness-of-data/','6b5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/','27f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/client-only-data/','440'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/graphql-mutations/','290'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/','cef'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/updating-data/local-data-updates/','d5e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guided-tour/workflow/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guided-tour/workflow/','d8e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/client-schema-extensions/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/client-schema-extensions/','178'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/compiler/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/compiler/','cc5'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/graphql-server-specification/','79a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/network-layer/','93a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/persisted-queries/','3cd'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/testing-relay-components/','56f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/testing-relay-with-preloaded-queries/','d32'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/guides/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/guides/type-emission/','669'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/','f87'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','ff0'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/migration-and-compatibility/suspense-compatibility/','fae'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/architecture-overview/','342'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/compiler-architecture/','33f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/runtime-architecture/','0f3'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/thinking-in-graphql/','217'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/thinking-in-relay/','755'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v12.0.0/principles-and-architecture/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v12.0.0/principles-and-architecture/videos/','5bd'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v2.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/','613'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v2.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/','73e'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/api-cheatsheet/','ba4'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/architecture-overview/','651'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/community-learning-resources/','8a9'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/compatibility-cheatsheet/','604'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/compiler-architecture/','bb5'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/conversion-playbook/','46c'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/conversion-scripts/','100'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/converting-mutations/','eb4'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/fetch-query/','43c'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/fragment-container/','35e'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/graphql-in-relay/','c77'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/graphql-server-specification/','98b'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/installation-and-setup/','c5a'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/local-state-management/','d81'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/migration-setup/','9b4'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/mutations/','0a6'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/network-layer/','18c'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/new-in-relay-modern/','302'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/pagination-container/','556'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/persisted-queries/','43f'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/prerequisites/','b1d'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/query-renderer/','edd'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/quick-start-guide/','920'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/refetch-container/','3b7'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/relay-compat/','886'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/relay-debugging/','186'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/relay-environment/','3ab'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/relay-store/','09d'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/routing/','28a'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/runtime-architecture/','418'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/subscriptions/','fab'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/testing-relay-components/','12c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/thinking-in-graphql/','bd3'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/thinking-in-relay/','4a3'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/type-emission/','0fa'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/upgrading-setvariables/','d99'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v2.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v2.0.0/videos/','444'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v3.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/','a67'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v3.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/','87d'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/api-cheatsheet/','e7f'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/architecture-overview/','0ee'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/community-learning-resources/','d76'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/compatibility-cheatsheet/','b57'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/compiler-architecture/','abc'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/conversion-playbook/','396'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/conversion-scripts/','380'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/converting-mutations/','07d'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/fetch-query/','6ad'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/fragment-container/','930'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/graphql-in-relay/','361'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/graphql-server-specification/','6eb'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/installation-and-setup/','79e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/local-state-management/','7e1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/migration-setup/','8ae'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/mutations/','976'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/network-layer/','1c0'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/new-in-relay-modern/','461'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/pagination-container/','e83'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/persisted-queries/','45f'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/prerequisites/','f30'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/query-renderer/','ece'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/quick-start-guide/','67d'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/refetch-container/','ca7'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/relay-compat/','9bd'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/relay-debugging/','4f7'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/relay-environment/','11f'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/relay-store/','0dc'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/routing/','f5e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/runtime-architecture/','a35'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/subscriptions/','cfe'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/testing-relay-components/','770'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/thinking-in-graphql/','83d'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/thinking-in-relay/','58c'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/type-emission/','190'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/upgrading-setvariables/','33f'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v3.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v3.0.0/videos/','1d1'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v4.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/','a87'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v4.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/','dfb'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/api-cheatsheet/','6cf'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/architecture-overview/','38e'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/community-learning-resources/','64b'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/compatibility-cheatsheet/','db8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/compiler-architecture/','e43'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/conversion-playbook/','d53'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/conversion-scripts/','604'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/converting-mutations/','6a8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/fetch-query/','819'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/fragment-container/','b84'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/graphql-in-relay/','1d8'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/graphql-server-specification/','cfb'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/installation-and-setup/','ba0'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/local-state-management/','9ac'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/migration-setup/','7bb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/mutations/','454'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/network-layer/','ec1'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/new-in-relay-modern/','819'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/pagination-container/','ba2'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/persisted-queries/','f9b'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/prerequisites/','aca'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/query-renderer/','a33'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/quick-start-guide/','160'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/refetch-container/','8e5'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/relay-compat/','5ed'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/relay-debugging/','a70'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/relay-environment/','e6e'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/relay-store/','78a'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/routing/','7bb'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/runtime-architecture/','1e6'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/subscriptions/','f09'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/testing-relay-components/','2b1'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/thinking-in-graphql/','950'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/thinking-in-relay/','435'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/type-emission/','ba1'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/upgrading-setvariables/','06e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v4.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v4.0.0/videos/','36d'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v5.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/','fba'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v5.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/','d62'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/api-cheatsheet/','001'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/architecture-overview/','cee'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/community-learning-resources/','383'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/compatibility-cheatsheet/','6c8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/compiler-architecture/','e63'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/conversion-playbook/','ff1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/conversion-scripts/','918'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/converting-mutations/','bb9'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/fetch-query/','277'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/fragment-container/','e00'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/graphql-in-relay/','7d1'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/graphql-server-specification/','6bf'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/installation-and-setup/','8f4'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/local-state-management/','786'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/migration-setup/','cfb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/mutations/','557'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/network-layer/','7db'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/new-in-relay-modern/','ee1'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/pagination-container/','a6a'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/persisted-queries/','6d8'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/prerequisites/','51c'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/query-renderer/','896'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/quick-start-guide/','d54'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/refetch-container/','606'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/relay-compat/','540'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/relay-debugging/','22c'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/relay-environment/','2d4'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/relay-store/','4b1'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/routing/','5ff'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/runtime-architecture/','c75'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/subscriptions/','749'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/testing-relay-components/','4f4'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/thinking-in-graphql/','43b'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/thinking-in-relay/','0ff'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/type-emission/','38c'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/upgrading-setvariables/','213'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v5.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v5.0.0/videos/','20d'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v6.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/','dc7'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v6.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/','7e9'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/api-cheatsheet/','9a8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/architecture-overview/','6b3'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/community-learning-resources/','bc5'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/compatibility-cheatsheet/','7b2'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/compiler-architecture/','8fe'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/conversion-playbook/','b21'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/conversion-scripts/','316'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/converting-mutations/','3ba'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/fetch-query/','d47'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/fragment-container/','1d6'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/graphql-in-relay/','bd6'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/graphql-server-specification/','a2b'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/installation-and-setup/','3f5'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/local-state-management/','bf6'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/migration-setup/','ff2'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/mutations/','178'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/network-layer/','b19'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/new-in-relay-modern/','f38'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/pagination-container/','14d'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/persisted-queries/','296'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/prerequisites/','77e'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/query-renderer/','602'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/quick-start-guide/','9b0'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/refetch-container/','330'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/relay-compat/','13b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/relay-debugging/','5f5'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/relay-environment/','2ff'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/relay-store/','543'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/routing/','9a4'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/runtime-architecture/','764'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/subscriptions/','2ef'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/testing-relay-components/','bde'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/thinking-in-graphql/','78c'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/thinking-in-relay/','c92'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/type-emission/','789'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/upgrading-setvariables/','8eb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v6.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v6.0.0/videos/','57e'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v7.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/','7ca'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v7.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/','223'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/api-cheatsheet/','43b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/architecture-overview/','dc8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/community-learning-resources/','4e3'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/compatibility-cheatsheet/','93f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/compiler-architecture/','dbb'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/conversion-playbook/','61c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/conversion-scripts/','c6b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/converting-mutations/','3ca'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/fetch-query/','0e3'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/fragment-container/','df9'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/graphql-in-relay/','6bc'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/graphql-server-specification/','454'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/installation-and-setup/','88e'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/local-state-management/','8d8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/migration-setup/','1cb'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/mutations/','fc8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/network-layer/','e7e'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/new-in-relay-modern/','b2c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/pagination-container/','cb1'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/persisted-queries/','81f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/prerequisites/','973'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/query-renderer/','0f7'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/quick-start-guide/','3e4'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/refetch-container/','de2'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/relay-compat/','f79'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/relay-debugging/','1f8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/relay-environment/','103'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/relay-store/','f02'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/routing/','395'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/runtime-architecture/','c79'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/subscriptions/','872'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/testing-relay-components/','746'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/thinking-in-graphql/','f0f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/thinking-in-relay/','8ea'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/type-emission/','4d1'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/upgrading-setvariables/','6b7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.0.0/videos/','812'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v7.1.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/','e5f'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v7.1.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/','9d6'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/api-cheatsheet/','871'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/architecture-overview/','944'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/community-learning-resources/','dd2'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/compatibility-cheatsheet/','17c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/compiler-architecture/','b72'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/conversion-playbook/','670'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/conversion-scripts/','5a2'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/converting-mutations/','dfd'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/fetch-query/','247'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/fragment-container/','91a'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/graphql-in-relay/','620'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/graphql-server-specification/','5ba'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/installation-and-setup/','f23'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/local-state-management/','768'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/migration-setup/','fe0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/mutations/','57a'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/network-layer/','e63'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/new-in-relay-modern/','1f8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/pagination-container/','25f'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/persisted-queries/','953'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/prerequisites/','874'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/query-renderer/','164'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/quick-start-guide/','f45'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/refetch-container/','5cb'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/relay-compat/','7f0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/relay-debugging/','53f'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/relay-environment/','c71'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/relay-store/','87e'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/routing/','ca5'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/runtime-architecture/','c9e'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/subscriptions/','a9b'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/testing-relay-components/','426'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/thinking-in-graphql/','308'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/thinking-in-relay/','091'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/type-emission/','5be'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/upgrading-setvariables/','222'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v7.1.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v7.1.0/videos/','a70'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v8.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/','b32'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v8.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/','f73'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/api-cheatsheet/','9c0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/architecture-overview/','ad6'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/community-learning-resources/','934'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/compatibility-cheatsheet/','446'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/compiler-architecture/','81b'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/conversion-playbook/','f2a'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/conversion-scripts/','d3d'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/converting-mutations/','1fa'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/fetch-query/','46c'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/fragment-container/','01f'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/graphql-in-relay/','05d'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/graphql-server-specification/','331'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/installation-and-setup/','828'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/local-state-management/','ef6'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/migration-setup/','a33'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/mutations/','e6d'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/network-layer/','5c6'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/new-in-relay-modern/','7f9'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/pagination-container/','38f'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/persisted-queries/','305'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/prerequisites/','9f6'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/query-renderer/','ad9'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/quick-start-guide/','482'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/refetch-container/','558'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/relay-compat/','e18'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/relay-debugging/','61d'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/relay-environment/','a6b'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/relay-store/','692'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/routing/','bbe'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/runtime-architecture/','f61'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/subscriptions/','a65'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/testing-relay-components/','0e3'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/thinking-in-graphql/','77b'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/thinking-in-relay/','4a0'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/type-emission/','404'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/upgrading-setvariables/','f74'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v8.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v8.0.0/videos/','291'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v9.0.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/','361'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v9.0.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/','19d'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/api-cheatsheet/','8e4'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/architecture-overview/','32f'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/community-learning-resources/','826'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/compatibility-cheatsheet/','20e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/compiler-architecture/','f0b'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/conversion-playbook/','7bd'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/conversion-scripts/','877'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/converting-mutations/','13c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/fetch-query/','1a6'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/fragment-container/','c21'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/graphql-in-relay/','c51'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/graphql-server-specification/','e73'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/installation-and-setup/','522'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/local-state-management/','cdb'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/migration-setup/','1a0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/mutations/','af1'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/network-layer/','136'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/new-in-relay-modern/','042'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/pagination-container/','e09'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/persisted-queries/','c02'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/prerequisites/','3a3'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/query-renderer/','d53'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/quick-start-guide/','04e'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/refetch-container/','170'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/relay-compat/','02c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/relay-debugging/','536'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/relay-environment/','784'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/relay-store/','a73'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/routing/','af0'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/runtime-architecture/','5f7'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/subscriptions/','412'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/testing-relay-components/','dd9'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/thinking-in-graphql/','db5'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/thinking-in-relay/','bfa'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/type-emission/','ec4'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/upgrading-setvariables/','77a'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.0.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.0.0/videos/','2eb'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/v9.1.0/',
    component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/','395'),
    routes: [
      {
        path: '/relay.ko.dev/docs/v9.1.0/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/','1d6'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/api-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/api-cheatsheet/','8a9'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/architecture-overview/','992'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/community-learning-resources/','010'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/compatibility-cheatsheet/','dad'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/compiler-architecture/','c51'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/conversion-playbook/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/conversion-playbook/','59c'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/conversion-scripts/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/conversion-scripts/','f75'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/converting-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/converting-mutations/','4d0'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/fetch-query/','e7a'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/fragment-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/fragment-container/','b6b'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/graphql-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/graphql-in-relay/','788'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/graphql-server-specification/','5e6'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/installation-and-setup/','f45'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/local-state-management/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/local-state-management/','211'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/migration-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/migration-setup/','4e8'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/mutations/','998'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/network-layer/','20c'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/new-in-relay-modern/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/new-in-relay-modern/','cc7'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/pagination-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/pagination-container/','d27'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/persisted-queries/','8e0'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/prerequisites/','68f'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/query-renderer/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/query-renderer/','b7c'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/quick-start-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/quick-start-guide/','ba0'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/refetch-container/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/refetch-container/','39c'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/relay-compat/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/relay-compat/','18e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/relay-debugging/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/relay-debugging/','8cd'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/relay-environment/','054'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/relay-store/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/relay-store/','c5d'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/routing/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/routing/','76c'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/runtime-architecture/','c30'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/subscriptions/','97b'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/testing-relay-components/','5de'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/thinking-in-graphql/','cff'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/thinking-in-relay/','fc1'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/type-emission/','009'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/upgrading-setvariables/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/upgrading-setvariables/','f17'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/v9.1.0/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/v9.1.0/videos/','658'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      }
    ]
  },
  {
    path: '/relay.ko.dev/docs/',
    component: ComponentCreator('/relay.ko.dev/docs/','1bf'),
    routes: [
      {
        path: '/relay.ko.dev/docs/',
        component: ComponentCreator('/relay.ko.dev/docs/','f48'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/commit-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/commit-mutation/','b83'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/entrypoint-container/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/entrypoint-container/','9bf'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/fetch-query/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/fetch-query/','25f'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/graphql-and-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/graphql-and-directives/','7af'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/legacy-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/legacy-apis/','bea'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/load-entrypoint/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/load-entrypoint/','44d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/load-query/','ac6'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/relay-environment-provider/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/relay-environment-provider/','713'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/request-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/request-subscription/','942'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/store/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/store/','dcd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/CacheConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/CacheConfig/','689'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/Disposable/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/Disposable/','f9b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/GraphQLSubscriptionConfig/','44f'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/MutationConfig/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/MutationConfig/','284'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/SelectorStoreUpdater/','9a9'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/types/UploadableMap/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/types/UploadableMap/','598'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-entrypoint-loader/','84e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-fragment/','76b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-lazy-load-query/','4c1'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-mutation/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-mutation/','d69'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-pagination-fragment/','196'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-preloaded-query/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-preloaded-query/','95f'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-query-loader/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-query-loader/','88c'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-refetchable-fragment/','1de'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-relay-environment/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-relay-environment/','580'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/api-reference/use-subscription/',
        component: ComponentCreator('/relay.ko.dev/docs/api-reference/use-subscription/','9ca'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/community-learning-resources/',
        component: ComponentCreator('/relay.ko.dev/docs/community-learning-resources/','a15'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/relay.ko.dev/docs/debugging/declarative-mutation-directives/','0d6'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/relay.ko.dev/docs/debugging/inconsistent-typename-error/','2ba'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/debugging/relay-devtools/',
        component: ComponentCreator('/relay.ko.dev/docs/debugging/relay-devtools/','db2'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/getting-started/installation-and-setup/',
        component: ComponentCreator('/relay.ko.dev/docs/getting-started/installation-and-setup/','38b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/getting-started/prerequisites/',
        component: ComponentCreator('/relay.ko.dev/docs/getting-started/prerequisites/','3d9'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/getting-started/step-by-step-guide/',
        component: ComponentCreator('/relay.ko.dev/docs/getting-started/step-by-step-guide/','242'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/glossary/',
        component: ComponentCreator('/relay.ko.dev/docs/glossary/','0df'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/','eb9'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/accessing-data-without-react/prefetching-queries/','99b'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/accessing-data-without-react/reading-fragments/','cb2'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/accessing-data-without-react/reading-queries/','57e'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/accessing-data-without-react/retaining-queries/','03b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/accessing-data-without-react/subscribing-to-queries/','038'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/advanced-pagination/','f74'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/connections/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/connections/','d05'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/pagination/','fdb'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/refetching-connections/','cd4'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/rendering-connections/','774'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/streaming-pagination/','548'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/list-data/updating-connections/','7d2'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/','3f7'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/OssAvoidSuspenseNote/','190'),
        exact: true
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/refetching-fragments-with-different-data/','160'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/refetching-queries-with-different-data/','e5d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/refreshing-fragments/','bbc'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/refetching/refreshing-queries/','60e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/environment/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/environment/','759'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/error-states/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/error-states/','bb4'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/fragments/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/fragments/','023'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/loading-states/','ea5'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/queries/','522'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/rendering/variables/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/rendering/variables/','507'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/','647'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/availability-of-data/','a6e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/fetch-policies/','197'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/filling-in-missing-data/','39a'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/presence-of-data/','a36'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/','3c6'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/reusing-cached-data/staleness-of-data/','ba6'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/updating-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/updating-data/','055'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/updating-data/client-only-data/','431'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/updating-data/graphql-mutations/','f66'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/updating-data/graphql-subscriptions/','bb2'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/updating-data/local-data-updates/','174'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guided-tour/workflow/',
        component: ComponentCreator('/relay.ko.dev/docs/guided-tour/workflow/','b82'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/client-schema-extensions/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/client-schema-extensions/','938'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/compiler/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/compiler/','a12'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/graphql-server-specification/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/graphql-server-specification/','d2a'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/network-layer/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/network-layer/','4a7'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/persisted-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/persisted-queries/','8aa'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/required-directive/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/required-directive/','34b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/testing-relay-components/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/testing-relay-components/','0b0'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/testing-relay-with-preloaded-queries/','cdd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/guides/type-emission/',
        component: ComponentCreator('/relay.ko.dev/docs/guides/type-emission/','96d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/migration-and-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/migration-and-compatibility/','3b7'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/relay.ko.dev/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','b5d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/relay.ko.dev/docs/migration-and-compatibility/suspense-compatibility/','bef'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/architecture-overview/','578'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/compiler-architecture/','def'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/runtime-architecture/','a0b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/thinking-in-graphql/','667'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/thinking-in-relay/','efd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/relay.ko.dev/docs/principles-and-architecture/videos/',
        component: ComponentCreator('/relay.ko.dev/docs/principles-and-architecture/videos/','e40'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
