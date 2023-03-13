<template>
    <nav class="h-0">
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="text--grey" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>BMS</span>
            </v-toolbar-title>
            <div class="w-25">
                <v-text-field class="mt-0 mr-15 mb-12" append-inner-icon="mdi-magnify"  style="height:5px;" label="Search" variant="outlined"></v-text-field>
            </div>
            <v-btn color="grey">
                <span>Sign Out</span>
                <v-icon class="ml-4" icon="mdi-arrow-up-bold-box-outline"></v-icon>
            </v-btn>
        </v-toolbar>
<!-- //class="ma-10"  class="ma-3" -->
        <v-navigation-drawer   temporary v-model="drawer"  class="bg-indigo">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-content class="d-flex ml-5 mt-3">
                        <v-list-item-action>
                            <v-icon  :icon="link.icon"></v-icon>
                        </v-list-item-action>
                        <v-list-item-title class="ml-2">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>
    export default {
data(){
  return {drawer: false,
          links:[
            {icon: 'mdi-view-dashboard', text:'Dashboard', route:'/'},
            {icon: 'mdi-folder', text:'My Projects', route:'/MyProjects'},
            {icon: 'mdi-account', text:'Team', route:'/Team'},
          ]}
}
}
</script>