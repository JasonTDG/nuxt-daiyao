<template>
        <div class="contact_content content_box container">
            <div class="container">
                <MainTitle chineseTitle="聯絡我們" enTitle="CONTACT"/>
                <Breadcrumbs listName="聯絡我們"/>
            </div>
            <div class="contact_info_box container">
                <div class="map">
                    <iframe :src="companyInfoData.mapIframe" 
                     style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="text_box">
                    <div class="inner_box">
                        <p class="title">如何找到我們</p>
                        <ul class="list_box">
                            <li class="list">
                                <div class="image_box"><img class="image" src="~/assets/image/phone.svg"></div>
                                <a class="number link" :href="companyInfoData.numberLink">{{ companyInfoData.number }}</a>
                                <p class="name">陳先生</p>
                            </li>
                            <li class="list">
                                <div class="image_box"><img class="image" src="~/assets/image/fax.svg"></div>
                                <a class="number link" href="">{{ companyInfoData.fax }}</a>
                            </li>
                            <li class="list">
                                <div class="image_box"><img class="image" src="~/assets/image/address.svg"></div>
                                <a class="link" :href="companyInfoData.addressLink">{{ companyInfoData.address }}</a>
                            </li>
                        </ul>
                    </div>
                    
                   
                </div>
            </div>
        </div>
</template>

<script setup>
    import companyInfoData from '../../assets/json/companyInfo.json'
    import MainTitle from '../MainTitle/index.vue'
    import Breadcrumbs from '../Breadcrumbs/index.vue'
</script>

<style lang="scss" scoped>
            .contact_content{
            .contact_info_box{
                display: flex;
                justify-content: center;
                padding-top: 60px;
                @include max-screen(767px){
                    flex-direction: column-reverse;
                }
                .map{
                    width: 50%;
                    @include max-screen(767px){
                        width: 100%;
                    }
                    iframe{
                        width: 100%;
                        height: 400px;
                        @include max-screen(767px){
                            height: 300px;
                        }
                    }
                }
                .text_box{
                    display: flex;
                    justify-content: center;
                    width: 50%;
                    @include max-screen(767px){
                        width: 100%;
                        justify-content: flex-start;
                    }
                    .inner_box{
                        padding: 80px 15px 0;
                        @include max-screen(767px){
                            padding: 0 0 30px;
                        }
                        .title{
                            color: $main_color;
                            font-size: 24px;
                            font-weight: 500;
                            padding-bottom: 30px;
                        }
                        .list_box{
                            .list{
                                display: flex;
                                padding-bottom: 10px;
                                .image_box{
                                    width: 32px;
                                    margin-right: 20px;
                                    .image{
                                        width: 100%;
                                    }
                                }
                                .link{
                                    color: $main_color;
                                    font-weight: 500;
                                    @extend %link_hover;
                                    &:hover{
                                        color: $light_blue;
                                    }
                                }
                                .number{
                                    margin-right: 20px;
                                }
                                .name{
                                    color: $main_color;
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                }
            }
        }
</style>