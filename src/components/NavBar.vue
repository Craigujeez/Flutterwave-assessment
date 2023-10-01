<template>
  <nav class="navBar">
    <RouterLink to="/">
        <img class="logo" alt="dasdas logo" src="../assets/logo.svg"/>
    </RouterLink>
    <ul class="social_list">
        <li class="social_list_items">
            <a href="https://twitter.com" target="_blank">
                <img class="social_list_items_type_1" alt="twitter icon" src="../assets/twitter.svg"/>
            </a>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <a href="https://dribbble.com" target="_blank">
                <img class="social_list_items_type_2" alt="dribble icon" src="../assets/dribble.svg"/>
            </a>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <a href="https://figma.com" target="_blank">
                <img class="social_list_items_type_1" alt="figma icon" src="../assets/figma.svg"/>
            </a>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <a href="https://github.com" target="_blank">
                <img class="social_list_items_type_1" alt="github icon" src="../assets/github.svg"/>
            </a>
        </li>
    </ul>
  </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'

    export default {
        name: 'NavBar',
        components: {
            RouterLink
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .navBar{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        margin-bottom: 48px;
        box-sizing: border-box;
    }
    .logo{
        width: 80px;
        height: 80px;
    }
    .social_list{
        display: flex;
        list-style: none;
        height: 24px;
        margin: auto 0px;
    }
    .social_list_seperator{
        margin: 0px 8px;
        padding: 0px 2px;
        height: 24px;
    }
    .seperate{
        width: 2px;
        height: 2px;
        border-radius: 100%;
        background-color: #6E6E6E;
        margin-top: 8px;
    }
    .social_list_items{
        width: auto;
    }
    .social_list_items_type_1{
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    .social_list_items_type_2{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    .social_list_items_type_2:hover, .social_list_items_type_1:hover{
        transform: translateY(-5px);
        transition: all ease-out 0.3s;
    }

</style>