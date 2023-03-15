<template>
    <nav class="h-0">
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="text--grey" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text px-16" style="font-size:30px;">
                <span class="font-weight-light" style="color:#243C87; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">Todo</span>
                <span style="color:#243C87; font-weight: bold; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">BMS</span>
            </v-toolbar-title>
                <!-- Dropdown menu -->
                <v-menu open-on-hover >
                    <template  v-slot:activator="{props}">
                        <v-btn
                        color=""
                        v-bind="props"
                        flat
                        >
                        <span class="material-symbols-rounded">expand_more</span>
                       <span>Menu</span>
                        </v-btn>
                    </template>
                        <v-list>
                            <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-title>{{link.text}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                </v-menu>

            <!-- <div style="width:250px; height: 50px;">
                <v-text-field class="mt-0 mr-15 mb-10" append-inner-icon="mdi-magnify" label="Search" variant="outlined"></v-text-field>
            </div> -->
            <v-btn color="grey">
                <span>Sign Out</span>
                <v-icon class="ml-4" icon="mdi-arrow-up-bold-box-outline"></v-icon>
            </v-btn>
        </v-toolbar>
<!-- //class="ma-10"  class="ma-3" -->
        <v-navigation-drawer   temporary v-model="drawer"  class="">
            <v-col no-gutters class="d-flex flex-column align-center" style="gap: 15px;">
                <v-row  class="mt-5">
                    <v-avatar size="100">
                        <v-img src="/images/1.png"></v-img>
                    </v-avatar>
                </v-row>
                <v-row>
                    <p class="text-white">Ngarison</p>
                </v-row>
                <v-row>
                    <Popup></Popup>
                </v-row>
            </v-col>
            <v-list class="mt-5">
                <v-list-item class="mt-4" v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-content class="d-flex ml-12 ">
                        <v-list-item-action>
                            <v-icon  :icon="link.icon" ></v-icon>
                        </v-list-item-action>
                        <v-list-item-title class="ml-2">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
import Popup from './PopupComponent.vue'
    export default {
        components:{Popup},
data(){
  return {drawer: false,
          links:[
            {icon: 'mdi-view-dashboard', text:'Dashboard', route:'/'},
            {icon: 'mdi-folder', text:'My Projects', route:'/MyProjects'},
            {icon: 'mdi-account', text:'Team', route:'/Team'},
          ],
        }
}
}
</script>

<style>
.v-navigation-drawer{
    background: #243C87;
    color: white;
} 

.mdi-menu{
    width: 70px;
}
</style>