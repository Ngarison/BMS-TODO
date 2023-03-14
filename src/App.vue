<template>
  <v-app class="bg-blue-grey-lighten">
    <NavBar></NavBar>
    <v-main class="ml-5">
      <router-view/>
    </v-main>
    <!-- <FooterPage></FooterPage> -->
  </v-app>
</template>

<script>
import  NavBar from './components/NavBar.vue';
// import  FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
components:{NavBar},
data(){

}
}
</script>
