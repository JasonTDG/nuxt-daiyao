<template>
        <div class="index_service">
        <div class="container">
            <MainTitle chineseTitle="服務項目" enTitle="OUR SERVICE"/>
            <div class="service_box">
                <ul class="list_box">
                    <li class="list" v-for="item of serviceListData.ListBox">
                        {{ item.list }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import serviceListData from '~/assets/json/serviceList.json'
    import MainTitle from '../MainTitle/index.vue'
</script>

<style lang="scss" scoped>
        .index_service {
           background: url('/image//service_bg.jpg')no-repeat 50% 50%;
           background-size: cover;
           padding: 60px 0 100px;

           .title_box {
               text-align: center;
               padding-bottom: 60px;

               @include max-screen(768px) {
                   padding-bottom: 30px;
               }

               .subtitle {
                   font-size: 24px;
                   color: $main_color;
               }
           }

           .service_box {
               background: rgba(255, 255, 255, .7);
               padding: 100px 5% 40px;

               @include max-screen(768px) {
                   padding: 30px 0 40px;
               }

               .list_box {
                   padding-left: 6%;
                   @extend %clearfix;
                   @include max-screen(400px){
                       padding-left: 4%;
                   } 
                   .list {
                       position: relative;
                       font-size: 20px;
                       width: 25%;
                       float: left;
                       padding-left: 24px;
                       padding-right: 15px;
                       padding-bottom: 60px;

                       @include max-screen(991px) {
                           width: 33.33333%;
                       }

                       @include max-screen(768px) {
                           font-size: 18px;
                           padding-right: 10px;
                           // padding-bottom: 30px;
                       }

                       @include max-screen(600px) {
                           width: 50%;
                           padding-bottom: 30px;
                       }

                       &:before {
                           content: url('/image/dot.svg');
                           position: absolute;
                           top: 0;
                           left: 0;
                           width: 14px;
                           height: 14px;
                       }
                   }
               }
           }
    }
</style>