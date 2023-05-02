<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
    useHead({
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      bodyAttrs: {
        class: 'bodyStyle'
      }
    })
</script>

<style lang="scss">
  .bodyStyle{
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      font-size: 18px;
      overflow-x: hidden;
      font-family: "Noto Sans TC", "Helvetica Neue";
      &.hidden{
          overflow: hidden;
      }
  }
</style>
