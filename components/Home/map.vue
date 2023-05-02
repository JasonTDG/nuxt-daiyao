<template>
    <div class="map_section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5503415691087!2d121.41644631537841!3d25.015390845190243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681d610af4bbf7%3A0xcf5bdb039f9afa67!2zMjM45paw5YyX5biC5qi55p6X5Y2A5LiJ5L-K6KGXMTk06Jmf!5e0!3m2!1szh-TW!2stw!4v1618197409744!5m2!1szh-TW!2stw" 
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
     .map_section {
        width: 100%;
        height: 450px;
        @include max-screen(768px){
            height: 300px;
        }
    }
</style>