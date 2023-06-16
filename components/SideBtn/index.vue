<template>
    <div class="side_icon">
        <a class="link" :href="companyInfoData.numberLink">
            <img class="image" src="/image/phone(circle).svg">
        </a>
        <a class="link" :href="companyInfoData.lineLink" target="_blank">
            <img class="image" src="/image/line.svg">
        </a>
    </div>
    <span v-if="isBtnVisible" class="gotop" id="goTop" @click="goTopClick"></span>
</template>

<script setup>
    import companyInfoData from '../../assets/json/companyInfo.json'

    const isBtnVisible = ref(false);

    const goTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleScroll = () => {
        isBtnVisible.value = window.scrollY > 0;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

</script>

<style lang="scss" scoped>
    .side_icon{
        position: fixed;
        bottom: 110px;
        right: 20px;
        z-index: 1;
        opacity: .9;
        .link{
            display: block;
            position: relative;
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
            @extend %link_hover;
            &:hover{
                transform: scale(1.1);
            }
            .image{
                width: 100%;
            }
        }
    }

    .gotop{
        display: block;
        position: fixed;
        right: 20px;
        bottom: 50px;
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background: #AFAFAF;
        z-index: 9999;
        cursor: pointer;
        @extend %link_hover;
        &:hover{
            transform: scale(1.1);
        }
        &:before{
            content: url('/image/arrow.svg');
            position: absolute;
            top: 18px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>