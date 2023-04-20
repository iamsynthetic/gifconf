<!-- this component is going be a 'promo' just some words and a video or image -->

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

const partnerInnerContainer = ref(null)

onMounted(() => {

  dofunction()

})

function dofunction(){

  ////////////////////////////////////// animate the headline in //////////////////////////////////////

  gsap.set('.partner-headline-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".partner-headline-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
  });

  ////////////////////////////////////// animate the images in //////////////////////////////////////

  gsap.set('.partner-box-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".partner-box-anim", {
    start: "center bottom",
    end: "bottom 20%",
    onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, stagger:.2, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, stagger:.2, ease:"Circ.easeOut"})
  });
}

</script>
<template>
  <div class="general-gutter">
    <div class="row-spacer"></div>
    <div class="row">
        <div class="row-spacer general-headline partner-headline-anim">PARTNERS</div>
    </div>
    <div class="partners-mobile">
      <div class="partner-container">
        <div class="partner-box partner-box-anim">
          <img src="/partners/jif.png" alt="jif logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/skippy.png" alt="skippy logo">
        </div>
      </div>
      <div class="partner-container-2">
        <div class="partner-box partner-box-anim">
          <img src="/partners/mcdonalds.png" alt="mcdonalds logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/facebook.png" alt="facebook logo">
        </div>    
      </div>
      <div class="partner-container-3">
        <div class="partner-box partner-box-anim">
          <img src="/partners/instagram.png" alt="instagram logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/twitter.png" alt="twitter logo">
        </div>
      </div>
      <div class="partner-container-4">
        <div class="partner-box partner-box-anim">
          <img src="/partners/microsoft.png" alt="microsoft logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/affinity.png" alt="affinity photo logo">
        </div>
      </div>
      <div class="partner-container-5">
        <div class="partner-box partner-box-anim">
          <img src="/partners/adobe.png" alt="adobe logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="partners-desktop">
      <div class="partner-container">
        <div class="partner-box partner-box-anim">
          <img src="/partners/jif.png" alt="jif logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/skippy.png" alt="skippy logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/mcdonalds.png" alt="mcdonalds logo">
        </div>
      </div>
      <div class="partner-container-2">
        <div class="partner-box partner-box-anim">
          <img src="/partners/facebook.png" alt="facebook logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/instagram.png" alt="instagram logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/twitter.png" alt="twitter logo">
        </div>
      </div>
      <div class="partner-container-3">
        <div class="partner-box partner-box-anim">
          <img src="/partners/microsoft.png" alt="microsoft logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/affinity.png" alt="affinity photo logo">
        </div>
        <div class="partner-box partner-box-anim">
          <img src="/partners/adobe.png" alt="adobe logo">
        </div>
      </div>
    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>


<style>

.partner-big-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:8rem;
  font-weight:600;
  line-height:.8;
}

.partners-mobile
{
  display:none;
}

.partners-desktop
{
  display: flex;
  flex-direction: row;
  width: 100vw;
}

.partner-container
{
  display:flex;
}

.partner-container-2, .partner-container-3, .partner-container-4, .partner-container-5
{
  display:flex;
  margin-top:20px;
}

.partner-box
{
  flex:1;
  aspect-ratio: 3 / 2;
  margin: 0 20px 0 0;
}

.partner-box img
{
  max-width:100%;

  filter: brightness(1) contrast(1) grayscale(.7);
}

.partner-box:last-child
{
  margin: 0;
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 821px)
{
  .partners-mobile
  {
    display:block;
  }

  .partners-desktop
  {
    display:none;
  }
  .partner-container-2, .partner-container-3, .partner-container-4, .partner-container-5
  {
    display:flex;
    margin-top:-10px;
  }

  .partner-box
  {
    flex:1;
    aspect-ratio: 3 / 2;
    margin: 0 -10px 0 0;
  }
}

/* other */
@media only screen and (min-width: 822px)
{
  .partners-mobile
  {
    display:none;
  }

  .partners-desktop
  {
    display:block;
  }
  .partner-container-2, .partner-container-3, .partner-container-4, .partner-container-5
  {
    display:flex;
    margin-top:20px;
  }

  .partner-box
  {
    flex:1;
    aspect-ratio: 3 / 2;
    margin: 0 20px 0 0;
  }
}

</style>