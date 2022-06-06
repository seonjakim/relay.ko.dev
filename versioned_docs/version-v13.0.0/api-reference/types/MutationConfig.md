import CacheConfig from './CacheConfig.md';
import SelectorStoreUpdater from './SelectorStoreUpdater.md';
import UploadableMap from './UploadableMap.md';

#### Type `MutationConfig<TMutationConfig: MutationParameters>`

* 다음과 같은 영역을 가진 객체:
  * `cacheConfig`: *_[Optional]_* [`CacheConfig`](#type-cacheconfig)
  * `mutation`: `GraphQLTaggedNode`. GraphQL 리터럴을 사용하여 지정된 mutation
  * `onError`: *_[Optional]_* `(Error) => void`. mutation 결과가 에러일 때, 실행되는 선택적 콜백입니다.
  * `onCompleted`: *_[Optional]_* `($ElementType<TMutationConfig, 'response'>) => void`. mutation이 완료될 때 실행되는 선택적 콜백입니다.
  * `onUnsubscribe`: *_[Optional]_* `() => void`. mutation 구독이 취소될 때 실행되는 선택적 콜백입니다. `Disposable`이 반환될 때, 삭제됩니다.
  * `optimisticResponse`: *_[Optional]_* 유형이 mutation의 원시 응답 유형과 일치하는 객체입니다. 이 필드를 사용하는 경우 `@raw_response_type`로 mutation을 장식해야 합니다.
  * `optimisticUpdater`: *_[Optional]_* [`SelectorStoreUpdater`](#type-selectorstoreupdater). optimisticResponse가 스토어로 정규화된 후, commitMutation이 호출 될 때 실행되는 콜백입니다.
  * `updater`: *_[Optional]_* [`SelectorStoreUpdater`](#type-selectorstoreupdater). 페이로드가 스토어에 기록된 후 페이로드가 수신될 때 실행되는 콜백입니다.
  * `uploadables`: *_[Optional]_* [`UploadableMap`](#type-uploadablemap). 선택적 업로드 가능한 지도입니다.
  * `variables`: `$ElementType<TMutationConfig, 'variables'>`. mutation에 전달할 변수입니다.

<CacheConfig />

<SelectorStoreUpdater />

<UploadableMap />

#### Type `MutationParameters`

* An object with the following fields:
  * `response`: An object
  * `variables`: An object
  * `rawResponse`: An optional object
