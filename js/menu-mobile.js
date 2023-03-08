export default function menuMobile(){
   const btn = document.querySelector('[data-mobile="btn"]')
   const lista = document.querySelector('[data-mobile="lista"]')

   function abrirMenuMobile(){
      btn.classList.toggle('ativo')
      lista.classList.toggle('ativo')
   }

   btn.addEventListener('click', abrirMenuMobile)

}