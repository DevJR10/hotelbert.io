import outsideclick from "./outside.js"

export default function menuMobile(){
   const btn = document.querySelector('[data-mobile="btn"]')
   const lista = document.querySelector('[data-mobile="lista"]')

   function abrirMenuMobile(){
      btn.classList.toggle('ativo')
      lista.classList.toggle('ativo')
      outsideclick(this, lista)
   }

   btn.addEventListener('click', abrirMenuMobile)

}