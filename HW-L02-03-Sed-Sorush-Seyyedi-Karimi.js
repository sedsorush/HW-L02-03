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