export default class scrollSuave{
   constructor(link, options){
      this.links = document.querySelectorAll(link)
      if (options === undefined){
         this.options = {
            behavior: 'smooth',
            block: 'start'
         }
      } else{
         this.options = options
      }
   }

   getHref(link){
      link.preventDefault()
      const hrefElement = link.target.getAttribute('href')
      const sectionElement = document.querySelector(hrefElement)
      sectionElement.scrollIntoView(this.options)
   }

   linkElement(){
      this.links.forEach((link) => {
         link.addEventListener('click', (event) => {
            console.log(event)
            this.getHref(event)
         })
      })
   }

   init(){
      this.linkElement()
   }
}