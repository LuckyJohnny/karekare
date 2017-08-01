'use strict'

;(function() { // IIFE



  const drawer = document.querySelector('.sticky')
  const nav = document.querySelector('nav')
  const html = document.querySelector('html')

  //create link eleemnts , set attributes , class content//
  var menu = document.createElement('a')
  var close = document.createElement('a')
  menu.setAttribute('href', '#')
  close.setAttribute('href', '#')
  menu.classList.add('menu')
  close.classList.add('close')
  menu.innerHTML = '<span>Menu</span>'
  close.innerHTML = '<span>Close</span>'

  //append links before drawer and nav//
  drawer.parentNode.insertBefore(menu, drawer)
  nav.parentNode.insertBefore(close, nav)

  menu = document.querySelector('.menu')
  close = document.querySelector('.close')

  //hide drawer with css//
  drawer.style.width = 0

  menu.addEventListener('click', function(e) {
    e.preventDefault()
    drawer.style.width = '250px'

  })

  close.addEventListener('click', function(e) {
    e.preventDefault()
    drawer.style.width = '0'

  })


  html.classList.add('js')

})()
