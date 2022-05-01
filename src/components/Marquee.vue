<template>
    <div class="marquee">
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
        <span>WARNING: this is not a meme coin</span>
    </div>
</template>

<style lang="scss" scoped>
.marquee{
    white-space:nowrap;
    overflow:hidden;
    background: #5A4039;
    height: 38px;
    padding: 11px 0;
    width:100%;

    span { 
        color: rgba(255, 245, 0, 0.6);
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        display:inline-block;
        padding-left:15px;
        text-transform: uppercase;
        -webkit-animation: marquee 7s infinite linear;
        animation: marquee 7s infinite linear;
    }

    @-webkit-keyframes marquee {
        0%{-webkit-transform: translate(0, 0);}
        100%{-webkit-transform: translate(-100%, 0);}
    }
    @keyframes marquee{
        0%{transform: translate(0, 0);}
        100%{transform: translate(-100%, 0)}
    }
}
</style>