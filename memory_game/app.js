const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]


const gridDisplay = document.querySelector(".grid")
function create_board(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement("img")
        card.setAttribute("src","images/blank.png")
        card.setAttribute("data-id",i)
        card.addEventListener("click",flipCard)
        gridDisplay.appendChild(card)

    }
}


function flipCard(){
    let cardId = this.getAttribute("data-id")
    console.log(cardId)
    const card = cardArray[cardId]
    console.log(card)
    this.setAttribute("src",card.img)
   
}

create_board()
