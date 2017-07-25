<template>
  <div class="chip">
    <section class="img-container">
      <img v-bind:src="imgSrc" />
    </section>
  
    <section class="text-content">
      <slot></slot>
    </section class="text-content">
  </div>
</template>

<style lang="stylus" scoped>

.chip
  display flex
  flex-direction column
  border-radius 2px
  border 4px solid #666
  flex 1 1 33%
  // overflow hidden

.img-container
  flex 1 1 30%
  display flex
  flex-direction column
  // border-bottom 10px solid #555

  img
    flex 1 1 auto
    border-bottom 1px solid #555

.text-content
  flex 1 1 70%
  padding 1rem

</style>


<script>
export default {
  props: ['imgSrc']
}
</script>
