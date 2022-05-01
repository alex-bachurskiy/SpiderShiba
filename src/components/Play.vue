<template>
    <div id="play">
        <div class="container">
            <div class="play__container">
                <div class="play__title__container">
                    <h2 class="play__title">
                        Play to earn
                    </h2>
                    <p class="title__string">
                        Many ways to earn tokens and NFTs
                    </p>
                </div>
                <div class="play__banner">
                    <div class="banner__container">
                        <div class="spidershiba__container">
                            <img class="shiba" src="@/assets/pictures/shiba.png" alt="shiba">
                        </div>
                        <div class="goblin__container">
                            <img class="goblin" src="@/assets/pictures/goblin.png" alt="goblin">
                        </div>
                    </div>
                    <div class="banner__info__container">
                        <h2 class="banner__info__title">
                            Game plot and goal
                        </h2>
                        <div class="banner__info__paragraph__container">
                            <p class="banner__info__paragraph">
                                Mary Jane has been kidnapped by Green Goblin, who has no intention of letting her escape, so she flees to New York City, going through different scenarios that will be part of the game!
                            </p>
                            <p class="banner__info__paragraph">
                                The goal is to accumulate as many game coins and points as possible, which will then be transformed into the game token based also on the attempts used to complete the level.
                            </p>
                            <p class="banner__info__paragraph">
                                Once the Green Goblin is defeated and Mary Jane is safed, the game is over, but we don't stop there!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="play__info__container">
                    <div class="play__info__cash">
                        <img src="@/assets/pictures/coin.png" alt="coin">
                        <div class="play__info__box">
                            <h2 class="play__info__title">
                                Earn that cash!
                            </h2>
                            <p class="play__info__paragraph">
                                In the various levels there will also be special coins, more difficult to take, which will provide you with bonuses in tokens or game NFTs!
                            </p>
                        </div>
                    </div>
                    <div class="play__info__challenges">
                        <img src="@/assets/pictures/megaphone.png" alt="megaphone">
                        <div class="play__info__box">
                            <h2 class="play__info__title">
                                Game events and challenges
                            </h2>
                            <p class="play__info__paragraph">
                                There will be lots of events after end of the game, that will bring together whole community and you can participate in challanges with the NFTs! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#play {

    .play__container {
        margin: 0 auto;
        padding-bottom: 175px;
        max-width: 1736px;

        @media screen and (min-width: 1250px) and (max-width: 1710px) { 
            padding-bottom: 160px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) {
            padding-bottom: 75;
        }

        .play__title__container {
            margin-bottom: 50px;
            text-align: center;

            .play__title {
                font-weight: 700;
                font-size: 50px;
                line-height: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                    font-size: 45px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    font-size: 40px;
                    line-height: 48px;
                }
            }

            .title__string {
                font-weight: 400;
                font-size: 25px;
                line-height: 42px;
                opacity: 0.5;

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    font-size: 21px;
                }

                @media screen and (max-width: 320px) {
                    font-size: 19px;
                }
            }
        }

        .play__banner {
            display: flex;
            background: #071022;
            border-radius: 30px;
            padding-top: 36px;
            padding-right: 50px;
            padding-bottom: 60px;
            padding-left: 50px;
            margin-bottom: 50px;
            max-width: 1736px;

            @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                align-items: center;
            }

            @media screen and (min-width: 768px) and (max-width: 1240px) {
                align-items: center; 
                flex-direction: column;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) {
                padding-top: 10px;
                padding-right: 10px;
                padding-bottom: 30px;
                padding-left: 10px; 
                flex-direction: column;
                margin: 0 auto;
                margin-bottom: 30px;
                max-width: 330px;
            }

            .banner__container {
                display: flex;
                background: url(../assets/pictures/banner__bg.png);
                border-radius: 30px;
                justify-content: space-between;
                margin-right: 41px;
                height: 288px;
                max-width: 649px;

                @media screen and (min-width: 768px) and (max-width: 1240px) { 
                    margin-right: 0;
                    margin-bottom: 41px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    background-size: cover;
                    margin-right: 0;
                    height: 137px; 
                }

                @media screen and (min-width: 320px) and (max-width: 1023px) {
                    width: auto;
                }

                .spidershiba__container {
                    margin-left: 26px;
                    margin-top: 44px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        margin-top: 18px;
                        margin-left: 15px;
                    }

                    .shiba {
                        transform: rotate(-23deg);
                        width: 200px;

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            width: 95px;
                        }
                    }
                }

                .goblin__container {
                    background: url(../assets/pictures/spiderweb__banner.png);
                    height: 287px;
                    width: 280px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        height: 136px;
                        width: 133px;
                        background-size: contain;
                    }

                    .goblin {
                        margin-left: 10px;

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            margin-top: 15px;
                            margin-left: 19px;
                            width: 95px;
                        }
                    }
                }
            }

            .banner__info__container {

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    margin-top: 30px;
                }

                .banner__info__title {
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 36px;
                    margin-bottom: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        text-align: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 24px;
                        line-height: 29px;
                    }
                }

                .banner__info__paragraph__container {
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 29px;
                    opacity: 0.6;
                    max-width: 946px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 19px;
                        line-height: 23px;
                    }

                    .banner__info__paragraph {
                        margin-bottom: 20px;

                        &:last-of-type {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

        .play__info__container {
            display: flex;

            @media screen and (min-width: 320px) and (max-width: 1023px) { 
                flex-direction: column;
                align-items: center;
            }

            .play__info__cash,
            .play__info__challenges {
                align-items: center;
                display: flex;
                border-radius: 30px;
                padding: 36px 64px 35px 30px;
                max-width: 847px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    flex-direction: column;
                    padding-right: 38px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    flex-direction: column;
                    padding: 20px 20px 50px 20px;
                    text-align: center;
                    max-width: 327px;
                }

                .play__info__box {
                    margin-left: 30px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-top: 30px;
                        margin-left: 0;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        margin-top: 20px;
                        margin-left: 0;
                    }

                    .play__info__title {
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 36px;
                        margin-bottom: 20px;

                        @media screen and (min-width: 1024px) and (max-width: 1023px) { 
                            text-align: center;
                        }
                    }

                    .play__info__paragraph {
                        font-weight: 400;
                        font-size: 28px;
                        line-height: 33px;
                        opacity: 0.8;

                        
                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            font-size: 22px;
                            line-height: 26px;
                        }
                    }
                }
            }

            .play__info__cash {
                background: #FF9429;
                margin-right: 40px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-right: 0;
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    margin-right: 0;
                    margin-bottom: 30px;
                }
            }

            .play__info__challenges {
                background: #067CCB;
                padding-right: 38px;
            }
        }
    }
}
</style>