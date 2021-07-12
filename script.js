"use strict";

const answers = document.querySelectorAll(".ans");
const btnShow = document.querySelectorAll(".btn-dropdown");
const btnHide = document.querySelectorAll(".btn-hide");
const questions = document.querySelectorAll(".q h3");

btnShow.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    questions.forEach((q) => {
      q.style.fontWeight = 200;
      q.style.color = "var(--neutral-gray-blue-dkr)";
    });

    btnHide.forEach((btn) => {
      btn.classList.add("hidden");
    });

    btnShow.forEach((btn) => {
      btn.classList.remove("hidden");
    });

    answers.forEach((answer) => {
      answer.classList.remove("active-answer");
    });

    e.currentTarget.parentElement.parentElement.lastElementChild.classList.add(
      "active-answer"
    );

    e.currentTarget.classList.add("hidden");
    e.currentTarget.nextElementSibling.classList.remove("hidden");
    e.currentTarget.parentElement.firstElementChild.style.fontWeight = 700;
    e.currentTarget.parentElement.firstElementChild.style.color = "black";
  });
});

btnHide.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    answers.forEach((answer) => {
      answer.classList.remove("active-answer");
    });
    e.currentTarget.classList.add("hidden");
    e.currentTarget.previousElementSibling.classList.remove("hidden");
    e.currentTarget.parentElement.firstElementChild.style.fontWeight = 200;
    e.currentTarget.parentElement.firstElementChild.style.color =
      "var(--neutral-gray-blue-dkr)";
  });
});
