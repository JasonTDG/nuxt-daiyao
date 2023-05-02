<template>
    <div class="title_box">
        <p class="main_title">
            {{ titleProps.chineseTitle }}
        </p>
        <p class="en">
            <span class="slash">∕</span>
           {{ titleProps.enTitle }}
        </p>
    </div>
</template>

<script setup>

    const titleProps = defineProps({
        chineseTitle: {
            type : String,
            default : ""
        },
        enTitle: {
            type : String,
            default : ""
        }
    })
    
</script>

<style lang="scss" scoped>
    .title_box{
        .main_title{
            display: inline-block;
            font-size: 48px;
            font-weight: bold;
            letter-spacing: 3px;
            padding-right: 5px;
            color: $main_color;
            @include max-screen(1140px){
                font-size: 36px;
            }
            @include max-screen(460px){
                display: block;
            }
        }
        .black{
            color: $black;
            padding-right: 10px;
        }
        .en{
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>