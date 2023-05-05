<template>
    <footer class="footer">
            <div class="footer_top">
            <div class="container">
                <div class="logo_box">
                    <img class="image lazy" src="~/assets/image/foot_logo.png">
                </div>
                <div class="text_box">
                    <p class="title">歡迎撥打專線，專人將為您服務。</p>
                    <ul class="list_box">
                        <li class="list">
                            專線
                            <a class="link" :href="companyInfoData.numberLink">{{ companyInfoData.number }}</a>
                        </li>
                        <li class="list">
                            傳真
                            <a class="link" href="">{{ companyInfoData.fax }}</a>
                        </li>
                        <li class="list">
                            地址
                            <a class="link" :href="companyInfoData.addressLink" target="_blank">{{ companyInfoData.address }}</a>
                        </li>
                    </ul>
                </div>
                <a class="qrcode" href="https://line.me/ti/p/eGdYQhJ6Kg" target="_blank">
                    <img class="image" src="~/assets/image/line_qr.jpg">
                </a>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <p class="copyright">@<span id="year"></span> {{ companyInfoData.enName }} All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import companyInfoData from '../../assets/json/companyInfo.json'
</script>

<style lang="scss" scoped>
    .footer {
       background-color: $main_color;

       .footer_top {
           padding: 60px 0;
           @extend %clearfix;

           .logo_box {
               float: left;
               max-width: 280px;
               margin-right: 50px;
               margin-top: 30px;

               @include max-screen(1140px) {
                   max-width: 200px;
               }

               @include max-screen(991px) {
                   display: none;
               }

               .image {
                   width: 100%;
               }
           }

           .text_box {
               position: relative;
               float: left;
               margin-top: 30px;
               padding-left: 30px;
               padding: 0 0 3px 30px;
               letter-spacing: 2px; 
               @include max-screen(991px) {
                   padding: 0;
               }

               @include max-screen(680px) {
                   float: none;
                   text-align: center;
                   margin-top: 0;
                   margin-bottom: 30px;
               }

               &:before {
                   content: '';
                   position: absolute;
                   top: 0;
                   left: 0;
                   width: 1px;
                   height: 100%;
                   background: #fff;

                   @include max-screen(991px) {
                       display: none;
                   }
               }

               .title {
                   font-size: 24px;
                   color: #fff;

                   @include max-screen(680px) {
                       font-size: 20px;
                   }
               }

               .list_box {
                   .list {
                       color: #fff;
                       padding-top: 20px;

                       @include max-screen(680px) {
                           padding-top: 10px;
                       }

                       .link {
                           color: #c7c7c7;
                           margin-left: 20px;
                           @extend %link_hover;

                           &:hover {
                               color: #fff;
                           }
                       }
                   }
               }
           }

           .qrcode {
               display: block;
               float: right;
               max-width: 200px;

               @include max-screen(680px) {
                   float: none;
                   margin: 0 auto;
               }

               .image {
                   width: 100%;
               }
           }
       }

       .footer_bottom {
           background: #4E6277;
           padding: 10px;
           @extend %clearfix;

           .copyright {
               font-size: 12px;
               color: #fff;
               text-align: center;
               letter-spacing: 2px;
           }
       }
   }
</style>