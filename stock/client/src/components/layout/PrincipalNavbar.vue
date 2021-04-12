<template>
    <nav id="navbar" class="navbar">
        <ul id="navMenu">
            <li class="navItem"><router-link to="/vue/nuevacoccion"><i class="fas fa-burn"></i>Cocina</router-link></li>
            <li class="navItem"><router-link to="/vue/envasado"><i class="fas fa-wine-bottle"></i>Envasado</router-link></li>
            <li class="navItem"><router-link to="/vue/stock"><i class="fas fa-boxes"></i>Stock</router-link></li>
            <li class="navItem"><router-link to="/vue/registro"><i class="fas fa-clipboard-list"></i>Registro</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>

nav {
  width: 100%;
  background-color: rgb(79, 116, 85);
  background: linear-gradient(135deg, #5a8f58 , #3c5837 99%);
  height: 35px;
  color: rgba(255, 255, 255, 1);
  font-size: 1.5em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1px;
  box-shadow: 0px 5px 5px rgba(189, 189, 189, 0.75);
  z-index: 100;
}

ul{
  display: inline-block;
  width: 100%;
  font-size: 0.5em;
  font-family: Verdana, Tahoma, sans-serif;
  display: flex;
  justify-content: space-around;
}

li {
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  padding: 4px;
}

i {
  padding: 4px;
}

a:visited{
  color: rgba(255, 255, 255, 1);
}

a:active{
  color: rgba(255, 255, 255, 1) !important;
}

a:link {
  color: rgba(255, 255, 255, 1) !important;
}

@media screen and (max-width: 350px) {

  nav {
    height: fit-content;
  }

  ul{
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
  }

}

@media screen and (min-width: 480px) {

  ul {
    font-size: 0.55em;
  }

  i {
    padding: 10px;
  }
}

@media screen and (min-width: 680px) {

  ul {
    font-size: 0.6em;
  }
}

@media screen and (min-width: 1020px) {
  ul {
    justify-content: flex-start;
  }
}
</style>
