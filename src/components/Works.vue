<template>
    <div id="works">
        <div class="container">
            <div class="game__container">
                <div class="game__logo__container">
                    <div class="game__logo">
                        <img src="@/assets/pictures/pincsale.png" alt="pincsale-logo">
                    </div>
                    <div class="game__logo">
                        <img src="@/assets/pictures/interfi.png" alt="interfi-logo">
                    </div>
                    <div class="game__logo">
                        <img src="@/assets/pictures/sandbox.png" alt="sandbox-logo">
                    </div>
                    <div class="game__logo">
                        <img src="@/assets/pictures/decentraland.png" alt="decentraland-logo">
                    </div>
                    <div class="game__logo">
                        <img src="@/assets/pictures/coingecko.png" alt="coingecko-logo">
                    </div>
                    <div class="game__logo">
                        <img src="@/assets/pictures/coinmarket.png" alt="coinmarket-logo">
                    </div>
                </div>
                <div class="spidershiba_earth__pulse__container">
                    <div class="spidershiba_earth__pulse"></div>
                    <div class="spidershiba_earth__container">
                        <h2 class="spidershiba_earth__text">
                            Yes you read that right, SpiderShib Inu officially enters the game to conquer the world
                        </h2>
                        <img class="spidershiba" src="@/assets/pictures/shiba.png" alt="spidershiba">
                        <div class="spidershiba_earth__button">
                            <p class="earth__button__text">
                                Let’s find out more 
                            </p>
                        </div>
                        <div class="red__button">
                            <img src="@/assets/pictures/red__btn.png" alt="red__btn">
                        </div>
                        <div class="yellow__button">
                            <img src="@/assets/pictures/yellow__btn.png" alt="yellow__btn">
                        </div>
                        <div class="blue__button">
                            <img src="@/assets/pictures/blue__btn.png" alt="blue__btn">
                        </div>
                    </div>
                </div>
            </div>
            <div class="theory__container">
                <div class="theory__title__container">
                    <h2 class="theory__title">
                        How it works?
                    </h2>
                </div>
                <div class="theory__information">
                    <div class="information__box">
                        <div class="info__red__button">
                            <img src="@/assets/pictures/red.png" alt="red__btn">
                        </div>
                        <div class="information__box__title__container">
                            <h3 class="information__box__title">
                                SpiderShib Inu Ecosystem
                            </h3>
                            <span class="title__string">
                                Large variety of options to use SpiderShib Inu tokens and NFTs
                            </span>
                        </div>
                        <p class="information__box__paragraph">
                            Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu.
                        </p>
                        <p class="information__box__paragraph">
                            So the tokens will have real usefulness and to ensure constant growth for all holders.
                        </p>
                    </div>
                    <div class="information__box">
                        <div class="info__yellow__button">
                            <img src="@/assets/pictures/yellow.png" alt="yellow__btn">
                        </div>
                        <div class="information__box__title__container">
                            <h3 class="information__box__title">
                                Many options to earn
                            </h3>
                            <span class="title__string">
                                Thanks to our ecosystem you will be able to earn passively and actively
                            </span>
                        </div>
                        <p class="information__box__paragraph">
                            The passive income:
                            <ul>
                                <li style="list-style-type: '-'; padding-left: 10px;">staking</li>
                                <li style="list-style-type: '-'; padding-left: 10px;">the appreciation of the staked currency</li>
                            </ul>
                        </p>
                        <p class="information__box__paragraph">
                            The active income:
                            <ul>
                                <li style="list-style-type: '-'; padding-left: 10px;">Gaming process (you will earn money that you can turn into tokens)</li>
                                <li style="list-style-type: '-'; padding-left: 10px;">Re-sale of the NFTs</li>
                            </ul>
                        </p>
                    </div>
                    <div class="information__box">
                        <div class="info__blue__button">
                            <img src="@/assets/pictures/blue.png" alt="blue__btn">
                        </div>
                        <div class="information__box__title__container">
                            <h3 class="information__box__title">
                                Reshaping DeFi
                            </h3>
                            <span class="title__string">
                                We are evolving DeFi concepts such as participation rewards, 
                                NFTs and tokenomics to maximise profit for every investor
                            </span>
                        </div>
                        <p class="information__box__paragraph">
                            We offer huge tools for people around the world to take control of their financial future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#works {

    .game__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url(../assets/pictures/spiderweb.png);
        padding-top: 50px;
        background-position-x: center;
        background-position-y: -25px;
        background-repeat: no-repeat;
        height: 925px;
        max-width: 1920px;
        margin: 0 auto;
        
        @media screen and (min-width: 768px) and (max-width: 1240px) { 
            background-size: contain;
            background-position-y: bottom;
        }
        
        @media screen and (min-width: 320px) and (max-width: 760px) { 
            background-size: contain;
            background-position-y: 210px;
            padding-top: 20px;
            height: 685px;
        }

        @media screen and (min-width: 625px) and (max-width: 760px) { 
            height: 900px;
        }
        
        @media screen and (min-width: 375px) and (max-width: 425px) { 
            background-position-y: 227px;
        }

        @media screen and (max-width: 320px) { 
            background-position-y: 249px;
        }

        .game__logo__container {
            display: flex;
            justify-content: center;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-wrap: wrap;
                width: 750px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                flex-wrap: wrap;
                margin-bottom: 60px;
                width: 335px;
            }

            @media screen and (max-width: 320px) { 
                width: 315px;
            }

            .game__logo {
                mix-blend-mode: luminosity;
                opacity: 0.1;
                margin-right: 10px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 10px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    opacity: 0.3;
                    margin-bottom: 10px;

                    &:nth-of-type(4),
                    &:nth-of-type(5),
                    &:nth-of-type(6) {
                        margin-bottom: 0;
                    }
                }

                img {
                    height: 50px;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        height: 30px;
                    }

                    @media screen and (max-width: 320px) { 
                        height: 28px;
                    }
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }
        }

        .spidershiba_earth__pulse__container {
            position: relative;
            height: 550px;
            width: 550px;
                    
            @media screen and (min-width: 768px) and (max-width: 1240px) { 
                margin-top: 43px;
                margin-left: 10px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                height: 330px;
                width: 330px;
            }

            @media screen and (max-width: 320px) {
                height: 315px; 
                width: 315px;
            }

            .spidershiba_earth__pulse {
                height: 550px;
                width: 550px;
                background: #143D85;
                opacity: 0.1;
                border-radius: 100%;
                position: absolute;
                left: -1.5%;
                top: 12.5%;
                opacity: .75;
                -webkit-animation: pulse 2s infinite ease-in-out;
                animation: pulse 2s infinite ease-in-out;
                -webkit-animation-delay: .6s;
                animation-delay: .6s;

                @media screen and (min-width: 768px) and (max-width: 1240px) { 
                    height: 450px;
                    left: 7.3%;
                    top: 25.6%;
                    width: 450px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    height: 190px;
                    width: 190px;
                    left: 19.3%;
                    top: 46.6%;
                }

                @media screen and (max-width: 700px) { 
                    top: 52%;
                    left: 20%;
                }

                @media screen and (max-width: 415px) { 
                    top: 52.5%;
                    left: 20%;
                }

                @media screen and (min-width: 625px) and (max-width: 760px) { 
                    top: 94%;
                    left: 20%;
                }

                @media screen and (min-width: 390px) and (max-width: 400px) { 
                    top: 48.5%;
                    left: 20%;
                }

                @media screen and (min-width: 370px) and (max-width: 390px) { 
                    top: 46%;
                }

                @media screen and (max-width: 360px) { 
                    left: 20%;
                    top: 38.6%;
                }

                @media screen and (max-width: 320px) {
                    top: 47%;
                    left: 19.5%;
                }

                &::after,
                &::before {
                    content: '';
                    position: absolute;
                    background: #143D85;
                    border-radius: 100%;
                    -webkit-animation: pulse 2s infinite ease-in-out;
                    animation: pulse 2s infinite ease-in-out;
                }
                    
                &::before {
                    height: 750px;
                    width: 750px;
                    right: -18%;
                    bottom: -18%;
                    opacity: 0.1;
                    -webkit-animation-delay: .6s;
                    animation-delay: .6s;

                    @media screen and (min-width: 768px) and (max-width: 1240px) { 
                        height: 550px;
                        left: -10.7%;
                        top: -10.5%;
                        width: 550px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        height: 270px;
                        left: -20.7%;
                        top: -20.5%;
                        width: 270px;
                    }

                    @media screen and (max-width: 700px) { 
                        top: -21%;
                        left: -21%;
                    }

                    @media screen and (max-width: 415px) { 
                        top: -20.5%;
                        left: -21%;
                    }

                    @media screen and (min-width: 390px) and (max-width: 400px) { 
                        top: -20.5%;
                        left: -20%;
                    }

                    @media screen and (min-width: 370px) and (max-width: 390px) { 
                        top: -20%;
                    }

                    @media screen and (max-width: 360px) { 
                        left: -20%;
                        top: -20.4%;
                    }

                    @media screen and (max-width: 320px) { 
                        height: 245px;
                        left: -14%;
                        top: -14.5%;
                        width: 245px;
                    }
                }

                &::after {
                    margin: auto 0 auto -46px;
                    height: 950px;
                    width: 950px;
                    -webkit-animation-delay: .2s;
                    animation-delay: .2s;
                    opacity: 0.2;
                    top: -38%;
                    left: -28%;

                    @media screen and (min-width: 768px) and (max-width: 1240px) { 
                        height: 725px;
                        left: -19%;
                        top: -29.5%;
                        width: 725px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        height: 330px;
                        left: -13%;
                        top: -36.5%;
                        width: 330px;
                    }

                    @media screen and (max-width: 700px) { 
                        top: -36%;
                        left: -12%;
                    }

                    @media screen and (max-width: 415px) { 
                        top: -35.5%;
                        left: -12%;
                    }

                    @media screen and (min-width: 390px) and (max-width: 400px) { 
                        top: -35.5%;
                        left: -12%;
                    }

                    @media screen and (min-width: 370px) and (max-width: 390px) { 
                        top: -36%;
                    }

                    @media screen and (max-width: 360px) { 
                        left: -12%;
                        top: -35.4%;
                    }

                    @media screen and (max-width: 320px) { 
                        height: 295px;
                        left: -3%;
                        top: -26.5%;
                        width: 295px;
                    }
                }

                @-webkit-keyframes pulse {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0;
                    }
                }

                @keyframes pulse {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0;
                    }
                }
            }

            .spidershiba_earth__container {
                background: url(../assets/pictures/earth.png);
                height: 350px;
                width: 350px;
                position: absolute;
                left: 16.5%;
                top: 31%;

                @media screen and (min-width: 768px) and (max-width: 1240px) { 
                    top: 35%;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    width: 140px;
                    height: 140px;
                    background-size: contain;
                    left: 27%;
                    top: 54.5%;
                }
                
                @media screen and (min-width: 625px) and (max-width: 760px) { 
                    top: 101.5%;
                    left: 27.5%;
                }

                @media screen and (max-width: 700px) { 
                    top: 59.5%;
                    left: 27.5%;
                }

                @media screen and (max-width: 415px) { 
                    top: 59.5%;
                    left: 27.5%;
                }

                @media screen and (min-width: 390px) and (max-width: 400px) { 
                    top: 56%;
                    left: 27.5%;
                }

                @media screen and (min-width: 370px) and (max-width: 390px) { 
                    top: 53.5%;
                }

                @media screen and (max-width: 360px) { 
                    top: 45.8%;
                    left: 27.5%;
                }

                @media screen and (max-width: 320px) {
                    top: 55%; 
                    left: 27.5%;
                }

                .spidershiba_earth__text {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 35px;
                    line-height: 42px;
                    position: absolute;
                    top: -16%;
                    left: -34%;
                    text-align: center;
                    width: 552px;
                    
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 25px;
                        line-height: 30px;
                        top: -135%;
                        left: -68%;
                        width: 329px;
                    }

                    @media screen and (max-width: 320px) { 
                        font-size: 23px;
                        top: -135%;
                        left: -62%;
                        width: 315px;
                    }

                    &::after{
                        content: url(../assets/pictures/earth-small.png);
                        height: 39px;
                        width: 39px;
                        position: absolute;
                        left: 77%;

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            top: 71%; 
                            left: 67%;
                        }
                    }
                }

                .spidershiba {
                    margin: 84px 78px;
                    width: 194px;
                    
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        width: 70px;
                        margin: 37px;
                    }
                }

                .spidershiba_earth__button {
                    display: flex;
                    align-items: center;
                    background: #E11D2E;
                    padding: 0 42px;
                    border-radius: 10px;
                    height: 77px;
                    position: absolute;
                    cursor: pointer;
                    left: 20%;
                    top: 80%;
                    width: 215px;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1240px) {
                        justify-content: center; 
                        left: 10%;
                        top: 85%;
                        width: 290px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        top: 205%;
                        left: -40%;
                        height: 46px;
                        justify-content: center;
                        width: 260px;
                    }

                    &:hover {
                        background: #AC1216;
                    }

                    .earth__button__text {
                        text-align: center;
                        font-weight: 600;
                        font-size: 22px;
                        line-height: 26px;
                        opacity: 0.9;
                        width: 125px;

                        @media screen and (min-width: 768px) and (max-width: 1240px) {
                            font-size: 25px; 
                            width: max-content;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            font-size: 18px;
                            line-height: 21px;
                            width: max-content;
                        }
                    }
                }

                .red__button,
                .yellow__button,
                .blue__button {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 100px;
                    cursor: pointer;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        width: 30px;
                        height: 30px;
                    }

                    img {
                        z-index: 99;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            height: 14.4px;
                        }
                    }
                }

                .red__button {
                    background: #E11D2E;
                    position: absolute;
                    right: 148%;
                    top: 40%;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        right: 144%;
                        top: -20%;
                    }

                    @media screen and (max-width: 320px) { 
                        right: 120%;
                    }
                    
                    &::after {
                        content: '';
                        position: absolute;
                        background: #E11D2E;
                        height: 108px;
                        width: 108px;
                        border-radius: 100%;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            width: 50px;
                            height: 50px;
                        }
                    }

                    @media screen and (min-width: 768px) and (max-width: 1240px) { 
                        right: 127%;
                    }
                }

                .yellow__button {
                    background: #FF9429;
                    position: absolute;
                    top: 130%;
                    left: 110%;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        left: 95%;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        background: #FF9429;
                        height: 108px;
                        width: 108px;
                        border-radius: 100%;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            width: 50px;
                            height: 50px;
                        }
                    }

                    @media screen and (min-width: 768px) and (max-width: 1240px) {
                        top: 120%; 
                        left: 100%;
                    }
                }
                
                .blue__button {
                    background: #0096F2;
                    position: absolute;
                    top: -30%;
                    left: 147%;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        left: 135%;
                    }

                    @media screen and (max-width: 320px) { 
                        left: 130%;
                    }
                    
                    &::after {
                        content: '';
                        position: absolute;
                        background: #0096F2;
                        height: 108px;
                        width: 108px;
                        border-radius: 100%;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            width: 50px;
                            height: 50px;
                        }
                    }

                    @media screen and (min-width: 768px) and (max-width: 1240px) { 
                        left: 130%;
                    }
                }
            }

        }  
    }

    .theory__container {
        padding-bottom: 140px;

        @media screen and (min-width: 1250px) and (max-width: 1710px) { 
            padding-bottom: 125px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
            padding-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) { 
            padding-bottom: 70px;
        }

        .theory__title__container {
            margin-bottom: 50px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) {
                margin-bottom: 45px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                margin-top: 70px; 
            }

            .theory__title {
                text-align: center;
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
        }

        .theory__information {
            display: flex;
            justify-content: center;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-wrap: wrap;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                flex-direction: column;
                align-items: center;
            }

            .information__box {
                background: #384D70;
                border-radius: 20px;
                margin-right: 68px;
                padding: 55px 40px 40px 0;
                height: min-content;
                max-width: 496px;

                @media screen and (min-width: 768px) and (max-width: 1023px) {
                    margin-right: 0;
                    margin-bottom: 35px; 
                }

                @media screen and (min-width: 320px) and (max-width: 760px) {
                    margin-right: 0;
                    margin-bottom: 30px;
                    max-width: 325px; 
                }

                .info__red__button,
                .info__yellow__button,
                .info__blue__button {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    width: 70px;
                    height: 70px;
                    border-radius: 10px;
                    margin-left: 65px;

                    @media screen and (min-width: 320px) and (max-width: 760px) {
                        margin-left: 35px;
                        width: 47px;
                        height: 47px;
                    }

                    img {
                        z-index: 999;

                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            height: 23px;
                        }
                    }
                }

                .info__red__button {
                    background: #E11D2E;
                    
                    &::after {
                        content: '';
                        position: absolute;
                        background: #E11D2E;
                        height: 120px;
                        width: 120px;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;
                        border-radius: 20px;
                        
                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            height: 80px;
                            width: 80px;
                        }
                    }
                }

                .info__yellow__button {
                    background: #FF9429;

                    &::after {
                        content: '';
                        position: absolute;
                        background: #FF9429;                        
                        height: 120px;
                        width: 120px;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;
                        border-radius: 20px;
           
                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            height: 80px;
                            width: 80px;
                        }
                    }
                }
                
                .info__blue__button {
                    background: #0096F2;
                    
                    &::after {
                        content: '';
                        position: absolute;
                        background: #0096F2;
                        height: 120px;
                        width: 120px;
                        border-radius: 100%;
                        animation: pulse 2s infinite ease-in-out;
                        opacity: 0.3;
                        border-radius: 20px;
                                                
                        @media screen and (min-width: 320px) and (max-width: 760px) {
                            height: 80px;
                            width: 80px;
                        }
                    }
                }

                &:last-of-type {
                    margin-right: 0;
                    
                    @media screen and (min-width: 768px) and (max-width: 1023px) {
                        margin-bottom: 0; 
                    }
                }

                .information__box__title__container {
                    margin-bottom: 30px;
                    padding-left: 40px;

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        padding-left: 24px;
                        margin-bottom: 15px;
                    }

                    .information__box__title {
                        font-weight: 600;
                        font-size: 35px;
                        line-height: 42px;
                        margin-top: 30px;
                        margin-bottom: 10px;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            font-size: 30px;
                            line-height: 36px;
                        }
                    }

                    .title__string {
                        font-weight: 400;
                        font-size: 20px;
                        line-height: 24px;
                        opacity: 0.3;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            font-size: 15px;
                            line-height: 18px;
                        }
                    }
                }

                .information__box__paragraph {
                    font-weight: 500;
                    font-size: 25px;
                    line-height: 30px;
                    opacity: 0.7;
                    margin-bottom: 20px;
                    padding-left: 40px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        padding-left: 24px;
                        font-size: 19px;
                        line-height: 23px;  
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
</style>