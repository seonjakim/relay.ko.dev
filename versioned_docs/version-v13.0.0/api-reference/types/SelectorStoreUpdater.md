import useBaseUrl from '@docusaurus/useBaseUrl';

#### Type `SelectorStoreUpdater`

* A function with signature `(store: RecordSourceSelectorProxy, data) => void`
* 이 인터페이스를 사용하면 Relay store에 *직접* 데이터를 쓰고 읽을 수 있습니다. 구독 페이로드에 대한 응답(response)으로 store를 업데이트하는 방법을 완전히 제어할 수 있습니다: *완전히 새로운 record를 생성*하거나 *기존 record를 업데이트 또는 삭제*할 수 있습니다. Relay store를 읽고 쓰기 위한 전체 API는 <a href={useBaseUrl('docs/api-reference/store/#recordsourceselectorproxy')}>여기</a>에서 확인하실 수 있습니다.
