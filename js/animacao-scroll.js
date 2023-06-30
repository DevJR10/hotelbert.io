export default function animacaoScroll(){
   const sections = document.querySelectorAll('[data-animaScroll]')
   const tamanhoWindow = window.innerHeight * 0.7
   
   function animaScroll(){  
      sections.forEach((item) => {
         const sectionHeight = item.getBoundingClientRect().top
         const soma = (sectionHeight - tamanhoWindow) < 0

         if(soma){
            item.classList.add('active')
         }
         else{
            item.classList.remove('active')
         }
      })
   }

   window.addEventListener('scroll', animaScroll)
}