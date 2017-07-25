<template>
  <main class="getting-started content">
    
    <h2>Getting Started</h2>
    <h3 id="tired">Tired Of Fighting Alone?</h3>
    
    <div id="alone" class="alone-card hide toReveal">
      <section class="img-container">
        <img src="/images/entrepreneur.jpg" />
      </section>
      <section class="text-content">
        <p>Here at ____ you'll find like-minded underdogs, willing to go against the grain. It's more than about just business - you'll be forging life-long relationships.</p>
        <p>Our Network is free and always will be. You'll most certainly find a couple of mentors and future co-founders here.</p>
        <p>So go ahead and click the registration tab! You have nothing to lose.</p>    
      </section>
    </div>

    <section class="chips-choices">

      <Chip img-src="/images/leader.jpeg">

      </Chip>

      <Chip>

      </Chip>

      <Chip>

      </Chip>

    </section>
  </main>
</template>

<style lang="stylus" scoped>

.getting-started
  padding 2rem
  // background-color #ccc

  h2, h3
    font-family Liberation-sans, Helvetica, Arial, sans-serif

  h2
    display inline-block
    font-size 3rem
    color #333
    padding-bottom 2rem
    border-bottom 0.2rem #222 dashed
    
  h3
    font-size 1.5rem


.alone-card
  display flex
  background-color #fff
  border-radius 0.8rem
  flex-wrap wrap
  overflow hidden
  border 4px solid #666

  img
    flex 1;

  .img-container
    max-width 100%
    flex 1 1 30%
    display flex
    flex-direction column
    // max-width 30%
    // float left
    // border-radius 1rem 0 0 1rem
    // display block
    // max-width 400px
    // max-height 95px
    // width auto
    // height 100%
    // width 30%

  .text-content
    flex 1 1 70%
    // width 70%
    padding 2rem
    // min-width 70%

.alone-card
  animation 1.5s remove

.chips-choices
  margin 2rem auto
  display flex
  flex-wrap wrap
  background-color #ababab
  border-radius 2px


  > *
    flex 1 1 auto
    margin 0 0.1rem
    // max-width 33%


@media screen and (max-width 1000px)

  // .getting-started
  //   h2
  //     font-size 1.75rem
    
  //   h3
  //     font-size 1.25rem


  .alone-card
    flex-wrap wrap
    max-width 80%
    margin 0 auto
  
    .img-container
      // max-width 50%
      flex 1 1 100%
      width 100%

      img 
        flex 0

    .text-content
      flex 1 1 100%
      width 100%

@media screen and (max-width 480px)
  .getting-started
    padding 2rem 1rem

    h2
      font-size 1.9rem

    h3
      font-size 1.25rem

  .alone-card
    max-width none
    width 100%
    border 0;

    



</style>

<script>

import Chip from './Chip';

const templateInstance = {
  components: {
    Chip
  }
}

export default templateInstance;
</script>
