const form = document.createElement("form");
form.id = "loginForm";
form.setAttribute(
  "style",
  `width:350px;
   padding:20px;
   margin:50px auto;
   display:flex;
   flex-direction:column;
   gap:10px;
   border-radius:8px;
   background-color:blue;
   box-shadow:0 0 15px rgba(0,0,0,0.3);
   `,
);

const title = document.createElement("h2");
title.textContent = "Login Form";
title.setAttribute(
  "style",
  `
   text-align:center;
   margin-bottom:10px;
  `,
);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter your name";
nameInput.setAttribute(
  "style",
  `
    padding:10px;
    border:1px solid #ccc;
    border-radius:4px;
  `,
);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";
emailInput.setAttribute(
  "style",
  `
    padding:10px;
    border:1px solid #ccc;
    border-radius:4px;
  `,
);

const passwd = document.createElement("input");
passwd.type = "password";
passwd.placeholder = "Enter password";
passwd.setAttribute(
  "style",
  `
    padding:10px;
    border:1px solid #ccc;
    border-radius:4px;
  `
);



const btn = document.createElement("button");
btn.type = "submit";
btn.textContent = "Login";
btn.setAttribute(
  "style",
  `
    padding:10px;
    background-color:black;
    color:white;
    border:none;
    border-radius:4px;
    cursor:pointer;
  `,
);

form.appendChild(title);
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(passwd);
form.appendChild(btn);

document.body.setAttribute(
  "style",
  `
    font-family: sans-serif;
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
);

document.body.appendChild(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value.trim() === "") {
    alert("Name cannot be empty");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Email cannot be empty");
    return;
  }

  if (passwd.value.trim() === "") {
    alert("Password cannot be empty");
    return;
  }

  alert("Form submitted successfully");
  alert(`Username: ${nameInput.value}, Email: ${emailInput.value}, Password: ${passwd.value}`);
});
