<template>
    <header>
        <div class="nav">
            <div class="logo_box">
                <NuxtLink class="link" to="/">
                    <img class="image" src="../../assets/image/logo.png">
                </NuxtLink>    
            </div>
            <div class="container">
                <ul class="nav_list">
                    <li class="list" v-for="item of navList.ListBox" :key="item.list">
                        <NuxtLink  class="link" :to="item.link">{{ item.list }}</NuxtLink>
                    </li>
                </ul>
                <div class="burger" @click="burgerClick">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                </div>
            </div>
        </div>
        <div class="mobile_nav">
            <ul class="mobile_nav_list">
                <li class="mobile_list" v-for="item of navList.ListBox" :key="item.list">
                    <NuxtLink  class="link" :to="item.link">{{ item.list }}</NuxtLink>
                </li>
            </ul>
        </div>
    </header>    
</template>

<script setup>
   import navList from '../../assets/json/navList.json'

   const burgerClick = () => {
        const burger = document.querySelector('.burger');
        const item1 = document.querySelector('.burger .item:nth-child(1)');
        const item2 = document.querySelector('.burger .item:nth-child(2)');
        const item3 = document.querySelector('.burger .item:nth-child(3)');
        const bodyContent = document.querySelector('.body_content');
        const nav = document.querySelector('.nav');
        const mobileNav = document.querySelector('.mobile_nav');
        const mobileList = document.querySelector('.mobile_nav .mobile_list');

        burger.classList.toggle('click');
        item1.classList.toggle('line1');
        item2.classList.toggle('line2');
        item3.classList.toggle('line3');

        bodyContent.classList.toggle('hidden');

        nav.classList.toggle('mobile_mode');

        mobileNav.classList.toggle('show');
        mobileList.classList.toggle('show');
   }
</script>

<style lang="scss" scoped>
    header{
        padding-bottom: 100px;
        @include max-screen(991px){
            padding-bottom: 60px;
        }
        .nav{
            width: 100%;
            display: flex;
            position: fixed;
            height: 100px;
            background: #fff;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
            z-index: 10;
            transition: top .3s;
            @include max-screen(991px){
                height: 60px;
            }
            &.mobile_mode{
                background: $main_color;
                box-shadow: none;
            }
            .logo_box{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-basis: 450px;
                background: $main_color;
                @include max-screen(1200px){
                    flex-basis: 300px;
                }
                @include max-screen(991px){
                    flex-basis: 250px;
                }
                .image{
                    width: 100%;
                    @include max-screen(1200px){
                        max-width: 270px;
                    }
                    @include max-screen(991px){
                        max-width: 220px;
                    }
                }
            }
            .container{
                display: flex;
                align-items: center;
                flex-basis: calc(100% - 450px);
                flex-flow: row-reverse;
                @extend %clearfix;
                @include max-screen(1200px){
                    flex-basis: calc(100% - 300px);
                }
                @include max-screen(991px){
                    flex-basis: calc(100% - 250px);
                }
                .nav_list{
                    height: 100%;
                    padding-right: 10%;
                    @include max-screen(991px){
                        display: none;
                    }
                    .list{
                        display: inline-block;
                        margin-left: 40px;
                        font-size: 20px;
                        height: 100%;
                        @include max-screen(1200px){
                            margin-left: 20px;
                        }
                        .link{
                            color: #121212;   
                            position: relative;
                            display: block;
                            height: 100%;
                            line-height: 100px; 
                            &:before{
                                content: '';
                                position: absolute;
                                left: 50%;
                                bottom: 0;
                                width: 0;
                                height: 3px;
                                background: $main_color;
                            }
                        }
                        .router-link-exact-active{
                            color: $main_color;
                            &:before{
                                width: 100%;
                                left: 0;
                            }
                        }
                        &:hover{
                            .link{
                                color: $main_color;
                                &:before{
                                    width: 100%;
                                    left: 0;
                                }
                            }
                        }
                    }
                }
                .burger{
                    display: none;
                    cursor: pointer;
                    float: right;
                    position: absolute;
                    top: 50%;
                    right: 5%;
                    transform: translateY(-50%);
                    z-index: 9999;
                    &.click{
                        .item{
                            background-color: #fff;
                        }
                    }
                    @include max-screen(991px){
                        display: block;
                    }
                    .item{
                        width: 25px;
                        height: 3px;
                        background-color: $main_color;
                        margin: 5px;
                        border-radius: 10px;
                        &.line1{
                            transform: rotate(-45deg) translate(-5px,6px);
                        }
                        &.line2{
                            opacity: 0;
                        }
                        &.line3{
                            transform: rotate(45deg) translate(-5px,-6px);
                        }
                    }
                    
                }
            }
        }

        .mobile_nav{
            opacity: 0;
            position: absolute;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: calc(100vh - 100px);
            background: $main_color;
            z-index: -1;
            @include max-screen(991px){
                top: 60px;
                height: 100vh;
            }
            &.show{
                position: fixed;
            opacity: 1;
            z-index: 999;
            }
            .mobile_nav_list{
                text-align: center;
                padding-top: 30px;
                .mobile_list{
                    font-size: 20px;
                    padding: 20px 0;
                    opacity: 0;
                    transform: translateY(20px);
                    &.show{
                        opacity: 1;
                        transform: none;
                        transition: ease .3s;
                        .link{
                            color: #fff;
                        }
                    }
                    &:nth-child(2){
                        transition-delay: 0.1s;
                    }
                    &:nth-child(3){
                        transition-delay: 0.2s;
                    }
                    &:nth-child(4){
                        transition-delay: 0.3s;
                    }
                    &:nth-child(5){
                        transition-delay: 0.4s;
                    }
                    .link{
                        color: #121212;
                    }
                    &:hover{
                        .link{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }    
</style>