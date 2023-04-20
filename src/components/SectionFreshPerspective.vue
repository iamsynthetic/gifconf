<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

onMounted(() => {
  
  console.log('fresh - onmounted ')
  
  const tlmasker = gsap.timeline({
    scrollTrigger: {
      trigger:".fresh-img-mask",
      start:"center bottom",
      onEnter: () => maskanim.play(0),
      onLeaveBack: () => maskanim.reverse()
    }
  })

  const maskanim = gsap.to('.fresh-img-mask', {y:"-30vw", duration:.7, delay:.2, ease:"Circ.easeInOut", paused:true})

  const tlimage = gsap.timeline({
    scrollTrigger: {
      trigger:".fresh-img-mask",
      start:"center bottom",
      onEnter: () => imganim.play(0),
      onLeaveBack: () => imganim.reverse()
    }
  })

  const imganim = gsap.from('.fresh-box-thumb', {y:"-1vw", duration:1, delay:.2, ease:"Circ.easeInOut", paused:true})

  gsap.set('.headline-anim1', {opacity:0, x:300})
  gsap.set('.headline-anim2', {opacity:0, x:-300})
  gsap.set('.bodytext-anim1', {opacity:0})

  ScrollTrigger.batch(".headline-anim1", {
    trigger: ".fresh-img-mask",
    start: "center bottom",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.4, ease:"Circ.easeInOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:300, duration:.5, stagger:.4, ease:"Circ.easeInOut"})
  });

  ScrollTrigger.batch(".headline-anim2", {
    trigger: ".fresh-img-mask",
    start: "center bottom",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.4, ease:"Circ.easeInOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:-300, duration:.5, stagger:.4, ease:"Circ.easeInOut"})
  });

  ScrollTrigger.batch(".bodytext-anim1", {
    trigger: ".fresh-img-mask",
    start: "center bottom",
    onEnter: batch => gsap.to(batch, {opacity:1, duration:.7, delay:.8}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, duration:.2})
  });
})

</script>

<template>
  <div id="fresh" class="general-gutter">
    <div class="fresh-row row-spacer">
      <div class="col1">
        <div class="fresh-row fresh-text-position-left">
          <div class="fresh-body-text-left bodytext-anim1">
            Some inspiring words here.
          </div>
        </div>
        <div class="fresh-row fresh-headline-position-left">
          <div class="fresh-headline headline-anim1"><span class="make-pink">A NEW</span></div>
          <div class="fresh-headline headline-anim1">POINT OF</div>
          <div class="fresh-headline headline-anim1">VIEW</div>
        </div>
      </div>

      <div class="col2">
        <article class="fresh-img-box">
          <div class="fresh-img-mask"></div>
          <div class="img-box-rollover" @mouseenter="buttonhover('.img1',true)" @mouseleave="buttonhover('.img1', false)"></div>
          <div class="color-overlay img1"></div>
          <figure class="fresh-box-thumb">
              <img src="/perspective/perspective.jpg" alt="person standing and talking to group in office">
          </figure>
        </article>
      </div>
      
      <div class="col3">
        <div class="fresh-row fresh-headline-position-right">
          <div class="fresh-headline headline-anim2">A FRESH</div>
        </div>
        <div class="fresh-row fresh-headline-position-right">
          <div class="fresh-headline headline-anim2"><span class="make-pink">APPROACH</span></div>
        </div>
        <div class="fresh-row fresh-text-position-right">
          <div class="fresh-body-text-right bodytext-anim1">
            Even more inspiring words.
          </div>
        </div>
      </div>

    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>


<style scoped>
.fresh-row
{
  display:flex;
  flex-direction:row;
  margin:0px;
}
.col1
{
  width:23%;
  padding-top:30px;
  z-index:5;
}
.col2{
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  height:auto;
  width:50%;
  justify-content: center;
  z-index:10;
}

.col3
{
  width:27%;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding-bottom:30px;
  z-index:6;
}

.fresh-headline-position-left
{
  display:flex;
  margin-right:20px;
  flex-direction:column;
  justify-content:flex-end;
  text-align:right;
}
.fresh-headline-position-right
{
  display:flex;
  justify-content:flex-start;
  margin-left:20px;
}
.fresh-text-position-left
{
  display:flex;
  justify-content:flex-end;
  margin-top:20px;
  margin-right:20px;
}
.fresh-text-position-right
{
  display:flex;
  justify-content:flex-start;
  margin-top:10px;
  margin-left:25px;
}
.fresh-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:5rem;
  font-weight:600;
  letter-spacing:-.2rem;
  line-height:1;
  display:flex;
  justify-content: flex-end; 
}
.fresh-body-text-left
{
  font-family: 'Lato', sans-serif;
  color: #F2F2F2;
  font-size:1rem;
  font-weight:400;
  line-height:1.2;
  text-align:right;
}
.fresh-body-text-right
{
  font-family: 'Lato', sans-serif;
  color: #F2F2F2;
  font-size:1rem;
  font-weight:400;
  line-height:1.2;
  text-align:left;
  margin-right:20px;
}
.fresh-headline-mask-left
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:110;
  margin-top:0px;
  background:#0D0D0D;
}
.fresh-headline-mask-right
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:110;
  margin-top:0px;
  background:#0D0D0D;
}
.fresh-img-box
{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  height: 30vw;
}
.fresh-img-mask
{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:30vw;
  z-index:100;
  margin-top:0px;
  background:#0D0D0D;
}
.fresh-box-thumb
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fresh-box-thumb img
{
  width: 100%;
  object-fit: cover;

  filter: brightness(1) contrast(1) grayscale(.7);
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{
  .fresh-row
  {
    flex-direction:column;
  }
  .col1, .col2, .col3
  {
    width:100%;
  }
  .col1
  {
    padding:0 0 20px 0;
  }
  .col3
  {
    padding: 10px 0 0 0;
  }
  .fresh-text-position-left
  {
    margin-top:0px;
    margin-right:0px;
  }
  .fresh-headline-position-left
  {
    margin-right:0px;
  }

  .fresh-body-text-right
  {
    text-align:right;
    margin-right:0px;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .fresh-row
  {
    flex-direction:column;
  }

  .col1, .col2, .col3
  {
    width:100%;
  }
  .col1
  {
    padding:0 0 20px 0;
  }
  .col3
  {
    padding: 10px 0 0 0;
  }
  .fresh-headline
  {
    font-size:7rem;
  }
  .fresh-text-position-left
  {
    margin-top:0px;
    margin-right:0px;
  }
  .fresh-headline-position-left
  {
    margin-right:0px;
  }

  .fresh-body-text-right
  {
    text-align:right;
    margin-right:0px;
  }

  .fresh-img-box
  {
    height:40vw;
  }

}

</style>