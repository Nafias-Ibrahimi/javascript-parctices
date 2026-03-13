// const div=document.createElement('div');
// div.className='todo-container';
// // title h2
// const title=document.createElement('h2');
// title.textContent='To-Do List';

// // input
// const input=document.createElement('input');
// input.type='text';
// input.id='taskInput';
// input.placeholder='Add new task...';

// // button

// const btn=document.createElement('button');
// btn.id='addTask';
// btn.textContent='add';

// // list
// const list=document.createElement('ul');
// list.id='taskList';

// // add localStorage
// function loadTasks() {
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   tasks.forEach(task => {
//     addTaskToList(task);
//   });
// }
// // new method
// function addTaskToList(taskText) {
//   const li = document.createElement('li');
//   li.textContent = taskText;

// div.appendChild(title);
// div.appendChild(input);
// div.appendChild(btn);
// div.appendChild(list);
// document.body.appendChild(div);

// btn.addEventListener('click' ,() =>{
//     const taskText=input.value.trim();
//     if(taskText === ""){
//         alert('please enter a task');
//         return;
//     }
//     const li=document.createElement('li');
//     li.textContent=taskText;

//     const deleteBtn=document.createElement('button');
//     deleteBtn.textContent= "❌";
//     deleteBtn.style.marginLeft='10px';
//     deleteBtn.addEventListener('click' ,()=>{

//         list.removeChild(li);
//     });

//     const editBtn=document.createElement('button');
//     editBtn.textContent='✏️ Edit';
//     editBtn.style.marginLeft='10px';
//     editBtn.addEventListener('click' , ()=>{
//         const newText=prompt('Enter your Task:' , li.firstChild.textContent);
//         if(newText !==null && newText.trim() !==""){
//             li.firstChild.textContent=newText.trim();
//             saveTasks();
//         }
//     })


//     li.appendChild(deleteBtn);
//     li.appendChild(editBtn);
//     list.appendChild(li);
  

// });

const div = document.createElement('div');
div.className = 'todo-container';

// title h2
const title = document.createElement('h2');
title.textContent = 'To-Do List';

// input
const input = document.createElement('input');
input.type = 'text';
input.id = 'taskInput';
input.placeholder = 'Add new task...';

// button
const btn = document.createElement('button');
btn.id = 'addTask';
btn.textContent = 'Add';

// list
const list = document.createElement('ul');
list.id = 'taskList';

div.appendChild(title);
div.appendChild(input);
div.appendChild(btn);
div.appendChild(list);
document.body.appendChild(div);

// --- ذخیره وظایف در localStorage ---
function saveTasks() {
  const tasks = [];
  list.querySelectorAll("li").forEach(li => {
    tasks.push(li.firstChild.textContent); // فقط متن وظیفه ذخیره می‌شود
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// --- بارگذاری وظایف از localStorage ---
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    addTaskToList(task);
  });
}

// --- تابع ساخت آیتم جدید ---
function addTaskToList(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
    saveTasks();
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️ Edit';
  editBtn.style.marginLeft = '10px';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Enter your Task:', li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
      saveTasks();
    }
  });

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  list.appendChild(li);
}

// --- رویداد دکمه Add ---
btn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert('please enter a task');
    return;
  }
  addTaskToList(taskText);
  input.value = "";
  saveTasks();
});

// 
window.onload = loadTasks;
