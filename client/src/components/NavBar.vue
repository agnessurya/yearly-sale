<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a v-if="isLogin" class="navbar-brand text-white" href="#"><router-link to="/">Dashnoard</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a v-if="!isLogin" class="nav-link text-white" href="#" tabindex="-1" > <router-link to="/login">Login</router-link></a>
          </li>
          <li class="nav-item">
            <a v-if="isLogin" @click.prevent="handleLogout" class="nav-link text-white" href="#" tabindex="-1">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Swal from "sweetalert2";
export default {
 name : 'Navbar',
 methods : {
   ...mapMutations({
      doLogin: "ISLOGIN",
    }),
  handleLogout() {
      Swal.fire({
        title: "Good Bye!",
        text: "See You Next Time",
        icon: "success",
      });
      localStorage.clear();
      this.$router.push("Login");
      this.doLogin(false);
    },
 },
 created() {
    if (localStorage.acces_token) {
      this.doLogin(true);
    }
  },
  computed: {
    ...mapState(["isLogin"]),
  },
}
</script>

<style>
</style>