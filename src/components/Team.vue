<template>
    <div id="team">
        <div class="container">
            <div class="team__container">
                <h2 class="team__title">
                    Team
                </h2>
            </div>
            <Slider/>
        </div>
        <Partners/>
    </div>
</template>

<script>
import Partners from "../components/Partners";
import Slider from "../components/Slider";

export default {
    name: "home",
    components: {
        Partners,
        Slider
    }
};
</script>

<style lang="scss" scoped>
#team {
    background: #162344;

    .team__container {

        align-items: center;
        display: flex;
        flex-direction: column;
        padding-top: 70px;

        @media screen and (min-width: 1024px) and (max-width: 1710px) { 
            padding-top: 55px;
        }

        .team__title {
            font-weight: 700;
            font-size: 50px;
            line-height: 60px;
            text-align: center;
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                font-size: 45px;
            }

            @media screen and (min-width: 320px) and (max-width: 1240px) { 
                font-size: 40px;
                line-height: 48px;
                margin-bottom: 50px;
            }
        }
    }
}
</style>