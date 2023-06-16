# Components!!! #

CustomButton: 이 컴포넌트는 애플리케이션에서 사용되는 사용자 정의 버튼을 나타냅니다. 클릭 이벤트를 처리하기 위해 onClick prop을 받으며, 자식 요소로 전달된 텍스트 내용을 표시합니다.

Card: 이 컴포넌트는 애플리케이션에서 사용되는 카드를 나타냅니다. card prop (카드에 대한 정보를 포함)와 handleDelete (카드를 삭제하기 위한 함수) 및 toggleComplete (카드의 완료 상태를 전환하기 위한 함수)와 같은 prop을 받습니다. 카드의 제목과 내용을 표시하며, 카드 삭제와 완료 상태 전환을 위한 두 개의 버튼이 포함되어 있습니다.

App: 이것은 애플리케이션의 주요 컴포넌트입니다. useState React Hook을 사용하여 애플리케이션의 상태를 관리합니다. 이 컴포넌트는 cards (카드 배열), title 및 content를 상태 변수로 유지합니다. 컴포넌트는 새로운 카드를 추가하는 폼, 작업 중인 카드를 표시하는 섹션 및 완료된 카드를 표시하는 다른 섹션으로 렌더링됩니다. 또한 addCardHandler (새로운 카드 추가), deleteCardHandler (카드 삭제), toggleCompleteHandler (카드의 완료 상태 전환)와 같은 이벤트 핸들러 함수가 포함되어 있습니다.
