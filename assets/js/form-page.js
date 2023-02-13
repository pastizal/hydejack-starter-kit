const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const question = document.querySelector("#question");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const report = `Name: ${name.value} \nEmail: ${email.value} \nQuestion: ${question.value}`;

  console.log(report);
});

