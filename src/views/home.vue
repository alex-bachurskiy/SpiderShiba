<template>
    <div class="home">
        <Main/>
        <Works/>
        <Play/>
        <Invest/>
        <Roadmap/>
        <Team/>
        <Tokenomics/>
        <FAQ/>
        <Community/>
        <Footer/>
    </div>
</template>

<script>
import Main from "../components/Main";
import Works from "../components/Works";
import Play from "../components/Play";
import Invest from "../components/Invest";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";
import FAQ from "../components/FAQ";
import Community from "../components/Community";
import Footer from "../components/Footer";

export default {
    name: "home",
    components: {
        Main,
        Works,
        Play,
        Invest,
        Roadmap,
        Team,
        Tokenomics,
        FAQ,
        Community,
        Footer
    }
};
</script>