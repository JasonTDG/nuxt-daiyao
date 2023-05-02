<template>
            <div class="work_content content_box container">
            <div class="container">
                <MainTitle chineseTitle="工程展示" enTitle="OUR WORKS"/>
                <Breadcrumbs listName="工程展示"/>
            </div>
            <div class="grid container">
                <div class="grid_item">
                        <img class="image " src="../../assets/image/1.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="../../assets/image/2.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="../../assets/image/3.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="../../assets/image/4.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="../../assets/image/5.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="../../assets/image/6.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="../../assets/image/7.jpg">
                </div>
                <div class="grid_item">
                        <img class="image" src="../../assets/image/8.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="../../assets/image/9.jpg">
                </div>
                <div class="grid_item">
                        <img class="image " src="../../assets/image/10.jpg">
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
                padding-top: 60px;
                .grid_item{
                    width: 33.3333%;
                    padding: 15px;
                    @include max-screen(767px){
                        width: 50%;
                        padding: 8px;
                    }
                    .image{
                        width: 100%;
                        border-radius: 3px;
                    }
                }
            }
        }
</style>