/** help */
function log(message) {
    console.log('> ' + message)
}

/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
    card.addEventListener('dblclick', clicked)
})


function clicked() {
  const comType = this.children[0]
  const comName = this.children[2]
  const name = prompt('1-4?')
  
  switch(name){
      
    case '1':
        comName.innerHTML = 'COMUNICA: HÍBRIDA '+name
        comType.classList.add('hibrid')
        break
    case '2':
        comName.innerHTML = 'COMUNICA: HÍBRIDA '+name
        comType.classList.add('hibrid')
        break
    case '3':
        comName.innerHTML = 'COMUNICA: HÍBRIDA '+name
        comType.classList.add('hibrid')
      break
    case '4':
        comName.innerHTML = 'COMUNICA: HÍBRIDA '+name
        comType.classList.add('hibrid')
      break
  }
}


function dragstart() {

    dropzones.forEach( dropzone => 
  dropzone.classList.add('highlight'))
    // this = card
    this.classList.add('is-dragging')
}

function drag() {
    // log('CARD: Is dragging ')
}

function dragend() {
    // log('CARD: Stop drag! ')
    dropzones.forEach( dropzone => 
   dropzone.classList.remove('highlight'))
    // this = card
    this.classList.remove('is-dragging')
}

/** place where we will drop cards */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    // log('DROPZONE: Enter in zone ')
  
    //Irrelevant atm
  
}

function dragover() {
    // this = dropzone
    this.classList.add('over')
    // get dragging card, get dropzone and id
    let cardBeingDragged = document.querySelector('.is-dragging')
  
  //same effect as .over class selection, however it isnt needed anymore
    let outDraggedinto = this.id
    this.appendChild(cardBeingDragged)
   // setting coms
    setComs(outDraggedinto, cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave ')
    // this = dropzone
   this.classList.remove('over')
  
  //as card is being appended when we drag over, drop() isnt called. Event.preventDefault() is needed in that case if we wish to use it
  
}

function drop() {
  
}


function setComs(outid,card){
  const comType = card.children[0]
  const comName = card.children[2]

    switch (outid){
        case 'd1':
            comType.classList.remove('hibrid')
            comType.classList.add('dejero')
            comName.innerHTML = 'COMUNICA: DEJ 1'
        break;
        case 'd2':
           comType.classList.remove('hibrid')
           comType.classList.add('dejero')
           comName.innerHTML = 'COMUNICA: DEJ 2'
        break;
        case 'd3':
           comType.classList.remove('hibrid')
           comType.classList.add('dejero')
           comName.innerHTML = 'COMUNICA: DEJ 3'
        break;
        case 'd4':
           comType.classList.remove('hibrid')
           comType.classList.add('dejero')
           comName.innerHTML = 'COMUNICA: DEJ 4'
        break;
       case 'd5':
           comType.classList.remove('hibrid')
           comType.classList.add('dejero')
           comName.innerHTML = 'COMUNICA: DEJ 5'
        break;
        case 'l1':
          comType.classList.remove('hibrid')
          comType.classList.remove('dejero')
          comName.innerHTML = ''
        break;
       case 'rd1':
       case 'rd2':
       case 'rd3':
       case 'rd4':
         comType.classList.add('hibrid')
         comName.innerHTML = 'COLOQUE UMA HIBRIDA'
    }
  
}




