export default function outsideclick(element, lista){
   const html = document.documentElement
   const attribute = 'data-outside'
   if(!element.hasAttribute(attribute)){
      html.addEventListener('click', handleClick)
      element.setAttribute(attribute, '')
      lista.setAttribute(attribute, '')
   }

   function handleClick(event){
      if(!event.target.hasAttribute(attribute)){
         console.log(event.target)
         element.classList.remove('ativo')
         lista.classList.remove('ativo')
         element.removeAttribute(attribute, '')
         lista.removeAttribute(attribute, '')
         html.removeEventListener('click', handleClick)
      }
   }
}