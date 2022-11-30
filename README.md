# TODO_MASTER

#### 강의 준비를 위해 제작한 todo_master입니다.

## 0. todoserver (완)
- todolist의 nodejs express, mysql을 활용한 bacnk-end
- todolist의 json-server를 활용한 back-end

## 1. todolist (완)

- 모든 todolist의 보일러코드를 담당합니다
- react-router-dom, compoentns, styled-compoennts, styled-reset

## 2. hooktodo (완)

- hooks 함수를 활용하여 실제 기능이 작동되는 todolist를 제작합니다
- custom hook, useInupt, useInputs 코드를 작성합니다.

## 3. reducertodo (완)

- hooktodo의 상태를 useReducer와 useContext를 활용하여 전역으로 관리합니다.
- flux 패턴에 대한 이해도를 상승시킵니다.

## 4. reduxtodo (완)

- hooktodo의 상태를 react-redux를 활용하여 전역으로 관리합니다.
- redux, react-reudx

## 5. axiostodo (완)

- 실제 nodejs로 구현한 백엔드를 가지고 Http message를 통한 data를 활용합니다.
- 로그인되지 않은 사용자 todo페이지 접근 불가, access_token, refresh_token을 사용합니다.
- react-toastify 오픈소스 라이브러리를 활용하여 toast message를 띄웁니다.
- cutomAPIerror를 통해 error를 바운더링 합니다.

## 6. sagatodo (완)

- msw와 mock-data를 활용하여 mockingApi를 만들고 redux의 middle ware인 redux-saga를 사용합니다.
- immer를 사용하여 불변성을 지킵니다.
- throttle, observer를 활용한 인피니트 스크롤링
- immer, redux-saga

## 7. rtktodo (완)

- redux-toolkit를 활용 최신 redux 사용법을 익힙니다.
- createAsyncThunk를 활용합니다.
- json-server를 사용 이후 heroku와 netflify를 통해 배포합니다.
- redux-toolkit

## 8. recoiltodo

- 6을 통해 배포된 json-server를 활용합니다.
- recoil과 react-qurey를 사용하여 todo-list를 제작합니다.
- react qurey를 활용한 인피니트 스크롤링
- storybook을 활용한 공용 컴포넌트 UI TEST를 사용합니다.

## 9. tddtodo

- 랜더링 테스트와 스냅샷 테스트와 같은 유닛 테스트를 작성합니다.
- redux와 msw를 활용하여 단위 테스트를 작성 후 TDD 방식으로 todolist를 완성합니다.
- cypress를 활용한 E2E 테스트를 진행합니다.

## 10. typetodo

- typescript를 활용하여 todolist를 완성합니다.
- DI(의존성부여), 상속, 추상화 같은 oop 개념을 습득합니다.
- typesciprt의 문서화 기능을 강조합니다.



