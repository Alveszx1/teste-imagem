import { renderizarPagina } from "../main.js"


function preview (input) {
    document.getElementById('preview-image')
            .src = URL.createObjectURL(input.files[0])
   
}

    export function criarPreview() {
        const container = document.createElement('form')
        const previewContainer = document.createElement("div")
        previewContainer.classList.add("preview-container")

        const input = document.createElement("input")
        input.id = 'preview-input'
        input.classList.add('preview-input')
        input.type = "file"
        input.accept = 'image/*'
        input.onchange = () => preview(input)


        const label = document.createElement("label")
        label.className = "preview-label"
        label.htmlFor = "preview-input"


        const image = document.createElement("img")
        image.id = "preview-image"
        image.className = "preview-image"
        image.src = "./img/upload-icon.svg"

        previewContainer.append(input,label, image)
        
        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("button-container")

        const uploadButton = document.createElement("button")
        uploadButton.className = "button"
        uploadButton.type  = "button"
        uploadButton.id = "upload-button"
        uploadButton.textContent = "Salvar"

        const cancelButton = document.createElement("button")
        cancelButton.className = "button"
        cancelButton.type  = "button"
        cancelButton.textContent = "Cancelar"
        cancelButton.onclick = () => renderizarPagina("login")


        buttonContainer.append(uploadButton,cancelButton)

        container.append(previewContainer,buttonContainer)
        return container
    }