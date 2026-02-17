
const form = document.querySelector('.form')
const cardsContainer = document.querySelector('.cards')
form.addEventListener('submit',(e)=>{

e.preventDefault()
console.log(eventTitle.value)

console.log(eventDate.value)
console.log(category.value)
console.log(description.value)
let title=eventTitle.value
let date=eventDate.value
let cat=category.value
let desc=description.value
 const card=document.createElement('div')
 card.classList.add(`card`)
  if (title.trim() === '' || date.trim() === '') {
    alert('Please enter required fields')
    return
  } 
  card.innerHTML = `
    <div class="dlt">×</div>
    <h3>${title}</h3>
    <p>🗓️Date: ${date}</p>
    <button>${category}</button>
    <p>${description}</p>
  `

  cardsContainer.appendChild(card)

  console.log("Parent:", card.parentElement)
  console.log("Children:", card.children)
  console.log("First Child:", card.firstElementChild)

  const heading = card.querySelector('h3')
  console.log("innerText ->", heading.innerText)
  console.log("textContent ->", heading.textContent)
  console.log("innerHTML ->", heading.innerHTML)


  const today = new Date().toISOString().split('T')[0]

  if (date === today) {
    card.style.border = "2px solid green"
  }

  card.addEventListener('mouseover', function () {
    card.style.backgroundColor = "lightblue"
  })

  card.addEventListener('mouseout', function () {
    card.style.backgroundColor = "white"
  })

  
  form.reset()
})



cardsContainer.addEventListener('click', function (e) {

  
  if (e.target.classList.contains('dlt')) {

    console.log("Delete button clicked")

    e.target.parentElement.remove()
  }

})
