<template>
    <Slide :closeOnNavigation="true">
        <div class="logo__container">
            <img class="logo" src="@/assets/pictures/logo.png" alt="SpiderShiba-logo">
        </div>
        <a class="menu-item" href="#works" v-scroll-to="'#works'">
            <span>
                How it works
            </span>
        </a>
        <a class="menu-item" href="#play" v-scroll-to="'#play'">
            <span>
                Play and earn
            </span>
        </a>
        <a class="menu-item" href="#roadmap" v-scroll-to="'#roadmap'">           
            <span>
                Roadmap
            </span>
        </a>
        <a class="menu-item" href="#team" v-scroll-to="'#team'">
            <span>
                Team
            </span>
        </a>
        <a class="menu-item" href="#partners" v-scroll-to="'#partners'">
            <span>
                Partners&Investors
            </span>
        </a>
        <a class="menu-item" href="#invest" v-scroll-to="'#invest'">
            <span>
                Why invest in SpiderShiba
            </span>
        </a> 
        <a class="menu-item" href="#tokenomics" v-scroll-to="'#tokenomics'">
            <span>
                Tokenomics
            </span>
        </a>
        <a class="menu-item" href="#faq" v-scroll-to="'#faq'">
            <span>
                FAQ
            </span>
        </a>
        <a class="menu-item" href="#community" v-scroll-to="'#community'">
            <span>
                Community
            </span>
        </a>
        <div class="header__button">
            <p class="button__text">
                Join Community 
            </p>
        </div>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu';
 
export default {
  components: {
    Slide
  }
}
</script>

<style lang="scss">

.bm-menu {
    background: #384D70;
    border-radius: 5px;
    padding-top: 25px;

    @media screen and (min-width: 320px) and (max-width: 760px) { 
        padding-top: 17px;
    }

    .bm-item-list {

        margin-right: 50px;
        margin-left: 50px;

        @media screen and (min-width: 320px) and (max-width: 760px) { 
            margin-right: 15px;
            margin-left: 15px;
        }

        .logo__container {
            padding: 0;
            margin-bottom: 60px;
        }

        .menu-item {
            font-weight: 600;
            color: #FFFFFF;
            font-size: 19px;
            line-height: 23px;
            opacity: 0.8;
            padding-left: 0;
            padding-top: 0;
            padding-bottom: 25px;

            &:last-of-type {
                padding-bottom: 0;
            }
        }

        .header__button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #AC1216;
            border-radius: 10px;
            height: 40px;
            margin-top: 70px;
            width: 170px;
            cursor: pointer;
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 270px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                width: 100%;
            }

            .button__text {
                font-weight: 600;
                font-size: 15px;
                line-height: 18px;
                opacity: 0.8; 
            }          
        }

    }

    .cross-style {
        right: 5%;
        top: 4.5%;

        @media screen and (max-width: 320px) { 
            right: 2%;
        }
    }
}

.bm-burger-button {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #384D70;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    position: inherit;

    @media screen and (min-width: 768px) and (max-width: 1023px) { 
        display: flex;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) { 
        display: flex;
    }

    .bm-burger-bars {
        background: rgba(255, 255, 255, 1);
    }

    .line-style {
        position: inherit;
        width: 17px;
        height: unset;
        border: 2px solid #FFFFFF;
        border-radius: 10px;
        margin-bottom: 6px;

        &:nth-of-type(3) {
            margin-bottom: 0;
        }
    }
}
</style>