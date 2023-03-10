<template>
    <nav>
        <v-toolbar class="px-8">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>BMS</span>
            </v-toolbar-title>
            <v-btn color="grey">
                <span>Sign Out</span>
                <v-icon class="ml-4" icon="mdi-arrow-up-bold-box-outline"></v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer  temporary v-model="drawer" app class="bg-indigo">
            <p>Test</p>
        </v-navigation-drawer>
    </nav>
</template>


<script>
    export default {
data(){
  return {drawer: false}
}
}
</script>