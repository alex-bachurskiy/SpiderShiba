<template>
    <div id="faq">
        <div class="container">
            <div class="questions__container">
                <h2 class="questions__title">
                    Frequently Asked Questions
                </h2>
                <div class="asked__questions">
                    <div class="question">
                        <p class="question__text">
                            Where can I buy tokens and NFTs of SpiderShib Inu?
                        </p>
                        <div class="question__arrow">
                            <img class="arrow" src="@/assets/pictures/arrow.png" alt="arrow">
                        </div>
                    </div>
                    <div class="question">
                        <p class="question__text">
                            Where can I buy tokens and NFTs of SpiderShib Inu?
                        </p>
                        <div class="question__arrow">
                            <img class="arrow" src="@/assets/pictures/arrow.png" alt="arrow">
                        </div>
                    </div>
                    <div class="question">
                        <p class="question__text">
                            Where can I buy tokens and NFTs of SpiderShib Inu?
                        </p>
                        <div class="question__arrow">
                            <img class="arrow" src="@/assets/pictures/arrow.png" alt="arrow">
                        </div>
                    </div>
                    <div class="question">
                        <p class="question__text">
                            Where can I buy tokens and NFTs of SpiderShib Inu?
                        </p>
                        <div class="question__arrow">
                            <img class="arrow" src="@/assets/pictures/arrow.png" alt="arrow">
                        </div>
                    </div>
                    <div class="question">
                        <p class="question__text">
                            Where can I buy tokens and NFTs of SpiderShib Inu?
                        </p>
                        <div class="question__arrow">
                            <img class="arrow" src="@/assets/pictures/arrow.png" alt="arrow">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#faq {

    .questions__container {

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        padding-bottom: 150px;

        @media screen and (min-width: 1200px) and (max-width: 1710px) { 
            padding-top: 55px;
        }

        @media (min-width: 768px) and (max-width: 1240px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) {
            padding-bottom: 75px;
        }

        .questions__title {
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 48px;

            @media screen and (min-width: 768px) and (max-width: 1710px) { 
                font-size: 45px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) {
                font-size: 40px;
                line-height: 48px;
                text-align: center;
            }
        }

        .asked__questions {

            .question {
                align-items: center;
                display: flex;
                justify-content: space-between;
                background: #384D70;
                border-radius: 15px;
                padding-right: 25px;
                padding-left: 35px;
                margin-bottom: 20px;
                cursor: pointer;
                height: 75px;
                width: 1036px;

                @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                    width: 950px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 640px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    padding-right: 20px;
                    padding-left: 18px;
                    width: 330px;
                }

                @media screen and (max-width: 320px) {
                    width: 285px;
                }

                &:last-of-type {
                    margin-bottom: 0;
                }
            
                .question__text {
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 16px;
                        line-height: 19px;
                        width: 220px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        font-size: 15px;
                        width: 210px;
                    }
                } 

                .question__arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #E11D2E;
                    opacity: 0.8;
                    border-radius: 100px;
                    height: 40px;
                    width: 40px;
                    transition: all 1s ease-out;

                    &:hover {
                        background: #AC1216;
                    }
                }
            }
        }
    }
}
</style>