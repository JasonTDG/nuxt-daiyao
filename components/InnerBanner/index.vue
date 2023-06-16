<template>
    <div class="inner_banner">
        <img class="image" :src="imgProps.src" :alt="imgProps.alt" :width="imgProps.width" :height="imgProps.height">
    </div>
    
</template>

<script setup>
        const imgProps = defineProps({
            src: {
                type : String,
                default : ""
            },
            alt: {
                type : String,
                default : ""
            },
            width: {
                type : String,
                default : "1920"
            },
            height: {
                type : String,
                default : "460"
            },
        })


</script>

<style lang="scss" scoped>
    .inner_banner{
        position: relative;
        padding-bottom: 24%;
        .image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
</style>

