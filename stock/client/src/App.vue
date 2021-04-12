<template>
    <div class="container" @click="hideMenu">
      <the-header @change-menu-visibility="showMenu"></the-header>
      <principal-navbar></principal-navbar>
      <slide-menu v-if="menuVisible"></slide-menu>
      <basic-main>
        <router-view></router-view>
      </basic-main>
    </div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import PrincipalNavbar from './components/layout/PrincipalNavbar.vue';
import SlideMenu from './components/layout/SlideMenu.vue';
import BasicMain from './components/ui/BasicMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    PrincipalNavbar,
    SlideMenu,
    BasicMain
  },
  data(){
    return{
      menuVisible: false,
    }
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible;
      console.log(this.menuVisible);
    },
    hideMenu(event) {
      const logo = document.querySelector('#logoMenu *');
      if(this.menuVisible == true && event.target !== logo ) {
        this.menuVisible = !this.menuVisible;
      }
    }
  },
}
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.15.1/css/all.css");

* {padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex-direction: column;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
}
::-webkit-scrollbar {
  width: 5px;
  background-color: rgb(58, 57, 57);
}

::-webkit-scrollbar-thumb {
  background: rgb(102, 101, 101);
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(126, 125, 125);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.hidden {
  display: none !important;
}

</style>
