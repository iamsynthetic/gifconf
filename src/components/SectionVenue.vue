<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const venueInnerContainer = ref(null)
const venueInnerContainer2 = ref(null)
const title1 = ref(null)
const title2 = ref(null)

const windowWidth = window.innerWidth

onMounted(() => {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger:".title1",
      start:"bottom bottom",
      end: "top 0%",
      scrub:.5
    }
  })
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".venue-container",
      start:"bottom bottom",
      end: "top 20%",
      scrub: .5,
    }
  })
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger:".venue-container2",
      start:"top bottom",
      end: "top 50%",
      scrub:.5
    }
  })

  tl1.to('.title1', {x:0})

  const title1width = Number(title1.value.scrollWidth)
  const title1scrollwidth = title1width + windowWidth

  gsap.set('.title1', {x:-title1scrollwidth})


  const innerWrapperWidth = Number(-venueInnerContainer.value.offsetWidth)
  tl2.to('.venue-inner-container', {x:innerWrapperWidth, ease:"Circ.easeInOut"})

  
  tl3.to('.venue-inner-container2', {x:0})

  const venueinnercontainer2width = Number(venueInnerContainer2.value.scrollWidth)
  const venueinnercontainer2scrollwidth = venueinnercontainer2width + windowWidth

  gsap.set('.venue-inner-container2', {x:-venueinnercontainer2scrollwidth})
})
</script>

<template>
  <div id="venue" class="row-spacer">
    <div class="copy">
        <div class="title1 venue-headline" ref="title1">VENUE&nbsp;<span class="make-pink">VENUE</span>&nbsp;VENUE&nbsp;VENUE&nbsp;VENUE</div>
    </div>
    <div class="venue-container">
      
      <div class="venue-inner-container" ref="venueInnerContainer">
        <div class="element">
          <img src="/venue/ground-closeup.jpg" alt="closeup of the ground and feet walking">
        </div>
        <div class="element">
          <img src="/venue/sign.jpg" alt="image of toronto on a wall">
        </div>
        <div class="element">
          <img src="/venue/building-reflection.jpg" alt="cn tower reflecting in a window">
        </div>
      </div>
    </div>
    <div class="venue-container2">
      
      <div class="venue-inner-container2" ref="venueInnerContainer2">
        <div class="element">
          <img src="/venue/night.jpg" alt="image night scene in toronto">
        </div>
        <div class="element">
          <img src="/venue/skyline.jpg" alt="image of the city from above">
        </div>
        <div class="element">
          <img src="/venue/overhead-city.jpg" alt="image of toronto streets from above">
        </div>
      </div>
    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>

<style scoped>
.venue-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:11.25rem;
  font-weight:600;
  letter-spacing:-.4rem;
  line-height:1.25;
}
.copy
{
  display:flex;
  flex-direction:row;
  flex-wrap: nowrap;
  width:relative;
  margin-bottom:240px;
}
.title1
{
  position:absolute;
  z-index:1000;
  width:100%;
  margin-bottom:0px;
}

.venue-container, .venue-container2
{
  width:100%;
  display: flex;
  overflow-x: hidden;
  margin-bottom:20px;
}

.venue-inner-container
{
  width:relative;
  height:relative;
  position:relative;
  display:flex;
  left:100vw;
}
.venue-inner-container2
{
  width:relative;
  height:relative;
  position:relative;
  display:flex;
}

.element 
{
  width: 500px;
  height: 400px;
  background-color: #F2F2F2;
  margin: 0 16px 0 0;
  flex-shrink: 0;
}

.element img
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:0;

  filter: brightness(1) contrast(1) grayscale(.7);
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{
  .venue-headline
  {
    font-size:10rem;
  }
  .element 
  {
    width: 500px;
    height: 200px;
    background-color: #F2F2F2;
    margin: 0 16px 0 0;
    flex-shrink: 0;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .venue-headline
  {
    font-size:7rem;
  }
  .element 
  {
    width: 700px;
    height: 300px;
    background-color: #F2F2F2;
    margin: 0 16px 0 0;
    flex-shrink: 0;
  }
}
</style>
