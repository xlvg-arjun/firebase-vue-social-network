import './index.html';

import App from './app.vue';
import routes from './router';

import Vue from 'vue';
import VueRouter from 'vue-router';

// const VueMaterial = require('vue-material');

import 'normalize.css';
// import 'vue-material/dist/vue-material.css';

import './styl/style';


Vue.use(VueRouter);
// Vue.use(VueMaterial);
// materials.forEach(item => Vue.use(item));


const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
    el: '#app-container',

    ready(){

      document.title = this.title;

    },

    data: {
      title: 'Interleave'  
    },

    router,
    
    render: h => h(App)
})

// import { Component } from 'react';

// IMAGES

import './images/together.jpeg';
import './images/entrepreneur.jpg';
import './images/leader.jpeg';
import './images/hand.jpeg';



// FONTS

import './fonts/quicksand/Quicksand-Light.otf';


// For making elements fade into view on scroll
/*
window.addEventListener('scroll', function(ev) {

   const tired = document.getElementById('tired');
   const tiredToBottom = tired.getBoundingClientRect().bottom;
   const aloneCard = document.getElementById('alone');

   const distanceToBottom = window.innerHeight - tiredToBottom;

   if(distanceToBottom > 40){
     aloneCard.classList.add('reveal');
   } else {
     aloneCard.classList.remove('reveal');
   }
});
*/

function checkOnScroll(ev) {

  const revealItems = document.querySelectorAll('.toReveal');

  // console.log(revealItems);

  revealItems.forEach(item => {

    const itemToBottom = item.getBoundingClientRect().top;

    const distanceToBottom = window.innerHeight - itemToBottom;

    const clientHeight = item.clientHeight;

    if(distanceToBottom > clientHeight / 8){
      item.classList.remove('hide');
      item.classList.add('reveal-two');
    } else {
      item.classList.add('hide');
      item.classList.remove('reveal-two');
    }

  })
}

import { throttle } from 'underscore';


const throttleCheck = throttle(checkOnScroll, 700);

window.addEventListener('scroll', throttleCheck);