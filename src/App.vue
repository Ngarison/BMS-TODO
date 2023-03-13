<template>
  <v-app class="bg-blue-grey-lighten">
    <NavBar></NavBar>
    <v-main class="ml-5 mb-5">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import  NavBar from './components/NavBar.vue';

export default {
  name: 'App',
components:{NavBar},
data(){

}
}
</script>
