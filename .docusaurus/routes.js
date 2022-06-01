
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/','60e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/','647'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/','8e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/','4f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/','363'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/','fb4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/','b09'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','537'),
    exact: true
  },
  {
    path: '/blog/2021/03/09/introducing-relay-hooks/',
    component: ComponentCreator('/blog/2021/03/09/introducing-relay-hooks/','670'),
    exact: true
  },
  {
    path: '/blog/2021/12/08/introducing-the-new-relay-compiler/',
    component: ComponentCreator('/blog/2021/12/08/introducing-the-new-relay-compiler/','15e'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','38a'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','0ff'),
    exact: true
  },
  {
    path: '/blog/tags/relay-compiler/',
    component: ComponentCreator('/blog/tags/relay-compiler/','cea'),
    exact: true
  },
  {
    path: '/blog/tags/relay-hooks/',
    component: ComponentCreator('/blog/tags/relay-hooks/','323'),
    exact: true
  },
  {
    path: '/blog/tags/required/',
    component: ComponentCreator('/blog/tags/required/','2d0'),
    exact: true
  },
  {
    path: '/blog/tags/rust/',
    component: ComponentCreator('/blog/tags/rust/','27c'),
    exact: true
  },
  {
    path: '/compiler-explorer/',
    component: ComponentCreator('/compiler-explorer/','cd4'),
    exact: true
  },
  {
    path: '/help/',
    component: ComponentCreator('/help/','4ff'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/','030'),
    exact: true
  },
  {
    path: '/users/',
    component: ComponentCreator('/users/','342'),
    exact: true
  },
  {
    path: '/versions/',
    component: ComponentCreator('/versions/','059'),
    exact: true
  },
  {
    path: '/docs/next/',
    component: ComponentCreator('/docs/next/','4c2'),
    routes: [
      {
        path: '/docs/next/',
        component: ComponentCreator('/docs/next/','48c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/commit-mutation/',
        component: ComponentCreator('/docs/next/api-reference/commit-mutation/','434'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/entrypoint-container/',
        component: ComponentCreator('/docs/next/api-reference/entrypoint-container/','563'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/fetch-query/',
        component: ComponentCreator('/docs/next/api-reference/fetch-query/','417'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/graphql-and-directives/',
        component: ComponentCreator('/docs/next/api-reference/graphql-and-directives/','4c0'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/legacy-apis/',
        component: ComponentCreator('/docs/next/api-reference/legacy-apis/','450'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/load-entrypoint/',
        component: ComponentCreator('/docs/next/api-reference/load-entrypoint/','84b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/load-query/',
        component: ComponentCreator('/docs/next/api-reference/load-query/','210'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/relay-environment-provider/',
        component: ComponentCreator('/docs/next/api-reference/relay-environment-provider/','af6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/request-subscription/',
        component: ComponentCreator('/docs/next/api-reference/request-subscription/','9c1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/store/',
        component: ComponentCreator('/docs/next/api-reference/store/','a82'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/types/CacheConfig/',
        component: ComponentCreator('/docs/next/api-reference/types/CacheConfig/','285'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/types/Disposable/',
        component: ComponentCreator('/docs/next/api-reference/types/Disposable/','daf'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/docs/next/api-reference/types/GraphQLSubscriptionConfig/','955'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/types/MutationConfig/',
        component: ComponentCreator('/docs/next/api-reference/types/MutationConfig/','ba1'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/docs/next/api-reference/types/SelectorStoreUpdater/','650'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/types/UploadableMap/',
        component: ComponentCreator('/docs/next/api-reference/types/UploadableMap/','8a5'),
        exact: true
      },
      {
        path: '/docs/next/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/docs/next/api-reference/use-entrypoint-loader/','68c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-fragment/',
        component: ComponentCreator('/docs/next/api-reference/use-fragment/','9b8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/docs/next/api-reference/use-lazy-load-query/','bdf'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-mutation/',
        component: ComponentCreator('/docs/next/api-reference/use-mutation/','ea8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/docs/next/api-reference/use-pagination-fragment/','682'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-preloaded-query/',
        component: ComponentCreator('/docs/next/api-reference/use-preloaded-query/','f77'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-query-loader/',
        component: ComponentCreator('/docs/next/api-reference/use-query-loader/','116'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/docs/next/api-reference/use-refetchable-fragment/','ca6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-relay-environment/',
        component: ComponentCreator('/docs/next/api-reference/use-relay-environment/','22e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/api-reference/use-subscription/',
        component: ComponentCreator('/docs/next/api-reference/use-subscription/','29a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/community-learning-resources/',
        component: ComponentCreator('/docs/next/community-learning-resources/','e0a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/docs/next/debugging/declarative-mutation-directives/','dc5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/docs/next/debugging/inconsistent-typename-error/','cfa'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/debugging/relay-devtools/',
        component: ComponentCreator('/docs/next/debugging/relay-devtools/','47e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/getting-started/installation-and-setup/',
        component: ComponentCreator('/docs/next/getting-started/installation-and-setup/','094'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/getting-started/prerequisites/',
        component: ComponentCreator('/docs/next/getting-started/prerequisites/','67b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/getting-started/step-by-step-guide/',
        component: ComponentCreator('/docs/next/getting-started/step-by-step-guide/','dfa'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/glossary/',
        component: ComponentCreator('/docs/next/glossary/','5fc'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/',
        component: ComponentCreator('/docs/next/guided-tour/','5bd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/docs/next/guided-tour/accessing-data-without-react/prefetching-queries/','d0c'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/docs/next/guided-tour/accessing-data-without-react/reading-fragments/','b45'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/docs/next/guided-tour/accessing-data-without-react/reading-queries/','cd1'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/docs/next/guided-tour/accessing-data-without-react/retaining-queries/','f62'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/docs/next/guided-tour/accessing-data-without-react/subscribing-to-queries/','dae'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/advanced-pagination/','7a4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/connections/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/connections/','0bf'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/pagination/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/pagination/','c11'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/refetching-connections/','7dd'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/rendering-connections/','8d7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/streaming-pagination/','23d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/docs/next/guided-tour/list-data/updating-connections/','b81'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/refetching/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/','e1f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/OssAvoidSuspenseNote/','ef0'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/refetching-fragments-with-different-data/','d2f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/refetching-queries-with-different-data/','cd5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/refreshing-fragments/','343'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/docs/next/guided-tour/refetching/refreshing-queries/','b2e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/environment/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/environment/','a10'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/error-states/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/error-states/','dca'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/fragments/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/fragments/','6ed'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/loading-states/','882'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/queries/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/queries/','77d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/rendering/variables/',
        component: ComponentCreator('/docs/next/guided-tour/rendering/variables/','d37'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/','169'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/availability-of-data/','8d4'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/fetch-policies/','e6c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/','812'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/presence-of-data/','2f7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/rendering-partially-cached-data/','0d3'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/docs/next/guided-tour/reusing-cached-data/staleness-of-data/','b43'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/','751'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/client-only-data/','dac'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/graphql-mutations/','34b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/graphql-subscriptions/','bb8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/imperatively-modifying-linked-fields/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/imperatively-modifying-linked-fields/','243'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/','f57'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/imperatively-modifying-store-data/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/imperatively-modifying-store-data/','ea8'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/local-data-updates/','63c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guided-tour/updating-data/typesafe-updaters-faq/',
        component: ComponentCreator('/docs/next/guided-tour/updating-data/typesafe-updaters-faq/','934'),
        exact: true
      },
      {
        path: '/docs/next/guided-tour/workflow/',
        component: ComponentCreator('/docs/next/guided-tour/workflow/','df1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/client-schema-extensions/',
        component: ComponentCreator('/docs/next/guides/client-schema-extensions/','c16'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/compiler/',
        component: ComponentCreator('/docs/next/guides/compiler/','85a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/graphql-server-specification/',
        component: ComponentCreator('/docs/next/guides/graphql-server-specification/','39b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/network-layer/',
        component: ComponentCreator('/docs/next/guides/network-layer/','e40'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/persisted-queries/',
        component: ComponentCreator('/docs/next/guides/persisted-queries/','77f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/relay-resolvers/',
        component: ComponentCreator('/docs/next/guides/relay-resolvers/','625'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/required-directive/',
        component: ComponentCreator('/docs/next/guides/required-directive/','800'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/testing-relay-components/',
        component: ComponentCreator('/docs/next/guides/testing-relay-components/','083'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/docs/next/guides/testing-relay-with-preloaded-queries/','ad2'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/guides/type-emission/',
        component: ComponentCreator('/docs/next/guides/type-emission/','881'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/migration-and-compatibility/',
        component: ComponentCreator('/docs/next/migration-and-compatibility/','26c'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/docs/next/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','91d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/docs/next/migration-and-compatibility/suspense-compatibility/','a38'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/docs/next/principles-and-architecture/architecture-overview/','5ce'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/docs/next/principles-and-architecture/compiler-architecture/','98f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/docs/next/principles-and-architecture/runtime-architecture/','781'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/docs/next/principles-and-architecture/thinking-in-graphql/','467'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/docs/next/principles-and-architecture/thinking-in-relay/','801'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/docs/next/principles-and-architecture/videos/',
        component: ComponentCreator('/docs/next/principles-and-architecture/videos/','67d'),
        exact: true,
        'sidebar': "docs"
      }
    ]
  },
  {
    path: '/docs/v1.4.1/',
    component: ComponentCreator('/docs/v1.4.1/','684'),
    routes: [
      {
        path: '/docs/v1.4.1/',
        component: ComponentCreator('/docs/v1.4.1/','1a7'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.4.1/api-cheatsheet/','9ac'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/architecture-overview/',
        component: ComponentCreator('/docs/v1.4.1/architecture-overview/','ee6'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/community-learning-resources/',
        component: ComponentCreator('/docs/v1.4.1/community-learning-resources/','be2'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.4.1/compatibility-cheatsheet/','f9a'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/compiler-architecture/',
        component: ComponentCreator('/docs/v1.4.1/compiler-architecture/','b44'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/conversion-playbook/',
        component: ComponentCreator('/docs/v1.4.1/conversion-playbook/','9fa'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/conversion-scripts/',
        component: ComponentCreator('/docs/v1.4.1/conversion-scripts/','0b5'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/converting-mutations/',
        component: ComponentCreator('/docs/v1.4.1/converting-mutations/','d2b'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/fetch-query/',
        component: ComponentCreator('/docs/v1.4.1/fetch-query/','245'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/fragment-container/',
        component: ComponentCreator('/docs/v1.4.1/fragment-container/','973'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.4.1/graphql-in-relay/','16e'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.4.1/graphql-server-specification/','9e0'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/installation-and-setup/',
        component: ComponentCreator('/docs/v1.4.1/installation-and-setup/','244'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/local-state-management/',
        component: ComponentCreator('/docs/v1.4.1/local-state-management/','adc'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/migration-setup/',
        component: ComponentCreator('/docs/v1.4.1/migration-setup/','2bd'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/mutations/',
        component: ComponentCreator('/docs/v1.4.1/mutations/','e54'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/network-layer/',
        component: ComponentCreator('/docs/v1.4.1/network-layer/','a32'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.4.1/new-in-relay-modern/','704'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/pagination-container/',
        component: ComponentCreator('/docs/v1.4.1/pagination-container/','10a'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/persisted-queries/',
        component: ComponentCreator('/docs/v1.4.1/persisted-queries/','37e'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/prerequisites/',
        component: ComponentCreator('/docs/v1.4.1/prerequisites/','532'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/query-renderer/',
        component: ComponentCreator('/docs/v1.4.1/query-renderer/','ae1'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/quick-start-guide/',
        component: ComponentCreator('/docs/v1.4.1/quick-start-guide/','657'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/refetch-container/',
        component: ComponentCreator('/docs/v1.4.1/refetch-container/','866'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/relay-compat/',
        component: ComponentCreator('/docs/v1.4.1/relay-compat/','1dc'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/relay-debugging/',
        component: ComponentCreator('/docs/v1.4.1/relay-debugging/','94d'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/relay-environment/',
        component: ComponentCreator('/docs/v1.4.1/relay-environment/','3b3'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/relay-store/',
        component: ComponentCreator('/docs/v1.4.1/relay-store/','098'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/routing/',
        component: ComponentCreator('/docs/v1.4.1/routing/','6b6'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/runtime-architecture/',
        component: ComponentCreator('/docs/v1.4.1/runtime-architecture/','c06'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/subscriptions/',
        component: ComponentCreator('/docs/v1.4.1/subscriptions/','e43'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/testing-relay-components/',
        component: ComponentCreator('/docs/v1.4.1/testing-relay-components/','1a0'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.4.1/thinking-in-graphql/','310'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.4.1/thinking-in-relay/','f44'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/type-emission/',
        component: ComponentCreator('/docs/v1.4.1/type-emission/','b95'),
        exact: true
      },
      {
        path: '/docs/v1.4.1/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.4.1/upgrading-setvariables/','588'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      },
      {
        path: '/docs/v1.4.1/videos/',
        component: ComponentCreator('/docs/v1.4.1/videos/','488'),
        exact: true,
        'sidebar': "version-v1.4.1/docs"
      }
    ]
  },
  {
    path: '/docs/v1.5.0/',
    component: ComponentCreator('/docs/v1.5.0/','11f'),
    routes: [
      {
        path: '/docs/v1.5.0/',
        component: ComponentCreator('/docs/v1.5.0/','b4e'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.5.0/api-cheatsheet/','8f0'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/architecture-overview/',
        component: ComponentCreator('/docs/v1.5.0/architecture-overview/','f66'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/community-learning-resources/',
        component: ComponentCreator('/docs/v1.5.0/community-learning-resources/','cff'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.5.0/compatibility-cheatsheet/','30d'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/compiler-architecture/',
        component: ComponentCreator('/docs/v1.5.0/compiler-architecture/','dfe'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/conversion-playbook/',
        component: ComponentCreator('/docs/v1.5.0/conversion-playbook/','d7d'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/conversion-scripts/',
        component: ComponentCreator('/docs/v1.5.0/conversion-scripts/','f64'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/converting-mutations/',
        component: ComponentCreator('/docs/v1.5.0/converting-mutations/','d18'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/fetch-query/',
        component: ComponentCreator('/docs/v1.5.0/fetch-query/','221'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/fragment-container/',
        component: ComponentCreator('/docs/v1.5.0/fragment-container/','e0e'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.5.0/graphql-in-relay/','d13'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.5.0/graphql-server-specification/','363'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/installation-and-setup/',
        component: ComponentCreator('/docs/v1.5.0/installation-and-setup/','bc4'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/local-state-management/',
        component: ComponentCreator('/docs/v1.5.0/local-state-management/','ba2'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/migration-setup/',
        component: ComponentCreator('/docs/v1.5.0/migration-setup/','c3a'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/mutations/',
        component: ComponentCreator('/docs/v1.5.0/mutations/','3ed'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/network-layer/',
        component: ComponentCreator('/docs/v1.5.0/network-layer/','9a5'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.5.0/new-in-relay-modern/','179'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/pagination-container/',
        component: ComponentCreator('/docs/v1.5.0/pagination-container/','6f1'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/persisted-queries/',
        component: ComponentCreator('/docs/v1.5.0/persisted-queries/','2d4'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/prerequisites/',
        component: ComponentCreator('/docs/v1.5.0/prerequisites/','5e6'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/query-renderer/',
        component: ComponentCreator('/docs/v1.5.0/query-renderer/','079'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/quick-start-guide/',
        component: ComponentCreator('/docs/v1.5.0/quick-start-guide/','b46'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/refetch-container/',
        component: ComponentCreator('/docs/v1.5.0/refetch-container/','54d'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/relay-compat/',
        component: ComponentCreator('/docs/v1.5.0/relay-compat/','cd8'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/relay-debugging/',
        component: ComponentCreator('/docs/v1.5.0/relay-debugging/','df2'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/relay-environment/',
        component: ComponentCreator('/docs/v1.5.0/relay-environment/','039'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/relay-store/',
        component: ComponentCreator('/docs/v1.5.0/relay-store/','eb1'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/routing/',
        component: ComponentCreator('/docs/v1.5.0/routing/','0a6'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/runtime-architecture/',
        component: ComponentCreator('/docs/v1.5.0/runtime-architecture/','89f'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/subscriptions/',
        component: ComponentCreator('/docs/v1.5.0/subscriptions/','4a6'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/testing-relay-components/',
        component: ComponentCreator('/docs/v1.5.0/testing-relay-components/','a54'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.5.0/thinking-in-graphql/','c66'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.5.0/thinking-in-relay/','98c'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/type-emission/',
        component: ComponentCreator('/docs/v1.5.0/type-emission/','5f2'),
        exact: true
      },
      {
        path: '/docs/v1.5.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.5.0/upgrading-setvariables/','684'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      },
      {
        path: '/docs/v1.5.0/videos/',
        component: ComponentCreator('/docs/v1.5.0/videos/','64d'),
        exact: true,
        'sidebar': "version-v1.5.0/docs"
      }
    ]
  },
  {
    path: '/docs/v1.6.0/',
    component: ComponentCreator('/docs/v1.6.0/','9ac'),
    routes: [
      {
        path: '/docs/v1.6.0/',
        component: ComponentCreator('/docs/v1.6.0/','6f4'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.0/api-cheatsheet/','943'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/architecture-overview/',
        component: ComponentCreator('/docs/v1.6.0/architecture-overview/','7ed'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/community-learning-resources/',
        component: ComponentCreator('/docs/v1.6.0/community-learning-resources/','81b'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.0/compatibility-cheatsheet/','dfb'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/compiler-architecture/',
        component: ComponentCreator('/docs/v1.6.0/compiler-architecture/','811'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/conversion-playbook/',
        component: ComponentCreator('/docs/v1.6.0/conversion-playbook/','a8a'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/conversion-scripts/',
        component: ComponentCreator('/docs/v1.6.0/conversion-scripts/','378'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/converting-mutations/',
        component: ComponentCreator('/docs/v1.6.0/converting-mutations/','1f6'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/fetch-query/',
        component: ComponentCreator('/docs/v1.6.0/fetch-query/','604'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/fragment-container/',
        component: ComponentCreator('/docs/v1.6.0/fragment-container/','fe8'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.6.0/graphql-in-relay/','b7c'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.6.0/graphql-server-specification/','53f'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/installation-and-setup/',
        component: ComponentCreator('/docs/v1.6.0/installation-and-setup/','ff5'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/local-state-management/',
        component: ComponentCreator('/docs/v1.6.0/local-state-management/','fa1'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/migration-setup/',
        component: ComponentCreator('/docs/v1.6.0/migration-setup/','6d9'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/mutations/',
        component: ComponentCreator('/docs/v1.6.0/mutations/','477'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/network-layer/',
        component: ComponentCreator('/docs/v1.6.0/network-layer/','40b'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.6.0/new-in-relay-modern/','fa5'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/pagination-container/',
        component: ComponentCreator('/docs/v1.6.0/pagination-container/','a49'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/persisted-queries/',
        component: ComponentCreator('/docs/v1.6.0/persisted-queries/','9c0'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/prerequisites/',
        component: ComponentCreator('/docs/v1.6.0/prerequisites/','df1'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/query-renderer/',
        component: ComponentCreator('/docs/v1.6.0/query-renderer/','095'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/quick-start-guide/',
        component: ComponentCreator('/docs/v1.6.0/quick-start-guide/','8f5'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/refetch-container/',
        component: ComponentCreator('/docs/v1.6.0/refetch-container/','38c'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/relay-compat/',
        component: ComponentCreator('/docs/v1.6.0/relay-compat/','d31'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/relay-debugging/',
        component: ComponentCreator('/docs/v1.6.0/relay-debugging/','777'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/relay-environment/',
        component: ComponentCreator('/docs/v1.6.0/relay-environment/','7fa'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/relay-store/',
        component: ComponentCreator('/docs/v1.6.0/relay-store/','791'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/routing/',
        component: ComponentCreator('/docs/v1.6.0/routing/','6b6'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/runtime-architecture/',
        component: ComponentCreator('/docs/v1.6.0/runtime-architecture/','6f6'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/subscriptions/',
        component: ComponentCreator('/docs/v1.6.0/subscriptions/','ee8'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/testing-relay-components/',
        component: ComponentCreator('/docs/v1.6.0/testing-relay-components/','e7a'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.6.0/thinking-in-graphql/','dde'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.6.0/thinking-in-relay/','ede'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/type-emission/',
        component: ComponentCreator('/docs/v1.6.0/type-emission/','afc'),
        exact: true
      },
      {
        path: '/docs/v1.6.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.6.0/upgrading-setvariables/','7c2'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      },
      {
        path: '/docs/v1.6.0/videos/',
        component: ComponentCreator('/docs/v1.6.0/videos/','efc'),
        exact: true,
        'sidebar': "version-v1.6.0/docs"
      }
    ]
  },
  {
    path: '/docs/v1.6.1/',
    component: ComponentCreator('/docs/v1.6.1/','02e'),
    routes: [
      {
        path: '/docs/v1.6.1/',
        component: ComponentCreator('/docs/v1.6.1/','5b2'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.1/api-cheatsheet/','81e'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/architecture-overview/',
        component: ComponentCreator('/docs/v1.6.1/architecture-overview/','790'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/community-learning-resources/',
        component: ComponentCreator('/docs/v1.6.1/community-learning-resources/','016'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.1/compatibility-cheatsheet/','475'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/compiler-architecture/',
        component: ComponentCreator('/docs/v1.6.1/compiler-architecture/','0b6'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/conversion-playbook/',
        component: ComponentCreator('/docs/v1.6.1/conversion-playbook/','cea'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/conversion-scripts/',
        component: ComponentCreator('/docs/v1.6.1/conversion-scripts/','405'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/converting-mutations/',
        component: ComponentCreator('/docs/v1.6.1/converting-mutations/','b2f'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/fetch-query/',
        component: ComponentCreator('/docs/v1.6.1/fetch-query/','2dd'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/fragment-container/',
        component: ComponentCreator('/docs/v1.6.1/fragment-container/','8bf'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.6.1/graphql-in-relay/','669'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.6.1/graphql-server-specification/','6d0'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/installation-and-setup/',
        component: ComponentCreator('/docs/v1.6.1/installation-and-setup/','714'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/local-state-management/',
        component: ComponentCreator('/docs/v1.6.1/local-state-management/','c5c'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/migration-setup/',
        component: ComponentCreator('/docs/v1.6.1/migration-setup/','ee9'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/mutations/',
        component: ComponentCreator('/docs/v1.6.1/mutations/','42d'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/network-layer/',
        component: ComponentCreator('/docs/v1.6.1/network-layer/','4b1'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.6.1/new-in-relay-modern/','049'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/pagination-container/',
        component: ComponentCreator('/docs/v1.6.1/pagination-container/','24d'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/persisted-queries/',
        component: ComponentCreator('/docs/v1.6.1/persisted-queries/','570'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/prerequisites/',
        component: ComponentCreator('/docs/v1.6.1/prerequisites/','b03'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/query-renderer/',
        component: ComponentCreator('/docs/v1.6.1/query-renderer/','318'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/quick-start-guide/',
        component: ComponentCreator('/docs/v1.6.1/quick-start-guide/','0f4'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/refetch-container/',
        component: ComponentCreator('/docs/v1.6.1/refetch-container/','ea0'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/relay-compat/',
        component: ComponentCreator('/docs/v1.6.1/relay-compat/','c6a'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/relay-debugging/',
        component: ComponentCreator('/docs/v1.6.1/relay-debugging/','241'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/relay-environment/',
        component: ComponentCreator('/docs/v1.6.1/relay-environment/','a2d'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/relay-store/',
        component: ComponentCreator('/docs/v1.6.1/relay-store/','07e'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/routing/',
        component: ComponentCreator('/docs/v1.6.1/routing/','d33'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/runtime-architecture/',
        component: ComponentCreator('/docs/v1.6.1/runtime-architecture/','de0'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/subscriptions/',
        component: ComponentCreator('/docs/v1.6.1/subscriptions/','b4a'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/testing-relay-components/',
        component: ComponentCreator('/docs/v1.6.1/testing-relay-components/','058'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.6.1/thinking-in-graphql/','243'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.6.1/thinking-in-relay/','582'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/type-emission/',
        component: ComponentCreator('/docs/v1.6.1/type-emission/','78a'),
        exact: true
      },
      {
        path: '/docs/v1.6.1/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.6.1/upgrading-setvariables/','30d'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      },
      {
        path: '/docs/v1.6.1/videos/',
        component: ComponentCreator('/docs/v1.6.1/videos/','4b2'),
        exact: true,
        'sidebar': "version-v1.6.1/docs"
      }
    ]
  },
  {
    path: '/docs/v1.6.2/',
    component: ComponentCreator('/docs/v1.6.2/','12e'),
    routes: [
      {
        path: '/docs/v1.6.2/',
        component: ComponentCreator('/docs/v1.6.2/','ab7'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.2/api-cheatsheet/','e90'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/architecture-overview/',
        component: ComponentCreator('/docs/v1.6.2/architecture-overview/','1be'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/community-learning-resources/',
        component: ComponentCreator('/docs/v1.6.2/community-learning-resources/','df3'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.6.2/compatibility-cheatsheet/','bdc'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/compiler-architecture/',
        component: ComponentCreator('/docs/v1.6.2/compiler-architecture/','01b'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/conversion-playbook/',
        component: ComponentCreator('/docs/v1.6.2/conversion-playbook/','6be'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/conversion-scripts/',
        component: ComponentCreator('/docs/v1.6.2/conversion-scripts/','b9c'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/converting-mutations/',
        component: ComponentCreator('/docs/v1.6.2/converting-mutations/','995'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/fetch-query/',
        component: ComponentCreator('/docs/v1.6.2/fetch-query/','35b'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/fragment-container/',
        component: ComponentCreator('/docs/v1.6.2/fragment-container/','2ff'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.6.2/graphql-in-relay/','d8f'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.6.2/graphql-server-specification/','663'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/installation-and-setup/',
        component: ComponentCreator('/docs/v1.6.2/installation-and-setup/','24d'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/local-state-management/',
        component: ComponentCreator('/docs/v1.6.2/local-state-management/','da8'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/migration-setup/',
        component: ComponentCreator('/docs/v1.6.2/migration-setup/','ff0'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/mutations/',
        component: ComponentCreator('/docs/v1.6.2/mutations/','39c'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/network-layer/',
        component: ComponentCreator('/docs/v1.6.2/network-layer/','eab'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.6.2/new-in-relay-modern/','a4e'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/pagination-container/',
        component: ComponentCreator('/docs/v1.6.2/pagination-container/','258'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/persisted-queries/',
        component: ComponentCreator('/docs/v1.6.2/persisted-queries/','b35'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/prerequisites/',
        component: ComponentCreator('/docs/v1.6.2/prerequisites/','127'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/query-renderer/',
        component: ComponentCreator('/docs/v1.6.2/query-renderer/','533'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/quick-start-guide/',
        component: ComponentCreator('/docs/v1.6.2/quick-start-guide/','a18'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/refetch-container/',
        component: ComponentCreator('/docs/v1.6.2/refetch-container/','cda'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/relay-compat/',
        component: ComponentCreator('/docs/v1.6.2/relay-compat/','aac'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/relay-debugging/',
        component: ComponentCreator('/docs/v1.6.2/relay-debugging/','25a'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/relay-environment/',
        component: ComponentCreator('/docs/v1.6.2/relay-environment/','e7c'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/relay-store/',
        component: ComponentCreator('/docs/v1.6.2/relay-store/','57b'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/routing/',
        component: ComponentCreator('/docs/v1.6.2/routing/','493'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/runtime-architecture/',
        component: ComponentCreator('/docs/v1.6.2/runtime-architecture/','798'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/subscriptions/',
        component: ComponentCreator('/docs/v1.6.2/subscriptions/','ae4'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/testing-relay-components/',
        component: ComponentCreator('/docs/v1.6.2/testing-relay-components/','8cf'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.6.2/thinking-in-graphql/','f0e'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.6.2/thinking-in-relay/','050'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/type-emission/',
        component: ComponentCreator('/docs/v1.6.2/type-emission/','8cc'),
        exact: true
      },
      {
        path: '/docs/v1.6.2/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.6.2/upgrading-setvariables/','01b'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      },
      {
        path: '/docs/v1.6.2/videos/',
        component: ComponentCreator('/docs/v1.6.2/videos/','34a'),
        exact: true,
        'sidebar': "version-v1.6.2/docs"
      }
    ]
  },
  {
    path: '/docs/v1.7.0/',
    component: ComponentCreator('/docs/v1.7.0/','d90'),
    routes: [
      {
        path: '/docs/v1.7.0/',
        component: ComponentCreator('/docs/v1.7.0/','54e'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v1.7.0/api-cheatsheet/','37f'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/architecture-overview/',
        component: ComponentCreator('/docs/v1.7.0/architecture-overview/','272'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/community-learning-resources/',
        component: ComponentCreator('/docs/v1.7.0/community-learning-resources/','b93'),
        exact: true
      },
      {
        path: '/docs/v1.7.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v1.7.0/compatibility-cheatsheet/','ad5'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/compiler-architecture/',
        component: ComponentCreator('/docs/v1.7.0/compiler-architecture/','464'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/conversion-playbook/',
        component: ComponentCreator('/docs/v1.7.0/conversion-playbook/','e0c'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/conversion-scripts/',
        component: ComponentCreator('/docs/v1.7.0/conversion-scripts/','1cb'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/converting-mutations/',
        component: ComponentCreator('/docs/v1.7.0/converting-mutations/','d6d'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/fetch-query/',
        component: ComponentCreator('/docs/v1.7.0/fetch-query/','c81'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/fragment-container/',
        component: ComponentCreator('/docs/v1.7.0/fragment-container/','389'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v1.7.0/graphql-in-relay/','a5b'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v1.7.0/graphql-server-specification/','b00'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/installation-and-setup/',
        component: ComponentCreator('/docs/v1.7.0/installation-and-setup/','df7'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/local-state-management/',
        component: ComponentCreator('/docs/v1.7.0/local-state-management/','8ac'),
        exact: true
      },
      {
        path: '/docs/v1.7.0/migration-setup/',
        component: ComponentCreator('/docs/v1.7.0/migration-setup/','177'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/mutations/',
        component: ComponentCreator('/docs/v1.7.0/mutations/','2ef'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/network-layer/',
        component: ComponentCreator('/docs/v1.7.0/network-layer/','617'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v1.7.0/new-in-relay-modern/','66b'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/pagination-container/',
        component: ComponentCreator('/docs/v1.7.0/pagination-container/','469'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/persisted-queries/',
        component: ComponentCreator('/docs/v1.7.0/persisted-queries/','79e'),
        exact: true
      },
      {
        path: '/docs/v1.7.0/prerequisites/',
        component: ComponentCreator('/docs/v1.7.0/prerequisites/','07b'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/query-renderer/',
        component: ComponentCreator('/docs/v1.7.0/query-renderer/','a91'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/quick-start-guide/',
        component: ComponentCreator('/docs/v1.7.0/quick-start-guide/','63b'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/refetch-container/',
        component: ComponentCreator('/docs/v1.7.0/refetch-container/','a1c'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/relay-compat/',
        component: ComponentCreator('/docs/v1.7.0/relay-compat/','80c'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/relay-debugging/',
        component: ComponentCreator('/docs/v1.7.0/relay-debugging/','316'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/relay-environment/',
        component: ComponentCreator('/docs/v1.7.0/relay-environment/','297'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/relay-store/',
        component: ComponentCreator('/docs/v1.7.0/relay-store/','3af'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/routing/',
        component: ComponentCreator('/docs/v1.7.0/routing/','8ad'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/runtime-architecture/',
        component: ComponentCreator('/docs/v1.7.0/runtime-architecture/','677'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/subscriptions/',
        component: ComponentCreator('/docs/v1.7.0/subscriptions/','ff9'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/testing-relay-components/',
        component: ComponentCreator('/docs/v1.7.0/testing-relay-components/','d22'),
        exact: true
      },
      {
        path: '/docs/v1.7.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v1.7.0/thinking-in-graphql/','620'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v1.7.0/thinking-in-relay/','ebe'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/type-emission/',
        component: ComponentCreator('/docs/v1.7.0/type-emission/','94d'),
        exact: true
      },
      {
        path: '/docs/v1.7.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v1.7.0/upgrading-setvariables/','d3e'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      },
      {
        path: '/docs/v1.7.0/videos/',
        component: ComponentCreator('/docs/v1.7.0/videos/','19d'),
        exact: true,
        'sidebar': "version-v1.7.0/docs"
      }
    ]
  },
  {
    path: '/docs/v10.0.0/',
    component: ComponentCreator('/docs/v10.0.0/','e01'),
    routes: [
      {
        path: '/docs/v10.0.0/',
        component: ComponentCreator('/docs/v10.0.0/','b72'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.0.0/api-cheatsheet/','3a4'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v10.0.0/architecture-overview/','b3b'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v10.0.0/community-learning-resources/','d4b'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.0.0/compatibility-cheatsheet/','86e'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v10.0.0/compiler-architecture/','f02'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v10.0.0/conversion-playbook/','0e4'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v10.0.0/conversion-scripts/','ed5'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v10.0.0/converting-mutations/','4f6'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/fetch-query/',
        component: ComponentCreator('/docs/v10.0.0/fetch-query/','96c'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/fragment-container/',
        component: ComponentCreator('/docs/v10.0.0/fragment-container/','228'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.0.0/graphql-in-relay/','37f'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.0.0/graphql-server-specification/','dad'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v10.0.0/installation-and-setup/','1fb'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/local-state-management/',
        component: ComponentCreator('/docs/v10.0.0/local-state-management/','fe1'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/migration-setup/',
        component: ComponentCreator('/docs/v10.0.0/migration-setup/','2ce'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/mutations/',
        component: ComponentCreator('/docs/v10.0.0/mutations/','eb1'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/network-layer/',
        component: ComponentCreator('/docs/v10.0.0/network-layer/','9d1'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.0.0/new-in-relay-modern/','244'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/pagination-container/',
        component: ComponentCreator('/docs/v10.0.0/pagination-container/','e18'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v10.0.0/persisted-queries/','078'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/prerequisites/',
        component: ComponentCreator('/docs/v10.0.0/prerequisites/','58a'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/query-renderer/',
        component: ComponentCreator('/docs/v10.0.0/query-renderer/','f11'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v10.0.0/quick-start-guide/','a2c'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/refetch-container/',
        component: ComponentCreator('/docs/v10.0.0/refetch-container/','a88'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/relay-compat/',
        component: ComponentCreator('/docs/v10.0.0/relay-compat/','2fa'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v10.0.0/relay-debugging/','d36'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/relay-environment/',
        component: ComponentCreator('/docs/v10.0.0/relay-environment/','464'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/relay-store/',
        component: ComponentCreator('/docs/v10.0.0/relay-store/','8b7'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/routing/',
        component: ComponentCreator('/docs/v10.0.0/routing/','7b5'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v10.0.0/runtime-architecture/','8ac'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/subscriptions/',
        component: ComponentCreator('/docs/v10.0.0/subscriptions/','0be'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v10.0.0/testing-relay-components/','9bc'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.0.0/thinking-in-graphql/','66d'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.0.0/thinking-in-relay/','327'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/type-emission/',
        component: ComponentCreator('/docs/v10.0.0/type-emission/','425'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      },
      {
        path: '/docs/v10.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.0.0/upgrading-setvariables/','e13'),
        exact: true
      },
      {
        path: '/docs/v10.0.0/videos/',
        component: ComponentCreator('/docs/v10.0.0/videos/','c84'),
        exact: true,
        'sidebar': "version-v10.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v10.0.1/',
    component: ComponentCreator('/docs/v10.0.1/','4d0'),
    routes: [
      {
        path: '/docs/v10.0.1/',
        component: ComponentCreator('/docs/v10.0.1/','d52'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.0.1/api-cheatsheet/','95a'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/architecture-overview/',
        component: ComponentCreator('/docs/v10.0.1/architecture-overview/','667'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/community-learning-resources/',
        component: ComponentCreator('/docs/v10.0.1/community-learning-resources/','329'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.0.1/compatibility-cheatsheet/','4a3'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/compiler-architecture/',
        component: ComponentCreator('/docs/v10.0.1/compiler-architecture/','c8d'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/conversion-playbook/',
        component: ComponentCreator('/docs/v10.0.1/conversion-playbook/','8cd'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/conversion-scripts/',
        component: ComponentCreator('/docs/v10.0.1/conversion-scripts/','fc6'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/converting-mutations/',
        component: ComponentCreator('/docs/v10.0.1/converting-mutations/','784'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/fetch-query/',
        component: ComponentCreator('/docs/v10.0.1/fetch-query/','b2a'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/fragment-container/',
        component: ComponentCreator('/docs/v10.0.1/fragment-container/','c7c'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.0.1/graphql-in-relay/','e27'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.0.1/graphql-server-specification/','606'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/installation-and-setup/',
        component: ComponentCreator('/docs/v10.0.1/installation-and-setup/','1b8'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/local-state-management/',
        component: ComponentCreator('/docs/v10.0.1/local-state-management/','a83'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/migration-setup/',
        component: ComponentCreator('/docs/v10.0.1/migration-setup/','3c1'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/mutations/',
        component: ComponentCreator('/docs/v10.0.1/mutations/','ef2'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/network-layer/',
        component: ComponentCreator('/docs/v10.0.1/network-layer/','648'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.0.1/new-in-relay-modern/','512'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/pagination-container/',
        component: ComponentCreator('/docs/v10.0.1/pagination-container/','91e'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/persisted-queries/',
        component: ComponentCreator('/docs/v10.0.1/persisted-queries/','75d'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/prerequisites/',
        component: ComponentCreator('/docs/v10.0.1/prerequisites/','564'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/query-renderer/',
        component: ComponentCreator('/docs/v10.0.1/query-renderer/','91b'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/quick-start-guide/',
        component: ComponentCreator('/docs/v10.0.1/quick-start-guide/','ed5'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/refetch-container/',
        component: ComponentCreator('/docs/v10.0.1/refetch-container/','05c'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/relay-compat/',
        component: ComponentCreator('/docs/v10.0.1/relay-compat/','51d'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/relay-debugging/',
        component: ComponentCreator('/docs/v10.0.1/relay-debugging/','89c'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/relay-environment/',
        component: ComponentCreator('/docs/v10.0.1/relay-environment/','dd8'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/relay-store/',
        component: ComponentCreator('/docs/v10.0.1/relay-store/','771'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/routing/',
        component: ComponentCreator('/docs/v10.0.1/routing/','ffa'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/runtime-architecture/',
        component: ComponentCreator('/docs/v10.0.1/runtime-architecture/','f79'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/subscriptions/',
        component: ComponentCreator('/docs/v10.0.1/subscriptions/','652'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/testing-relay-components/',
        component: ComponentCreator('/docs/v10.0.1/testing-relay-components/','416'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.0.1/thinking-in-graphql/','a85'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.0.1/thinking-in-relay/','305'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/type-emission/',
        component: ComponentCreator('/docs/v10.0.1/type-emission/','d1a'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      },
      {
        path: '/docs/v10.0.1/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.0.1/upgrading-setvariables/','e6b'),
        exact: true
      },
      {
        path: '/docs/v10.0.1/videos/',
        component: ComponentCreator('/docs/v10.0.1/videos/','961'),
        exact: true,
        'sidebar': "version-v10.0.1/docs"
      }
    ]
  },
  {
    path: '/docs/v10.1.0/',
    component: ComponentCreator('/docs/v10.1.0/','833'),
    routes: [
      {
        path: '/docs/v10.1.0/',
        component: ComponentCreator('/docs/v10.1.0/','80a'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.0/api-cheatsheet/','5c8'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/architecture-overview/',
        component: ComponentCreator('/docs/v10.1.0/architecture-overview/','bfb'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/community-learning-resources/',
        component: ComponentCreator('/docs/v10.1.0/community-learning-resources/','ad7'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.0/compatibility-cheatsheet/','3aa'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/compiler-architecture/',
        component: ComponentCreator('/docs/v10.1.0/compiler-architecture/','078'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/conversion-playbook/',
        component: ComponentCreator('/docs/v10.1.0/conversion-playbook/','783'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/conversion-scripts/',
        component: ComponentCreator('/docs/v10.1.0/conversion-scripts/','cff'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/converting-mutations/',
        component: ComponentCreator('/docs/v10.1.0/converting-mutations/','ddd'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/fetch-query/',
        component: ComponentCreator('/docs/v10.1.0/fetch-query/','fc4'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/fragment-container/',
        component: ComponentCreator('/docs/v10.1.0/fragment-container/','d9c'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.1.0/graphql-in-relay/','eac'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.1.0/graphql-server-specification/','b5f'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/installation-and-setup/',
        component: ComponentCreator('/docs/v10.1.0/installation-and-setup/','951'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/local-state-management/',
        component: ComponentCreator('/docs/v10.1.0/local-state-management/','3c5'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/migration-setup/',
        component: ComponentCreator('/docs/v10.1.0/migration-setup/','899'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/mutations/',
        component: ComponentCreator('/docs/v10.1.0/mutations/','507'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/network-layer/',
        component: ComponentCreator('/docs/v10.1.0/network-layer/','798'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.1.0/new-in-relay-modern/','dd8'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/pagination-container/',
        component: ComponentCreator('/docs/v10.1.0/pagination-container/','48f'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/persisted-queries/',
        component: ComponentCreator('/docs/v10.1.0/persisted-queries/','a23'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/prerequisites/',
        component: ComponentCreator('/docs/v10.1.0/prerequisites/','b2a'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/query-renderer/',
        component: ComponentCreator('/docs/v10.1.0/query-renderer/','1da'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/quick-start-guide/',
        component: ComponentCreator('/docs/v10.1.0/quick-start-guide/','359'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/refetch-container/',
        component: ComponentCreator('/docs/v10.1.0/refetch-container/','9d3'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/relay-compat/',
        component: ComponentCreator('/docs/v10.1.0/relay-compat/','cd7'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/relay-debugging/',
        component: ComponentCreator('/docs/v10.1.0/relay-debugging/','981'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/relay-environment/',
        component: ComponentCreator('/docs/v10.1.0/relay-environment/','68b'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/relay-store/',
        component: ComponentCreator('/docs/v10.1.0/relay-store/','68e'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/routing/',
        component: ComponentCreator('/docs/v10.1.0/routing/','b96'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/runtime-architecture/',
        component: ComponentCreator('/docs/v10.1.0/runtime-architecture/','f90'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/subscriptions/',
        component: ComponentCreator('/docs/v10.1.0/subscriptions/','6ab'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/testing-relay-components/',
        component: ComponentCreator('/docs/v10.1.0/testing-relay-components/','77f'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.1.0/thinking-in-graphql/','9fe'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.1.0/thinking-in-relay/','93d'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/type-emission/',
        component: ComponentCreator('/docs/v10.1.0/type-emission/','983'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      },
      {
        path: '/docs/v10.1.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.1.0/upgrading-setvariables/','4a9'),
        exact: true
      },
      {
        path: '/docs/v10.1.0/videos/',
        component: ComponentCreator('/docs/v10.1.0/videos/','e1f'),
        exact: true,
        'sidebar': "version-v10.1.0/docs"
      }
    ]
  },
  {
    path: '/docs/v10.1.1/',
    component: ComponentCreator('/docs/v10.1.1/','c56'),
    routes: [
      {
        path: '/docs/v10.1.1/',
        component: ComponentCreator('/docs/v10.1.1/','826'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.1/api-cheatsheet/','503'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/architecture-overview/',
        component: ComponentCreator('/docs/v10.1.1/architecture-overview/','080'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/community-learning-resources/',
        component: ComponentCreator('/docs/v10.1.1/community-learning-resources/','bf2'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.1/compatibility-cheatsheet/','b5f'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/compiler-architecture/',
        component: ComponentCreator('/docs/v10.1.1/compiler-architecture/','a19'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/conversion-playbook/',
        component: ComponentCreator('/docs/v10.1.1/conversion-playbook/','86e'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/conversion-scripts/',
        component: ComponentCreator('/docs/v10.1.1/conversion-scripts/','f36'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/converting-mutations/',
        component: ComponentCreator('/docs/v10.1.1/converting-mutations/','28a'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/fetch-query/',
        component: ComponentCreator('/docs/v10.1.1/fetch-query/','21a'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/fragment-container/',
        component: ComponentCreator('/docs/v10.1.1/fragment-container/','0ec'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.1.1/graphql-in-relay/','b41'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.1.1/graphql-server-specification/','b98'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/installation-and-setup/',
        component: ComponentCreator('/docs/v10.1.1/installation-and-setup/','1fc'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/local-state-management/',
        component: ComponentCreator('/docs/v10.1.1/local-state-management/','414'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/migration-setup/',
        component: ComponentCreator('/docs/v10.1.1/migration-setup/','11f'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/mutations/',
        component: ComponentCreator('/docs/v10.1.1/mutations/','0c7'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/network-layer/',
        component: ComponentCreator('/docs/v10.1.1/network-layer/','9cb'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.1.1/new-in-relay-modern/','80c'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/pagination-container/',
        component: ComponentCreator('/docs/v10.1.1/pagination-container/','4ed'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/persisted-queries/',
        component: ComponentCreator('/docs/v10.1.1/persisted-queries/','c83'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/prerequisites/',
        component: ComponentCreator('/docs/v10.1.1/prerequisites/','187'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/query-renderer/',
        component: ComponentCreator('/docs/v10.1.1/query-renderer/','9cd'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/quick-start-guide/',
        component: ComponentCreator('/docs/v10.1.1/quick-start-guide/','3a3'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/refetch-container/',
        component: ComponentCreator('/docs/v10.1.1/refetch-container/','bfa'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/relay-compat/',
        component: ComponentCreator('/docs/v10.1.1/relay-compat/','11e'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/relay-debugging/',
        component: ComponentCreator('/docs/v10.1.1/relay-debugging/','a40'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/relay-environment/',
        component: ComponentCreator('/docs/v10.1.1/relay-environment/','18b'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/relay-store/',
        component: ComponentCreator('/docs/v10.1.1/relay-store/','9ea'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/routing/',
        component: ComponentCreator('/docs/v10.1.1/routing/','aac'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/runtime-architecture/',
        component: ComponentCreator('/docs/v10.1.1/runtime-architecture/','a06'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/subscriptions/',
        component: ComponentCreator('/docs/v10.1.1/subscriptions/','9d7'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/testing-relay-components/',
        component: ComponentCreator('/docs/v10.1.1/testing-relay-components/','fdd'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.1.1/thinking-in-graphql/','c03'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.1.1/thinking-in-relay/','864'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/type-emission/',
        component: ComponentCreator('/docs/v10.1.1/type-emission/','b8a'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      },
      {
        path: '/docs/v10.1.1/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.1.1/upgrading-setvariables/','bbd'),
        exact: true
      },
      {
        path: '/docs/v10.1.1/videos/',
        component: ComponentCreator('/docs/v10.1.1/videos/','0b5'),
        exact: true,
        'sidebar': "version-v10.1.1/docs"
      }
    ]
  },
  {
    path: '/docs/v10.1.2/',
    component: ComponentCreator('/docs/v10.1.2/','08c'),
    routes: [
      {
        path: '/docs/v10.1.2/',
        component: ComponentCreator('/docs/v10.1.2/','2a5'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.2/api-cheatsheet/','3a9'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/architecture-overview/',
        component: ComponentCreator('/docs/v10.1.2/architecture-overview/','aca'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/community-learning-resources/',
        component: ComponentCreator('/docs/v10.1.2/community-learning-resources/','9cb'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.2/compatibility-cheatsheet/','9fd'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/compiler-architecture/',
        component: ComponentCreator('/docs/v10.1.2/compiler-architecture/','ded'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/conversion-playbook/',
        component: ComponentCreator('/docs/v10.1.2/conversion-playbook/','f81'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/conversion-scripts/',
        component: ComponentCreator('/docs/v10.1.2/conversion-scripts/','f01'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/converting-mutations/',
        component: ComponentCreator('/docs/v10.1.2/converting-mutations/','a77'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/fetch-query/',
        component: ComponentCreator('/docs/v10.1.2/fetch-query/','150'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/fragment-container/',
        component: ComponentCreator('/docs/v10.1.2/fragment-container/','045'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.1.2/graphql-in-relay/','738'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.1.2/graphql-server-specification/','57d'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/installation-and-setup/',
        component: ComponentCreator('/docs/v10.1.2/installation-and-setup/','553'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/local-state-management/',
        component: ComponentCreator('/docs/v10.1.2/local-state-management/','00f'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/migration-setup/',
        component: ComponentCreator('/docs/v10.1.2/migration-setup/','e94'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/mutations/',
        component: ComponentCreator('/docs/v10.1.2/mutations/','063'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/network-layer/',
        component: ComponentCreator('/docs/v10.1.2/network-layer/','531'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.1.2/new-in-relay-modern/','896'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/pagination-container/',
        component: ComponentCreator('/docs/v10.1.2/pagination-container/','ce0'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/persisted-queries/',
        component: ComponentCreator('/docs/v10.1.2/persisted-queries/','08b'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/prerequisites/',
        component: ComponentCreator('/docs/v10.1.2/prerequisites/','e8c'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/query-renderer/',
        component: ComponentCreator('/docs/v10.1.2/query-renderer/','a05'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/quick-start-guide/',
        component: ComponentCreator('/docs/v10.1.2/quick-start-guide/','8c5'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/refetch-container/',
        component: ComponentCreator('/docs/v10.1.2/refetch-container/','fe1'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/relay-compat/',
        component: ComponentCreator('/docs/v10.1.2/relay-compat/','d6b'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/relay-debugging/',
        component: ComponentCreator('/docs/v10.1.2/relay-debugging/','410'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/relay-environment/',
        component: ComponentCreator('/docs/v10.1.2/relay-environment/','e5b'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/relay-store/',
        component: ComponentCreator('/docs/v10.1.2/relay-store/','ce7'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/routing/',
        component: ComponentCreator('/docs/v10.1.2/routing/','d08'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/runtime-architecture/',
        component: ComponentCreator('/docs/v10.1.2/runtime-architecture/','c9a'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/subscriptions/',
        component: ComponentCreator('/docs/v10.1.2/subscriptions/','b6a'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/testing-relay-components/',
        component: ComponentCreator('/docs/v10.1.2/testing-relay-components/','b1e'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.1.2/thinking-in-graphql/','1e6'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.1.2/thinking-in-relay/','df7'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/type-emission/',
        component: ComponentCreator('/docs/v10.1.2/type-emission/','1bc'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      },
      {
        path: '/docs/v10.1.2/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.1.2/upgrading-setvariables/','202'),
        exact: true
      },
      {
        path: '/docs/v10.1.2/videos/',
        component: ComponentCreator('/docs/v10.1.2/videos/','cc4'),
        exact: true,
        'sidebar': "version-v10.1.2/docs"
      }
    ]
  },
  {
    path: '/docs/v10.1.3/',
    component: ComponentCreator('/docs/v10.1.3/','da6'),
    routes: [
      {
        path: '/docs/v10.1.3/',
        component: ComponentCreator('/docs/v10.1.3/','013'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/api-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.3/api-cheatsheet/','9a9'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/architecture-overview/',
        component: ComponentCreator('/docs/v10.1.3/architecture-overview/','3c3'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/community-learning-resources/',
        component: ComponentCreator('/docs/v10.1.3/community-learning-resources/','ba7'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v10.1.3/compatibility-cheatsheet/','df2'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/compiler-architecture/',
        component: ComponentCreator('/docs/v10.1.3/compiler-architecture/','042'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/conversion-playbook/',
        component: ComponentCreator('/docs/v10.1.3/conversion-playbook/','d21'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/conversion-scripts/',
        component: ComponentCreator('/docs/v10.1.3/conversion-scripts/','e36'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/converting-mutations/',
        component: ComponentCreator('/docs/v10.1.3/converting-mutations/','36e'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/fetch-query/',
        component: ComponentCreator('/docs/v10.1.3/fetch-query/','bba'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/fragment-container/',
        component: ComponentCreator('/docs/v10.1.3/fragment-container/','350'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/graphql-in-relay/',
        component: ComponentCreator('/docs/v10.1.3/graphql-in-relay/','003'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/graphql-server-specification/',
        component: ComponentCreator('/docs/v10.1.3/graphql-server-specification/','7cb'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/installation-and-setup/',
        component: ComponentCreator('/docs/v10.1.3/installation-and-setup/','6b7'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/local-state-management/',
        component: ComponentCreator('/docs/v10.1.3/local-state-management/','bbc'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/migration-setup/',
        component: ComponentCreator('/docs/v10.1.3/migration-setup/','986'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/mutations/',
        component: ComponentCreator('/docs/v10.1.3/mutations/','c7e'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/network-layer/',
        component: ComponentCreator('/docs/v10.1.3/network-layer/','289'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/new-in-relay-modern/',
        component: ComponentCreator('/docs/v10.1.3/new-in-relay-modern/','e09'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/pagination-container/',
        component: ComponentCreator('/docs/v10.1.3/pagination-container/','cc8'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/persisted-queries/',
        component: ComponentCreator('/docs/v10.1.3/persisted-queries/','c70'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/prerequisites/',
        component: ComponentCreator('/docs/v10.1.3/prerequisites/','f29'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/query-renderer/',
        component: ComponentCreator('/docs/v10.1.3/query-renderer/','c8f'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/quick-start-guide/',
        component: ComponentCreator('/docs/v10.1.3/quick-start-guide/','8ed'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/refetch-container/',
        component: ComponentCreator('/docs/v10.1.3/refetch-container/','242'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/relay-compat/',
        component: ComponentCreator('/docs/v10.1.3/relay-compat/','b8f'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/relay-debugging/',
        component: ComponentCreator('/docs/v10.1.3/relay-debugging/','0cb'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/relay-environment/',
        component: ComponentCreator('/docs/v10.1.3/relay-environment/','664'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/relay-store/',
        component: ComponentCreator('/docs/v10.1.3/relay-store/','473'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/routing/',
        component: ComponentCreator('/docs/v10.1.3/routing/','914'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/runtime-architecture/',
        component: ComponentCreator('/docs/v10.1.3/runtime-architecture/','1f3'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/subscriptions/',
        component: ComponentCreator('/docs/v10.1.3/subscriptions/','e51'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/testing-relay-components/',
        component: ComponentCreator('/docs/v10.1.3/testing-relay-components/','76a'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/thinking-in-graphql/',
        component: ComponentCreator('/docs/v10.1.3/thinking-in-graphql/','52b'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/thinking-in-relay/',
        component: ComponentCreator('/docs/v10.1.3/thinking-in-relay/','9fd'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/type-emission/',
        component: ComponentCreator('/docs/v10.1.3/type-emission/','450'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      },
      {
        path: '/docs/v10.1.3/upgrading-setvariables/',
        component: ComponentCreator('/docs/v10.1.3/upgrading-setvariables/','7ba'),
        exact: true
      },
      {
        path: '/docs/v10.1.3/videos/',
        component: ComponentCreator('/docs/v10.1.3/videos/','353'),
        exact: true,
        'sidebar': "version-v10.1.3/docs"
      }
    ]
  },
  {
    path: '/docs/v11.0.0/',
    component: ComponentCreator('/docs/v11.0.0/','f1b'),
    routes: [
      {
        path: '/docs/v11.0.0/',
        component: ComponentCreator('/docs/v11.0.0/','edf'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/commit-mutation/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/commit-mutation/','32b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/entrypoint-container/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/entrypoint-container/','cb7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/fetch-query/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/fetch-query/','c2b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/graphql-and-directives/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/graphql-and-directives/','986'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/legacy-apis/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/legacy-apis/','0b1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/load-entrypoint/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/load-entrypoint/','bb8'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/load-query/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/load-query/','6e2'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/relay-environment-provider/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/relay-environment-provider/','49b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/request-subscription/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/request-subscription/','ad2'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/store/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/store/','f65'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/types/CacheConfig/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/CacheConfig/','75c'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/types/Disposable/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/Disposable/','345'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/GraphQLSubscriptionConfig/','8cf'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/types/MutationConfig/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/MutationConfig/','bca'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/SelectorStoreUpdater/','950'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/types/UploadableMap/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/types/UploadableMap/','e78'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-entrypoint-loader/','224'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-fragment/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-fragment/','008'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-lazy-load-query/','79c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-mutation/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-mutation/','388'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-pagination-fragment/','f26'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-preloaded-query/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-preloaded-query/','5b1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-query-loader/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-query-loader/','729'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-refetchable-fragment/','1e6'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-relay-environment/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-relay-environment/','490'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/api-reference/use-subscription/',
        component: ComponentCreator('/docs/v11.0.0/api-reference/use-subscription/','f7c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v11.0.0/community-learning-resources/','709'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/docs/v11.0.0/debugging/declarative-mutation-directives/','6bc'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/docs/v11.0.0/debugging/inconsistent-typename-error/','eb7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/debugging/relay-devtools/',
        component: ComponentCreator('/docs/v11.0.0/debugging/relay-devtools/','ed5'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/getting-started/installation-and-setup/',
        component: ComponentCreator('/docs/v11.0.0/getting-started/installation-and-setup/','f5e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/getting-started/prerequisites/',
        component: ComponentCreator('/docs/v11.0.0/getting-started/prerequisites/','2f8'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/getting-started/step-by-step-guide/',
        component: ComponentCreator('/docs/v11.0.0/getting-started/step-by-step-guide/','251'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/glossary/',
        component: ComponentCreator('/docs/v11.0.0/glossary/','839'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/','6dc'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/accessing-data-without-react/prefetching-queries/','9c5'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-fragments/','b5d'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/accessing-data-without-react/reading-queries/','0e4'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/accessing-data-without-react/retaining-queries/','7e1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/','c4e'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/advanced-pagination/','0a5'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/connections/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/connections/','af9'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/pagination/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/pagination/','43d'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/refetching-connections/','70f'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/rendering-connections/','266'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/streaming-pagination/','3d7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/list-data/updating-connections/','8a8'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/','8ed'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/OssAvoidSuspenseNote/','5a5'),
        exact: true
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/refetching-fragments-with-different-data/','d7d'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/refetching-queries-with-different-data/','f35'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/refreshing-fragments/','79a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/refetching/refreshing-queries/','777'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/environment/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/environment/','418'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/error-states/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/error-states/','736'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/fragments/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/fragments/','ed7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/loading-states/','90f'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/queries/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/queries/','30e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/rendering/variables/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/rendering/variables/','761'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/','563'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/availability-of-data/','823'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/fetch-policies/','0ab'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/','009'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/presence-of-data/','edf'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/','ecc'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/reusing-cached-data/staleness-of-data/','7c7'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/updating-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/updating-data/','a9e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/updating-data/client-only-data/','a8a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/updating-data/graphql-mutations/','e81'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/updating-data/graphql-subscriptions/','016'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/updating-data/local-data-updates/','f8e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guided-tour/workflow/',
        component: ComponentCreator('/docs/v11.0.0/guided-tour/workflow/','265'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/client-schema-extensions/',
        component: ComponentCreator('/docs/v11.0.0/guides/client-schema-extensions/','6a9'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/compiler/',
        component: ComponentCreator('/docs/v11.0.0/guides/compiler/','2cf'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/graphql-server-specification/',
        component: ComponentCreator('/docs/v11.0.0/guides/graphql-server-specification/','10e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/network-layer/',
        component: ComponentCreator('/docs/v11.0.0/guides/network-layer/','3d0'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/persisted-queries/',
        component: ComponentCreator('/docs/v11.0.0/guides/persisted-queries/','29b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/testing-relay-components/',
        component: ComponentCreator('/docs/v11.0.0/guides/testing-relay-components/','a6a'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/','1ef'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/guides/type-emission/',
        component: ComponentCreator('/docs/v11.0.0/guides/type-emission/','08b'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/migration-and-compatibility/',
        component: ComponentCreator('/docs/v11.0.0/migration-and-compatibility/','cd5'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/docs/v11.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','28c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/','00e'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/architecture-overview/','55d'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/compiler-architecture/','65c'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/runtime-architecture/','7a8'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/thinking-in-graphql/','293'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/thinking-in-relay/','a78'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      },
      {
        path: '/docs/v11.0.0/principles-and-architecture/videos/',
        component: ComponentCreator('/docs/v11.0.0/principles-and-architecture/videos/','6e1'),
        exact: true,
        'sidebar': "version-v11.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v12.0.0/',
    component: ComponentCreator('/docs/v12.0.0/','031'),
    routes: [
      {
        path: '/docs/v12.0.0/',
        component: ComponentCreator('/docs/v12.0.0/','9f8'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/commit-mutation/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/commit-mutation/','c6a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/entrypoint-container/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/entrypoint-container/','27e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/fetch-query/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/fetch-query/','9d2'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/graphql-and-directives/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/graphql-and-directives/','6fc'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/legacy-apis/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/legacy-apis/','98d'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/load-entrypoint/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/load-entrypoint/','621'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/load-query/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/load-query/','a94'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/relay-environment-provider/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/relay-environment-provider/','221'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/request-subscription/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/request-subscription/','07b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/store/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/store/','e80'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/types/CacheConfig/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/CacheConfig/','c69'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/types/Disposable/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/Disposable/','4a5'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/GraphQLSubscriptionConfig/','34d'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/types/MutationConfig/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/MutationConfig/','ea4'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/SelectorStoreUpdater/','296'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/types/UploadableMap/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/types/UploadableMap/','7ee'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-entrypoint-loader/','934'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-fragment/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-fragment/','ad0'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-lazy-load-query/','358'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-mutation/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-mutation/','47b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-pagination-fragment/','176'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-preloaded-query/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-preloaded-query/','cf7'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-query-loader/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-query-loader/','e24'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-refetchable-fragment/','74b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-relay-environment/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-relay-environment/','a4e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/api-reference/use-subscription/',
        component: ComponentCreator('/docs/v12.0.0/api-reference/use-subscription/','efd'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v12.0.0/community-learning-resources/','f96'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/docs/v12.0.0/debugging/declarative-mutation-directives/','966'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/docs/v12.0.0/debugging/inconsistent-typename-error/','317'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/debugging/relay-devtools/',
        component: ComponentCreator('/docs/v12.0.0/debugging/relay-devtools/','ede'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/getting-started/installation-and-setup/',
        component: ComponentCreator('/docs/v12.0.0/getting-started/installation-and-setup/','216'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/getting-started/prerequisites/',
        component: ComponentCreator('/docs/v12.0.0/getting-started/prerequisites/','c5b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/getting-started/step-by-step-guide/',
        component: ComponentCreator('/docs/v12.0.0/getting-started/step-by-step-guide/','157'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/glossary/',
        component: ComponentCreator('/docs/v12.0.0/glossary/','ac6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/','739'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/accessing-data-without-react/prefetching-queries/','016'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-fragments/','421'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/accessing-data-without-react/reading-queries/','5c7'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/accessing-data-without-react/retaining-queries/','010'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/accessing-data-without-react/subscribing-to-queries/','706'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/advanced-pagination/','3c9'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/connections/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/connections/','b0a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/pagination/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/pagination/','a76'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/refetching-connections/','8c8'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/rendering-connections/','bae'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/streaming-pagination/','ff4'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/list-data/updating-connections/','238'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/','be0'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote/','2b2'),
        exact: true
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/refetching-fragments-with-different-data/','234'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/','01b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/','6f3'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/refetching/refreshing-queries/','c11'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/environment/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/environment/','ce7'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/error-states/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/error-states/','cb4'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/fragments/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/fragments/','91f'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/loading-states/','ffe'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/queries/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/queries/','c8b'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/rendering/variables/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/rendering/variables/','287'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/','bbd'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/availability-of-data/','794'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/fetch-policies/','fda'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/','b5a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/presence-of-data/','446'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/','1cc'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/reusing-cached-data/staleness-of-data/','698'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/updating-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/updating-data/','6b6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/updating-data/client-only-data/','813'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/updating-data/graphql-mutations/','d04'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/','1a8'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/updating-data/local-data-updates/','d68'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guided-tour/workflow/',
        component: ComponentCreator('/docs/v12.0.0/guided-tour/workflow/','2f6'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/client-schema-extensions/',
        component: ComponentCreator('/docs/v12.0.0/guides/client-schema-extensions/','2bb'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/compiler/',
        component: ComponentCreator('/docs/v12.0.0/guides/compiler/','d2c'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/graphql-server-specification/',
        component: ComponentCreator('/docs/v12.0.0/guides/graphql-server-specification/','b72'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/network-layer/',
        component: ComponentCreator('/docs/v12.0.0/guides/network-layer/','39c'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/persisted-queries/',
        component: ComponentCreator('/docs/v12.0.0/guides/persisted-queries/','df1'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/testing-relay-components/',
        component: ComponentCreator('/docs/v12.0.0/guides/testing-relay-components/','505'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/docs/v12.0.0/guides/testing-relay-with-preloaded-queries/','4fc'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/guides/type-emission/',
        component: ComponentCreator('/docs/v12.0.0/guides/type-emission/','8a4'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/migration-and-compatibility/',
        component: ComponentCreator('/docs/v12.0.0/migration-and-compatibility/','bbd'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/docs/v12.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','1e0'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/docs/v12.0.0/migration-and-compatibility/suspense-compatibility/','ba1'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/architecture-overview/','6bc'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/compiler-architecture/','68a'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/runtime-architecture/','f18'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/thinking-in-graphql/','2d2'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/thinking-in-relay/','de4'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      },
      {
        path: '/docs/v12.0.0/principles-and-architecture/videos/',
        component: ComponentCreator('/docs/v12.0.0/principles-and-architecture/videos/','28e'),
        exact: true,
        'sidebar': "version-v12.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v2.0.0/',
    component: ComponentCreator('/docs/v2.0.0/','df7'),
    routes: [
      {
        path: '/docs/v2.0.0/',
        component: ComponentCreator('/docs/v2.0.0/','1d2'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v2.0.0/api-cheatsheet/','b90'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v2.0.0/architecture-overview/','062'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v2.0.0/community-learning-resources/','c44'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v2.0.0/compatibility-cheatsheet/','998'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v2.0.0/compiler-architecture/','a7c'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v2.0.0/conversion-playbook/','b8d'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v2.0.0/conversion-scripts/','917'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v2.0.0/converting-mutations/','2fc'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/fetch-query/',
        component: ComponentCreator('/docs/v2.0.0/fetch-query/','1b1'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/fragment-container/',
        component: ComponentCreator('/docs/v2.0.0/fragment-container/','998'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v2.0.0/graphql-in-relay/','144'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v2.0.0/graphql-server-specification/','12e'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v2.0.0/installation-and-setup/','bde'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/local-state-management/',
        component: ComponentCreator('/docs/v2.0.0/local-state-management/','142'),
        exact: true
      },
      {
        path: '/docs/v2.0.0/migration-setup/',
        component: ComponentCreator('/docs/v2.0.0/migration-setup/','674'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/mutations/',
        component: ComponentCreator('/docs/v2.0.0/mutations/','b62'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/network-layer/',
        component: ComponentCreator('/docs/v2.0.0/network-layer/','8fe'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v2.0.0/new-in-relay-modern/','808'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/pagination-container/',
        component: ComponentCreator('/docs/v2.0.0/pagination-container/','6f5'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v2.0.0/persisted-queries/','06b'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/prerequisites/',
        component: ComponentCreator('/docs/v2.0.0/prerequisites/','e11'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/query-renderer/',
        component: ComponentCreator('/docs/v2.0.0/query-renderer/','a89'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v2.0.0/quick-start-guide/','613'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/refetch-container/',
        component: ComponentCreator('/docs/v2.0.0/refetch-container/','90d'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/relay-compat/',
        component: ComponentCreator('/docs/v2.0.0/relay-compat/','228'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v2.0.0/relay-debugging/','174'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/relay-environment/',
        component: ComponentCreator('/docs/v2.0.0/relay-environment/','fd1'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/relay-store/',
        component: ComponentCreator('/docs/v2.0.0/relay-store/','3f2'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/routing/',
        component: ComponentCreator('/docs/v2.0.0/routing/','b96'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v2.0.0/runtime-architecture/','db6'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/subscriptions/',
        component: ComponentCreator('/docs/v2.0.0/subscriptions/','2c3'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v2.0.0/testing-relay-components/','ff0'),
        exact: true
      },
      {
        path: '/docs/v2.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v2.0.0/thinking-in-graphql/','ff7'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v2.0.0/thinking-in-relay/','55b'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/type-emission/',
        component: ComponentCreator('/docs/v2.0.0/type-emission/','332'),
        exact: true
      },
      {
        path: '/docs/v2.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v2.0.0/upgrading-setvariables/','0f8'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      },
      {
        path: '/docs/v2.0.0/videos/',
        component: ComponentCreator('/docs/v2.0.0/videos/','8e9'),
        exact: true,
        'sidebar': "version-v2.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v3.0.0/',
    component: ComponentCreator('/docs/v3.0.0/','773'),
    routes: [
      {
        path: '/docs/v3.0.0/',
        component: ComponentCreator('/docs/v3.0.0/','b3e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v3.0.0/api-cheatsheet/','536'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v3.0.0/architecture-overview/','d47'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v3.0.0/community-learning-resources/','c81'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v3.0.0/compatibility-cheatsheet/','24e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v3.0.0/compiler-architecture/','870'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v3.0.0/conversion-playbook/','6e2'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v3.0.0/conversion-scripts/','820'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v3.0.0/converting-mutations/','c0e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/fetch-query/',
        component: ComponentCreator('/docs/v3.0.0/fetch-query/','2bc'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/fragment-container/',
        component: ComponentCreator('/docs/v3.0.0/fragment-container/','935'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v3.0.0/graphql-in-relay/','5a5'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v3.0.0/graphql-server-specification/','06e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v3.0.0/installation-and-setup/','05c'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/local-state-management/',
        component: ComponentCreator('/docs/v3.0.0/local-state-management/','1ef'),
        exact: true
      },
      {
        path: '/docs/v3.0.0/migration-setup/',
        component: ComponentCreator('/docs/v3.0.0/migration-setup/','9b5'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/mutations/',
        component: ComponentCreator('/docs/v3.0.0/mutations/','160'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/network-layer/',
        component: ComponentCreator('/docs/v3.0.0/network-layer/','119'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v3.0.0/new-in-relay-modern/','d87'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/pagination-container/',
        component: ComponentCreator('/docs/v3.0.0/pagination-container/','982'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v3.0.0/persisted-queries/','248'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/prerequisites/',
        component: ComponentCreator('/docs/v3.0.0/prerequisites/','961'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/query-renderer/',
        component: ComponentCreator('/docs/v3.0.0/query-renderer/','85e'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v3.0.0/quick-start-guide/','681'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/refetch-container/',
        component: ComponentCreator('/docs/v3.0.0/refetch-container/','c96'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/relay-compat/',
        component: ComponentCreator('/docs/v3.0.0/relay-compat/','82c'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v3.0.0/relay-debugging/','420'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/relay-environment/',
        component: ComponentCreator('/docs/v3.0.0/relay-environment/','83d'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/relay-store/',
        component: ComponentCreator('/docs/v3.0.0/relay-store/','806'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/routing/',
        component: ComponentCreator('/docs/v3.0.0/routing/','036'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v3.0.0/runtime-architecture/','3eb'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/subscriptions/',
        component: ComponentCreator('/docs/v3.0.0/subscriptions/','4f5'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v3.0.0/testing-relay-components/','ad3'),
        exact: true
      },
      {
        path: '/docs/v3.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v3.0.0/thinking-in-graphql/','70f'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v3.0.0/thinking-in-relay/','b8a'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/type-emission/',
        component: ComponentCreator('/docs/v3.0.0/type-emission/','5db'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v3.0.0/upgrading-setvariables/','6c8'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      },
      {
        path: '/docs/v3.0.0/videos/',
        component: ComponentCreator('/docs/v3.0.0/videos/','575'),
        exact: true,
        'sidebar': "version-v3.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v4.0.0/',
    component: ComponentCreator('/docs/v4.0.0/','704'),
    routes: [
      {
        path: '/docs/v4.0.0/',
        component: ComponentCreator('/docs/v4.0.0/','2ec'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v4.0.0/api-cheatsheet/','585'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v4.0.0/architecture-overview/','764'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v4.0.0/community-learning-resources/','218'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v4.0.0/compatibility-cheatsheet/','45d'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v4.0.0/compiler-architecture/','b7f'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v4.0.0/conversion-playbook/','214'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v4.0.0/conversion-scripts/','525'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v4.0.0/converting-mutations/','2b3'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/fetch-query/',
        component: ComponentCreator('/docs/v4.0.0/fetch-query/','856'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/fragment-container/',
        component: ComponentCreator('/docs/v4.0.0/fragment-container/','221'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v4.0.0/graphql-in-relay/','56d'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v4.0.0/graphql-server-specification/','7ba'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v4.0.0/installation-and-setup/','5da'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/local-state-management/',
        component: ComponentCreator('/docs/v4.0.0/local-state-management/','902'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/migration-setup/',
        component: ComponentCreator('/docs/v4.0.0/migration-setup/','1a2'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/mutations/',
        component: ComponentCreator('/docs/v4.0.0/mutations/','81f'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/network-layer/',
        component: ComponentCreator('/docs/v4.0.0/network-layer/','661'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v4.0.0/new-in-relay-modern/','90f'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/pagination-container/',
        component: ComponentCreator('/docs/v4.0.0/pagination-container/','ff7'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v4.0.0/persisted-queries/','5ff'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/prerequisites/',
        component: ComponentCreator('/docs/v4.0.0/prerequisites/','dd4'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/query-renderer/',
        component: ComponentCreator('/docs/v4.0.0/query-renderer/','b27'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v4.0.0/quick-start-guide/','bc4'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/refetch-container/',
        component: ComponentCreator('/docs/v4.0.0/refetch-container/','bb8'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/relay-compat/',
        component: ComponentCreator('/docs/v4.0.0/relay-compat/','fed'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v4.0.0/relay-debugging/','d5e'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/relay-environment/',
        component: ComponentCreator('/docs/v4.0.0/relay-environment/','f9c'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/relay-store/',
        component: ComponentCreator('/docs/v4.0.0/relay-store/','93b'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/routing/',
        component: ComponentCreator('/docs/v4.0.0/routing/','aa0'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v4.0.0/runtime-architecture/','634'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/subscriptions/',
        component: ComponentCreator('/docs/v4.0.0/subscriptions/','1f2'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v4.0.0/testing-relay-components/','7f4'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v4.0.0/thinking-in-graphql/','ea2'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v4.0.0/thinking-in-relay/','f8c'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/type-emission/',
        component: ComponentCreator('/docs/v4.0.0/type-emission/','eb7'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      },
      {
        path: '/docs/v4.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v4.0.0/upgrading-setvariables/','967'),
        exact: true
      },
      {
        path: '/docs/v4.0.0/videos/',
        component: ComponentCreator('/docs/v4.0.0/videos/','e88'),
        exact: true,
        'sidebar': "version-v4.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v5.0.0/',
    component: ComponentCreator('/docs/v5.0.0/','07f'),
    routes: [
      {
        path: '/docs/v5.0.0/',
        component: ComponentCreator('/docs/v5.0.0/','b6e'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v5.0.0/api-cheatsheet/','aec'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v5.0.0/architecture-overview/','8ac'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v5.0.0/community-learning-resources/','243'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v5.0.0/compatibility-cheatsheet/','795'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v5.0.0/compiler-architecture/','c12'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v5.0.0/conversion-playbook/','c15'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v5.0.0/conversion-scripts/','1c3'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v5.0.0/converting-mutations/','d9a'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/fetch-query/',
        component: ComponentCreator('/docs/v5.0.0/fetch-query/','d11'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/fragment-container/',
        component: ComponentCreator('/docs/v5.0.0/fragment-container/','44e'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v5.0.0/graphql-in-relay/','09b'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v5.0.0/graphql-server-specification/','e45'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v5.0.0/installation-and-setup/','0cb'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/local-state-management/',
        component: ComponentCreator('/docs/v5.0.0/local-state-management/','914'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/migration-setup/',
        component: ComponentCreator('/docs/v5.0.0/migration-setup/','ba5'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/mutations/',
        component: ComponentCreator('/docs/v5.0.0/mutations/','4e8'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/network-layer/',
        component: ComponentCreator('/docs/v5.0.0/network-layer/','dee'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v5.0.0/new-in-relay-modern/','a02'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/pagination-container/',
        component: ComponentCreator('/docs/v5.0.0/pagination-container/','12d'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v5.0.0/persisted-queries/','b07'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/prerequisites/',
        component: ComponentCreator('/docs/v5.0.0/prerequisites/','109'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/query-renderer/',
        component: ComponentCreator('/docs/v5.0.0/query-renderer/','43d'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v5.0.0/quick-start-guide/','e03'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/refetch-container/',
        component: ComponentCreator('/docs/v5.0.0/refetch-container/','489'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/relay-compat/',
        component: ComponentCreator('/docs/v5.0.0/relay-compat/','94b'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v5.0.0/relay-debugging/','c4f'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/relay-environment/',
        component: ComponentCreator('/docs/v5.0.0/relay-environment/','396'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/relay-store/',
        component: ComponentCreator('/docs/v5.0.0/relay-store/','f9a'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/routing/',
        component: ComponentCreator('/docs/v5.0.0/routing/','b2e'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v5.0.0/runtime-architecture/','f52'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/subscriptions/',
        component: ComponentCreator('/docs/v5.0.0/subscriptions/','f41'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v5.0.0/testing-relay-components/','6ff'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v5.0.0/thinking-in-graphql/','e1e'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v5.0.0/thinking-in-relay/','f2b'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/type-emission/',
        component: ComponentCreator('/docs/v5.0.0/type-emission/','5f8'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      },
      {
        path: '/docs/v5.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v5.0.0/upgrading-setvariables/','81e'),
        exact: true
      },
      {
        path: '/docs/v5.0.0/videos/',
        component: ComponentCreator('/docs/v5.0.0/videos/','3d3'),
        exact: true,
        'sidebar': "version-v5.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v6.0.0/',
    component: ComponentCreator('/docs/v6.0.0/','8e0'),
    routes: [
      {
        path: '/docs/v6.0.0/',
        component: ComponentCreator('/docs/v6.0.0/','4b4'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v6.0.0/api-cheatsheet/','82d'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v6.0.0/architecture-overview/','467'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v6.0.0/community-learning-resources/','717'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v6.0.0/compatibility-cheatsheet/','367'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v6.0.0/compiler-architecture/','2de'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v6.0.0/conversion-playbook/','322'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v6.0.0/conversion-scripts/','aac'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v6.0.0/converting-mutations/','5ab'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/fetch-query/',
        component: ComponentCreator('/docs/v6.0.0/fetch-query/','440'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/fragment-container/',
        component: ComponentCreator('/docs/v6.0.0/fragment-container/','d90'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v6.0.0/graphql-in-relay/','2da'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v6.0.0/graphql-server-specification/','ec6'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v6.0.0/installation-and-setup/','0c6'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/local-state-management/',
        component: ComponentCreator('/docs/v6.0.0/local-state-management/','2e1'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/migration-setup/',
        component: ComponentCreator('/docs/v6.0.0/migration-setup/','e6e'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/mutations/',
        component: ComponentCreator('/docs/v6.0.0/mutations/','1fa'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/network-layer/',
        component: ComponentCreator('/docs/v6.0.0/network-layer/','046'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v6.0.0/new-in-relay-modern/','c08'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/pagination-container/',
        component: ComponentCreator('/docs/v6.0.0/pagination-container/','844'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v6.0.0/persisted-queries/','976'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/prerequisites/',
        component: ComponentCreator('/docs/v6.0.0/prerequisites/','c65'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/query-renderer/',
        component: ComponentCreator('/docs/v6.0.0/query-renderer/','100'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v6.0.0/quick-start-guide/','322'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/refetch-container/',
        component: ComponentCreator('/docs/v6.0.0/refetch-container/','a99'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/relay-compat/',
        component: ComponentCreator('/docs/v6.0.0/relay-compat/','74c'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v6.0.0/relay-debugging/','8cb'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/relay-environment/',
        component: ComponentCreator('/docs/v6.0.0/relay-environment/','779'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/relay-store/',
        component: ComponentCreator('/docs/v6.0.0/relay-store/','7f4'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/routing/',
        component: ComponentCreator('/docs/v6.0.0/routing/','efb'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v6.0.0/runtime-architecture/','ea7'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/subscriptions/',
        component: ComponentCreator('/docs/v6.0.0/subscriptions/','b85'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v6.0.0/testing-relay-components/','485'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v6.0.0/thinking-in-graphql/','892'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v6.0.0/thinking-in-relay/','57e'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/type-emission/',
        component: ComponentCreator('/docs/v6.0.0/type-emission/','b33'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      },
      {
        path: '/docs/v6.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v6.0.0/upgrading-setvariables/','850'),
        exact: true
      },
      {
        path: '/docs/v6.0.0/videos/',
        component: ComponentCreator('/docs/v6.0.0/videos/','260'),
        exact: true,
        'sidebar': "version-v6.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v7.0.0/',
    component: ComponentCreator('/docs/v7.0.0/','f57'),
    routes: [
      {
        path: '/docs/v7.0.0/',
        component: ComponentCreator('/docs/v7.0.0/','83e'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v7.0.0/api-cheatsheet/','e7a'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v7.0.0/architecture-overview/','d80'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v7.0.0/community-learning-resources/','36b'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v7.0.0/compatibility-cheatsheet/','7c9'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v7.0.0/compiler-architecture/','211'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v7.0.0/conversion-playbook/','d9e'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v7.0.0/conversion-scripts/','de3'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v7.0.0/converting-mutations/','12f'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/fetch-query/',
        component: ComponentCreator('/docs/v7.0.0/fetch-query/','4ef'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/fragment-container/',
        component: ComponentCreator('/docs/v7.0.0/fragment-container/','1f4'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v7.0.0/graphql-in-relay/','d2f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v7.0.0/graphql-server-specification/','7fa'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v7.0.0/installation-and-setup/','734'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/local-state-management/',
        component: ComponentCreator('/docs/v7.0.0/local-state-management/','2f6'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/migration-setup/',
        component: ComponentCreator('/docs/v7.0.0/migration-setup/','ffd'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/mutations/',
        component: ComponentCreator('/docs/v7.0.0/mutations/','ca8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/network-layer/',
        component: ComponentCreator('/docs/v7.0.0/network-layer/','971'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v7.0.0/new-in-relay-modern/','81f'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/pagination-container/',
        component: ComponentCreator('/docs/v7.0.0/pagination-container/','935'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v7.0.0/persisted-queries/','9bc'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/prerequisites/',
        component: ComponentCreator('/docs/v7.0.0/prerequisites/','c0f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/query-renderer/',
        component: ComponentCreator('/docs/v7.0.0/query-renderer/','25d'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v7.0.0/quick-start-guide/','3d9'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/refetch-container/',
        component: ComponentCreator('/docs/v7.0.0/refetch-container/','ee3'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/relay-compat/',
        component: ComponentCreator('/docs/v7.0.0/relay-compat/','053'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v7.0.0/relay-debugging/','2d2'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/relay-environment/',
        component: ComponentCreator('/docs/v7.0.0/relay-environment/','0d9'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/relay-store/',
        component: ComponentCreator('/docs/v7.0.0/relay-store/','d81'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/routing/',
        component: ComponentCreator('/docs/v7.0.0/routing/','12c'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v7.0.0/runtime-architecture/','a0f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/subscriptions/',
        component: ComponentCreator('/docs/v7.0.0/subscriptions/','c11'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v7.0.0/testing-relay-components/','e0a'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v7.0.0/thinking-in-graphql/','ec8'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v7.0.0/thinking-in-relay/','344'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/type-emission/',
        component: ComponentCreator('/docs/v7.0.0/type-emission/','686'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      },
      {
        path: '/docs/v7.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v7.0.0/upgrading-setvariables/','3c0'),
        exact: true
      },
      {
        path: '/docs/v7.0.0/videos/',
        component: ComponentCreator('/docs/v7.0.0/videos/','96f'),
        exact: true,
        'sidebar': "version-v7.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v7.1.0/',
    component: ComponentCreator('/docs/v7.1.0/','4a8'),
    routes: [
      {
        path: '/docs/v7.1.0/',
        component: ComponentCreator('/docs/v7.1.0/','223'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v7.1.0/api-cheatsheet/','bc4'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/architecture-overview/',
        component: ComponentCreator('/docs/v7.1.0/architecture-overview/','fe1'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/community-learning-resources/',
        component: ComponentCreator('/docs/v7.1.0/community-learning-resources/','533'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v7.1.0/compatibility-cheatsheet/','55c'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/compiler-architecture/',
        component: ComponentCreator('/docs/v7.1.0/compiler-architecture/','323'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/conversion-playbook/',
        component: ComponentCreator('/docs/v7.1.0/conversion-playbook/','3b7'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/conversion-scripts/',
        component: ComponentCreator('/docs/v7.1.0/conversion-scripts/','752'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/converting-mutations/',
        component: ComponentCreator('/docs/v7.1.0/converting-mutations/','e44'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/fetch-query/',
        component: ComponentCreator('/docs/v7.1.0/fetch-query/','1ef'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/fragment-container/',
        component: ComponentCreator('/docs/v7.1.0/fragment-container/','ac1'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v7.1.0/graphql-in-relay/','c8e'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v7.1.0/graphql-server-specification/','384'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/installation-and-setup/',
        component: ComponentCreator('/docs/v7.1.0/installation-and-setup/','d32'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/local-state-management/',
        component: ComponentCreator('/docs/v7.1.0/local-state-management/','90c'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/migration-setup/',
        component: ComponentCreator('/docs/v7.1.0/migration-setup/','f84'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/mutations/',
        component: ComponentCreator('/docs/v7.1.0/mutations/','507'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/network-layer/',
        component: ComponentCreator('/docs/v7.1.0/network-layer/','617'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v7.1.0/new-in-relay-modern/','f30'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/pagination-container/',
        component: ComponentCreator('/docs/v7.1.0/pagination-container/','419'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/persisted-queries/',
        component: ComponentCreator('/docs/v7.1.0/persisted-queries/','9d0'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/prerequisites/',
        component: ComponentCreator('/docs/v7.1.0/prerequisites/','b17'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/query-renderer/',
        component: ComponentCreator('/docs/v7.1.0/query-renderer/','83e'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/quick-start-guide/',
        component: ComponentCreator('/docs/v7.1.0/quick-start-guide/','2de'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/refetch-container/',
        component: ComponentCreator('/docs/v7.1.0/refetch-container/','79d'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/relay-compat/',
        component: ComponentCreator('/docs/v7.1.0/relay-compat/','821'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/relay-debugging/',
        component: ComponentCreator('/docs/v7.1.0/relay-debugging/','b2e'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/relay-environment/',
        component: ComponentCreator('/docs/v7.1.0/relay-environment/','419'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/relay-store/',
        component: ComponentCreator('/docs/v7.1.0/relay-store/','1b0'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/routing/',
        component: ComponentCreator('/docs/v7.1.0/routing/','f32'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/runtime-architecture/',
        component: ComponentCreator('/docs/v7.1.0/runtime-architecture/','3dc'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/subscriptions/',
        component: ComponentCreator('/docs/v7.1.0/subscriptions/','f97'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/testing-relay-components/',
        component: ComponentCreator('/docs/v7.1.0/testing-relay-components/','5bf'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v7.1.0/thinking-in-graphql/','7bd'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v7.1.0/thinking-in-relay/','247'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/type-emission/',
        component: ComponentCreator('/docs/v7.1.0/type-emission/','136'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      },
      {
        path: '/docs/v7.1.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v7.1.0/upgrading-setvariables/','d1a'),
        exact: true
      },
      {
        path: '/docs/v7.1.0/videos/',
        component: ComponentCreator('/docs/v7.1.0/videos/','70a'),
        exact: true,
        'sidebar': "version-v7.1.0/docs"
      }
    ]
  },
  {
    path: '/docs/v8.0.0/',
    component: ComponentCreator('/docs/v8.0.0/','ccd'),
    routes: [
      {
        path: '/docs/v8.0.0/',
        component: ComponentCreator('/docs/v8.0.0/','c0b'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v8.0.0/api-cheatsheet/','602'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v8.0.0/architecture-overview/','818'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v8.0.0/community-learning-resources/','b3d'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v8.0.0/compatibility-cheatsheet/','513'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v8.0.0/compiler-architecture/','a8e'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v8.0.0/conversion-playbook/','2e8'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v8.0.0/conversion-scripts/','d9b'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v8.0.0/converting-mutations/','287'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/fetch-query/',
        component: ComponentCreator('/docs/v8.0.0/fetch-query/','a1f'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/fragment-container/',
        component: ComponentCreator('/docs/v8.0.0/fragment-container/','aea'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v8.0.0/graphql-in-relay/','e8c'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v8.0.0/graphql-server-specification/','533'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v8.0.0/installation-and-setup/','5cb'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/local-state-management/',
        component: ComponentCreator('/docs/v8.0.0/local-state-management/','9c3'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/migration-setup/',
        component: ComponentCreator('/docs/v8.0.0/migration-setup/','d55'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/mutations/',
        component: ComponentCreator('/docs/v8.0.0/mutations/','adc'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/network-layer/',
        component: ComponentCreator('/docs/v8.0.0/network-layer/','507'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v8.0.0/new-in-relay-modern/','c24'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/pagination-container/',
        component: ComponentCreator('/docs/v8.0.0/pagination-container/','5bf'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v8.0.0/persisted-queries/','aad'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/prerequisites/',
        component: ComponentCreator('/docs/v8.0.0/prerequisites/','085'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/query-renderer/',
        component: ComponentCreator('/docs/v8.0.0/query-renderer/','b9a'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v8.0.0/quick-start-guide/','b60'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/refetch-container/',
        component: ComponentCreator('/docs/v8.0.0/refetch-container/','81c'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/relay-compat/',
        component: ComponentCreator('/docs/v8.0.0/relay-compat/','200'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v8.0.0/relay-debugging/','d6e'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/relay-environment/',
        component: ComponentCreator('/docs/v8.0.0/relay-environment/','172'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/relay-store/',
        component: ComponentCreator('/docs/v8.0.0/relay-store/','40e'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/routing/',
        component: ComponentCreator('/docs/v8.0.0/routing/','235'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v8.0.0/runtime-architecture/','c9a'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/subscriptions/',
        component: ComponentCreator('/docs/v8.0.0/subscriptions/','275'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v8.0.0/testing-relay-components/','c1c'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v8.0.0/thinking-in-graphql/','a3e'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v8.0.0/thinking-in-relay/','e16'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/type-emission/',
        component: ComponentCreator('/docs/v8.0.0/type-emission/','085'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      },
      {
        path: '/docs/v8.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v8.0.0/upgrading-setvariables/','137'),
        exact: true
      },
      {
        path: '/docs/v8.0.0/videos/',
        component: ComponentCreator('/docs/v8.0.0/videos/','c94'),
        exact: true,
        'sidebar': "version-v8.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v9.0.0/',
    component: ComponentCreator('/docs/v9.0.0/','840'),
    routes: [
      {
        path: '/docs/v9.0.0/',
        component: ComponentCreator('/docs/v9.0.0/','e49'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v9.0.0/api-cheatsheet/','6b2'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/architecture-overview/',
        component: ComponentCreator('/docs/v9.0.0/architecture-overview/','750'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/community-learning-resources/',
        component: ComponentCreator('/docs/v9.0.0/community-learning-resources/','57c'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v9.0.0/compatibility-cheatsheet/','1c6'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/compiler-architecture/',
        component: ComponentCreator('/docs/v9.0.0/compiler-architecture/','302'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/conversion-playbook/',
        component: ComponentCreator('/docs/v9.0.0/conversion-playbook/','d98'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/conversion-scripts/',
        component: ComponentCreator('/docs/v9.0.0/conversion-scripts/','06e'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/converting-mutations/',
        component: ComponentCreator('/docs/v9.0.0/converting-mutations/','d25'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/fetch-query/',
        component: ComponentCreator('/docs/v9.0.0/fetch-query/','444'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/fragment-container/',
        component: ComponentCreator('/docs/v9.0.0/fragment-container/','1b2'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v9.0.0/graphql-in-relay/','7b3'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v9.0.0/graphql-server-specification/','60f'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/installation-and-setup/',
        component: ComponentCreator('/docs/v9.0.0/installation-and-setup/','e4e'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/local-state-management/',
        component: ComponentCreator('/docs/v9.0.0/local-state-management/','4ac'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/migration-setup/',
        component: ComponentCreator('/docs/v9.0.0/migration-setup/','f6f'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/mutations/',
        component: ComponentCreator('/docs/v9.0.0/mutations/','529'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/network-layer/',
        component: ComponentCreator('/docs/v9.0.0/network-layer/','111'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v9.0.0/new-in-relay-modern/','913'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/pagination-container/',
        component: ComponentCreator('/docs/v9.0.0/pagination-container/','514'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/persisted-queries/',
        component: ComponentCreator('/docs/v9.0.0/persisted-queries/','593'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/prerequisites/',
        component: ComponentCreator('/docs/v9.0.0/prerequisites/','80c'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/query-renderer/',
        component: ComponentCreator('/docs/v9.0.0/query-renderer/','b0e'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/quick-start-guide/',
        component: ComponentCreator('/docs/v9.0.0/quick-start-guide/','c16'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/refetch-container/',
        component: ComponentCreator('/docs/v9.0.0/refetch-container/','b88'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/relay-compat/',
        component: ComponentCreator('/docs/v9.0.0/relay-compat/','ccb'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/relay-debugging/',
        component: ComponentCreator('/docs/v9.0.0/relay-debugging/','09f'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/relay-environment/',
        component: ComponentCreator('/docs/v9.0.0/relay-environment/','3b0'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/relay-store/',
        component: ComponentCreator('/docs/v9.0.0/relay-store/','2ee'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/routing/',
        component: ComponentCreator('/docs/v9.0.0/routing/','b70'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/runtime-architecture/',
        component: ComponentCreator('/docs/v9.0.0/runtime-architecture/','440'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/subscriptions/',
        component: ComponentCreator('/docs/v9.0.0/subscriptions/','b5a'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/testing-relay-components/',
        component: ComponentCreator('/docs/v9.0.0/testing-relay-components/','72f'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v9.0.0/thinking-in-graphql/','96b'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v9.0.0/thinking-in-relay/','cb3'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/type-emission/',
        component: ComponentCreator('/docs/v9.0.0/type-emission/','a25'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      },
      {
        path: '/docs/v9.0.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v9.0.0/upgrading-setvariables/','d0e'),
        exact: true
      },
      {
        path: '/docs/v9.0.0/videos/',
        component: ComponentCreator('/docs/v9.0.0/videos/','0ff'),
        exact: true,
        'sidebar': "version-v9.0.0/docs"
      }
    ]
  },
  {
    path: '/docs/v9.1.0/',
    component: ComponentCreator('/docs/v9.1.0/','2c2'),
    routes: [
      {
        path: '/docs/v9.1.0/',
        component: ComponentCreator('/docs/v9.1.0/','62c'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/api-cheatsheet/',
        component: ComponentCreator('/docs/v9.1.0/api-cheatsheet/','57e'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/architecture-overview/',
        component: ComponentCreator('/docs/v9.1.0/architecture-overview/','737'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/community-learning-resources/',
        component: ComponentCreator('/docs/v9.1.0/community-learning-resources/','7a7'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/compatibility-cheatsheet/',
        component: ComponentCreator('/docs/v9.1.0/compatibility-cheatsheet/','2df'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/compiler-architecture/',
        component: ComponentCreator('/docs/v9.1.0/compiler-architecture/','c67'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/conversion-playbook/',
        component: ComponentCreator('/docs/v9.1.0/conversion-playbook/','2ed'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/conversion-scripts/',
        component: ComponentCreator('/docs/v9.1.0/conversion-scripts/','155'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/converting-mutations/',
        component: ComponentCreator('/docs/v9.1.0/converting-mutations/','5a4'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/fetch-query/',
        component: ComponentCreator('/docs/v9.1.0/fetch-query/','242'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/fragment-container/',
        component: ComponentCreator('/docs/v9.1.0/fragment-container/','3b6'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/graphql-in-relay/',
        component: ComponentCreator('/docs/v9.1.0/graphql-in-relay/','4a8'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/graphql-server-specification/',
        component: ComponentCreator('/docs/v9.1.0/graphql-server-specification/','3d7'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/installation-and-setup/',
        component: ComponentCreator('/docs/v9.1.0/installation-and-setup/','ead'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/local-state-management/',
        component: ComponentCreator('/docs/v9.1.0/local-state-management/','d39'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/migration-setup/',
        component: ComponentCreator('/docs/v9.1.0/migration-setup/','3c1'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/mutations/',
        component: ComponentCreator('/docs/v9.1.0/mutations/','076'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/network-layer/',
        component: ComponentCreator('/docs/v9.1.0/network-layer/','bf3'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/new-in-relay-modern/',
        component: ComponentCreator('/docs/v9.1.0/new-in-relay-modern/','c20'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/pagination-container/',
        component: ComponentCreator('/docs/v9.1.0/pagination-container/','772'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/persisted-queries/',
        component: ComponentCreator('/docs/v9.1.0/persisted-queries/','936'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/prerequisites/',
        component: ComponentCreator('/docs/v9.1.0/prerequisites/','019'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/query-renderer/',
        component: ComponentCreator('/docs/v9.1.0/query-renderer/','ed6'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/quick-start-guide/',
        component: ComponentCreator('/docs/v9.1.0/quick-start-guide/','fb7'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/refetch-container/',
        component: ComponentCreator('/docs/v9.1.0/refetch-container/','b67'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/relay-compat/',
        component: ComponentCreator('/docs/v9.1.0/relay-compat/','f13'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/relay-debugging/',
        component: ComponentCreator('/docs/v9.1.0/relay-debugging/','7bb'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/relay-environment/',
        component: ComponentCreator('/docs/v9.1.0/relay-environment/','ff9'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/relay-store/',
        component: ComponentCreator('/docs/v9.1.0/relay-store/','8e5'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/routing/',
        component: ComponentCreator('/docs/v9.1.0/routing/','82a'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/runtime-architecture/',
        component: ComponentCreator('/docs/v9.1.0/runtime-architecture/','449'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/subscriptions/',
        component: ComponentCreator('/docs/v9.1.0/subscriptions/','c83'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/testing-relay-components/',
        component: ComponentCreator('/docs/v9.1.0/testing-relay-components/','6bf'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/thinking-in-graphql/',
        component: ComponentCreator('/docs/v9.1.0/thinking-in-graphql/','bdc'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/thinking-in-relay/',
        component: ComponentCreator('/docs/v9.1.0/thinking-in-relay/','ec7'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/type-emission/',
        component: ComponentCreator('/docs/v9.1.0/type-emission/','b5f'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      },
      {
        path: '/docs/v9.1.0/upgrading-setvariables/',
        component: ComponentCreator('/docs/v9.1.0/upgrading-setvariables/','275'),
        exact: true
      },
      {
        path: '/docs/v9.1.0/videos/',
        component: ComponentCreator('/docs/v9.1.0/videos/','90f'),
        exact: true,
        'sidebar': "version-v9.1.0/docs"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','4d5'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','670'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/commit-mutation/',
        component: ComponentCreator('/docs/api-reference/commit-mutation/','514'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/entrypoint-container/',
        component: ComponentCreator('/docs/api-reference/entrypoint-container/','0d3'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/fetch-query/',
        component: ComponentCreator('/docs/api-reference/fetch-query/','270'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/graphql-and-directives/',
        component: ComponentCreator('/docs/api-reference/graphql-and-directives/','076'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/legacy-apis/',
        component: ComponentCreator('/docs/api-reference/legacy-apis/','375'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/load-entrypoint/',
        component: ComponentCreator('/docs/api-reference/load-entrypoint/','b6c'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/load-query/',
        component: ComponentCreator('/docs/api-reference/load-query/','106'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/relay-environment-provider/',
        component: ComponentCreator('/docs/api-reference/relay-environment-provider/','c2d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/request-subscription/',
        component: ComponentCreator('/docs/api-reference/request-subscription/','fcf'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/store/',
        component: ComponentCreator('/docs/api-reference/store/','bc0'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/types/CacheConfig/',
        component: ComponentCreator('/docs/api-reference/types/CacheConfig/','941'),
        exact: true
      },
      {
        path: '/docs/api-reference/types/Disposable/',
        component: ComponentCreator('/docs/api-reference/types/Disposable/','c65'),
        exact: true
      },
      {
        path: '/docs/api-reference/types/GraphQLSubscriptionConfig/',
        component: ComponentCreator('/docs/api-reference/types/GraphQLSubscriptionConfig/','c9e'),
        exact: true
      },
      {
        path: '/docs/api-reference/types/MutationConfig/',
        component: ComponentCreator('/docs/api-reference/types/MutationConfig/','326'),
        exact: true
      },
      {
        path: '/docs/api-reference/types/SelectorStoreUpdater/',
        component: ComponentCreator('/docs/api-reference/types/SelectorStoreUpdater/','f99'),
        exact: true
      },
      {
        path: '/docs/api-reference/types/UploadableMap/',
        component: ComponentCreator('/docs/api-reference/types/UploadableMap/','05c'),
        exact: true
      },
      {
        path: '/docs/api-reference/use-entrypoint-loader/',
        component: ComponentCreator('/docs/api-reference/use-entrypoint-loader/','433'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-fragment/',
        component: ComponentCreator('/docs/api-reference/use-fragment/','ec5'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-lazy-load-query/',
        component: ComponentCreator('/docs/api-reference/use-lazy-load-query/','76b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-mutation/',
        component: ComponentCreator('/docs/api-reference/use-mutation/','46e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-pagination-fragment/',
        component: ComponentCreator('/docs/api-reference/use-pagination-fragment/','ecd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-preloaded-query/',
        component: ComponentCreator('/docs/api-reference/use-preloaded-query/','87e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-query-loader/',
        component: ComponentCreator('/docs/api-reference/use-query-loader/','892'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-refetchable-fragment/',
        component: ComponentCreator('/docs/api-reference/use-refetchable-fragment/','2d3'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-relay-environment/',
        component: ComponentCreator('/docs/api-reference/use-relay-environment/','fcc'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/api-reference/use-subscription/',
        component: ComponentCreator('/docs/api-reference/use-subscription/','f91'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/community-learning-resources/',
        component: ComponentCreator('/docs/community-learning-resources/','a5e'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/debugging/declarative-mutation-directives/',
        component: ComponentCreator('/docs/debugging/declarative-mutation-directives/','c30'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/debugging/inconsistent-typename-error/',
        component: ComponentCreator('/docs/debugging/inconsistent-typename-error/','919'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/debugging/relay-devtools/',
        component: ComponentCreator('/docs/debugging/relay-devtools/','94b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/getting-started/installation-and-setup/',
        component: ComponentCreator('/docs/getting-started/installation-and-setup/','194'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/getting-started/prerequisites/',
        component: ComponentCreator('/docs/getting-started/prerequisites/','649'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/getting-started/step-by-step-guide/',
        component: ComponentCreator('/docs/getting-started/step-by-step-guide/','1b4'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/glossary/',
        component: ComponentCreator('/docs/glossary/','157'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/',
        component: ComponentCreator('/docs/guided-tour/','6d4'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/accessing-data-without-react/prefetching-queries/',
        component: ComponentCreator('/docs/guided-tour/accessing-data-without-react/prefetching-queries/','169'),
        exact: true
      },
      {
        path: '/docs/guided-tour/accessing-data-without-react/reading-fragments/',
        component: ComponentCreator('/docs/guided-tour/accessing-data-without-react/reading-fragments/','b97'),
        exact: true
      },
      {
        path: '/docs/guided-tour/accessing-data-without-react/reading-queries/',
        component: ComponentCreator('/docs/guided-tour/accessing-data-without-react/reading-queries/','33c'),
        exact: true
      },
      {
        path: '/docs/guided-tour/accessing-data-without-react/retaining-queries/',
        component: ComponentCreator('/docs/guided-tour/accessing-data-without-react/retaining-queries/','d06'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/accessing-data-without-react/subscribing-to-queries/',
        component: ComponentCreator('/docs/guided-tour/accessing-data-without-react/subscribing-to-queries/','9b3'),
        exact: true
      },
      {
        path: '/docs/guided-tour/list-data/advanced-pagination/',
        component: ComponentCreator('/docs/guided-tour/list-data/advanced-pagination/','691'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/connections/',
        component: ComponentCreator('/docs/guided-tour/list-data/connections/','1ee'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/pagination/',
        component: ComponentCreator('/docs/guided-tour/list-data/pagination/','c0a'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/refetching-connections/',
        component: ComponentCreator('/docs/guided-tour/list-data/refetching-connections/','5db'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/rendering-connections/',
        component: ComponentCreator('/docs/guided-tour/list-data/rendering-connections/','c5d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/streaming-pagination/',
        component: ComponentCreator('/docs/guided-tour/list-data/streaming-pagination/','9bf'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/list-data/updating-connections/',
        component: ComponentCreator('/docs/guided-tour/list-data/updating-connections/','1dd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/refetching/',
        component: ComponentCreator('/docs/guided-tour/refetching/','33c'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/refetching/OssAvoidSuspenseNote/',
        component: ComponentCreator('/docs/guided-tour/refetching/OssAvoidSuspenseNote/','b48'),
        exact: true
      },
      {
        path: '/docs/guided-tour/refetching/refetching-fragments-with-different-data/',
        component: ComponentCreator('/docs/guided-tour/refetching/refetching-fragments-with-different-data/','65d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/refetching/refetching-queries-with-different-data/',
        component: ComponentCreator('/docs/guided-tour/refetching/refetching-queries-with-different-data/','93c'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/refetching/refreshing-fragments/',
        component: ComponentCreator('/docs/guided-tour/refetching/refreshing-fragments/','847'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/refetching/refreshing-queries/',
        component: ComponentCreator('/docs/guided-tour/refetching/refreshing-queries/','5b5'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/environment/',
        component: ComponentCreator('/docs/guided-tour/rendering/environment/','d6d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/error-states/',
        component: ComponentCreator('/docs/guided-tour/rendering/error-states/','4dd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/fragments/',
        component: ComponentCreator('/docs/guided-tour/rendering/fragments/','ffb'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/loading-states/',
        component: ComponentCreator('/docs/guided-tour/rendering/loading-states/','b92'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/queries/',
        component: ComponentCreator('/docs/guided-tour/rendering/queries/','0af'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/rendering/variables/',
        component: ComponentCreator('/docs/guided-tour/rendering/variables/','7f9'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/','7d1'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/availability-of-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/availability-of-data/','93b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/fetch-policies/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/fetch-policies/','f5d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/filling-in-missing-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/filling-in-missing-data/','054'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/presence-of-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/presence-of-data/','572'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/','f0f'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/reusing-cached-data/staleness-of-data/',
        component: ComponentCreator('/docs/guided-tour/reusing-cached-data/staleness-of-data/','795'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/updating-data/',
        component: ComponentCreator('/docs/guided-tour/updating-data/','025'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/updating-data/client-only-data/',
        component: ComponentCreator('/docs/guided-tour/updating-data/client-only-data/','3dd'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/updating-data/graphql-mutations/',
        component: ComponentCreator('/docs/guided-tour/updating-data/graphql-mutations/','22a'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/updating-data/graphql-subscriptions/',
        component: ComponentCreator('/docs/guided-tour/updating-data/graphql-subscriptions/','ec6'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/updating-data/local-data-updates/',
        component: ComponentCreator('/docs/guided-tour/updating-data/local-data-updates/','15d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guided-tour/workflow/',
        component: ComponentCreator('/docs/guided-tour/workflow/','54a'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/client-schema-extensions/',
        component: ComponentCreator('/docs/guides/client-schema-extensions/','558'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/compiler/',
        component: ComponentCreator('/docs/guides/compiler/','c93'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/graphql-server-specification/',
        component: ComponentCreator('/docs/guides/graphql-server-specification/','0a5'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/network-layer/',
        component: ComponentCreator('/docs/guides/network-layer/','e6c'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/persisted-queries/',
        component: ComponentCreator('/docs/guides/persisted-queries/','d02'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/required-directive/',
        component: ComponentCreator('/docs/guides/required-directive/','106'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/testing-relay-components/',
        component: ComponentCreator('/docs/guides/testing-relay-components/','c9f'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/testing-relay-with-preloaded-queries/',
        component: ComponentCreator('/docs/guides/testing-relay-with-preloaded-queries/','60b'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/guides/type-emission/',
        component: ComponentCreator('/docs/guides/type-emission/','1b2'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/migration-and-compatibility/',
        component: ComponentCreator('/docs/migration-and-compatibility/','a61'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis/',
        component: ComponentCreator('/docs/migration-and-compatibility/relay-hooks-and-legacy-container-apis/','640'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/migration-and-compatibility/suspense-compatibility/',
        component: ComponentCreator('/docs/migration-and-compatibility/suspense-compatibility/','759'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/architecture-overview/',
        component: ComponentCreator('/docs/principles-and-architecture/architecture-overview/','a4d'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/compiler-architecture/',
        component: ComponentCreator('/docs/principles-and-architecture/compiler-architecture/','7c5'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/runtime-architecture/',
        component: ComponentCreator('/docs/principles-and-architecture/runtime-architecture/','d77'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/thinking-in-graphql/',
        component: ComponentCreator('/docs/principles-and-architecture/thinking-in-graphql/','c80'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/thinking-in-relay/',
        component: ComponentCreator('/docs/principles-and-architecture/thinking-in-relay/','079'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      },
      {
        path: '/docs/principles-and-architecture/videos/',
        component: ComponentCreator('/docs/principles-and-architecture/videos/','150'),
        exact: true,
        'sidebar': "version-v13.0.0/docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
