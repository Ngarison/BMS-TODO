<template>
    <div class="project">
      <h4 class="subheading text-blue-grey-lighten-3 pb-10 mb-0 mt-16">Projects</h4>

      <v-container-fluid class="mt-16 mx-16 pl-5">
        <v-expansion-panels class="mb-6 mx-5">
          <v-expansion-panel v-for="project in myProjects" :key="project.title">
            <v-expansion-panel-title expand-icon="mdi-menu-down">{{project.title}}</v-expansion-panel-title>
            <v-expansion-panel-text class="mt-4 text-grey">
              <div class="font-weight-bold mt-3">due by {{ project.due }}</div>
              <div class="pt-5">{{project.content}}</div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container-fluid>
    </div>
</template>

<script>
  export default{
    data(){
      return {
        projects:[
        {title:'Design a new website', person:'Charles', due:'1st Jan 2019', status:'ongoing', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Code up the homepage', person:'Ngarison', due:'10 Jan 2019', status:'complete', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Design video thumbnails', person:'Yuri', due:'22 Fev 2018', status:'complete', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'Create a community forum', person:'Gouken', due:'20 Oct 2020', status:'overdue', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
        {title:'analyze of data', person:'Ngarison', due:'11 Jan 2019', status:'complete', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto voluptate consequatur itaque iure velit nihil libero'},
      ]
      }

  },
  computed:{
    myProjects(){
      return this.projects.filter((project)=>{
        return project.person==="Ngarison"
      })
  }
}
}
</script>