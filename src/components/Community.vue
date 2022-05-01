<template>
    <div id="community">
        <div class="container">
            <div class="community__container">
                <h1 class="community__title">
                    Join our SpiderShib Inu Community
                </h1>
                <div class="community__network__container">
                    <div class="community__network">
                        <div class="social__network">
                            <img class="telegram" src="@/assets/pictures/telegram.png" alt="telegram">
                        </div>
                        <div class="social__network">
                            <img class="twitter" src="@/assets/pictures/twitter.png" alt="twitter">
                        </div>
                        <div class="social__network">
                            <img class="reddit" src="@/assets/pictures/reddit.png" alt="reddit">
                        </div>
                        <div class="social__network">
                            <img class="facebook" src="@/assets/pictures/facebook.png" alt="facebook">
                        </div>
                        <div class="social__network">
                            <img class="medium" src="@/assets/pictures/medium.png" alt="medium">
                        </div>
                        <div class="social__network">
                            <img class="instagram" src="@/assets/pictures/instagram.png" alt="instagram">
                        </div>
                    </div>
                    <div class="community__spidershiba">
                        <img class="spidershiba" src="@/assets/pictures/shiba.png" alt="spidershiba">
                    </div>
                    <div class="community__contract__conainer">
                        <h6 class="community__contract__title">
                            SpiderShiba Inu’s Contract address:
                        </h6>
                        <p class="community__contract__info">
                            0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc
                        </p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#community {
    background: #162758;

        .container {

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                padding: 0;
            }
        }

        .community__container {
            padding-top: 60px;

            @media screen and (min-width: 1200px) and (max-width: 1710px) { 
                padding-top: 45px;
            }

            .community__title {
                font-weight: 700;
                font-size: 50px;
                line-height: 60px;
                margin: 0 auto;
                text-align: center;
                padding-bottom: 20px;
                max-width: 782px;

                @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                    font-size: 45px;
                    line-height: 50px;
                }
                
                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    font-size: 40px;
                    line-height: 48px;
                    padding-right: 15px;
                    padding-left: 15px;
                }
            }

            .community__network__container {
                align-items: center;
                display: flex;
                flex-direction: column;
                background: url(../assets/pictures/map.png);
                background-repeat: no-repeat;
                background-position-x: center;
                padding-top: 110px;
                padding-bottom: 107px;

                @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                    padding-top: 60px;
                    padding-bottom: 57px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) {
                    background-size: contain; 
                    flex-wrap: wrap;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    background-size: cover; 
                    flex-wrap: wrap;
                    align-items: baseline;
                    padding-top: 50px;
                    padding-bottom: 170px;
                }

                .community__network {
                    display: flex;
                    margin-bottom: 80px;

                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        margin-bottom: 50px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .social__network {
                        align-items: center;
                        display: flex;
                        justify-content: center;
                        background: #E11D2E;
                        border-radius: 15px;
                        margin-right: 40px;
                        cursor: pointer;
                        height: 108px;
                        width: 108px;
                        transition: all 1s ease-out;

                        img {
                            @media screen and (min-width: 320px) and (max-width: 760px) {
                                height: 27px;
                            }
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) {
                            height: 73px;
                            width: 73px; 
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            height: 60px;
                            margin-right: 30px;
                            margin-bottom: 30px;
                            width: 60px; 
                        }

                        &:nth-of-type(1) {
                            @media screen and (min-width: 320px) and (max-width: 760px) {
                                margin-left: 30px;
                            }
                        }

                        &:nth-of-type(5),
                        &:nth-of-type(6) {
                        
                            @media screen and (min-width: 320px) and (max-width: 760px) {
                                margin-bottom: 0;
                            }
                        }

                        &:hover {
                            background: #AC1216;
                        }

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }

            .community__spidershiba {
                display: flex;
                justify-content: center;
                margin-bottom: 50px;

                .spidershiba {
                    width: 43%;
                }
            }

            .community__contract__conainer {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 50px;
                height: 98px;
                padding-top: 23px;
                padding-left: 56px;
                width: 699px; 

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    width: 330px;
                    padding-top: 15px;
                    height: 72px;
                    padding-left: 20px;
                    padding-right: 20px;
                    margin: 0 auto;
                    border-radius: 20px;
                }

                @media screen and (max-width: 320px) { 
                    width: 315px;
                }
                      
                .community__contract__title {
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 18px;
                    opacity: 0.4;
                    margin-bottom: 5px;
                }

                .community__contract__info {
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 30px;
                    opacity: 0.8;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 12px;
                        line-height: 14px;
                    }

                    @media screen and (max-width: 320px) { 
                        font-size: 11.5px;
                    }
                }
            }
        }
}
</style>