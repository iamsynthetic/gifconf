<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

onMounted(() => {
  dofunction()
})

function dofunction(){

  ////////////////////////////////////// animate the headline in //////////////////////////////////////

  gsap.set('.footer-big-headline-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".footer-big-headline-anim", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
  });

  ////////////////////////////////////// animate the titles in //////////////////////////////////////

  gsap.set('.footer-txt-headline-anim', {opacity:0, y:30})

  ScrollTrigger.batch(".footer-txt-headline-anim", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, delay:.2, stagger:.2, ease: "Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, y:30, duration:.5, ease: "Circ.easeOut"})
  });

  ////////////////////////////////////// animate the lines in //////////////////////////////////////

  gsap.set('.footer-rule-anim', {width:'0%'})

  ScrollTrigger.batch(".footer-rule-anim", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {width:"100%", duration:.5, delay:.2, stagger:.2, ease: "Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {width:'0%', duration:.5, stagger:.2, ease: "Circ.easeOut"})
  });

  ////////////////////////////////////// animate the icons and email in //////////////////////////////////////

  gsap.set('.social-anim', {scaleX:0, scaleY:0})

  ScrollTrigger.batch(".social-anim", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {scaleX:1, scaleY:1, duration:.5, delay:.4, stagger:.1, ease: "Back.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {scaleX:0, scaleY:0, duration:.5, stagger:.1, ease: "Back.easeOut"})
  });

  gsap.set('.email-anim', {opacity:'0'})

  ScrollTrigger.batch(".email-anim", {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, duration:.5, delay:.7, ease: "Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, duration:.5, ease: "Circ.easeOut"})
  });
}

const domouseover = (e) => 
{
  console.log('over ' + e.currentTarget)
  gsap.to(e.currentTarget, {scaleX:1.2, scaleY:1.2, duration:.3, ease: "Back.easeInOut"});
  gsap.to(e.currentTarget, {filter: 'invert(66%) sepia(93%) saturate(438%) hue-rotate(283deg) brightness(95%) contrast(99%)', duration:.3});
}

const domouseleave = (e) =>
{
  console.log('leave ' + e.currentTarget)
  gsap.to(e.currentTarget, {scaleX:1, scaleY:1, duration:.3, ease: "Back.easeInOut"});
  gsap.to(e.currentTarget, {filter: 'invert(0%) sepia(9%) saturate(105%) hue-rotate(321deg) brightness(116%) contrast(90%)', duration:.3});

}

</script>

<template>
  <div class="general-gutter">
    <div class="spacer-30"></div>
    <div class="row">
      <div class="footer-col-center">
        <div class="footer-big-headline footer-big-headline-anim"><span class="make-pink">THANK</span> YOU!</div>
      </div>
    </div>
    <div class="footer-row social-email-container">
      <div class="footer-col1">
        <div class="col-container">
            <div class="row">
              <div class="footer-txt-headline footer-txt-headline-anim">Follow <span class="make-pink">Us</span></div>
            </div>
            <div class="row footer-full-width">
              <div class="footer-rule-anim"></div>
            </div>
            <div class="row mobile-wrap">
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/discord.svg" alt="discord">
                <div class="footer-txt">Discord</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/facebook.svg" alt="facebook">
                <div class="footer-txt">facebook</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/instagram.svg" alt="instagram">
                <div class="footer-txt">instagram</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/linkedin.svg" alt="linkedin">
                <div class="footer-txt">linkedin</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/pinterest.svg" alt="pinterest">
                <div class="footer-txt">pinterest</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/reddit.svg" alt="reddit">
                <div class="footer-txt">reddit</div>
              </div>
            </div>
            <div class="row mobile-wrap">
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/snapchat.svg" alt="snapchat">
                <div class="footer-txt">snapchat</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/twitch.svg" alt="twitch">
                <div class="footer-txt">twitch</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/twitter.svg" alt="twitter">
                <div class="footer-txt">twitter</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/vimeo.svg" alt="vimeo">
                <div class="footer-txt">vimeo</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/wechat.svg" alt="wechat">
                <div class="footer-txt">wechat</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/whatsapp.svg" alt="whatsapp">
                <div class="footer-txt">whatsapp</div>
              </div>
              <div class="social-icon-container social-anim" @mouseover="domouseover" @mouseleave="domouseleave">
                <img src="/social-media-icons/youtube.svg" alt="youtube">
                <div class="footer-txt">youtube</div>
              </div>
            </div>
          </div> 
      </div>
      <div class="footer-col2">
        <div class="col-container">
            <div class="row">
              <div class="footer-txt-headline footer-txt-headline-anim">Send <span class="make-pink">Us</span> An Email</div>
            </div>
            <div class="row footer-full-width">
              <div class="footer-rule-anim"></div>
            </div>
            <div class="row email-anim">
              <div class="footer-email">thegiftofgif@gmail.com</div>
            </div>
          </div>
      </div>
    </div>
    <div class="spacer-30"></div>
  </div>
</template>


<style scoped>
.footer-row
{
  display:flex;
  flex-direction:row;
  margin:0px;
}
.social-email-container
{
  margin: 0 100px 0 100px;
}
.footer-col-center
{
  display: flex;
  flex:1;
  justify-content: center;
  margin-bottom:100px;
}
.footer-col1
{
  display:flex;
  flex:1;
  flex-direction:column;
  justify-content: center;
  margin-right:50px;
}

.row-container
{
  flex-direction:row;
}

.col-container
{
  display:flex;
  flex-direction:column;
}
.footer-col2
{
  flex:1;
  flex-direction:column;
  justify-content: center;
  align-content: center;
  margin-left:50px;
}

.footer-big-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:20rem;
  font-weight:600;
  line-height:1;
  margin:0;
}
.footer-txt-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:3rem;
  font-weight:400;
  margin-bottom:10px;
  margin-left:0px;
}

.social-icon-container
{
  width:80px;
  height:70px;
  margin:20px 10px 20px 10px;
  text-align:center;
  cursor:pointer;
}
.social-icon-container:nth-child(1)
{
  margin-left:0px;
}
.social-icon-container:nth-last-child(1)
{
  margin-right:0px;
}
.social-icon-container img
{
  width:40px;
  height:40px;
  text-align:center;
}

.footer-txt
{
  font-size:1.125rem;
  text-align:center;
}
.footer-email
{
  font-size:1.125rem;
  text-align:left;
  margin:20px 0 0 3px;
}

.footer-full-width
{
  display:flex;
  flex:1;
}

.footer-rule-anim
{
  width:100%;
  height:1px;
  background-color:#F280CA;
}
/********************* MEDIA QUERIES *****************************/


/* mobile */
@media only screen and (min-width: 375px) and (max-width: 1024px)
{
  .footer-row
  {
    display:block;
  }
  .footer-big-headline
  {
    font-size:8rem;
    text-align:left;
  }
  .social-email-container
  {
    margin:0px;
  }
  .mobile-wrap
  {
    display:flex;
    flex-wrap:wrap;
  }
  .footer-col1
  {
    width:100%;
  }
  .footer-col2
  {
    width:100%;
    margin-left:0px;
    margin-top:20px;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .footer-col2
  {
    margin-top:50px;
  }
}

</style>