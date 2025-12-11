//alert("hello");

console.log("hello");

//function 으로 된것은 호이스팅 가능
//자바스크립트는 인터프리터 언어 , 한 줄 해석 한 줄 실행

let msg = sayhello("nmhyrhn");
console.log(msg);

function sayhello(name) {
  return `안녕허세요, ${name}님!!`;
}

//호이스팅 안됨
// console.log(greet("hoho"));
const greet = function (name) {
  return `안녕하세요, ${name}님!!`;
};

console.log(greet("hoho"));

//화살표함수

const greet2 = (name) => {
  return `안녕하세요, ${name}님!!`;
};

console.log(greet2("arrow function"));

const greet3 = name => `안녕하세요, ${name}님!!`;

console.log(greet3("hi"));

function calculateArea(sidth, height) {
  return width + height;
}

const calculateArea2 = (width, height) => width * height;

console.log(calculateArea2(3,5));

const createUser = (name) => ({name : name});

console.log(createUser("nam"));

const createTodo = (text) => ({
    id: Date.now(),
    text: text,
    done: false,
  });

const todo1 = createTodo('리액트 공부하기');
const todo2 = createTodo('자바스크립트 복습하기');

console.log("할일 1 : " , todo1);
console.log("할일 2 : " , todo2);

//위에 정의한 create todo
// let color =red;
// {color:color} == {color}

const user = {
  name: '김철수',

  greetNormal:function() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  },

  greetArrow: () => {
    console.log('안녕하세요, ${this.name}입니다.');
  }
};

user.greetNormal();
user.greetArrow();