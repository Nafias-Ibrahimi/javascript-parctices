// // پاک کردن محتوای قبلی
// document.body.innerHTML = "";
// document.body.setAttribute("style", "margin:0;font-family:Arial,sans-serif;background:#fff;color:#333;");

// // نوار ناوبری
// const nav = document.createElement("nav");
// nav.setAttribute("style", "display:flex;justify-content:space-between;align-items:center;padding:20px 40px;border-bottom:1px solid #eee;");

// const logo = document.createElement("div");
// logo.textContent = "Blush.";
// logo.setAttribute("style", "font-size:28px;font-weight:bold;font-family:Georgia,serif;");

// const menu = document.createElement("ul");
// menu.setAttribute("style", "display:flex;list-style:none;gap:20px;margin:0;padding:0;");
// ["Shop","About","Lookbook","Visit Us","Contact"].forEach(item=>{
//   const li = document.createElement("li");
//   li.textContent = item;
//   li.setAttribute("style", "cursor:pointer;");
//   menu.appendChild(li);
// });

// const bag = document.createElement("div");
// bag.textContent = "👜";
// bag.setAttribute("style", "font-size:20px;");

// nav.appendChild(logo);
// nav.appendChild(menu);
// nav.appendChild(bag);
// document.body.appendChild(nav);

// // بخش Hero
// const hero = document.createElement("section");
// hero.setAttribute("style", "display:flex;justify-content:space-between;align-items:center;padding:60px;position:relative;");

// // دایره محو پشت متن
// const circle = document.createElement("div");
// circle.setAttribute("style", "position:absolute;right:15%;top:20%;width:350px;height:350px;background:rgba(0,0,0,0.05);border-radius:50%;z-index:1;");
// hero.appendChild(circle);

// const img = document.createElement("img");
// img.setAttribute("src", "model.png"); // تصویر مدل
// img.setAttribute("alt", "Model");
// img.setAttribute("style", "max-width:400px;z-index:2;");

// const heroText = document.createElement("div");
// heroText.setAttribute("style", "max-width:400px;position:relative;z-index:2;");

// const h1 = document.createElement("h1");
// h1.textContent = "New Fall-Winter Collection";
// h1.setAttribute("style", "font-size:2em;margin-bottom:20px;");

// const p = document.createElement("p");
// p.textContent = "Shop the latest fashion";
// p.setAttribute("style", "margin-bottom:20px;color:#666;");

// const btn = document.createElement("button");
// btn.textContent = "Shop Now";
// btn.setAttribute("style", "background:black;color:white;padding:12px 24px;border:none;cursor:pointer;font-size:1em;");
// btn.addEventListener("mouseover", ()=> btn.setAttribute("style", "background:#444;color:white;padding:12px 24px;border:none;cursor:pointer;font-size:1em;"));
// btn.addEventListener("mouseout", ()=> btn.setAttribute("style", "background:black;color:white;padding:12px 24px;border:none;cursor:pointer;font-size:1em;"));
// btn.addEventListener("click", ()=> alert("به بخش فروشگاه منتقل شدید!"));

// heroText.appendChild(h1);
// heroText.appendChild(p);
// heroText.appendChild(btn);

// hero.appendChild(img);
// hero.appendChild(heroText);
// document.body.appendChild(hero);
////////////////////////////////////////////////////////////////////////////////////////////////

// const container = document.createElement('div"');
// const nav = document.createElement('nav');

// const links = [
//   { text: 'Shop', url: '/shop' },
//   { text: 'Lookbook', url: '/lookbook' },
//   { text: 'About', url: '/about' },
//   { text: 'Visit Us', url: '/visit' },
//   { text: 'Contact', url: '/contact' },
// ];
// // add the link
// // for (let i = 0; i < links.length; i++) {
// //   const li = document.createElement('li');
// //   const a = document.createElement('a');

// //   li.className = 'nav-list';
// //   a.className = 'nav-item';

// //   a.textContent = links[i].text;
// //   a.href = links[i].url;

// //   li.appendChild(a);
// //   nav.appendChild(li);
// // }

// links.forEach(item) =>{
//     const li=document.createElement('li');
//     const a=document.createElement('a');
//     li.className='nav-list';
//     a.className='nav-item';
//     a.textContent=links.text;
//     a.href=links.url;
//     li.appendChild(a);
//     nav.appendChild(li);
// }

// const img = document.createElement('img');
// img.src = '/img/102665.png';
// img.style.width = '30px';
// nav.appendChild(img);

// // style container
// container.setAttribute('class', 'container');
// container.setAttribute('id', 'container');
// container.setAttribute('title', 'container');
// container.setAttribute(
//   'style',
//   'height:50px; background-color:red; margin-top:0; display:flex; align-items:center; gap:20px; padding:0 10px; list-style:none;',
// );

// document.body.style.margin = '0';
// document.body.style.padding = '0';

// container.appendChild(nav);
// document.body.appendChild(container);

// nav.setAttribute(
//   'style',
//   'display:flex; align-items:center; gap:20px; list-style:none; width:100%; height:100%; margin:0; padding:0;',
// );

// nav.style.justifyContent = 'flex-end';

// console.log('this is message');
// let name='Nafisa';
// console.log('name:' , name);

// console.error('error message');
// console.warn('Warring message');
// console.table(1,2,3);

// let score=[90,40,50];
// console.table(score);

// let x=5;
// if(x>0){
//     console.log('postive number');
// }
// let y=10;

// console.log(y*2);

// let result=5+3;
// if(true){
//     console.log('hello');
// }

// let sum=5 +10;
// console.log(sum);

// let age=20;
// let nextYearAge=age+1;
// console.log(nextYearAge);

// let names='Ali';
// console.log('Hello :' ,names);

// let width=5;
// let height=10;
// let area=width*height;
// console.log(area);

// let x=25;
// x='hello';
// x=true;
// console.log(x);

// let str1="hello";
// let str2='world';
// let str3=`message: ${str1}, ${str2}`
// console.log(str3);

// let name="javascript";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.includes("java"));

// let z=3.14;
// let x=2e3;
// console.log(10/0);
// console.log('abc' *2);

// console.log(Math.sqrt(16));
// console.log(Math.random());

// let isActive=true;
// let isLoggendIn=false;
// console.log(5>3);
// console.log(10 === "10");
// console.log(10 == "10");

// let user=null;
// console.log(user);
// console.log(typeof null);

// // 2.5 Undefined

// let s;
// console.log(s);

//  const id1=Symbol("id");
//  const id2=Symbol("id");

//  console.log(id1 === id2);

// // 2.7 BigInt (ES11)

// const bigNum=123455667786787687987n;
// console.log(bigNum +10n);

// let bigNumber=BigInt(1238972389274328432984732n);

// let a= 9007199254740991n;
// let b=2n;
// console.log(a+b);

// console.log(typeof 'hello');
// console.log(typeof 10);
// console.log(typeof true);

// let person={
//     name:'Ali',
//     lsaname:'Ahmadi',
//     age:20,
//     isStudent:true
// }
// console.log(person);
// console.log(person.name);
// console.log(person.lsaname);
// console.log(person.isStudent);
// person.age=26;
// console.log(person.age);

// let student={
//     name:'Sara',
//     grade:{math:90, engilsh:80}

// };
// console.log(student.name);
// console.log(student.grade.math);

// let fruits=['Apple' ,'Banana' ,'Cherry'];
// console.log(fruits[1]);

// fruits.push('graps');
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// console.log(fruits.unshift('Mango'));
// console.log(fruits.shift());
// console.log(fruits.length);
// console.log(fruits);

// function greet(name){
//     return `hello ,${name}`;
// }

// console.log(greet('Ali'));

// const square=function(x){
//     return x*x;

// }
// console.log(square(7));

// console.log(typeof 'Hello');
// console.log(typeof 123);
// console.log(typeof null);
// console.log(typeof Symbol);

// 4.2 instanceof

// let arr=[];
// console.log(arr instanceof Array);
// console.log(typeof arr);
// console.log(arr instanceof Object);

// console.log(  [] instanceof Object);

// Array.isArray(value);

// let fruits= ["Apple", "Banana", "Cherry"];
// console.log(Array.isArray(fruits));

// let emptyArr=[];
// console.log(Array.isArray(emptyArr));
// console.log(typeof []);

// console.log(Array.isArray([]));

// console.log("5" + 2);
// console.log('5' -2);
// console.log(true +1);
// 5.1 Implicit Conversion (Type Coercion)

// let result='10' -2;
// console.log(result);
// console.log(typeof result);

// console.log(5== '5');
// console.log(0 ==false);
// console.log(null == undefined);
// console.log('5' == 5);
// console.log('5' === 5);

// 5.2 Explicit Conversion
// • Using built-in functions.
// to Number
//  console.log(Number('123'));
//  console.log(parseInt("24px"));

//  let str='123';
//  let num=Number(str)
//  console.log(num);
//  console.log(typeof num);

//  let str1='456px';
//  let num1=parseInt(str1);
//  console.log(num1);
//  let num2=parseFloat("3,14abc")
//  console.log(num1 ,num2);

// let str='789';
// let num=+str;
// console.log(num);
// console.log(typeof num);

// let num=123;
// let str=String(num)
// console.log(str);
// console.log(typeof num);

// let num1=465;
// let str1=num.toString();
// console.log(str1);
// console.log(typeof str1);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean('Hi'));

// let value='Hello';
// console.log(!!value);
// let empty=0;
// console.log(!!empty);
// 5.3 Truthy and Falsy Values

// if("") console.log('true');
// else console.log('false');

// if(!0){
//     console.log('0 is falsy');
// }
// if(!""){
//     console.log('Empty staring is falsy');
// }
// if(!null){
//     console.log('null is falsy');
// }

// 6. Advanced Notes
// let a=10;
// let b=a;
// b=20;
// console.log(b);

// let obj1={name: "Ali"};
// let obj2=obj1;
// obj2.name='Sara';
// console.log(obj1.name);

// const sym=Symbol('id');
// let obj={[sym]:123};
// console.log(obj[sym]);

// let car={
//     brand:'camry',
//     model:'Corolla',
//     year:2026
// };
// console.log(car);
// console.log(car.brand ,car.year);

// let arr=[1,2,3,4,5];
// console.log(arr);
// arr.push(6)
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift(4));

// function  greet(name){
//     return `hello,${name}`;
// }
// console.log(greet('Nafisa'));

// const greets=(name)=> `Hello , ${name}`
//     console.log(greet('ALI'));

// let num='123';
// console.log(Number(num));
// let str=123;
// console.log(typeof String(str));

// let n='5';
// let m=5;
// console.log( typeof Number(n+m));
// console.log("5" -2);

// console.log(String(123));

// console.log(Number('123'));
// console.log(parseInt('32px'));
// console.log(Boolean(0));

// let nums=2345;
// let a=nums.toString();
// console.log(a);
// console.log(String(3456));

// let a=10;
// let b=3;
// console.log(a-b);
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let num=7;

// console.log(num % 2 == 0 ? "even" :"odd");

// let x=5;
// x +=2;
// x -=4;
// x /=6;
// x %=3;
// console.log(x);

// console.log(5 == "5");
// console.log(5==='5');
// console.log(5 !='5');
// console.log(7>3);
// console.log(7<=7);

// let age=30;
// let hasID=true;
// console.log(age>18 && hasID);
// console.log(age <18 || hasID);
// console.log(!hasID);

// let score=75;
// let result=(score >= 50 ? "pass" : "falid")
// console.log(result);

// let age=15;
// let category=age > 13 ? "Child" : "adult";
// console.log(category);

// 6. Spread Operator (...)

// let arr1=[1,2,3];
// let arr2=[...arr1,4,5]
// console.log(arr2);

// let number=[10,20 ,30];
// let copy=[...number]
// console.log(copy);

// let obj1={name:'Ali' , age:20};
// let obj2={...obj1 , country:'Afg'};
// console.log(obj2);

// let car={brand:'camry' , model:'corola' , year:2025};
// let phone={...car, price:20000};
// console.log(phone);

// let Students=['ali' ,'Nafisa' ,'Ahmad'];
// let teacher=[...Students, 'zahra' ,'morsal'];
// console.log(teacher);

// let className={name:'A',grade: 1};
// let student={...className , name:'Nafisa' ,age:20};
// console.log(student);

// 7. Rest Operator (...)

// function sum(...number){
//     return number.reduce((acc ,curr) =>acc + curr ,0);
// }

// console.log(sum(1,2,3,4,5));
// // 8. Nullish Coalescing Operator (??)

// let name=null;
// let result= name ?? "Guest";
// console.log(result);

// let username=null;
// let displayName=username ?? "Guest";
// console.log(displayName);

// let points=0;
// console.log(points ?? 100);
// console.log(0 ?? 100);

// let user={
//     name:'Sara',
//     address:{city:'Kabul' ,country:'Afg'}
// };
// // console.log(user.name,user.address.city, user.address.country);
// console.log(user ? .address ? .city);

// Real-World Example Combining Operators
// let user=[
//     {name:'Ali' , age:20},
//     {name:'Fatima' ,age:25},
//     null,
// ];
// user.forEach(user =>{
//     let name=user ?.name ?? 'Unknown';
//     let status=user?.age>18 ?'Adult':'Minor';
//     console.log(`${name} is ${status}`);
// })

// JavaScript Control Flow

// let scror=85;
// if(scror>90){
//     console.log('A');
// }else if(scror>80){
//     console.log("B");
// }else if(scror>70){
//     console.log('D');
// }else if(scror>50){
//     console.log('c');
// }else{
//     console.log('your field');
// }

// let age=18;
// if(age>18){
//     console.log("your adult");
// }else{
//     console.log('your child');
// }

// let number=5;
// if(number>0){
//     console.log('postive');
// }else{
//     console.log('Negative');
// }
//  let num=7;
//  if(num % 2 === 0){
//     console.log('even');
//  }
//  else{
//     console.log('odd number');
//  }

//  let marks=75;
//  if(marks >=90){
//     console.log('Garde:A');
//  }else if(marks >=70){
//     console.log('grade:B');
//  }else {
//     console.log('Grade:C');
//  }

//  let x=20
//  if(x>10){
//     console.log('your 10 years old');
//  }else{
//     console.log('your child');
//  }
//  let a=30;
//  if(a>10)
// {
//     console.log('bigger than 10');
// }else if(a == 10){
//     console.log('cqval to 10');
// }
// else{
//     console.log('maller than 10');
// }
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Moday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wendnseaday");
//   default:
//     console.log("Unknown day");
// }

//  for(let i=0; i<10; i++){
//     console.log('count:' +i);
//  }

//  let n=1;
//  while(n<=5){
//     console.log('Number:' +n);
//     n++;
//  }

//  let i=1;
//  do{
//     console.log("value:" +i);
//     i++;
//  }
//  while(i<=5);


//  let student={
//    name:'ali',
//    age:20,
//    grade:'A'
//  };
//  for(let key in student){
//    console.log(key+ ":" +student[key]);
//  }


//  let person={
// name:'Nafisa',
// age:20,
// city:'Kabul'
//  };
//  for(let key in person){
//    console.log(key + ":" +person[key]);
//  }
 

//  let numbers=[20,30,40];
//  for(let i in numbers){
//    console.log(i + ":"+ numbers[i]);
//  }


//  for(let i=1; i<=10; i++){
//    if(i===5) break;
//    console.log(i);
//  }

// for (let i=0; i<5; i++){
//    if(i===2){
//       continue;
//    }
//    console.log(i);
// }
//  for (let i=1; i<=10; i++){
//    if(1 % 2 === 0){
//       continue;
//    }
//    console.log(i);
//  }
// for (let i = 1; i <= 5; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for(let i=1; i<=3; i++){
//    for(let j=1; j<=3; j++){
//       console.log(`i:${i} , j:${j}`);
//    }
// }

// for(let i=1; i<=10; i++){
//    if(i % 2===0){
//       console.log(i);
//    }
// }

let password="";
// let attempts=0;
// while(password !== "123" && attempts<3){
//    password=prompt("Enter passwd");
//    attempts++;
// }
if(password === "123"){
   console.log('Access granted');
}else{
   console.log("too many attemts");
}


const passwd=['1234' , 'abcd', 'admin' ,'mypassowrd'];
const correctPasswrd="admin";
for(let i=0; i<passwd.length; i++){
   if(passwd[i] === correctPasswrd){
      console.log('password fonud:' ,passwd[i]);
      break;
   }
   console.log("Wrong password" ,passwd[i]);
}

const passwords = ["12", "abcd", "123", "admin"];

for (let i = 0; i < passwords.length; i++) {
  if (passwords[i].length < 4) {
    continue;
  }

  console.log("Checking password:", passwords[i]);
}