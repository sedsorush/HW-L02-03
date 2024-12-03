// EYES Function

const showpass1 = document.getElementById("showpass1")
const pass1 = document.getElementById("password1")
const line1 = document.getElementById("img4")

showpass1.addEventListener("click" , () => {
    if(pass1.type === "password") {
        pass1.type = "text";
        line1.style.display = "flex"
    }
    else{
        pass1.type = "password";
        line1.style.display = "none"
    }
})


const showpass2 = document.getElementById("showpass2")
const pass2 = document.getElementById("password2")
const line2 = document.getElementById("img6")

if (showpass2 !== null) {
    showpass2.addEventListener("click" , () => {
        if(pass2.type === "password") {
            pass2.type = "text";
            line2.style.display = "flex"
        }
        else{
            pass2.type = "password";
            line2.style.display = "none"
        }
})}

// Email Authentication

const email = document.getElementById("email")
const confirmed = document.getElementById("ok")
const errorEmail = document.getElementById("errorEmail")
const regex = /^[a-zA-Z0-9.-_+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

confirmed.addEventListener("click" , () => {
    if (email.value === "") {
        email.style.border = "2px , red , solid"
        errorEmail.textContent = "The box is empty! Please enter your email."
        errorEmail.style.display = "flex"
    }
    else if (regex.test(email.value) === false) {
        email.style.border = "2px , red , solid"
        errorEmail.textContent = "Wrong email format! Please enter your email correctly."
        errorEmail.style.display = "flex"
    }
})
email.addEventListener("click" , () => {
    errorEmail.style.display = "none"
    email.style.border = "#a7a6a6 1px solid"
})