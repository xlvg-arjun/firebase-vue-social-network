import './styl/style';

import './index.html';

import App from './components/app';

import Vue from 'vue';
import VueRouter from 'vue-router';

const VueMaterial = require('vue-material');

import 'normalize.css';
import 'vue-material/dist/vue-material.css';


Vue.use(VueRouter);
Vue.use(VueMaterial);
// materials.forEach(item => Vue.use(item));


const router = new VueRouter();

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