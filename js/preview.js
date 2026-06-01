'use strict'

import { uploadParaCloudinary } from './cloudinay.js'



async function enviarFoto() {
        const input = document.getElementById('preview-input')
        const linkPublico = await uploadParaCloudinary(input.files[0])
        console.log('Link público da imagem:', linkPublico)
}

document.getElementById('preview-input')
        .addEventListener('change', preview)

document.getElementById('upload-button')
        .addEventListener('click', enviarFoto)
