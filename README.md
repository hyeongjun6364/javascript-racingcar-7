# javascript-racingcar-precourse

### 기능 구현 목록 리스트

1. 사용자 입력

- [x] 사용자에게 n대의 자동차이름 입력을 받는다.
- [x] 자동차의 이름은 쉼표(,)로 구분한다.(공백은 trim으로 제거)
- [x] 시도 횟수를 입력받는다.

2. 자동차 전진 조건

- [] 0~9사이에 무작위 값을 각각 구한다.
- [] 숫자가 4 이상이면 전진하도록 한다.

3. 게임 결과 출력

- [] 시도횟수동안 전진을 하게되면 (-)을 출력하게 한다.
- [] 시도횟수가 다 끝났다면 게임을 종료하고 우승자를 출력한다.(복수일 경우 쉼표(,)를 이용하여 구분)

### 예외 처리

- [x] 시도횟수는 50번으로 제한하고 그 이상의 값이 들어온다면 예외처리한다.
- [x] 시도횟수에 숫자이외의 값이 들어오면 예외처리한다.
- [x] 시도횟수가 공백인지 검사하기
- [x] 자동차의 이름이 5자를 초과하면 예외를 처리한다.
- [x] 자동차의 개수가 2 이상인지 검사하기
- [x] 자동차의 이름이 공백인지 검사하기
- [x] 자동차의 이름이 중복되었는지 검사하기
- [] 자동차의 이름이 string 이외의 값이 들어오면 예외처리한다.
