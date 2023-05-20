class Button {
    constructor(text, background) {
       this.id = id
       this.background = background
    }

    render() {
      const buttonTag = document.createElement('button')
      buttonTag.innerText = this.text
      buttonTag.style.backgroundColor = this.backgroundColor
      const container = document.getElementById('container')
      container.appendChild(buttonTag)
      const emailvalue = document.getElementById('email')
      const passwordvalue = document.getElementById('password')
      const account = JSON.parse(localStorage.getItem('account'))
      buttonTag.onclick = () => {
        if(account.lenght) {
          account.push ({
            email: emailInput.value,
            password: passwordInput.value
          })
          localStorage.setItem('account', JSON.stringify(account))
        }
        else {
          localStorage.setItem('account', JSON.stringify([{
            email: emaiInput.value,
            password: passwordInput.value
          }]))
        }
        

      }
const container = document.getElementById('container')
container.appendChild(butonTag)

    }
    
}
export default Button