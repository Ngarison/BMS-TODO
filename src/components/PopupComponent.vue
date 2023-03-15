<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h2 class="pt-5 text-center">Add a new Project</h2>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" color="#243C87" v-model="title"  prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" color="#243C87" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="d-flex flex-row justify-space-between">
              <v-btn  class="ml-11 mb-5 text-white" @click="submit" style="background-color: #243C87;">Add </v-btn> 
              <v-btn  class="mr-11 mb-5 text-white" @click="dialog = false" style="background-color: #243C87;">CANCEL</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default{
    data () {
      return {
        dialog: false,
        title:'',
        content:''
      }
    },
    methods:{
        submit(){
            console.log(this.title, this.content)
            alert("Le titre est: "+this.title+" et contenu: "+this.content )
        }
    }
}
</script>