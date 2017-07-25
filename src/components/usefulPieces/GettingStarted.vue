<template>
  <main class="getting-started content">
    
    <h2>Getting Started</h2>

    <hgroup>
      <h3 id="tired">Tired Of Fighting Alone?</h3>
    </hgroup>
    
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

    <hgroup>
      <h3>why join us</h3>
    </hgroup>

    <section class="chips-choices">

      <Chip img-src="/images/leader.jpeg">
        <hgroup>
          <h3>Heading One</h3>
        </hgroup>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos expedita ex vitae ipsa iusto consequuntur? Sed itaque rerum quas ducimus molestias voluptas, earum, magnam, suscipit doloribus ut quam culpa!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatibus quas obcaecati deserunt magni harum porro quaerat labore repellat neque, tempore ex nam, sit id dolores nemo eius ipsum quis.
      </Chip>

      <Chip img-src="/images/hand.jpeg">
        <hgroup>
          <h3>Heading Two</h3>
        </hgroup>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos expedita ex vitae ipsa iusto consequuntur? Sed itaque rerum quas ducimus molestias voluptas, earum, magnam, suscipit doloribus ut quam culpa!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatibus quas obcaecati deserunt magni harum porro quaerat labore repellat neque, tempore ex nam, sit id dolores nemo eius ipsum quis.
      </Chip>

      <Chip>
        <hgroup>
          <h3>Heading Three</h3>
        </hgroup>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eos expedita ex vitae ipsa iusto consequuntur? Sed itaque rerum quas ducimus molestias voluptas, earum, magnam, suscipit doloribus ut quam culpa!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatibus quas obcaecati deserunt magni harum porro quaerat labore repellat neque, tempore ex nam, sit id dolores nemo eius ipsum quis.
      </Chip>

    </section>
  </main>
</template>

<style lang="stylus" scoped>
@import "../../styl/globals"

.getting-started
  padding 2rem
  // background-color #ccc

  h2, h3
    font-family Liberation-sans, Helvetica, Arial, sans-serif
    text-transform uppercase
    display inline-block

  h2
    font-size 3rem
    color #333
    padding-bottom 2rem
    border-bottom 0.2rem #222 dashed
    
  h3
    font-size 2rem
    padding-bottom 1rem
    border-bottom 1px solid #555

  hgroup
    display block


.alone-card
  display flex
  background-color #fff
  border-radius 0.8rem
  // flex-wrap wrap
  overflow hidden
  // border 4px solid #666
  box-shadow 0px 0px 8px #000
  transition all 0.5s ease


  &:hover
    transform scale(1.05)



  img
    flex 1;

  .img-container
    // max-width 100%
    
    flex 1 1 30%
    display flex
    flex-direction column
    box-shadow 0px 0px 8px #000
    margin-right 0.2rem

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
    flex 1 1 40rem;
    // width 70%
    padding 2rem
    // min-width 70%
    box-shadow 0px 0px 8px #000

.alone-card
  animation 1.5s remove

.chips-choices
  margin 2rem auto
  display flex
  // flex-wrap wrap
  // background-color #ababab
  border-radius 2px


  > *
    flex 1 1 33%
    margin 0 0.1rem
    // max-width 33%


@media screen and (min-width $md)
  .alone-card
    max-height 16rem



@media screen and (max-width $md)

  // .getting-started
  //   h2
  //     font-size 1.75rem
    
  //   h3
  //     font-size 1.25rem


  .alone-card
    flex-wrap wrap
    max-width 65%
    margin 0 auto 1.5rem
  
    .img-container
      // max-width 50%
      flex 1 1 100%
      width 100%

      img 
        flex 0

    .text-content
      flex 1 1 100%
      width 100%


  .chips-choices
    // flex-wrap wrap
    flex-direction column
    max-width 65%
    // min-height 10rem
    background-color inherit
    margin 0 auto
    > *
      flex 1 1 100%
      margin 1.5rem 0
      

@media screen and (max-width $sm)
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

  
  .chips-choices
    max-width none



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
