<template>
        <div class="breadcrumb">
            <span class="list"><NuxtLink class="link" to="/">首頁</NuxtLink></span>
            <span class="arrow"><img class="image" src="../../assets/image/arrow_right.svg"></span>
            <span class="list">{{ listProps.listName }}</span>
        </div>
</template>

<script setup>
    const listProps = defineProps({
        listName: {
            type : String,
            default : ""
        },
    })
</script>

<style lang="scss" scoped>
    .breadcrumb{
        float: right;
        @include max-screen(767px){
            float: none;
            padding-top: 5px;
        }
        .list{
            font-size: 14px;
            color: #BBBBBB;
            margin-right: 5px;
            &:nth-last-child(1){
                color: #8D8D8D;
            }
            .link{
                color: #BBBBBB;
                @extend %link_hover;
                &:hover{
                    color: #8D8D8D;
                }
            }
        }
        .arrow{
            margin-right: 7px;
        }
    }
</style>