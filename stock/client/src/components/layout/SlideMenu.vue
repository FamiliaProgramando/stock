<template>
    <div id="menu" >
        <ul class="menuItem">
            <li class="item"><router-link to="/vue/nuevacoccion"><i class="fas fa-burn"></i>Cocinar</router-link></li>
            <li class="item"><router-link to="/vue/envasado"><i class="fas fa-wine-bottle"></i>Envasar</router-link></li>
            <li class="item"><router-link to="/vue/stock"><i class="fas fa-boxes"></i>Stock</router-link></li>
            <li class="item"><router-link to="/vue/registro"><i class="fas fa-clipboard-list"></i>Lotes</router-link></li>
            <li class="item"><router-link to="/vue/insumos"><i class="fas fa-shopping-bag"></i>Insumos</router-link></li>
            <li class="item"><router-link to="/vue/proveedores"><i class="fas fa-user-tie"></i>Proveedores</router-link></li>
            <li class="item"><router-link to="/vue/recetas"><i class="fas fa-beer"></i>Recetas</router-link></li>
        </ul>
    </div>
    <div id="back"></div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
}

</script>

<style scoped>
  #menu {
    width: 120px;
    height: 100vh;
    background-color: #000000e0;
    color: rgb(255, 255, 255);
    position: fixed;
    font-size: 0.9rem;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 1000;
  }

  #back {
    width: 100%;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.246);
  }

ul {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 1em;
}

li{
  text-align: center;
  padding-bottom: 30px;
}

i,a{
  display: block;
}

i{
  padding-bottom: 10px;
  font-size: 2em;
}

a:visited{
  color: rgba(255, 255, 255, 1);
}

a:active{
  color: rgba(255, 255, 255, 1) ;
}

a:link {
  color: rgba(255, 255, 255, 1) ;
}

@media screen and (max-height: 600px) and (orientation: landscape) {
  #menu{
    font-size: 1rem;
  }

  li{
  padding-bottom: 10px;
  }

  i{
    padding-bottom: 4px;
    font-size: 1.1rem
  }
}

@media screen and (min-height: 600px) {
  #menu {
    padding-top: 20px;
  }
}

@media screen and (min-width: 1020px) {
  #menu {
    width: 180px;
    font-size: 1rem;
  }

}
</style>
