<template>
    <div id="tokenomics">
        <div class="container">
            <div class="tokenomics__container">
                <h2 class="tokenomics__title">
                    Tokenomics
                </h2>
                <div class="tokenomics__canvas__container">
                    <div class="tokenomics__canvas">
                        <div class="caption-list__container">
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    19% on marketing
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    5% for founders, 6% stacked
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    30% for liquidity
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="tokenomics__canvas">
                        <div class="caption-list__container">
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    10% for advisors
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    P2e 15%
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                            <div class="caption-list">
                                <h3 class="caption-list__title">
                                    NFT 15%
                                </h3>
                                <p class="caption-list__info">
                                    Thanks to our ecosystem you will be able to earn passively and actively
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="statistics">
                        <div class="tokenomics__logo__container">
                            <img class="tokenomics__logo" src="@/assets/pictures/shiba.png" alt="shiba">
                        </div>
                        <svg class="chart" width="552" height="552" viewBox="0 0 45 45">
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                            <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
                        </svg>
                        <div class="percent__container">
                            <p class="percent">19%</p>
                            <p class="percent">5%</p>
                            <p class="percent">6%</p>
                            <p class="percent">30%</p>
                            <p class="percent">10%</p>
                            <p class="percent">15%</p>
                            <p class="percent">15%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#tokenomics {
    background: #101D3F;

        &::after {

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                content: "";
                background: url(../assets/pictures/vector.png);
                display: block;
                height: 125px;
                background-repeat: no-repeat;
                background-size: cover;
                background-position-x: right;
            }

            @media screen and (min-width: 625px) and (max-width: 760px) { 
                content: unset;
            }

            @media screen and (max-width: 320px) {
                height: 103px;
                position: relative;
                top: 10px;
            }
        }

    .tokenomics__container {

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        padding-bottom: 130px;

        @media screen and (min-width: 768px) and (max-width: 1240px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 768px) { 
            padding-bottom: 55px;
        }

        .tokenomics__title {
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 66px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                font-size: 45px;
                margin-bottom: 55px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                font-size: 40px;
                line-height: 48px;
                margin-bottom: 50px;
            }
        }

        .tokenomics__canvas__container {
            align-items: center;
            display: flex;
            position: relative;

            @media screen and (min-width: 320px) and (max-width: 1240px) { 
                flex-wrap: wrap;
                justify-content: center;
            }

            @media screen and (min-width: 625px) and (max-width: 760px) { 
                flex-direction: column;
            }
            
            .tokenomics__canvas {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 50px;
                    order: 2;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    order: 2;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    order: 2;
                    margin-bottom: 25px;
                }

                &:nth-of-type(2) {
                    order: 3;

                    @media screen and (min-width: 1024px) and (max-width: 1500px) { 
                        margin-right: 0;
                    }

                    .caption-list__container {

                        .caption-list {

                            &:nth-of-type(1) {
                                &::before {
                                    border: 3px solid #133D81;
                                    background: #133D81;
                                    width: 30px;
                                }
                            }

                            &:nth-of-type(2) {
                                &::before {
                                    border: 3px solid #FF0000;
                                    background: #FF0000;
                                    width: 45px;
                                }

                                &::after {
                                    display: none;
                                }
                            }

                            &:nth-of-type(3) {
                                &::before {
                                    border: 3px solid #0096F2;
                                    background: #0096F2;
                                    width: 45px;
                                }
                            }
                        }
                    }
                }

                .caption-list__container {

                    .caption-list {
                        display: flex;
                        flex-direction: column;
                        background: rgba(0, 0, 0, 0.3);
                        border-radius: 15px;
                        padding: 25px 50px 20px 30px;
                        margin-bottom: 25px;
                        position: relative;
                        max-width: 444px;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            max-width: 331px;
                            padding: 25px 35px 20px 15px;
                        }

                        &::before {
                            content: "";
                            display: block;
                            margin-bottom: 10px;
                            border-radius: 10px;
                        }

                        &:nth-of-type(1) {
                            &::before {
                                border: 3px solid #4E00FF;
                                background: #4E00FF;
                                width: 57px;
                            }
                        }

                        &:nth-of-type(2) {

                            &::before {
                                border: 3px solid #FF850B;
                                background: #FF850B;
                                width: 15px;
                            }

                            &::after {
                                content: "";
                                display: block;
                                position: absolute;
                                width: 18px;
                                border: 3px solid #663090;
                                background: #663090;
                                border-radius: 10px;
                                right: 83%;

                                @media screen and (min-width: 1600px) and (max-width: 1710px) { 
                                    right: 80%;
                                }

                                @media screen and (min-width: 1500px) and (max-width: 1590px) { 
                                    right: 75%;
                                }

                                @media screen and (min-width: 1250px) and (max-width: 1490px) { 
                                    right: 68%;
                                }

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    right: 85%;
                                }
                            }
                            
                        }

                        &:nth-of-type(3) {
                            &::before {
                                border: 3px solid #1DBEE1;
                                background: #1DBEE1;
                                width: 90px;
                            }
                        }

                        &:nth-of-type(3),
                        &:nth-of-type(6) {
                            margin-bottom: 0;
                        }

                        &:nth-of-type(3) {

                         @media screen and (min-width: 768px) and (max-width: 1240px) { 
                                margin-bottom: 25px;
                            }
                            
                        }

                        .caption-list__title {
                            font-weight: 600;
                            font-size: 27px;
                            line-height: 32px;
                            margin-bottom: 5px;
                        }

                        .caption-list__info {
                            font-weight: 400;
                            font-size: 20px;
                            line-height: 24px;
                            opacity: 0.3;

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                font-size: 18px;
                                line-height: 21px;
                            }
                        }   
                    }
                }
            }
            
            .statistics {
                position: relative;

                @media screen and (min-width: 768px) and (max-width: 1500px) { 
                    margin-bottom: 50px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 556px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    width: 331px;
                }
                
                @media screen and (max-width: 320px) { 
                    width: 310px;
                }

                .chart {
                    min-width: 552px;
                    margin: 0 147px;
                                    
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin: 0 auto;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        width: 331px;
                        height: 331px;
                        min-width: 331px;
                        margin-right: 0;
                        margin-bottom: 50px;
                        margin-left: 0;
                    }

                    @media screen and (max-width: 320px) { 
                        width: 310px;
                        height: 310px;
                        min-width: 310px;
                        margin-right: 0;
                        margin-bottom: 50px;
                        margin-left: 0;
                    }

                    .unit {
                        fill: none;
                        stroke-width: 10;
                        cursor: pointer;
                        animation-name: render;
                        animation-duration: 1.5s;
                        transition-property: all; 
                        transition-duration: 1.5s;

                        .hovered {
                            opacity: 0.8;
                            stroke-width: 12;
                        }

                        &:hover {
                            opacity: 0.8;
                            stroke-width: 12;
                        }

                        &:nth-child(1) {
                            stroke: #FF850B;
                            stroke-dasharray: 5 100;
                            stroke-dashoffset: -95;
                        }

                        &:nth-child(2) {
                            stroke: #4E00FF;
                            stroke-dasharray: 19 100;
                            stroke-dashoffset: -76;
                        }

                        &:nth-child(3) {
                            stroke: #0096F2;
                            stroke-dasharray: 15 100;
                            stroke-dashoffset: -61;
                        }

                        &:nth-child(4) {
                            stroke: #663090;
                            stroke-dasharray: 6 100;
                            stroke-dashoffset: -55;
                        }

                        &:nth-child(5) {
                            stroke: #FF0000;
                            stroke-dasharray: 15 100;
                            stroke-dashoffset: -40;
                        }

                        &:nth-child(6) {
                            stroke: #133D81;
                            stroke-dasharray: 10 100;
                            stroke-dashoffset: -30;
                        }
                            
                        &:nth-child(7) {
                            stroke: #1DBEE1;
                            stroke-dasharray: 30 100;
                            stroke-dashoffset: 0;
                        }
                    }

                }

                .tokenomics__logo__container {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    background: #101D3F;
                    position: absolute;
                    top: 12%;
                    right: 25%;
                    border-radius: 100%;
                    height: 420px;
                    width: 420px;

                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        margin-bottom: 20px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) {
                        top: 15%;
                        right: 15%; 
                        height: 385px;
                        width: 385px;
                    }
                                    
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        top: 14.5%;
                        right: 16.5%;
                        height: 220px;
                        width: 220px;
                    }

                    @media screen and (max-width: 320px) { 
                        height: 210px;
                        width: 210px;
                        top: 13.5%;
                        right: 15.5%;
                    }

                    .tokenomics__logo {
                        height: 180px;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            height: 107px;
                        }
                    }
                }

                .percent__container {
                    font-weight: 600;
                    font-size: 25px;
                    line-height: 30px;
                    color: rgba(0, 0, 0, 0.3);

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        font-size: 23px;
                    }

                    @media screen and (max-width: 320px) { 
                        font-size: 20px;
                    }

                    .percent {
                        position: absolute;

                        &:nth-of-type(1) {
                            top: 10.5%;
                            right: 33.5%;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                top: 13.5%;
                                right: 23.5%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 13.5%;
                                right: 17.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 12.5%;
                                right: 18%;
                            }
                        }

                        &:nth-of-type(2) {
                            top: 40.5%;
                            right: 20.5%;
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                right: 7.5%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 34.5%;
                                right: 5.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 33.5%;
                                right: 4.5%;
                            }
                        }

                        &:nth-of-type(3) {
                            top: 27%;
                            right: 72%;
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                right: 81%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 22.5%;
                                right: 79.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 20.5%;
                                right: 80.5%;
                            }
                        }

                        &:nth-of-type(4) {
                            top: 88%;
                            right: 40%;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                top: 82%;
                                right: 25%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 68.5%;
                                right: 22.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 66.5%;
                                right: 20.5%;
                            }
                        }

                        &:nth-of-type(5) {
                            top: 82%;
                            right: 62%;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                top: 80%;
                                right: 70%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 66.5%;
                                right: 66.5%;
                            }
                        }

                        &:nth-of-type(6) {
                            top: 53%;
                            right: 74.5%;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                right: 85.5%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 43.5%;
                                right: 82.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 43.5%;
                                right: 83.5%;
                            }
                        }

                        &:nth-of-type(7) {
                            top: 9%;
                            right: 58%;
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                top: 10%;
                                right: 60%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                top: 7.5%;
                                right: 56.5%;
                            }

                            @media screen and (max-width: 320px) { 
                                top: 7.5%;
                                right: 58.5%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>