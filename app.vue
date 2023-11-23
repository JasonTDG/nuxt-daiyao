<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
    useHead({
      title: 'Vue-Daiyao',
      meta: [
        { name: 'description', content: '代曜工程企業有限公司為新北起重工程公司，長期承攬全台各科技園區半導體公司之設備設備搬運、定位、組裝；服務範圍包括：北部、中部、南部起重工程；服務項目包括：半導體、無塵室、精密機械設備的拆箱、搬運、定位的服務、整廠搬遷、二手設備拆卸買賣、木箱包裝及各式車種運輸，包括貨車、平板車、鷗翼車、氣墊車，報廢機台拆卸，重物吊車吊掛，貴重藝術品搬運，租借堆高機，貨櫃裝卸等等的服務。' }
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
