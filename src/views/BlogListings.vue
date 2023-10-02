<template>
    <Loader v-if="isLoading" />
  <main>
    <NavBar />
    <HeroSection v-for="item in highlightedPost" :key="item.id" :propValue="item"/>
    <section class="article_list" role="feed">
      <ArticleBox v-for="item in posts" :key="item.id" :propValue="item"/>
    </section>
    <section class="join_us">
      <h2 class="pro-display">Join our Team of Writers</h2>
      <p class="pro-display">On dasdas, writers earn a living doing what they love. <br/> Getting started is easy. Just pay a one time <b>$25 fee</b> and everything is ready to go.</p>
      <button class="pro-display" @click="initiatePayment">
        Join Us
      </button>
    </section>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import ArticleBox from '../components/Article.vue'
import "../scss/global/normalize.scss"
import {fetchPosts} from '../api'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    HeroSection,
    ArticleBox
  },
  data() {
    return {
      isLoading: true,
      posts: null,
      highlightedPost: null
    };
  },
  mounted() {
    fetchPosts().then(item => {
      if(item.status === 200){
        this.isLoading = false
        this.posts = item.data.filter((item,index) => index !== 0 );
        this.highlightedPost = [item.data[0]];
      } else {
        alert(item.statusText)
      }
    });
  },
  methods: {
    initiatePayment() {
      const modal = FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-84a31e77f75ef70b9f68c44b10970627-X",
        tx_ref: "titanic-48951487343MDI0NzML",
        amount: 25,
        currency: "USD",
        payment_options: "card",
        redirect_url: "https://nnamdi-ujah-flutterwave-assessment.netlify.app",
        customer: {
          email: "john@unsinkableship.com",
          phone_number: "08123456789",
          name: "John Wicks Cat",
        },
        customizations: {
          title: "dasdas",
          description: "Join our Team of Writers",
          logo: "https://res.cloudinary.com/dxvyyoxub/image/upload/v1696117027/Dasdas_Logo_1_vajesq.svg",
        },
        callback: function(payment) {
            setTimeout(function() {
              modal.close();
              payment.close();
            }, 10000);
              modal.close();
              payment.close();
        }
      });
      modal();
    },
  },
}
</script>

<style scoped lang='scss'>
  $black: #2C2C2C;
  $black2: #000000;
  $white: #FFFFFF;
  $subtle_text: #6E6E6E;
  $breakpoint-tablet: 768px;

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
  .article_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    @media (min-width: $breakpoint-tablet) {
      justify-content: space-between;
    }
  }
  .join_us{
    text-align: center;
    width: 100%;
    max-width: 741px;
    margin: 0px auto;
  }
  .join_us h2{
    color: $black;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 12px;
  }
  .join_us p{
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin: 0px;
    color: $subtle_text;
  }
  .join_us button{
    margin: 38px auto;
    outline: none;
    text-transform: uppercase;
    color: $white;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 12px 55px;
    border: none;
    background-color: $black2;
    &:hover {
      background: $white;
      transition: all 0.3 ease-in-out;
      color: $black2;
    }
  }
</style>
