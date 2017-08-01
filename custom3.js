'use strict'

;(function() { // IIFE

const accordian = document.querySelectorAll('.accordian')
const content = document.querySelectorAll('.content')

//loop through .content blocks and set max height to hide//
for (var i = 1; i < content.length; i++) {
  content[i].style.maxHeight = 0
}

for (var i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener('click', function () {
    if (this.nextElementSibling.style.maxHeight === '900px')
    {
    //loop through closes content after opening new content//
    for (var i = 0; i < content.length; i++) {
      content[i].style.maxHeight = 0
    }
    //removes active class of each accordian button//
    for (var i = 0; i < accordian.length; i++) {
      accordian[i].classList.remove('active')
    }
  }
  //if closing bracket//
  else {
    //loop through closes content after opening new content//
    for (var i = 0; i < content.length; i++) {
      content[i].style.maxHeight = 0
    }
    //removes active class of each accordian button//
    for (var i = 0; i < accordian.length; i++) {
      accordian[i].classList.remove('active')
    }
    // adds active class (- minus sign) to accordian button clicked on (this)//
    this.classList.add('active')

    //opens sibling, content //
    this.nextElementSibling.style.maxHeight = '1000px'
  }
  //else closing bracket//
  })
}

})()
