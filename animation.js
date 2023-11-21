window.addEventListener("scroll",function(){
    let Text = this.document.querySelector('#Text-Content')
    Text.classList.toggle('rolagem',window.scrollY > 400)

    let TextDes = this.document.querySelector('#Descicao-Text')
    TextDes.classList.toggle('rolagem',window.scrollY > 400)

    let ImagemDes = this.document.querySelector('#Imagem-Projeto')
    ImagemDes.classList.toggle('rolagem',window.scrollY > 400)

    let TextAnimation = this.document.querySelector('#Project-Text')
    TextAnimation.classList.toggle('rolagem',window.scrollY > 1200)

    let TextAnimationp = this.document.querySelector('#Text-Project')
    TextAnimationp.classList.toggle('rolagem',window.scrollY > 1200)

    let AnimationImg = this.document.querySelector('#CelularImagem')
    AnimationImg.classList.toggle('rolagem',window.scrollY > 2400)

    let AnimationDesc = this.document.querySelector('#Text-Celular')
    AnimationDesc.classList.toggle('rolagem',window.scrollY > 2300)   
})