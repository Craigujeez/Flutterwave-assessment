<template>
  <main>
    <NavBar />
    <Loader v-if="isLoading" />
    <section class="post">
      <!-- <p class="author pro-text">By Ryan Jackson <span>2 Months Ago</span></p> -->
      <section class="flex">
        <!-- <p class="author pro-text" v-bind:title="post?.yoast_head_json?.author">{{shortString(post?.yoast_head_json?.author,24)}} </p> <div class="seperate" /> <p class="subtle_text">{{this.timeAgo(post?.date)}} </p> -->
      </section>
      <h1 class="pro-display" v-html="sanitizeHtml(post?.title?.rendered)"> </h1>
      <p class="pro-text" v-html="sanitizeHtml(post?.content?.rendered)"></p>
    </section>
    <p class="sub-header pro-display">More Articles</p>
      <Loader v-if="areMorePostLoading" />
    <section class="article_list">
      <ArticleBox v-for="item in morePosts" :key="item.id" :propValue="item"/>
    </section>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ArticleBox from '../components/Article.vue'
import "../scss/global/normalize.scss"
import {fetchPostDetails,fetchPosts} from '../api'
import {timeAgo,shortenString} from "../helpers"
import {useRoute} from "vue-router";
import DOMPurify from 'dompurify'

const purify = DOMPurify(window);

export default {
  name: 'ViewPost',
  components: {
    NavBar,
    ArticleBox,
    timeAgo,
    shortenString
  },
  // emits: [], 
  data() {
    return {
      isLoading: true,
      areMorePostLoading: true,
      post: null,
      morePosts: null,
    };
  },
  mounted() {
    try{
      const route = useRoute();
      fetchPosts().then(item => {
        if(item.status === 200){
          this.areMorePostLoading = false
          this.morePosts = item.data.filter(item => item.id !== route?.params?.id).slice(0,3);
        } else {
          alert(item.statusText);
        }
      });
      fetchPostDetails(route?.params?.id).then(item => {
        if(item.status === 200){
          this.isLoading = false
          this.post = item.data;
        } else {
          alert(item.statusText);
        }
      });

    } catch (error){
      console.error(error);
    }
  },
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

<style scoped lang='scss'>
  $black: #2C2C2C;
  $black2: #000000;
  $white: #FFFFFF;
  $subtle_text: #6E6E6E;
  $subtle_text2: #4B4B4B;

  main {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    max-width: 1144px;
    margin: 0px auto;
    box-sizing: border-box;
    padding: 0px 20px 227px 20px;
  }
  .sub-header{
    color: $black;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 100px 0px 23px 0px;
    text-align: left;
  }
  .article_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  }
  .post{
    width: 100%;
    max-width: 705px;
    margin: 0px auto;
    padding-top: 60px;
    box-sizing: border-box;
    text-align: left;
  }
  .post h1{
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 23px;
  }
  .post .author{
    margin-bottom: 10px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: $subtle_text2;
  }
  .author span{
    color: $subtle_text;
  }
  .post p{
    color: $subtle_text;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;

    img{
      width: 100%;
    }
  }
  .post .img-container{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .post img{
    width: 100%;
    max-width: 510px;
    margin: 39px auto;
    box-sizing: border-box;
  }
  .seperate{
      width: 2px;
      height: 2px;
      border-radius: 100%;
      background-color: #6E6E6E;
      margin: auto 4px;
  }
  .wp-caption{
    width: 100%;
    max-width: 500px;
  }
</style>