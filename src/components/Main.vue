<template>
    <div class="main">
        <Header/>
        <div class="container">
            <div class="main__container">
                <div class="main__info__container">
                    <div class="main__title__container">
                        <h2 class="main__title">
                            Who is <span>mr. Spidershiba Inu?</span>
                        </h2>
                        <h6 class="main__title__info">
                            it’s a hybrid of Shiba and Spiderman.... but 
                        </h6>
                    </div>
                    <p class="main__info">
                        It’s not only for pump and dump by Elon tweets. <br>
                        This is real NFT game with Achiements, Goals and nice gameplay with tokenization
                    </p>
                    <div class="main__pictures__container">
                        <img class="shiba" src="@/assets/pictures/shiba.png" alt="SpiderShiba">
                    </div>
                    <div class="main__button__container">
                        <div class="main__button__color"> 
                            <p class="button__color__text">
                                Join Community
                            </p>
                        </div>
                        <div class="main__button__transparent">
                            <p class="button__transparent__text">
                                More about SpiderShiba Inu
                            </p>
                        </div>
                    </div>
                    <div class="main__contract__conainer">
                        <h6 class="main__contract__title">
                            Contract address:
                        </h6>
                        <p class="main__contract__info">
                            0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc
                        </p>
                    </div>
                </div>
                <div class="main__pictures__container">
                    <img src="@/assets/pictures/shiba.png" alt="SpiderShiba">
                </div>
            </div>
        </div>
        <Marquee/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Marquee from "../components/Marquee";

export default {
    name: "Main",
    components: {
        Header,
        Marquee
    }
};
</script>

<style lang="scss" scoped>
.main {
    background: url(../assets/pictures/main-bg.png);
    background-size: cover;

    &__container {
        display: flex;
        padding-bottom: 129px;
        max-width: 1920px;
        margin: 0 auto;

        @media screen and (min-width: 1024px) and (max-width: 1710px) { 
            align-items: center;
            justify-content: space-between;
            padding-bottom: 75px;
        }
        
        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 55px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
            align-items: center; 
            flex-direction: column;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) { 
            flex-direction: column;
            padding-bottom: 35px;
        }

        .main__info__container {
            max-width: 848px;
            margin-right: 200px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                margin-right: 145px;
                max-width: 650px;
                margin-right: 0;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                max-width: 480px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-right: 0;
                max-width: 665px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) {
                margin-right: 0; 
            }

            .main__title__container {
                margin-bottom: 40px;

                @media screen and (min-width: 1250px) and (max-width: 1710px) {
                    margin-bottom: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    margin-bottom: 40px;
                }

                .main__title {
                    font-weight: 800;
                    font-size: 80px;
                    line-height: 90px;
                    color: #E11D2E;
                    margin-bottom: 5px;

                    span {
                        color: #FFFFFF; 
                    }

                    @media screen and (min-width: 1250px) and (max-width: 1710px) {
                        font-size: 60px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) {
                        font-size: 50px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 50px;
                        line-height: 50px;
                        margin-bottom: 10px;
                        max-width: 330px;
                    }
                }

                .main__title__info {
                    font-weight: 500;
                    font-size: 25px;
                    line-height: 30px;
                    color: #71768E;

                    @media screen and (min-width: 1250px) and (max-width: 1710px) {
                        font-size: 20px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) {
                        font-size: 17px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 15px;
                        line-height: 18px;
                        max-width: 330px;
                    }
                }
            }

            .main__info {
                font-weight: 400;
                font-size: 32px;
                line-height: 38px;
                color: #A0A3B5;
                margin-bottom: 46px;

                @media screen and (min-width: 1250px) and (max-width: 1710px) {
                    font-size: 25px;
                    margin-bottom: 25px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) {
                    font-size: 20px;
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    font-size: 22px;
                    line-height: 26px;
                    margin-bottom: 30px;
                    max-width: 330px;
                }
            }

            .shiba {
                display: none;

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    display: inherit;
                    height: 185px;
                    margin: 0 auto;
                }
            }

            .main__button__container {
                align-items: center;
                display: flex;
                margin-bottom: 20px;

                @media screen and (min-width: 768px) and (max-width: 1710px) {
                    justify-content: space-between;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    flex-direction: column;
                    align-items: center;
                    margin-top: 40px;
                }

                .main__button__color {
                    background: #E11D2E;
                    cursor: pointer;
                    border-radius: 10px;
                    padding: 25px 54px;
                    margin-right: 25px;
                    height: 80px;
                    max-width: 295px;
                    transition: all 1s ease-out;
                    
                    @media screen and (min-width: 1024px) and (max-width: 1710px) {
                        margin-right: 0;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) {
                        padding-right: 20px;
                        padding-left: 20px;
                        margin-right: 0;
                    }
                    
                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        padding: 20px 70px;
                        margin-right: 0;
                        height: 63px;
                        margin-bottom: 15px;
                    }

                    &:hover {
                        background: #AC1216;
                    }

                    .button__color__text {
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 30px;

                        @media screen and (min-width: 1250px) and (max-width: 1710px) {
                            font-size: 20px;
                        }

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 17px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            font-size: 19px;
                            line-height: 23px;
                        }
                    }
                }

                .main__button__transparent {
                    background: rgba(255, 255, 255, 0.05);
                    cursor: pointer;
                    padding: 27px 30px;
                    border-radius: 10px;
                    height: 80px;
                    width: 379px;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 1250px) and (max-width: 1710px) {
                        width: 58%;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 60%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 50%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        padding: 20px 45px;
                        height: 61px;
                        margin-bottom: 15px;
                        width: auto;
                    }

                    &:hover {
                        background: rgba(255, 255, 255, 0.15);
                    }

                    .button__transparent__text {
                        text-align: center;
                        font-weight: 500;
                        font-size: 22px;
                        line-height: 26px;
                        opacity: 0.9;
                        
                        @media screen and (min-width: 1250px) and (max-width: 1710px) {
                            font-size: 20px;
                        }
                        
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 17px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            font-size: 18px;
                            line-height: 21px;
                        }
                    }
                }
            }

            .main__contract__conainer {
                border: 1px solid rgba(255, 255, 255, 0.09);
                border-radius: 10px;
                height: 75px;
                padding-top: 14px;
                padding-left: 30px;
                max-width: 699px; 
                
                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    max-width: 100%;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    padding-top: 12px;
                    padding-right: 7px;
                    padding-left: 15px;
                    height: 60px;
                }

                .main__contract__title {
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 18px;
                    opacity: 0.2;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 11px;
                        line-height: 13px;
                    }
                }

                .main__contract__info {
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 30px;
                    opacity: 0.4;

                    @media screen and (min-width: 1250px) and (max-width: 1710px) {
                        font-size: 20px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 17px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 13px;
                        line-height: 17px;
                    }

                    @media screen and (max-width: 320px) { 
                        font-size: 11px;
                    }
                }
            }
        }

        .main__pictures__container {

            img {

                @media screen and (min-width: 1024px) and (max-width: 1710px) {
                    width: 90%;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    display: none; 
                }
            }
        }
    }
}
</style>