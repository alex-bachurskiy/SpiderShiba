<template>
    <div class="header">
        <div class="container">
            <div class="header__container">
                <div class="logo__container">
                    <img class="logo" src="@/assets/pictures/logo.png" alt="SpiderShiba-logo">
                </div>
                <div class="menu__container">
                    <a class="menu-item" href="#works" v-scroll-to="'#works'">How it works</a>
                    <a class="menu-item" href="#play" v-scroll-to="'#play'">Play and earn</a>
                    <a class="menu-item" href="#roadmap" v-scroll-to="'#roadmap'">Roadmap</a>
                    <a class="menu-item" href="#team" v-scroll-to="'#team'">Team</a>
                    <a class="menu-item" href="#partners" v-scroll-to="'#partners'">Partners&Investors</a>
                    <a class="menu-item" href="#invest" v-scroll-to="'#invest'">Why invest in SpiderShiba</a> 
                    <a class="menu-item" href="#tokenomics" v-scroll-to="'#tokenomics'">Tokenomics</a>
                    <a class="menu-item" href="#faq" v-scroll-to="'#faq'">FAQ</a>
                    <a class="menu-item" href="#community" v-scroll-to="'#community'">Community</a>
                </div>
                <div class="header__button">
                    <p class="button__text">
                        Join Community 
                    </p>
                </div>
                <BurgerMenu/>
            </div>
        </div>
    </div>
</template>

<script>
import BurgerMenu from "../components/Burger";

export default {
    name: "header",
    components: {
        BurgerMenu
    }
};
</script>

<style lang="scss" scoped>
.header {
    &__container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-top: 25px;
        padding-bottom: 93px;
        max-width: 1920px;
        margin: 0 auto;  
        
        @media screen and (min-width: 1250px) and (max-width: 1710px) {
            padding-bottom: 50px;
        }
        
        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 40px;
        }

        @media screen and (min-width: 320px) and (max-width: 760px) { 
            padding-bottom: 50px;
        }

        .logo__container {
            display: flex;

            .logo {
                @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                    height: 45px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    height: 25px;
                }

                @media screen and (max-width: 320px) { 
                    height: 45px;
                }
            }
        }

        .menu__container {
            align-items: center;
            display: flex;
            max-width: 1063px;

            .menu-item {
                font-weight: 600;
                color: #FFFFFF;
                font-size: 17px;
                line-height: 20px;
                opacity: 0.8;
                margin-right: 25px;
                transition: all 1s ease-out;

                @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                    margin-right: 10px;
                    font-size: 16px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) {
                    margin-right: 7px; 
                    font-size: 13px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    display: none;
                }

                @media screen and (min-width: 320px) and (max-width: 760px) { 
                    display: none;
                }

                &:hover {
                    color: #E11D2E;
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }

        }

        .header__button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #AC1216;
            border-radius: 10px;
            height: 40px;
            width: 170px;
            transition: all 1s ease-out;
            cursor: pointer;
            
            @media screen and (min-width: 1250px) and (max-width: 1710px) { 
                width: 130px;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) {
                height: 30px; 
                width: 100px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                display: none;
            }

            &:hover {
                background: #E11D2E;
            }

            .button__text {
                font-weight: 600;
                font-size: 15px;
                line-height: 18px;
                opacity: 0.8; 

                @media screen and (min-width: 1024px) and (max-width: 1240px) {
                    font-size: 12px;
                }
            }          
        }
    }
}
</style>