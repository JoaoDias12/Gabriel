document.addEventListener('DOMContentLoaded', () => {
  const teamo = document.getElementById('teamo')

  teamo.addEventListener('click', e => {
    e.preventDefault()

    document.getElementById('sexo2').removeAttribute('hidden')
    document.getElementById('sexo').removeAttribute('hidden')
  })
})
