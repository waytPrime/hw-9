const form = document.querySelector(".feedback-form");
const LS_STATE = "feedback-form-state";
const stateLs = {};
const emailEl = document.querySelector("input");
const messageEl = document.querySelector("textarea");
const objCreate = JSON.parse(localStorage.getItem(LS_STATE));
reload(objCreate);
function reload(obj) {
  if (obj) {
    messageEl.value = obj.message ?? "";
    emailEl.value = obj.email ?? "";
  }
}

form.addEventListener("input", (e) => {
  stateLs[e.target.name] = e.target.value;
  stateLs.message = e.currentTarget.elements.message.value;
  stateLs.email = e.currentTarget.elements.email.value;
  console.log(stateLs);
  localStorage.setItem(LS_STATE, JSON.stringify(stateLs));
  console.log(stateLs);
});
form.addEventListener("submit", (e) => {
  localStorage.clear();
  //   stateLs = {};
  e.preventDefault();
  form.reset();
});
