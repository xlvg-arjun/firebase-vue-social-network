<template>
  <footer class="app-footer">
    <nav class="external">
      <ul>
        <li class="li-item" :key="i" v-for="(external, i) in externalLinks">
          <a :href="external.link">{{ external.name }}</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="stylus" scoped>
  .app-footer
    background linear-gradient(#000, #111, #222)
    width 100%
    
    a
      color white

  .external ul
    max-width 40%
    display flex
    margin 0
    padding 0


    li
      margin 0
      list-style-type none
      margin-right auto
      padding 0.5rem
      text-transform uppercase
      
</style>

<script>
export default {
  data() {
    return {
      externalLinks: [
        {link: 'https://arjunepr.github.io', name: 'github'},
        {link: 'linkedInLink', name: 'linkedIn'},
        {link: 'thirdworldcoder', name: 'twitter'},
      ]
    }
  }
}
</script>
