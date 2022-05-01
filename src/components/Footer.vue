<template>
    <div class="footer">
        <div class="footer__container">
            <p class="footer__text">
                Copyright © 2021 SpiderShiba Inu. All Rights Reserved.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    &__container {
        background: #0D1428;
        padding: 40px 0;
        .footer__text {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #FFFFFF;
            opacity: 0.4;
            text-align: center;

            @media screen and (min-width: 320px) and (max-width: 760px) {
                width: 320px;
                margin: 0 auto;
            }

            @media screen and (max-width: 320px) {
                width: 295px;
                font-size: 18px;
            }
        }
    }
}
</style>