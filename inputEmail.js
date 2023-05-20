class EmailInput {
    constructor(value, placeholderText, id) {
        this.id = id
        this.value = value
        this.placeholderText = placeholderText
    }

    render() {
        const inputTag = document.createElement('input')
        inputTag.type = "text"
        inputTag.placeholder = this.placeholderText
        inputTag.setAttribute("id", this.id)


        const container = document.getElementById("container")
        container.appendChild(inputTag)
    }
    getValue() {
        const inputTag = document.getElementById(this.id)
        return inputTag.value
    }
    
    
}


export default EmailInput
