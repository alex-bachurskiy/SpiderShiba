<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style lang="scss">

@font-face {
  font-family: 'SF Pro Display';
  src: url('~@/assets/fonts/SFProDisplay/SFProDisplay-Black.eot');
  src: local('SF Pro Display Black'), local('~@/assets/fonts/SFProDisplay/SFProDisplay-Black'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Black.eot?#iefix') format('embedded-opentype'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Black.woff2') format('woff2'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Black.woff') format('woff'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold.eot');
  src: local('SF Pro Display Bold'), local('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold.eot?#iefix') format('embedded-opentype'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold.woff2') format('woff2'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold.woff') format('woff'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold.eot');
  src: local('SF Pro Display Semibold'), local('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold.eot?#iefix') format('embedded-opentype'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold.woff2') format('woff2'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold.woff') format('woff'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Semibold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium.eot');
  src: local('SF Pro Display Medium'), local('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium.eot?#iefix') format('embedded-opentype'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium.woff2') format('woff2'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium.woff') format('woff'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular.eot');
  src: local('SF Pro Display Regular'), local('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular.eot?#iefix') format('embedded-opentype'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular.woff2') format('woff2'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular.woff') format('woff'),
    url('~@/assets/fonts/SFProDisplay/SFProDisplay-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

.container {
  padding-right: 90px;
  padding-left: 90px;
  
  @media screen and (min-width: 1250px) and (max-width: 1710px) { 
    padding-right: 55px;
    padding-left: 55px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1240px) { 
    padding-right: 25px;
    padding-left: 25px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) { 
    padding-right: 50px;
    padding-left: 50px;
  }

  @media screen and (min-width: 320px) and (max-width: 760px) { 
    padding-right: 15px;
    padding-left: 15px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'SF Pro Display';
  color: #FFFFFF;
  background: #101932;
}

a {
  text-decoration: none;
}

.btn__style {
  border-radius: 4px;
}

.color-btn__style a {
  color: #FFFFFF;
}

:hover, :active, :focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

input {
  outline:none;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

body, h1, h2, h3, h4, h5, h6,
p, ul, ol, li, figure, figcaption,
blockquote, dl, dd {
  margin: 0;
}
</style>
