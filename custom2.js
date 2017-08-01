'use strict'

;(function() { // IIFE

const link = document.querySelector('.show')
const content = document.querySelector('.enquiries')

content.classList.add('hide-text')

link.addEventListener('click', function (e){
  e.preventDefault() //Prevent default behaviour of 'a'(anchor) element when no # is there//
  content.classList.toggle('hide-text')
})

})()
