<template>
  <article class="heroSection" role="banner">
    <img class="article_image" alt="css variables" v-bind:src="propValue?.jetpack_featured_media_url" /> 
    <aside class="hero_text">
        <section class="flex">
          <p class="author pro-text" v-bind:title="propValue?.yoast_head_json?.author">{{shortString(propValue?.yoast_head_json?.author,24)}} </p> <div class="seperate" /> <p class="subtle_text">{{this.timeAgo(propValue?.date)}} </p>
        </section>
        <h1 class="pro-display" v-html="sanitizeHtml(propValue?.title?.rendered)"> </h1>
        <p class="pro-text mb-20" v-html="sanitizeHtml(propValue?.excerpt?.rendered)"></p>
        <section class="bottom_section">
            <p class="duration pro-text">{{propValue?.yoast_head_json?.twitter_misc["Est. reading time"]}} Read</p>
            <RouterLink :to="{name: 'viewPost', params: {id: propValue?.id} }" >
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
import IconArrow from './icons/IconArrow.vue'
import {timeAgo,shortenString} from "../helpers"
import DOMPurify from 'dompurify'


const purify = DOMPurify(window);

export default {
    name: 'HeroSection',
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
    props: ['propValue'],
    methods: {
        sanitizeHtml(htmlContent) {
        return purify.sanitize(htmlContent);
        },
        shortString(string,count){
        return shortenString(string,count)
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $hero-color: #EF5623;
    $white: #FFFFFF;
    $brder: #F5F5F5;
    $text: #4B4B4B;
    $text2: #6E6E6E;
    $blue: #1473E6;
    $breakpoint-tablet: 768px;
    $breakpoint-large-tablet: 845px;

    .heroSection{
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid $brder;
        margin-bottom: 52px;
        @media (min-width: $breakpoint-large-tablet) {
            display: flex;
            gap: 16px;
        }
    }
    .article_image {
        margin-bottom: 16px;
        border-radius: 5px;
        width: 100%;
        height: 280px;
        &:hover {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        transition: all ease-out 0.2s;
        }
        @media (min-width: $breakpoint-large-tablet) {
            max-width: 500px;
        }
    }
    .hero_text{
        box-sizing: border-box;
        text-align: left;
        position: relative;
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
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
            margin-top: auto;

            @media (min-width: $breakpoint-large-tablet) {
                position: absolute;
                bottom: 20px;
            }

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
    }
    .subtle_text{
        font-weight: 500;
    }
    p.duration{
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: $text2;
    }

    .more{
        color: $blue;
        font-weight: 700;
        margin: 0px;
        cursor: pointer;

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
        padding-top: 8px;
    }

    .icon-container{
        padding-top: 4px;
    }

</style>