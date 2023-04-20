<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const arrowtl = gsap.timeline()
const btntl = gsap.timeline()

onMounted(() => {
  gsap.from('.header-txt1-anim', {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
  gsap.from('.header-txt2-anim', {opacity:0, y:100, duration:.5, delay:.3, ease: "Circ.easeOut"})

  gsap.from('.header-txt3-anim', {opacity:0, y:100, duration:.5, delay:1, ease: "Circ.easeOut"})
  gsap.from('.header-txt4-anim', {opacity:0, y:100, duration:.5, delay:2, ease: "Circ.easeOut"})

  gsap.from('.header-txt5-anim', {opacity:0, y:100, duration:.5, delay:2.5, ease: "Circ.easeOut"})
  gsap.from('.header-txt6-anim', {opacity:0, y:100, duration:.5, delay:2.6, ease: "Circ.easeOut"})

  gsap.from('.header-txt7-anim', {opacity:0, y:100, duration:.5, delay:2.7, ease: "Circ.easeOut"})
  gsap.from('.header-btn-anim', {opacity:0, y:100, duration:.5, delay:2.8, ease: "Circ.easeOut"})
})

const arrowAnim = (bool) => {

  if(bool == 'forward')
  {     
    arrowtl.to('.arrow3', {y:20, duration:.4, delay:.1, ease: 'Circ.easeInOut'})
    .to('.arrow2', {y:20, duration:.3, delay:-.3, ease: 'Circ.easeInOut'})
    .to('.arrow1', {y:20, duration:.2, delay:-.2, ease: 'Circ.easeInOut'})
    .to('.arrow3', {opacity:0, delay:-.5})
    .to('.arrow2', {opacity:0, delay:-.5})
    .to('.arrow1', {opacity:0, delay:-.5})
    .set('.arrow3', {y:-40, opacity:0})
    .set('.arrow2', {y:-40, opacity:0})
    .set('.arrow1', {y:-40, opacity:0})
    .to('.arrow3', {y:0, opacity:1, duration:.4, ease:'Circ.easeInOut'})
    .to('.arrow2', {y:0, opacity:1, duration:.3, delay:-.3, ease:'Circ.easeInOut'})
    .to('.arrow1', {y:0, opacity:1, duration:.2, delay:-.2, ease:'Circ.easeInOut'})
    
    gsap.to('.buybutton', {scaleX:.9, scaleY:.9, duration:.3, ease:'Back.easeInOut'})
    let rule = CSSRulePlugin.getRule(".buybutton::before"); //get the rule
    btntl.to(rule, {duration: .5, cssRule: {marginLeft:"0px"}, ease:'Circ.easeInOut'});

  } 
  else if(bool == 'backward')
  {
    gsap.to('.buybutton', {scaleX:1, scaleY:1, duration:.3, ease:'Back.easeInOut'})
    let rule = CSSRulePlugin.getRule(".buybutton::before"); //get the rule
    btntl.to(rule, {duration: .5, cssRule: {marginLeft:"-300px"}, ease:'Circ.easeInOut'});
  }
}

const buttonhover = (hovered) => {
  if(hovered == true)
  {
    arrowAnim('forward')
  }
  else 
  {
    arrowAnim('backward')
  }
}


</script>

<template>
  <div id="header" class="general-gutter">
    <div class="spacer-15"></div>
    <div class="row">
      <div class="col1">
        <div class="header-txt1-anim headline">
          PRONOUNCED
        </div>
      </div>
      <div class="col2">
        <div class="header-txt2-anim headline">
          GIF
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col3">
        <div class="headline">
          <div class="header-txt3-anim headline-gif">AS IN GIFT</div>
        </div>
      </div>
      <div class="col4">
        <div class="header-txt4-anim headline">
          CONFERENCE
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col5">
        <div class="header-txt5-anim headline">
          JUNE.5-7
        </div>
      </div>
      <div class="col6">
        <div class="header-txt6-anim headline">
          TORONTO
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col7">
        <button class="header-btn-anim buybutton" @mouseenter="buttonhover(true)" @mouseleave="buttonhover(false)">
          <span class="buttondesign">//////////////</span>
          <span class="buytickets">Buy<br>Tickets?</span>
          <div class="arrow">
            <span class="arrow1"></span>
            <span class="arrow2"></span>
            <span class="arrow3"></span>
          </div>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col8">
        <div class="header-txt7-anim scroll-headline">
          Scroll Down!
        </div>
      </div>
    </div>
    <div class="spacer-big header-spacer-mobile header-spacer-tablet"></div>
    <div class="spacer-big header-spacer-mobile header-spacer-tablet"></div>
    <div class="spacer-big header-spacer-mobile header-spacer-tablet"></div>
  </div>
</template>

<style scoped>

.col1
{
  flex:40%;
}
.col2
{
  flex:60%;
  margin-left:80px;
}
.col3
{
  flex:35%;
  display:flex;
  margin-left:40px;
}
.col4
{
  flex:65%;
}
.col5
{
  flex:70%;
  display:flex;
  justify-content:flex-end;
}
.col6
{
  flex:30%;
  display:flex;
  justify-content:flex-end;
  margin-right:10px;
}
.col7
{
  display:flex;
  flex:35%;
  justify-content:flex-end;
  padding-right:10px;
}
.col8
{
  display:flex;
  flex:70%;
  margin-left:40px;
}

.scroll-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:3vw;
  font-weight:300;
  letter-spacing:1;
  line-height:1.25; 
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 821px)
{
  .col3
  {
    flex:60%;
    display:flex;
    margin-left:40px;
  }
  .col4
  {
    flex:40%;
  }
  .header-spacer-mobile
  {
    width:100%;
    height:100px;
  }

  .header-spacer-tablet
  {
    width:0%;
    height:0px;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .header-spacer-mobile
  {
    width:0%;
    height:0px;
  }

  .header-spacer-tablet
  {
    width:100%;
    height:200px;
  }
}

</style>
