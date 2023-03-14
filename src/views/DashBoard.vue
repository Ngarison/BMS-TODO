<template>
  <!-- <HelloWorld /> -->
  <div class="dashboard">
    <h4 class="subheading text-blue-grey-lighten-3 mb-15 mb-0 mt-16">Dashboard</h4>
      <v-container-fluid class="mt-16 ">
          <v-row no-gutters class="mb-12 mx-16 px-2">
              <v-btn small flat @click="sortBy('title')">
                <span class="material-symbols-rounded">folder</span>
                <span class="caption text-lowercase">By project name</span>
                <v-tooltip
                  activator="parent"
                  location="top"
                >Sort project by project name</v-tooltip>
              </v-btn>

          <v-btn small flat @click="sortBy('person')">
              <span class="material-symbols-rounded">person</span>
              <span class="caption text-lowercase">By person</span>
              <v-tooltip
                  activator="parent"
                  location="top"
                >Sort project by project person</v-tooltip>
          </v-btn>

          </v-row>
          <!-- values -->
        <v-card flat class="mx-16" v-for="project in  projects" :key="project.title">
          <v-row class="" no-gutters :class="` pa-3 project ${project.status}`" >
            <v-col xs="12" md="6">
              <v-sheet class="pa-2 ma-2">
                <div class="caption text-grey">Project title</div>
                <div>{{project.title}}</div>
              </v-sheet>
            </v-col>
            <v-col xs="6" sm="4" md="2">
              <v-sheet class="pa-2 ma-2">
                <div class="caption text-grey">Person</div>
                <div>{{project.person}}</div>
              </v-sheet>
            </v-col>
            <v-col xs="6" sm="4" md="2">
              <v-sheet class="pa-2 ma-2">
                  <div class="caption text-grey">Due by</div>
                  <div>{{ project.due}}</div>
              </v-sheet>
            </v-col>
            <v-col xs="2" sm="4" md="2">
              <v-sheet class="pa-1 ma-2">
                <div class="d-block">
                  <v-chip small :class="`stat ${project.status}  text-white  caption my-2`">
                    {{ project.status }}
                  </v-chip>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
         </v-card>
         <v-divider class="mx-15"></v-divider>
      </v-container-fluid>
  </div>
</template>

<script>
export default({
  name: 'DashBoard',

  components: {},
  data(){
    return{
      projects:[
        {title:'Design a new website', person:'Charles', due:'1st Jan 2019', status:'ongoing', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Code up the homepage', person:'Ngarison', due:'10 Jan 2019', status:'complete', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Design video thumbnails', person:'Yuri', due:'22 Fev 2018', status:'complete', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Create a community forum', person:'Gouken', due:'20 Oct 2020', status:'overdue', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
      ]
    }
  },
  methods:{
   sortBy(prop){
    this.projects.sort((a,b)=> a[prop] < b[prop] ? -1:1)
   }
  }
});
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}

.stat.complete{
  background:#3cd1c2;
}
.stat.ongoing{
  background: orange;
}
.stat.overdue{
  background: tomato;
}



</style>
