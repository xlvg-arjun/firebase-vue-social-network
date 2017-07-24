<template>
	<section class="banner content">
		<div class="information reveal">
			<h6>Meet New Friends</h6>
			<h5>The Perfect Co-Founder</h5>
			<h4>The Ideal Mentor</h4>
			<h2>Or Even Forge Your Dream Team</h2>
			<a class="btn">Get Started</a>
		</div>
	</section>
</template>

<style lang="stylus" scoped>

.banner
	color white
	overflow hidden
	min-height 100vh
	min-width 99.99vw
	background-image url('/images/together.jpeg')
  background-size 100%
  background-attachment fixed
  background-repeat no-repeat
  background-position center
	// min-height 30vh


.information
	font-size 1.25rem
	margin-top 20vh
	padding 1rem
	border-radius 1rem
	background rgba(#000, 0.4)
	display inline-block

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
	transition all 0.1s
	

	&:hover 
		background #5d6263
		background-image linear-gradient(to bottom, #5d6263, #111212)
		text-decoration none
		transform scale(1.2)


	
</style>

<script>
export default {

}
</script>
