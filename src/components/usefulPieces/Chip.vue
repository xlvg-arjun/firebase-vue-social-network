<template>
  <div class="chip toReveal">
    <section class="img-container">
      <img v-bind:src="imgSrc" />
    </section>
  
    <section class="text-content">
      <slot></slot>
    </section class="text-content">
  </div>
</template>

<style lang="stylus" scoped>
@import "../../styl/globals"

.chip
  display flex
  flex-direction column
  border-radius 2px
  margin 1rem 0.5rem
  // border 4px solid #666
  // flex 1 1 33%
  // overflow hidden
  box-shadow 0px 0px 8px #000
  transition all 0.5s ease


  &:hover
    transform scale(1.05)
  

.img-container
  // flex 1 1 30%
  // height 25rem
  display flex
  flex-direction column
  // border-bottom 10px solid #555
  box-shadow 0px 0px 8px #000
  margin-bottom 0.5rem
  min-height 18rem

  img
    // flex 0 1 20vh
    height 100%
    // border-bottom 10px solid transparent
  

.text-content
  flex 1 1 70%
  padding 1rem
  box-shadow 0px 0px 8px #000


// @media screen and (max-width $md)
//   .img-container
//     height 20vh


@media screen and (max-width $md)
  
 

  .img-container
    // flex-direction row
    flex 1 1;
    min-height 30rem
    img
      min-height none

</style>


<script>
export default {
  props: ['imgSrc']
}
</script>
