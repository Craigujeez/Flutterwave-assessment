<template>
    <article>
      <img class="article_image" alt="css variables" src="../assets/Group.png"/>
      <aside class="hero_text">
        <p class="author pro-text">Front-end <span class="subtle_text">1 Hour Ago</span></p>
        <h1 class="pro-display">Css Variables </h1>
        <p class="pro-text hero_text_p">CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.</p>
        <section class="flex space-between w-full bs-bb bottom">
          <p class="duration pro-text">10 Min Read</p>
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

  export default {
    name: 'ArticleBox',
    components: {
      RouterLink,
      IconArrow
    }
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
    width: 100%;
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
  }
  .hero_text{
    box-sizing: border-box;
    text-align: left;
  }
  .hero_text h1{
    font-size: 22px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .hero_text_p{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
  .hero_text .bottom{
    height: 24px;
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
