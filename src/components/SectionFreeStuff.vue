<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

let browserwidth = window.innerWidth

onMounted(() => {
  dofunction()
})

function dofunction(){
    
    gsap.set('.free-item-anim', {opacity:0, x:50})

    if(browserwidth <= 375)
    {
        ScrollTrigger.batch(".free-item-anim", {
            start: "top 60%",
            end: "top 40%",
            onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.2, ease:"Quad.easeInOut"}),
            onLeaveBack: batch => gsap.to(batch, {opacity:0, x:50, duration:.5, stagger:.2, ease:"Quad.easeOut"})
        });
    }
    else
    {
        ScrollTrigger.batch(".free-item-anim", {
            start: "top 80%",
            end: "top 60%",
            onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.2, ease:"Quad.easeInOut"}),
            onLeaveBack: batch => gsap.to(batch, {opacity:0, x:50, duration:.5, stagger:.2, ease:"Quad.easeOut"})
        });
    }

}

</script>
<template>
  <div class="general-gutter">
    <div class="row-spacer"></div>
    <div class="row">
        <div class="free-title free-title-anim general-headline"><span class="make-pink">FREE</span> STUFF</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">TOTE BAGS & BACKPACKS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">STICKERS & BUTTONS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline"><span class="make-pink">SOFTWARE</span></div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">MYSTERY BAGS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">T-SHIRTS & SWEATERS & HATS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">STATIONARY</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">USB DRIVES</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">DIGITAL ASSETS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline"><span class="make-pink">BEER</span></div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">BOTTLE OPENERS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline">TICKETS</div>
    </div>
    <div class="row">
        <div class="free-title free-item-anim free-headline"><span class="make-pink">CASH</span></div>
    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>


<style>

.free-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:5rem;
  font-weight:400;
  line-height:1;
  margin-top:20px;
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{
    .free-headline
    {
        font-size:1.375rem;
        margin-top:20px;
        margin-left:-5px;
    }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
    .free-headline
    {
        font-size:2rem;
    }
}

</style>