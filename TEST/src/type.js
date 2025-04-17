// typeof

// let num = 10;
//console.log(typeof num);

////////////////////////////////////////////////////////////////////

// 숫자형

//let num1 = 125;
//let num2 = 10.00012;
//console.log(typeof num1);
//console.log(typeof num2);

// Infinity : 무한대를 나타내는 값
//let num = Infinity;
//console.log(typeof num);

//let num = 100 / 0;
// console.log(num); // Infinity 출력

NaN; //Not a Number
//let number = NaN;
//console.log(typeof number);

let number = "javascript" / 10;
//console.log(number); //NaN 출력

// BigInt
// 2^53-1보다 크거나 -(2^53-1)보다 작은 값

let bigNum1 = 99999999999999999999n;
let bigNum2 = BigInt("99999999999999999999");

// console.log(typeof bigNum1); //bigint 출력
// console.log(typeof bigNum2); //bigint 출력

////////////////////////////////////////////////////////////////////

// 문자형
// string

//let name = "sumin";
//console.log(typeof name); //string출력

// " ",' ' : 문자열 할당
// `` : 템플릿 리터럴

// let name = "sumin";
//let intro = `제 이름은 ${name} 입니다.`;

//console.log(intro);

////////////////////////////////////////////////////////////////////

// boolean
// true / false

// let isClicked = false;

// if (isClicked) {
//   console.log("클릭O");
// } else {
//   console.log("클릭X");
// }

////////////////////////////////////////////////////////////////////

// Null
// 존재X, 알 수 없는 값

// let num = null;
// console.log(typeof num); //object 출력(자바스크립트의 오류)
// console.log(num === null); //true 출력

////////////////////////////////////////////////////////////////////

// Undefined
// 값이 할당되지 않은 상태

// let num;
// console.log(typeof num); // undefined 출력

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Java의 변수 선언
// int num = 10;            //숫자형
// char name[] = "hyobin";  //문자형

// 자바스크립트의 변수 선언
// let num = '100';
// console.log(typeof num);
// num = 10;
// console.log(typeof num);
// => 프로그램 실행 중에 자료형이 변환되는 언어
// => 동적 타입 언어

////////////////////////////////////////////////////////////////////

// 형 변환
// 특정 연산을 위해 자료형 변환

// 묵시적 형 변환
// let num1 = "15";
// let num2 = 5;
// console.log(num1 / num2);   // 3출력 -> num1문자열을 숫자형으로 자동변환(*,/,-)

// 명시적 형 변환
let num1 = "15";
let num2 = 5;
console.log(num1 + num2); // 155출력 -> +연산을 하면 숫자형을 문자형으로 자동변환
console.log(parseInt(num1) + num2); // 20출력
