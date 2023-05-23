const textArea= document.querySelector(".text")
const mensaje= document.querySelector(".area_copiar")
//Para encriptar el texto.
function bton_encriptar(){
    const text_encriptado= encriptar(textArea.value)
    mensaje.value=text_encriptado
    textArea.value="";
    mensaje.style.backgroundImage= "none";
}

function encriptar(string_enc){
    let matriz=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    string_enc=string_enc.toLowerCase()

    for(let i=0; i<matriz.length; i++){
        if(string_enc.includes(matriz[i][0])){
            string_enc=string_enc.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return string_enc
}
//Para desencriptar el texto
function bton_desencriptar(){
    const text_encriptado= desencriptar(textArea.value)
    mensaje.value=text_encriptado
    textArea.value="";
    mensaje.style.backgroundImage= "none";
}

function desencriptar(string_des){
    let matriz=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    string_des=string_des.toLowerCase()

    for(let i=0; i<matriz.length; i++){
        if(string_des.includes(matriz[i][1])){
            string_des=string_des.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return string_des
}

//Para copiar el texto
function bton_copiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado exitosamente.");
}



