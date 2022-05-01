<template>
    <div id="invest">
        <div class="container">
            <div class="invest__container">
                <div class="invest__banner">
                    <div class="invest__banner__title__container">
                        <h2 class="invest__banner__title">
                            Why invest in SpiderShiba Inu?
                        </h2>
                        <p class="invest__banner__string">
                            in case you have lived in a cave in the last few months we will give you a brief 
                            summary of what happened in crypto industry
                        </p>
                    </div>
                    <div class="invest__button">
                        <p class="button__text">
                            Learn more about SpiderShiba 
                        </p>
                    </div>
                </div>
                <div class="invest__information">
                    <div class="trend__info__container">
                        <div class="trend__pictures">
                            <img src="@/assets/pictures/union.png" alt="union">
                        </div>
                        <div class="trend__info">
                            <h2 class="trend__info__title">
                                Massive trend
                            </h2>
                            <p class="trend__info__paragraph">
                                Shiba inu has invaded the market with an infinity of other meme coins 
                                that collect thousands of BNB and after the launch they make mind-boggling numbers! 
                            </p>
                        </div>
                    </div>
                    <div class="value__info__container">
                        <div class="value__pictures">
                            <img src="@/assets/pictures/star.png" alt="star">
                        </div>
                        <div class="value__info">
                            <h2 class="value__info__title">
                                100% of value, 0% of memecoin!
                            </h2>
                            <p class="value__info__paragraph">
                                We took the best from this trend and have decided to ride this tremendous 
                                wave success in Shiba Inu tokens, not only by launching a coin, 
                                but by creating a real NFT game p2e 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#invest {
    background: #30298C;

    .container {
        padding-left: 0; 
        
        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding: 0 50px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) {
            padding-left: 15px;
        }   
    }

    .invest__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1809px;

        
        @media screen and (min-width: 320px) and (max-width: 1023px) { 
            flex-direction: column;
            padding-bottom: 50px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) {
            padding-bottom: 30px;
        }
        
        .invest__banner {
            width: 644px;
            background: url(../assets/pictures/spiderweb.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            padding-top: 177px;
            padding-bottom: 177px;
            padding-left: 92px;

            @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                padding-top: 137px;
                padding-bottom: 137px;
                padding-left: 52px;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                padding-right: 32px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 50px 0;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) {
                padding-top: 30px;
                padding-bottom: 60px;
                padding-left: 15px;
                padding-right: 15px;
                width: auto;
            }

            @media screen and (max-width: 320px) {
                background-position: top;
            }

            .invest__banner__title__container {
                max-width: 552px;
                margin-bottom: 40px;

                .invest__banner__title {
                    font-weight: 700;
                    font-size: 50px;
                    line-height: 60px;
                    margin-bottom: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        font-size: 45px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 35px;
                        line-height: 50px;
                    }

                    @media screen and (max-width: 320px) {
                        font-size: 30px;
                        line-height: 45px;
                    }
                }
                .invest__banner__string {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                    opacity: 0.6;
                }
            }

            .invest__button {
                background: #E11D2E;
                border-radius: 10px;
                cursor: pointer;
                padding: 25px 30px;
                max-width: 404px;
                transition: all 1s ease-out;
                
                @media screen and (min-width: 320px) and (max-width: 760px) {
                    padding: 20px 15px;
                }

                &:hover {
                    background: #AC1216;
                }

                .button__text {
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 30px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 20px;
                    }

                    @media screen and (max-width: 320px) {
                        font-size: 16px;
                    }
                }
            }
        }

        .invest__information {

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin: 50px 0;
            }

            .trend__info__container,
            .value__info__container {
                display: flex;
                margin-bottom: 50px;

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    flex-direction: column;
                }

                .trend__pictures,
                .value__pictures {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    max-height: 107px;
                    padding-top: 25px;
                    margin-right: 21px;
                    max-width: 107px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        max-height: 100px;
                        max-width: 100px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        max-height: 70px;
                        max-width: 70px;
                        padding-top: 15px;
                    }

                    img {
                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            width: 100%;
                        }
                    }
                }

                .trend__info,
                .value__info {
                    max-width: 868px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        max-width: 520px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        margin-top: 15px;
                    }

                    .trend__info__title,
                    .value__info__title {
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 36px;
                        margin-bottom: 10px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 25px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            font-weight: 24px;
                        }
                    }

                    .trend__info__paragraph,
                    .value__info__paragraph {
                        font-weight: 400;
                        font-size: 32px;
                        line-height: 38px;
                        opacity: 0.8;
                        
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 25px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            font-size: 20px;
                            line-height: 30px;
                        }
                    }
                }
            }
            
            .value__info__container {
                margin-bottom: 0;

                .value__pictures {
                    padding: 0;
                    display: flex;
                    align-items: center;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        display: block;
                        padding-top: 8px;
                    }
                }
            }
        }
    }
} 
</style>