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


let result='10' -2;
console.log(result);
console.log(typeof result);

console.log(5== '5');
console.log(0 ==false);
console.log(null == undefined);
console.log('5' == 5);
console.log('5' === 5);

// 5.2 Explicit Conversion







