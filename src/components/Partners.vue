<template>
    <div id="partners">
        <div class="container">
            <div class="partners__container">
                <h1 class="partners__title">
                    Partners & Investors
                </h1>
                <div class="partners__investors__logo__container">
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/pincsale.png" alt="pincsale-logo">
                    </div>
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/interfi.png" alt="interfi-logo">
                    </div>
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/sandbox.png" alt="sandbox-logo">
                    </div>
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/decentraland.png" alt="decentraland-logo">
                    </div>
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/coingecko.png" alt="coingecko-logo">
                    </div>
                    <div class="partners__investors__logo">
                        <img src="@/assets/pictures/coinmarket.png" alt="coinmarket-logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#partners {
    
    .partners__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 140px;

        @media screen and (min-width: 1024px) and (max-width: 1710px) { 
            padding-bottom: 65px;
        }

        @media screen and (min-width: 768px) and (max-width: 1240px) { 
            padding-bottom: 45px;
        }

        @media screen and (min-width: 320px) and (max-width: 1240px) { 
            padding-bottom: 53px;
        }

        .partners__title {
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 40px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                font-size: 45px;
                margin-bottom: 35px;
            }

            @media screen and (min-width: 320px) and (max-width: 1240px) { 
                font-size: 40px;
                line-height: 48px;
                text-align: center;
            }
        }

        .partners__investors__logo__container {
            display: flex;
            justify-content: center;
            
            @media screen and (min-width: 320px) and (max-width: 1610px) { 
                max-width: 1330px;
                flex-wrap: wrap;
            }
 
            @media screen and (max-width: 1024px) {
                max-width: 875px;
            }

            @media screen and (max-width: 1240px) {
                max-width: 795px;
            }

            .partners__investors__logo {
                margin-right: 20px;
                opacity: 0.7;

                @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 768px) and (max-width: 1240px) { 
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    margin-right: 4px; 
                    margin-bottom: 15px;
                }
    
                &:last-of-type {
                    margin-left: 0;
                }

                img {

                    @media screen and (min-width: 1650px) and (max-width: 1710px) { 
                        height: 75px;
                    }

                    @media screen and (min-width: 1500px) and (max-width: 1649px) { 
                        height: 65px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        height: 65px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        height: 55px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        height: 32px;
                    }

                    @media screen and (max-width: 320px) { 
                        height: 25px;
                    }
                }
            }
        }
    }
}
</style>