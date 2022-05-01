<template>
    <div class="carousel">
        <div class="slider">
            <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true" :touch-drag="true" :paginationActiveColor="FF0000" >
            <slide>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Harry.png" alt="Harry Pham">
                    <h2 class="name">
                        Harry Pham
                    </h2>
                    <P class="position">
                        Founder and CEO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Bui.png" alt="Bui Cai">
                    <h2 class="name">
                        Bui Cai
                    </h2>
                    <P class="position">
                        Co-founder and CTO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Binh.png" alt="Binh Mai">
                    <h2 class="name">
                        Binh Mai
                    </h2>
                    <P class="position">
                        Blockchain expert
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Lisa.png" alt="Lisa Dowen">
                    <h2 class="name">
                        Lisa Dowen
                    </h2>
                    <P class="position">
                        Marketing and funnels
                    </P>
                </div>
            </slide>
            <slide>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Harry.png" alt="Harry Pham">
                    <h2 class="name">
                        Harry Pham
                    </h2>
                    <P class="position">
                        Founder and CEO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Bui.png" alt="Bui Cai">
                    <h2 class="name">
                        Bui Cai
                    </h2>
                    <P class="position">
                        Co-founder and CTO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Binh.png" alt="Binh Mai">
                    <h2 class="name">
                        Binh Mai
                    </h2>
                    <P class="position">
                        Blockchain expert
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Lisa.png" alt="Lisa Dowen">
                    <h2 class="name">
                        Lisa Dowen
                    </h2>
                    <P class="position">
                        Marketing and funnels
                    </P>
                </div>
            </slide>
            <slide>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Harry.png" alt="Harry Pham">
                    <h2 class="name">
                        Harry Pham
                    </h2>
                    <P class="position">
                        Founder and CEO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Bui.png" alt="Bui Cai">
                    <h2 class="name">
                        Bui Cai
                    </h2>
                    <P class="position">
                        Co-founder and CTO
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Binh.png" alt="Binh Mai">
                    <h2 class="name">
                        Binh Mai
                    </h2>
                    <P class="position">
                        Blockchain expert
                    </P>
                </div>
                <div class="team__info">
                    <img class="photo" src="@/assets/pictures/Lisa.png" alt="Lisa Dowen">
                    <h2 class="name">
                        Lisa Dowen
                    </h2>
                    <P class="position">
                        Marketing and funnels
                    </P>
                </div>
            </slide>
            </carousel>
        </div>
        <div class="mobile__slider">
  <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true" :touch-drag="true" :paginationActiveColor="FF0000" >
    <slide>
        <div class="team__info">
            <img class="photo" src="@/assets/pictures/Harry.png" alt="Harry Pham">
            <h2 class="name">
                Harry Pham
            </h2>
            <P class="position">
                Founder and CEO
            </P>
        </div>
    </slide>
    <slide>
        <div class="team__info">
            <img class="photo" src="@/assets/pictures/Bui.png" alt="Bui Cai">
            <h2 class="name">
                Bui Cai
            </h2>
            <P class="position">
                Co-founder and CTO
            </P>
        </div>
    </slide>
    <slide>
        <div class="team__info">
            <img class="photo" src="@/assets/pictures/Binh.png" alt="Binh Mai">
            <h2 class="name">
                Binh Mai
            </h2>
            <P class="position">
                Blockchain expert
            </P>
        </div>
    </slide>
    <slide>
        <div class="team__info">
            <img class="photo" src="@/assets/pictures/Lisa.png" alt="Lisa Dowen">
            <h2 class="name">
                Lisa Dowen
            </h2>
            <P class="position">
                Marketing and funnels
            </P>
        </div>
    </slide>
  </carousel>
        </div>
    </div>


</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
 
export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
  

<style lang="scss">
.slider {

    @media screen and (min-width: 320px) and (max-width: 1023px) { 
        display: none;
    }

    .VueCarousel-slide {
        display: flex;
    }
}

.mobile__slider {
    @media screen and (min-width: 1024px) { 
        display: none;
    }

    .VueCarousel-slide {
        display: block;
    }
}

.VueCarousel {
    max-width: 1575px;
    margin: 0 auto;

    .VueCarousel-wrapper {

        .VueCarousel-inner {
            flex-basis: 175px;
        }
        .VueCarousel-slide {

            .team__info {
                text-align: center;
                margin-right: 54px;

                &:last-of-type {
                    margin-right: 0;
                }

                .name {
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 36px;
                    margin-top: 20px;
                    margin-bottom: 12px;
                }
                
                .photo {

                    @media screen and (min-width: 1024px) and (max-width: 1710px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 760px) { 
                        width: 80%;
                    }
                }

                .position {
                    font-weight: 600;
                    font-size: 22px;
                    line-height: 26px;
                    opacity: 0.6;
                }
            }
        }
    }

    .VueCarousel-pagination {
        .VueCarousel-dot {
            border-radius: 0;

            &:focus {
                outline: 0;
            }
        }
    }
}

</style>