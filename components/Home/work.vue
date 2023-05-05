<template>
    <div class="index_work">
        <div class="text_box">
            <div class="inner_box">
                <MainTitle chineseTitle="工程展示" enTitle="OUR WORKS"/>
                <p class="text">我們將持續用熱誠的心、專業的技術來完成每一次的託付。</p>
                <button class="btn">
                    <a class="link" href="/work">
                        <p class="text">READ MORE</p>
                    </a>
                </button>
            </div>
        </div>
        <div class="image_box"></div>
    </div>
</template>

<script setup>
    import MainTitle from '../MainTitle/index.vue'
</script>

<style lang="scss" scoped>
        .index_work {
           display: flex;

           @include max-screen(768px) {
               flex-direction: column-reverse;
           }

           .text_box {
               width: 50%;
               position: relative;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               padding: 30px;

               @include max-screen(768px) {
                   width: 100%;
               }

               .inner_box {
                   padding-left: 10%;

                   @include max-screen(768px) {
                       padding-left: 5%;
                   }

                   .title_box {
                       margin-bottom: 30px;
                   }

                   .chinese {
                       @include max-screen(1140px) {
                           display: block;
                       }
                   }
               }

               &:before {
                   content: '';
                   position: absolute;
                   width: 10%;
                   height: 100%;
                   top: 0;
                   left: 0;
                   background: $light_gray;

                   @include max-screen(768px) {
                       width: 5%;
                   }
               }
           }

           .image_box {
               width: 50%;
               background: url('~/assets/image/index_work.jpg')no-repeat 50% 50%;
               background-size: cover;
               min-height: 450px;

               @include max-screen(768px) {
                   width: 100%;
                   min-height: 250px;
               }
           }
    }
</style>