<template lang="html">
  <header class="app-header reveal">
      <nav class="">
          
      
        <!-- <li v-for="link in navLinks">
          <router-link v-bind:to="link === 'home' ? '/' : link">{{ link.split('-').join(' ') }}</router-link>
        </li> -->

        <!-- <li v-for="link in navLinks">

        </li> -->

        <router-link class="nav-item" v-for="link in navLinks" :to="link === 'home' ? '/' : link" :key="link" tag="div">{{ link.split('-').join(' ') }}</router-link>


        <div class="nav-item login">

        </div>
      </nav>
  </header>
</template>

<style lang="stylus">

.app-header
  background-color rgba(#222, 0.8)
  box-shadow 0px 0px 6px 8px rgba(0,0,0,0.75)
  position fixed
  width 100%
  line-height 2
  letter-spacing 0.1rem
  font-weight 900
  text-transform uppercase
  font-family 'Roboto'

  // width 100%
  // margin 0 auto
  text-align center
  font-family 'Roboto', 'Franklin Gothic Medium', Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif

  // top 0
  z-index 1  
  
  nav
    // padding 1rem
    // margin 0
    line-height 2
    height 100%
    display flex

    div
      // font-size 0.9rem
      display inline-block
      // min-width 25%
      // flex 1 1 auto
      min-width 20%
      line-height 2
      padding 1rem
      margin 0
      color white
      cursor pointer
      font-family Liberation-sans, Helvetica, 'Helvetica Neue', sans-serif;
      transition background-color 0.4s
      height 120%

      &:hover
        background-color rgba(#fff, 0.8)
  



</style>


<script>
export default {
  data(){
    return {
        navLinks: ['home', 'blog', 'policy', 'register', 'login']
    }
  }
}
</script>

