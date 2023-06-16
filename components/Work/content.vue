<template>
            <div class="work_content content_box container">
            <div class="container">
                <MainTitle chineseTitle="工程展示" enTitle="OUR WORKS"/>
                <Breadcrumbs listName="工程展示"/>
            </div>
            <div class="grid container">
                <div class="grid_item">
                        <img class="image " src="/image/1.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="/image/2.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="/image/3.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="/image/4.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="/image/5.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="/image/6.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="/image/7.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="/image/8.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="/image/9.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="/image/10.jpg">
                </div>
            </div>
        </div>
</template>

<script setup>
    import MainTitle from '../MainTitle/index.vue'
    import Breadcrumbs from '../Breadcrumbs/index.vue'
</script>


<style lang="scss" scoped>
            .work_content{
            .grid{
                column-count: 3;
                padding-top: 60px;
                @include max-screen(991px){
                    column-count: 2;  
                }
                @include max-screen(767px){
                    column-count: 1;  
                }
                .grid_item{
                    width: 100%;
                    padding: 10px;
                    .image{
                        width: 100%;
                        border-radius: 3px;
                    }
                }
            }
        }
</style>