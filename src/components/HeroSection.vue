<template>
  <article class="heroSection" role="banner">
    <section class="hero_banner">
        <p>🚀</p>
        <h1 class="playfair-display">Optimizing CSS for faster page loads </h1>
    </section>
    <aside class="hero_text">
        <p class="author pro-text">Front-end <span class="subtle_text">1 Hour Ago</span></p>
        <h1 class="pro-display">Optimizing CSS for faster page loads </h1>
        <p class="pro-text">Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well.</p>
        <p class="pro-text">To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...</p>
        <section class="bottom_section">
            <p class="duration pro-text">3 Min Read</p>
            <RouterLink to="/view-post">
                <div class="flex read_more_container">
                    <p class="more">Read Full </p>
                    <a class="icon-container">
                        <IconArrow/>
                    </a>
                </div>
            </RouterLink>
            <!-- <p class="more">Read Full <span><img alt="arrow" src="../assets/arrow.svg"/></span></p> -->
        </section>
    </aside>
  </article>
</template>

<script>
import IconArrow from './icons/IconArrow.vue'

export default {
  name: 'HeroSection',
  components: {
    IconArrow,
  }
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

    .heroSection{
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid $brder;
        margin-bottom: 52px;
        @media (min-width: $breakpoint-tablet) {
            display: flex;
            gap: 16px;
        }
    }
    .hero_banner{
        width: 100%;
        // max-width: 500px;
        height: 280px;
        padding: 34px 16px 48px 16px;
        background: $hero-color;
        background-image: url("../assets/Vector.png");
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: contain;
        box-sizing: border-box;

        p{
            font-size: 24px;
        }
        h1{
            font-size: 36px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            color: $white;
        }
        @media (min-width: $breakpoint-tablet) {
            .hero_banner{
                max-width: 500px;
            }
        }
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
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            box-sizing: border-box;
        }
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