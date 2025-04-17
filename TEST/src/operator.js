// 프로그래밍 언어에서 특정 연산을 할 수 있게 도와주는 기호
// 사칙 연산
// 비교 연산
// 문자형 데이터 연결

/////////////////////////////////////////////////////////////

// 연산자의 종류
// 산술 연산자, 논리 연산자, 연결 연산자,
// 대입 연산자, 비교 연산자,
// null 병합 연산자, 삼항 연산자

/////////////////////////////////////////////////////////////

// 산술 연산자

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2);   //15
// console.log(num1 - num2);   //5
// console.log(num1 * num2);   //50
// console.log(num1 / num2);   //2
// console.log(num1 % 2);      //0
// console.log(num2 % 2);      //1

/////////////////////////////////////////////////////////////

// 증감연산자
// 후위연산 : 변수의 값에 1을 더하거나 빼기 바로 직전의 값 출력
// 전위연산 : 변수의 값에 1을 더하거나 뺀 결과값 출력

//let num1 = 10;

// console.log(num1++);    //10    (후위연산)
// console.log(num1);      //11
// console.log(++num1);    //12    (전위연산)

// console.log(num1--);    //10
// console.log(num1);      //9
// console.log(--num1);    //8

///////////////////////////////////////////////////////

// 대입 연산자

// let num = 10;
// num = num + 5;

// console.log(num);   //15

// 복합 대입 연산자
// 연산자        기능            사용방법
// +=       num = num + 5       num += 5
// -=       num = num - 5       num -= 5
// *=       num = num * 5       num*+= 5
// /=       num = num / 5       num /= 5
// %=       num = num % 5       num %= 5

// let num = 10;
// num += 5;

// console.log(num);   //15출력

/////////////////////////////////////////////////////////

// 비교 연산자
// 일치
// ===  ==

// let num1 = 10;
// let num2 = "10";

// console.log(num1 === num2); //false 값과 자료형까지 비교
// console.log(num1 == num2); //true  값만 비교

// 불일치
// !== !=

// let num1 = 10;
// let num2 = "10";

// console.log(num1 !== num2); //true 값과 자료형까지 비교
// console.log(num1 != num2); //false  값만 비교

// 비교 연산자
// 대소 비교 연산자
// 연산자           기능                        사용방법
//   <    왼쪽 값이 오른쪽 값보다 작다              a<b
//   >    왼쪽 값이 오른쪽 값보다 크다              a>b
//  <=    왼쪽 값이 오른쪽 값보다 작거나 같다       a<=b
//  >=    왼쪽 값이 오른쪽 값보다 크거나 같다       a>=b

// let a = 10;
// let b = 20;
// let c = 10;

// console.log(a < b); //true
// console.log(a > b); //false
// console.log(b >= c); //true
// console.log(a > c); //false

//////////////////////////////////////////////////////

// 연결 연산자
// +
// let price = 10000;
// console.log("가격 : " + price + "원");

///////////////////////////////////////////////////////

// 논리 연산자
// true false
// NOT, OR, AND

// !(NOT) : false -> true, true -> false

// let isClicked = true;
// let isOpened = false;

// console.log(!isClicked); //false
// console.log(!isOpened); //true

// ||(OR)

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// &&(AND)
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

////////////////////////////////////////////////////

// null 병합 연산자
// A ?? B
// A의 값이 null이거나 undefined일 경우 B출력 아닐시 반대
// 변수의 기본값을 할당하고 싶을 때 사용

// let num1;
// let num2 = 10;

// console.log(num1 ?? 20); //20 B출력이 됨
// console.log(num2 ?? 20); //10 num2가 출력됨

///////////////////////////////////////////////////////

// 삼항 연산자
// A ? B : C

let num = 100;
let result = num % 2 === 0 ? "짝수" : "홀수";

console.log(result); // 100이니 짝수 출력!
