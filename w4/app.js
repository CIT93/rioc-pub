console.log("App.js connect and ready");
const formEl = document.getElementById("greet-form");
const nameInput = document.getElementById("name");
const greetingOut = document.getElementById("greet-output")

const greeting = function(event) {   
    event.preventDefault();
    greetingOut.textContent = `${nameInput.value}, make sure 🫵 do something fun today !!`;
    formEl.reset();
}

const init = function() {
    formEl.addEventListener('submit', greeting);
}

document.addEventListener('DOMContentLoaded', init);

