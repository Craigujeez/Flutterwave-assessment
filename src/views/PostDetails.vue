<template>
  <main>
    <NavBar />
    <section class="post">
      <p class="author pro-text">By Ryan Jackson <span>2 Months Ago</span></p>
      <h1 class="pro-display">Optimizing CSS for faster page loads </h1>
      <p class="pro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa 
        enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. 
        Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum 
        sagittis vitae et leo duis ut diam. Eget nullam non nisi est sit amet. Dignissim 
        suspendisse in est ante in nibh mauris. Nec feugiat in fermentum posuere urna. 
        Diam in arcu cursus euismod quis viverra. Facilisis mauris sit amet massa vitae 
        tortor condimentum lacinia. Diam quam nulla porttitor massa id neque aliquam 
        vestibulum morbi. Sed egestas egestas fringilla phasellus faucibus 
        scelerisque eleifend. Sed elementum tempus egestas sed sed risus pretium quam 
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. 
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi tincidunt 
        augue interdum velit euismod in. Accumsan lacus vel facilisis volutpat est 
        velit egestas dui. Erat pellentesque adipiscing commodo elit at imperdiet. 
        Quis risus sed vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
      </p>
      <section class="img-container">
        <img class="post_image" alt="css variables" src="../assets/Group.png"/>
      </section>
      <p class="pro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa 
        enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. 
        Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum 
        sagittis vitae et leo duis ut diam. Eget nullam non nisi est sit amet. Dignissim 
        suspendisse in est ante in nibh mauris. Nec feugiat in fermentum posuere urna. 
        Diam in arcu cursus euismod quis viverra. Facilisis mauris sit amet massa vitae 
        tortor condimentum lacinia. Diam quam nulla porttitor massa id neque aliquam 
        vestibulum morbi. Sed egestas egestas fringilla phasellus faucibus 
        scelerisque eleifend. Sed elementum tempus egestas sed sed risus pretium quam 
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. 
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi tincidunt 
        augue interdum velit euismod in. Accumsan lacus vel facilisis volutpat est 
        velit egestas dui. Erat pellentesque adipiscing commodo elit at imperdiet. 
        Quis risus sed vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
      </p>
      <p class="pro-text">
        Proin fermentum leo vel orci porta non pulvinar neque. In egestas erat imperdiet 
        sed euismod nisi porta lorem. Metus vulputate eu scelerisque felis imperdiet 
        proin fermentum. Luctus venenatis lectus magna fringilla. Nunc scelerisque 
        viverra mauris in aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. 
        Sem et tortor consequat id porta nibh venenatis cras sed. Sed felis eget velit 
        aliquet sagittis id. Auctor neque vitae tempus quam pellentesque nec nam aliquam 
        sem. Tincidunt ornare massa eget egestas purus viverra accumsan in. Aliquet 
        lectus proin nibh nisl condime.
      </p>
    </section>
    <p class="sub-header pro-display">More Articles</p>
    <section class="article_list">
      <ArticleBox/>
      <ArticleBox/>
      <ArticleBox/>
    </section>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ArticleBox from '../components/Article.vue'
import "../scss/global/normalize.scss"

export default {
  name: 'ViewPost',
  components: {
    NavBar,
    ArticleBox
  }
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
</style>