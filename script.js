function carregar (){
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours()   

msg.innerText = `agora sao ${hora} horas`

if (hora >= 0 && hora < 12 ){
    img.src = 'fotomanha.jpg'
    document.body.style.backgroundColor = 'rgb(238, 189, 124)'
}else if (hora >= 12 && hora < 18){
    img.src = 'fototarde.jpg'
    document.body.style.backgroundColor = 'rgb(231, 158, 61)'

} else {
    img.src = 'fotonoite.jpg'
    document.body.style.backgroundColor = 'rgb(0, 48, 119)'
}
}