<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

const title = document.querySelector( '.sub3' );
const generaltl = gsap.timeline()
const mobilewidth = 375;

onMounted(() => {

  dofunction()

})

function dofunction(){

  ////////////////////////////////////// animate the headlines in //////////////////////////////////////
  
  gsap.set('.speaker-title-anim', {opacity:0, y:100})

  if(window.width <= mobilewidth){
    ScrollTrigger.batch(".speaker-title-anim", {
        start: "center bottom",
        end: "top 20%",
        onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
        onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
    });
  }
  else
  {
    ScrollTrigger.batch(".speaker-title-anim", {
        start: "center bottom",
        end: "top 90%",
        onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
        onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
    });
  }
  
  ////////////////////////////////////// animate the left side images in //////////////////////////////////////

  gsap.set('.thumb-img-left', {opacity:0, x:-100})

  ScrollTrigger.batch(".thumb-img-left", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.2, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:-100, duration:.5, stagger:.2, ease:"Circ.easeOut"})
  });

  
  ////////////////////////////////////// animate the right side images in //////////////////////////////////////

  gsap.set('.thumb-img-right', {opacity:0, x:100})

  ScrollTrigger.batch(".thumb-img-right", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.2, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:100, duration:.5, stagger:.2, ease:"Circ.easeOut"})
  });

  ////////////////////////////////////// animate the left side set 2 images in //////////////////////////////////////

  gsap.set('.thumb-img-left2', {opacity:0, x:-100})

  ScrollTrigger.batch(".thumb-img-left2", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, stagger:.2, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:-100, duration:.5, stagger:.2, ease:"Circ.easeOut"})
  });
}

const buttonhover = (img, hovered) => {
  if(hovered == true)
  {
    gsap.to(img, {opacity:1, duration:1})
  }
  else 
  {
    gsap.to(img, {opacity:0, duration:1})
  }
}

</script>

<template>
  <div id="speakers" class="general-gutter">
    <div class="row speaker-mobile-column row-spacer">
      <div class="col1">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img1',true)" @mouseleave="buttonhover('.img1', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Nicholas Orozco</h2>
            <div class="subheadings">
              <span class="sub1">Big Data Philosopher</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img1"></div>
          <figure class="img-box-thumb thumb-img-left">
            <img  src="/speakers/speaker2.jpg" alt="picture of Nicholas Orozco">
          </figure>
        </article>
      </div>
      <div class="col2">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img2',true)" @mouseleave="buttonhover('.img2', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Joshua Harrison</h2>
            <div class="subheadings">
              <span class="sub1">Longform Engagement Advocate</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img2"></div>
          <figure class="img-box-thumb thumb-img-left">
              <img src="/speakers/speaker1.jpg" alt="picture of Joshua Harrison">
          </figure>
        </article>
      </div>
      <div class="col3">
        <div class="row">
          <div class="s2-title1 general-headline speaker-title-anim"><span class="make-pink">PEOPLE</span></div>
        </div>
        <div class="row">
          <div class="s2-title2 general-headline speaker-title-anim">STANDING</div>
        </div>
      </div>
    </div>
    <div class="row speaker-mobile-column">
      <div class="col4">
        <div class="row">
          <div class="s2-title3 general-headline speaker-title-anim"><span class="make-pink">&</span></div>
        </div>
        <div class="row">
          <div class="s2-title4 general-headline speaker-title-anim">SPEAKING</div>
        </div>
      </div>
      <div class="col5">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img3',true)" @mouseleave="buttonhover('.img3', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Aishah Mathis</h2>
            <div class="subheadings">
              <span class="sub1">Tinder Messiah</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img3"></div>
          <figure class="img-box-thumb thumb-img-right">
            <img id="img3" src="/speakers/speaker3.jpg" alt="picture of Aishah Mathis">
          </figure>
        </article>
      </div>
      <div class="col6">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img4',true)" @mouseleave="buttonhover('.img4', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Wendy Choi</h2>
            <div class="subheadings">
              <span class="sub1">Resident Tech Svengali</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img4"></div>
          <figure class="img-box-thumb thumb-img-right">
            <img id="img4" src="/speakers/speaker4.jpg" alt="picture of Wendy Choi">
          </figure>
        </article>
      </div>
    </div>
    <div class="row speaker-mobile-column row-spacer">
      <div class="col1">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img5',true)" @mouseleave="buttonhover('.img5', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Abbie Mahoney</h2>
            <div class="subheadings">
              <span class="sub1">Twitter Commander</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img5"></div>
          <figure class="img-box-thumb thumb-img-left2">
            <img id="img6" src="/speakers/speaker6.jpg" alt="picture of Abbie Mahoney">
          </figure>
        </article>
      </div>
      <div class="col2">
        <article class="img-box">
          <div class="img-box-rollover" @mouseenter="buttonhover('.img6',true)" @mouseleave="buttonhover('.img6', false)"></div>
          <main class="img-box-content">
            <h2 class="content-headline">Jed Castro</h2>
            <div class="subheadings">
              <span class="sub1">Brand Story Minister</span>
            </div>
          </main>
          <div class="img-box-thumb color-overlay img6"></div>
          <figure class="img-box-thumb thumb-img-left2">
            <img id="img5" src="/speakers/speaker5.jpg" alt="picture of Abbie Mahoney">
          </figure>
        </article>
      </div>
      <div class="col3">
        <div class="row">
          <div class="s2-title5 general-headline speaker-title-anim">ALL</div>
        </div>
        <div class="row">
          <div class="s2-title6 general-headline speaker-title-anim">ABOUT</div>
        </div>
        <div class="row">
          <div class="s2-title7 general-headline speaker-title-anim"><span class="make-pink">GIFS</span></div>
        </div>
      </div>
    </div>
    <div class="spacer-big spacer-mobile"></div> 
  </div>
</template>

<style scoped>
.col1
{
  flex-grow:1;
  display:flex;
  flex-direction:column;
  height:auto;
  width:50%;
  z-index:10;
}
.col2
{
  flex-grow:1;
  display:flex;
  flex-direction:column;
  height:auto;
  width:50%;
  z-index:10;
}
.col3
{
  width:550px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
}

.col4
{
  width:550px;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
}
.col5
{
  flex-grow:1;
}
.col6
{
  flex-grow:1;
}
.s2-title1
{
  margin-left:10px;
}
.s2-title2
{
  padding:0;
  margin-top:0px;
  margin-left:10px;
}
.s2-title3
{
  margin-right:15px;
}
.s2-title4
{
  margin-right:15px;
}
.s2-title5
{
  margin-left:10px;
}
.s2-title6
{
  padding:0;
  margin-top:0px;
  margin-left:10px;
}
.s2-title7
{
  padding:0;
  margin-top:0px;
  margin-left:10px;
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{
  .col1
  {
    height:200px;
    width:100%;
    margin-bottom:20px;
  }
  .col2
  {
    height:200px;
    width:100%;
  }
  .col3
  {
    margin-left:0px;
    margin-bottom:20px;
    order:-1;
  }
  .col4
  {
    width:100%;
    margin-bottom:20px;
  }
  .col5
  {
    width:100%;
    height:200px;
    margin-bottom:20px;
  }
  .col6
  {
    width:100%;
    height:200px;
  }
  .speaker-mobile-column
  {
    flex-direction:column;
    margin-top:20px;
  }
  .s2-title1, .s2-title2, .s2-title3, .s2-title4, .s2-title5, .s2-title6, .s2-title7
  {
    margin:0px;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .col1
  {
    height:200px;
    width:100%;
    margin-bottom:20px;
  }
  .col2
  {
    height:200px;
    width:100%;
  }
  .col3
  {
    margin-left:0px;
    margin-bottom:20px;
    order:-1;
  }
  .col4
  {
    width:100%;
    margin-bottom:20px;
  }
  .col5
  {
    width:100%;
    height:200px;
    margin-bottom:20px;
  }
  .col6
  {
    width:100%;
    height:200px;
  }
  .speaker-mobile-column
  {
    flex-direction:column;
    margin-top:20px;
  }
  .s2-title1, .s2-title2, .s2-title3, .s2-title4, .s2-title5, .s2-title6, .s2-title7
  {
    margin:0px;
  }
  .img-box img
  {
    object-position: 0% 30%;
  }

}

</style>
