let error = document.getElementById("error");
let small = document.getElementById("small");
let email = document.querySelector("[name='E-mail']");

console.log(error);
console.log(small);
console.log(email);

document.forms[0].onsubmit = function (e) {
    if (email.value.includes('@')) {
        // console.log('has @');
        true;
    } else {
        e.preventDefault();
        error.classList.remove("hide");
        small.classList.remove("hide");
    }

}
email.onclick = function () {
    error.classList.add("hide");
    small.classList.add("hide");
}


