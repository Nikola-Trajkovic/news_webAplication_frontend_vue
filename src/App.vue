<template>
  <div id="app">
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>

            <b-nav-item to="/" >Home</b-nav-item>
            <b-nav-item to="/najcitanije">Najcitanije</b-nav-item>
            <b-nav-item v-if="token" to="/vesti">Vesti</b-nav-item>
            <b-nav-item v-if="token" to="/kategorije">Kategorije</b-nav-item>
            <b-nav-item v-if="token" to="/korisnici">Korisnici</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Uloguj se</b-nav-item>
            <b-nav-item v-if="!token" to="/register">Registruj se</b-nav-item>
            <b-nav-item v-if="token" @click="logout()">Izloguj se</b-nav-item>

            </b-navbar-nav>

        
        </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',
    created(){
        document.title = "Vesti"
    },

    computed: {
      ...mapState([
        'token',
        'userId'
      ])
    },

    mounted() {
      
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
      if(localStorage.userId){
        this.userId(localStorage.userId);
      }
    },

    methods: {

      ...mapMutations([
        'removeToken',
        'setToken',
        'userId',
        'removeUserId'
      ]),


      logout() {
        this.removeToken();
        this.removeUserId();
        localStorage.user = "";
        window.location.href = '/'
      }
    },

    sockets: {
      error(err) {
        console.log(err);
        alert("AAAAAAAAAAAAAAA");
      }
    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
