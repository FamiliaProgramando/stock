<template>
    <header>
        <div @click="toggleMenu" >
            <div id="logoMenu" class="headerItem" v-if="menuInvisible"><i class="fas fa-bars"></i></div>
            <div id="cierreMenu" class="headerItem" v-else><i class="fas fa-times"></i></div>
        </div>
        <h1 id="tituloCabecera" class="headerItem"> Sierra Maestra</h1>
        <div id="home" class="headerItem"><router-link to="/vue/home"><i class="fas fa-home"></i></router-link></div>
        <div id="iconoNotificaciones" class="headerItem"><i class="far fa-bell"></i></div>
    </header>
</template>

<script>
export default {
    emits: ['change-menu-visibility'],
    data() {
        return {
          menuInvisible: true
        }
    },
    methods:{
        toggleMenu(){
          this.$emit('change-menu-visibility');
          return console.log('menu click')
        }
    }
}

</script>

<style scoped>

header {
  width: 100%;
  height: 40px;
  background-color: #7fd38b;
  color: rgb(16, 56, 18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0.3em 0.7em;
  z-index: 1000;
}

div {
  padding: 0 0.7em;
}

a:visited{
  color: rgb(16, 56, 18);
}

a:active{
  color: rgb(16, 56, 18);
}

a:link {
  color:rgb(16, 56, 18);
}

#logoMenu {
  cursor: pointer;
}

#tituloCabecera {
  font-size: 1em;
  font-weight: 2;
  font-family: Verdana, Tahoma, sans-serif;
  display: inline-block;
  flex-shrink: 0;
  font-weight: 400;
  line-height: 1.3em;
  text-align: left;
}

#home {
  margin-left: auto;
}

@media screen and (max-width: 350px) {

  #tituloCabecera {
    display: none;
  }
}

@media screen and (min-width: 480px) {
  header {
    font-size: 1.0em;
  }
}

@media screen and (min-width: 680px) {
  header {
    font-size: 1.2em;
  }
}

@media screen and (min-width: 1020px) {
  header {
    font-size: 1.3em;
  }
}

</style>
