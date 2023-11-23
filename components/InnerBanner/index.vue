<template>
    <div class="inner_banner">
        <img class="image" :src="imgSrc" :alt="alt" width="1920" height="460">
    </div>
    
</template>

<script setup>
    import innerBannerData from '~/assets/json/innerBanner.json'

    const route = useRoute()
    const imgSrc = ref("")
    const alt = ref("")
    const data = innerBannerData.innerBanner

    for( let i = 0; i < data.length; i++ ) {
        if(data[i].key == route.name) {
            
            imgSrc.value = data[i].imgSrc
            alt.value = data[i].alt
        }
    }

        // const imgProps = defineProps({
        //     src: {
        //         type : String,
        //         default : ""
        //     },
        //     alt: {
        //         type : String,
        //         default : ""
        //     },
        //     width: {
        //         type : String,
        //         default : "1920"
        //     },
        //     height: {
        //         type : String,
        //         default : "460"
        //     },
        // })


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

