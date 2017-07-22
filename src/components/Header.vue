<template lang="html">
  <header class="app-header">
      <ul>
          <li v-for="link in navLinks">
              <router-link v-bind:to="link">{{ link }}</router-link>
          </li>
      </ul>
  </header>
</template>

<style lang="stylus">

.app-header
    min-height 12.5vh
    box-shadow 0px 4px 6px 1px rgba(#000, 0.75)
    ul
        display flex
        list-style-type none
        margin 0
    li
        flex 1 1 auto

</style>


<script>
export default {
  data(){
    return {
        navLinks: ['home', 'about']
    }
  }
}
</script>

