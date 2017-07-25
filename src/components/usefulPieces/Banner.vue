<template>
	<section class="banner content">
		<div class="information reveal">
			<hgroup>
				<h6>Don't Walk Alone. Come With Us</h6>
				<h5>Maybe Get Yourself That Perfect Co-Founder</h5>
				<h4>Meet A Legendary Mentor</h4>
				<h2>And Forge Your Dream Team</h2>
			</hgroup>
			<a class="btn">Get Started</a>
		</div>
	</section>
</template>

<style lang="stylus" scoped>
@import "../../styl/globals"


.banner
	color white
	margin 0
	// overflow hidden
	min-height 100vh
	// min-width 99vw
	width 100%
	background-image url('/images/together.jpeg')
  background-size 100%
  background-attachment fixed
  background-repeat no-repeat
  background-position center
	// min-height 30vh

	



.information
	font-size 1.25rem
	margin-top 20vh
	padding 1rem 10rem
	width 70%
	border-radius 1rem
	background rgba(#000, 0.4)
	display inline-block
	box-shadow 0px 0px 8px #bbb

	h6, h4
		text-align left

	h5, h2
		text-align right

	// h4
	// 	text-align left
	
	// h2
	// 	text-align right

	a.btn
		text-align center

a.btn
	display inline-block
	background: #46484a
	background-image linear-gradient(to bottom, #46484a, #050505)
	border-radius 4rem
	box-shadow 0px 0px 8px #faf0fa
	padding 0.8rem
	font-size 1.2rem
	color white
	text-decoration none
	border 5px ridge silver
	transition all 0.1s ease
	

	&:hover 
		background #5d6263
		// letter-spacing 1px
		background-image linear-gradient(to bottom, #5d6263, #111212)
		text-decoration none
		transform scale(1.02)


	
</style>

<script>
export default {

}
</script>
