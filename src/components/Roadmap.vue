<template>
    <div id="roadmap">
        <div class="container">
            <div class="roadmap__container">
                <h2 class="roadmap__title">
                    Roadmap
                </h2>
                <div class="timeline__container">
                    <div class="timeline">
                        <div class="timeline__number">
                            <p class="number">
                                1
                            </p>
                        </div>
                        <div class="timeline__info__container">
                            <h3 class="timeline__title">
                                August 2021
                            </h3>
                            <ul class="timeline__list">
                                <li class="list">
                                    Started project <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Budget accumulation <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Winning team search <img src="@/assets/pictures/check.png">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__number">
                            <p class="number">
                                2
                            </p>
                        </div>
                        <div class="timeline__info__container">
                            <h3 class="timeline__title">
                                Sept - Nov 2021
                            </h3>
                            <ul class="timeline__list">
                                <li class="list">
                                    Whitepaper creation <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Smartcontract testing <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Building ideas for nft game <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    start developing website and game <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    start creating NFT <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    start creating tokenomics <img src="@/assets/pictures/check.png">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__number">
                            <p class="number">
                                3
                            </p>
                        </div>
                        <div class="timeline__info__container">
                            <h3 class="timeline__title">
                                Dec - Jan 2022
                            </h3>
                            <ul class="timeline__list">
                                <li class="list">
                                    Official launch on pinksale <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Start marketing campaign <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Airdrop <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Panckacke swap launch <img src="@/assets/pictures/check.png">
                                </li>
                                <li class="list">
                                    Start of collaborations with decentraland and the sandbox <img src="@/assets/pictures/check.png">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__number">
                            <p class="number">
                                4
                            </p>
                        </div>
                        <div class="timeline__info__container">
                            <h3 class="timeline__title">
                                Q1 2022
                            </h3>
                            <ul class="timeline__list">
                                <li class="list">
                                    Listing on coinmarketcap and coingecko
                                </li>
                                <li class="list">
                                    Early beta game 
                                </li>
                                <li class="list">
                                    Promotion cooperation with big celebrities 
                                </li>
                                <li class="list">
                                    NFT & Game community build-up 
                                </li>
                                <li class="list">
                                    NFT collaborations and launch 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="timeline__number">
                            <p class="number">
                                5
                            </p>
                        </div>
                        <div class="timeline__info__container">
                            <h3 class="timeline__title">
                                Q2 2022
                            </h3>
                            <ul class="timeline__list">
                                <li class="list">
                                    Launch of new website
                                </li>
                                <li class="list">
                                    Centralized exchange listening 
                                </li>
                                <li class="list">
                                    Launch of Spidershiba inu single player 
                                </li>
                                <li class="list">
                                    Creation of NFT marketplace 
                                </li>
                                <li class="list">
                                    First teaser of Spidershiba inu World Metaverse multiplayer 
                                </li>
                                <li class="list">
                                    Android & iOS App release 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#roadmap {

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

    .roadmap__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
        margin-bottom: 130px;

        @media screen and (min-width: 1250px) and (max-width: 1710px) { 
            margin-top: 55px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 45px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) { 
            margin-bottom: 40px;
        }

        .roadmap__title {
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 50px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                font-size: 45px;
            }
        }

        .timeline__container {

            position: relative;

            &::before {
                content: "";
                background: #384D70;
                box-sizing: border-box;
                position: absolute;
                transform: rotate(90deg);
                top: 57%;
                right: -57.8%;
                height: 4px;
                width: 1715px;
                z-index: -7;

                @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                    top: 57%;
                    right: -87.8%;
                    width: 1785px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    top: 57%;
                    right: -144.8%;
                    width: 1815px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    top: 56%;
                    right: -47.8%;
                    width: 1832px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    top: 55.5%;
                    right: -234.5%;
                    width: 2149px;
                }

                @media screen and (max-width: 320px) {
                    top: 55%;
                    right: -414%;
                    width: 2600px;
                }
            }

            &::after {
                content: "";
                background:  #E11D2E;
                box-sizing: border-box;
                position: absolute;
                transform: rotate(90deg);
                top: 26.5%;
                right: 6.9%;
                height: 4px;
                width: 690px;

                @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                    top: 25.5%;
                    right: -3%;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    top: 25.5%;
                    right: -24%;
                }
                
                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    top: 24.9%;
                    right: 44.7%;
                    width: 727px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    top: 22%;
                    right: -13.3%;
                    width: 733px;
                }

                @media screen and (max-width: 320px) {
                    top: 21.8%;
                    right: -76%;
                    width: 891px;
                }
            }

            .timeline {
                display: flex;
                background: rgba(56, 77, 112, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-sizing: border-box;
                border-radius: 30px;
                padding: 35px 20px;
                position: relative;
                margin-top: 60px;
                max-width: 792px;

                @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                    max-width: 645px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    max-width: 465px;
                }
                
                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    max-width: 597px;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    flex-direction: column;
                    margin-top: 20px;
                    max-width: 320px;
                }
                
                @media screen and (max-width: 320px) { 
                    max-width: 275px;
                }

                .timeline__number {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    background: rgba(56, 77, 112, 0.2);
                    border-radius: 30px;
                    margin-right: 30px;
                    padding: 0 53px;
                    height: 146px;

                    @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                        margin-right: 15px;
                    }
                                    
                    @media screen and (min-width: 1024px) and (max-width: 1240px) {
                        height: 90px;
                        padding: 0 30px; 
                        margin-right: 10px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        height: 100px;
                        width: 100px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        height: 100px;
                        width: 97px;
                    }

                    .number {
                        font-weight: 700;
                        font-size: 65px;
                        line-height: 78px;
                        opacity: 0.5;
                                                            
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 55px;
                        }
                    }
                }

                .timeline__info__container {
                    color: rgba(255, 255, 255, 1);

                    .timeline__title {
                        font-weight: 500;
                        font-size: 30px;
                        line-height: 36px;
                    }

                    .timeline__list {
                        margin-top: 20px;

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            width: 285px;
                        }

                        @media screen and (max-width: 320px) { 
                            max-width: 195px;
                        }

                        .list {
                            font-weight: 400;
                            font-size: 25px;
                            line-height: 30px;
                            list-style: initial;
                            margin-left: 20px;
                            position: relative;
                                                                
                            @media screen and (min-width: 1024px) and (max-width: 1240px) {
                                font-size: 18px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 760px) { 
                                font-size: 21px;
                                line-height: 25px;
                            }

                            img {
                                height: 20px;
                                position: absolute;
                                top: 20%;
                                margin-left: 5px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) {
                                    height: 18px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 760px) {
                                    top: 11%;
                                    margin-left: 7px; 
                                    height: 20px;
                                }

                                @media screen and (max-width: 320px) {
                                    top: 58%;
                                }
                            }
                        }
                    }
                }

                &:nth-of-type(1),
                &:nth-of-type(2),
                &:nth-of-type(3) {

                    .timeline__info__container {
                        color: rgba(255, 255, 255, 0.7);
                    }
                }

                &:nth-of-type(1) {

                    margin-top: 0;
                    right: 53%;
                    
                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        right: 53.2%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        right: 8px;
                    }
                    
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        right: 0;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: 12px;
                        background: #FF0000;
                        border: 2px solid rgba(255, 255, 255, 0.5);
                        border-radius: 100%;
                        left: 101.95%;
                        top: 46%;
                        z-index: 7;
                        width: 12px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            left: -5.5%;
                            top: 36%
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            left: -3.5%;
                            top: 31%;
                        }
                    }

                    .timeline__info__container {
                        
                        .list {
                            
                            &:nth-of-type(1) {
                            
                                img {

                                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                                        top: 13%;
                                    }
                                }
                            }
                        }
                    }

                }

                &:nth-of-type(2) {

                    left: 52.1%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        left: 52.7%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        left: -0.9%;
                    }
                                        
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        left: 0;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        height: 12px;
                        background: #FF0000;
                        border: 2px solid rgba(255, 255, 255, 0.5);
                        border-radius: 100%;
                        top: 47%;
                        right: 101.9%;
                        z-index: 7;
                        width: 12px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            right: 103.9%;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            right: 99.7%;
                            top: 20%;
                        }

                        @media screen and (max-width: 320px) { 
                            right: 98.5%;
                        }
                    }

                    .timeline__number {

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 15px;
                            padding: 0 30px;
                        }
                    }

                    
                    .timeline__info__container {
                        
                        .list {
                            
                            &:nth-of-type(4) {
                            
                                img {

                                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                                        top: 60%;
                                    }
                                }
                            }

                            &:nth-of-type(5) {
                            
                                img {

                                    @media screen and (max-width: 320px) { 
                                        top: 17%;
                                        right: -7%;
                                    }
                                }
                            }
                        }
                    }
                }

                &:nth-of-type(3) {

                    right: 53%;

                    @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                        right: 53.2%;
                        padding-right: 35px;
                    }
                                                   
                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        right: 53.2%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        right: 8px;
                    }
                                        
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        right: 0;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: 12px;
                        background: #FF0000;
                        border: 2px solid rgba(255, 255, 255, 0.5);
                        border-radius: 100%;
                        top: 47%;
                        left: 101.95%;
                        z-index: 7;
                        width: 12px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            left: -5.5%;
                            top: 50%;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            left: -3.5%;
                            top: 20%;
                        }
                    }

                    .timeline__number {
                        margin-right: 27px;
                        padding: 0 48px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 15px;
                            padding: 0 30px;
                        }
                    }

                    .timeline__info__container {
                        
                        .list {
                            
                            &:nth-of-type(3) {
                            
                                img {

                                    @media screen and (max-width: 320px) { 
                                        top: 23%;
                                    }
                                }
                            }

                            &:nth-of-type(5) {
                            
                                img {
                                    top: 60%;

                                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                                        top: 70%;
                                    }
                                    
                                    @media screen and (max-width: 320px) { 
                                        top: 77%;
                                    }
                                }
                            }
                        }
                    }
                }

                &:nth-of-type(4) {

                    left: 52.1%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        left: 52.7%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        left: -0.9%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        left: 0;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        height: 12px;
                        background: #FFFFFF;
                        border: 2px solid rgba(0, 0, 0, 0.5);
                        border-radius: 100%;
                        top: 47%;
                        right: 101.9%;
                        z-index: 7;
                        width: 12px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            right: 103.9%;
                        }

                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            right: 99.7%;
                            top: 18%;
                        }

                        @media screen and (max-width: 320px) { 
                            right: 98.5%;
                        }
                    }
                }

                &:nth-of-type(5) {

                    right: 53%;

                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        right: 53.2%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        right: 8px;
                    }
              
                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        right: 0;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: 12px;
                        background: #FFFFFF;
                        border: 2px solid rgba(0, 0, 0, 0.5);
                        border-radius: 100%;
                        top: 47%;
                        left: 101.9%;
                        z-index: 7;
                        width: 12px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            left: -5.5%;
                        }
                        
                        @media screen and (min-width: 320px) and (max-width: 760px) { 
                            left: -3.5%;
                            top: 17%;
                        }
                    }
                }

                &:nth-of-type(4),
                &:nth-of-type(5) {
                    background: #384D70;
                    border: 1px solid rgba(255, 255, 255, 0.1);

                    .timeline__number {
                        background: rgba(255, 255, 255, 0.1);
                        padding: 0 48px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 15px;
                            padding: 0 30px;
                        }

                        .number {
                            opacity: 0.7;
                        }
                    }

                    .timeline__info__container {
                        opacity: 1;

                        .timeline__title {
                            font-weight: 700;
                        }

                        .timeline__list {

                            .list {
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>