<!-- this component is going be a 'promo' just some words and a video or image -->

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable);


onMounted(() => {
  doMapFunction()
})


const doMapFunction = () => {

  ////////////////////////////////////// animate the headline in //////////////////////////////////////

  gsap.set('.map-title-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".map-title-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });

  ////////////////////////////////////// animate the map in //////////////////////////////////////

  gsap.set('.the-map-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".the-map-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });

  Draggable.create('.box', {
    bounds: '.the-map-container',
    ease:"Circ.easeInOut"
  })
}

</script>

<template>
  <div class="general-gutter">
    <div class="row-spacer"></div>
    <div class="map-title general-headline map-title-anim">MAP</div>
    <div class="map-row the-map the-map-anim">
        <div class="the-map-container">
          <div class="box">
            <img class="mapimage" src="/map/mapimage.jpg" alt="image of a map of toronto">
          </div>
        </div>
    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>


<style>

.map-title
{
  margin-bottom:20px;
}

.map-row
{
  display:flex;
  flex-direction:row;
}

.the-map
{
  height:40vw;
  margin-left:-5px;
  background-color:pink;
}

.the-map-container
{
  width:100%;
  height:100%;
  overflow:hidden;
}

.mapimage
{
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:0;  

  filter: brightness(1) contrast(1) grayscale(.4);
}

</style>