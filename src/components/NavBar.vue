<template>
  <nav class="navBar">
    <img class="logo" alt="dasdas logo" src="../assets/logo.svg"/>
    <ul class="social_list">
        <li class="social_list_items">
            <img class="social_list_items_type_1" alt="twitter icon" src="../assets/twitter.svg"/>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <img class="social_list_items_type_2" alt="dribble icon" src="../assets/dribble.svg"/>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <img class="social_list_items_type_1" alt="figma icon" src="../assets/figma.svg"/>
        </li>
        <li class="social_list_seperator">
            <div class="seperate"/>
        </li>
        <li class="social_list_items">
            <img class="social_list_items_type_1" alt="github icon" src="../assets/github.svg"/>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
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