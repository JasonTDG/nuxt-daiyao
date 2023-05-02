<template>
        <div class="about_content content_box container">
            <div class="container">
                <MainTitle chineseTitle="關於我們" enTitle="ABOUT"/>
                <Breadcrumbs listName="關於我們"/>
            </div>
            <div class="main_intro container">
                <p class="text">{{ aboutData.mainText }}</p>
            </div>
            <div class="second_intro container">
                <div class="section" v-for="item of aboutData.section">
                    <div class="image_box">
                        <img class="image" :src="item.imgSrc">
                    </div>
                    <div class="text_box">
                        <p class="title">{{ item.title }}</p>
                        <p class="text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import aboutData from '../../assets/json/about.json'
    import MainTitle from '../MainTitle/index.vue'
    import Breadcrumbs from '../Breadcrumbs/index.vue'
</script>

<style lang="scss" scoped>
           .about_content{
            
            .main_intro {
                padding-top: 60px;
 
                .text {
                    line-height: 36px;
                }
            }
 
            .second_intro {
                .section {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    padding-top: 60px;
 
                    &:nth-child(2n+1) {
                        flex-direction: row-reverse;
 
                        .image_box {
                            margin-right: 0;
                            margin-left: 10%;
                        }
                    }
 
                    .image_box {
                        width: 40%;
                        margin-right: 10%;
 
                        .image {
                            width: 100%;
                        }
                    }
 
                    .text_box {
                        width: 50%;
 
                        .title {
                            font-size: 24px;
                            color: $main_color;
                            padding-bottom: 25px;
                        }
 
                        .text {
                            line-height: 36px;
                        }
                    }
 
                    @include max-screen(767px) {
                        flex-direction: column;
 
                        .image_box {
                            width: 100%;
                            margin: 0 auto;
                        }
 
                        .text_box {
                            padding-top: 30px;
                            width: 100%;
                        }
 
                        &:nth-child(2n+1) {
                            flex-direction: column;
 
                            .image_box {
                                width: 100%;
                                margin: 0 auto;
                            }
                        }
                    }
                }
 
            }
   }
</style>