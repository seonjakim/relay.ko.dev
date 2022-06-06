#### Type `CacheConfig`

* 다음 필드가 있는 객체:
  * `force`: *_[Optional]_* A boolean. 참인 경우 구성된 응답 캐시의 상태에 관계없이 쿼리가 무조건 실행됩니다.
  * `poll`: *_[Optional]_* A number. 지정된 간격(밀리초)으로 폴링(polling)하여 쿼리가 실시간 업데이트되도록 합니다 (이 값은 `setTimeout`에 전달되게 됩니다).
  * `liveConfigId`: *_[Optional]_* A string. GraphQLLiveQuery를 호출하여 쿼리가 실시간 업데이트되도록 합니다. 라이브 쿼리를 수행할 때 게이트웨이의 구성을 나타냅니다.
  * `metadata`: *_[Optional]_* An object. 사용자 제공 메타데이터.
  * `transactionId`: *_[Optional]_* A string. 주어진 작업 실행 인스턴스에 대한 고유 ID로 사용하기 위한 사용자 제공 값입니다.
