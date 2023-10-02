<template>
    <article>
      <img class="article_image" alt="css variables" v-bind:src="propValue?.jetpack_featured_media_url" />
      <aside class="hero_text">
        <section class="flex">
          <p class="author pro-text" v-bind:title="propValue?.yoast_head_json?.author">{{shortString(propValue?.yoast_head_json?.author,24)}} </p> <div class="seperate" /> <p class="subtle_text">{{this.timeAgo(propValue?.date)}} </p>
        </section>
        <h1 class="pro-display" v-html="sanitizeHtml(propValue?.title?.rendered)"></h1>
        <p class="pro-text hero_text_p mb-20" v-html="sanitizeHtml(propValue?.excerpt?.rendered)"></p>
        <section class="bottom_section">
          <p class="duration pro-text">{{propValue?.yoast_head_json?.twitter_misc["Est. reading time"]}} Read</p>
          <RouterLink to="/view-post">
            <div class="flex read_more_container">
              <p class="more">Read Full </p>
              <IconArrow/>
            </div>
          </RouterLink>
        </section>
      </aside>
    </article>
</template>

<script>
  import {RouterLink} from "vue-router"
  import IconArrow from "./icons/IconArrow.vue"
  import {timeAgo,shortenString} from "../helpers"
  import DOMPurify from 'dompurify'


  const purify = DOMPurify(window);
 
  export default {
    name: 'ArticleBox',
    components: {
      RouterLink,
      IconArrow,
      timeAgo,
      shortenString
    },
    data() {
      return {
        timeAgo
      };
    },
    methods: {
      sanitizeHtml(htmlContent) {
        return purify.sanitize(htmlContent);
      },
      shortString(string,count){
        return shortenString(string,count)
      }
    },
    props: ['propValue']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $text: #4B4B4B;
  $text2: #6E6E6E;
  $blue: #1473E6;
  $white: #FFFFFF;
  $border: #F5F5F5;
  $breakpoint-tablet: 768px;


  article{
    margin-bottom: 48px;
    position: relative;
    width: 100%;
    // height: 402px;
    border: 1px solid $border;
    background: $white;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover .article_image{
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      transition: all ease-out 0.2s;
    }
    @media (min-width: $breakpoint-tablet) {
      max-width: 350px;
    }
  }
  .article_image {
    margin-bottom: 16px;
    border-radius: 5px;
    width: 100%;
    height: 200px;
  }
  .hero_text{
    box-sizing: border-box;
    text-align: left;
    h1{
        font-size: 22px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }
    p{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
    }
    .bottom_section{
      height: 24px;
      display: flex;
      justify-content: space-between;
      width: 95%;
      box-sizing: border-box;
      position: absolute;
      bottom: 20px;
    }
  }
  .mb-20{
    margin-bottom: 40px;
  }
  .seperate{
    width: 2px;
    height: 2px;
    border-radius: 100%;
    background-color: #6E6E6E;
    margin: auto 4px;
  }
  .author,.more{
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: $text;
    margin-bottom: 8px;
  }
  .subtle_text{
    font-weight: 500;
  }
  .duration{
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .more{
    color: $blue;
    margin: 0px;
    &:hover{
      text-decoration: underline;
      transition: all ease-in-out 0.2s;
    }
  }
  .more img{
    padding-top: 8px;
    box-sizing: border-box;
    height: 20px;
  }
  .read_more_container{
    padding-top: 12px;
  }
</style>
