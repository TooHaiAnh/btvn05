import EmailInput from "./inputEmail.js"
import PassInput from "./pass.js"
import Button from "./button.js"

const emailInput = new EmailInput("Email hoặc số điện thoại", "email")

emailInput.render()

const passwordInput = new PassInput("Mat khau", "password")

passwordInput.render()

const submit = new Button("Dang ki", "#ff0000")
submit.render
