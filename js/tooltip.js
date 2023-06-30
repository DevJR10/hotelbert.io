export default function tooltip(){
   const tooltipMapa = document.querySelector('.localizacao-img')

   function onTooltip(event){
      const tooltip = createTooltip(this)
      
      
      onMouseLeave.tooltip = tooltip
      onMouseLeave.evento = this

      onMouseMove.tooltip = tooltip

      this.addEventListener('mouseleave', onMouseLeave)
      this.addEventListener('mousemove', onMouseMove)
   }

   function createTooltip(element){
      const div = document.createElement('div')
      const text = element.getAttribute('aria-label')
      div.classList.add('tooltip-active')
      div.innerText = text
      document.body.appendChild(div)
      return div
   }

   const onMouseLeave = {
      tooltip: '',
      handleEvent(){
         this.tooltip.remove()
         this.evento.removeEventListener('mouseleave', onMouseLeave)
      }
   }

   const onMouseMove = {
      handleEvent(event){
         this.tooltip.style.top = event.pageY + 15 + 'px'
         this.tooltip.style.left = event.pageX + 15 + 'px'
      }
   }

   tooltipMapa.addEventListener('mouseover', onTooltip)
}