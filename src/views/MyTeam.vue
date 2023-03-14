<template>
    <div class="team">
      <h4 class="subheading text-blue-grey-lighten-3 pb-10 mt-16">Team</h4>
      <v-container-fluid class="mt-16 mx-20 pl-5">
        <v-row no-gutters class="d-flex flex-wrap align-center">
          <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
              <v-card flat class="text-center pa-6 ma-3 bg-blue-grey-lighten-3">
                <v-responsive class="pt-0">
                  <v-avatar size="90">
                    <v-img :src="person.imgUrl"></v-img>
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="">
                      {{ person.name }}
                  </div>
                  <div class="text-grey">
                      {{ person.role }}
                  </div>
                </v-card-text>
                <v-card-action>
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                      persistent
                      width="1024"
                    >
                    <template v-slot:activator="{props}">
                      <v-btn v-bind="props" flat color="grey text-center">
                      <span class="material-symbols-rounded">message</span>
                       <span>Message</span>
                       </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                          <span class="text-h5">User Profile</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                        <v-row>
                        <v-col cols="12" sm="6" md="4"> 
                          <v-text-field label="Legal first name*" required ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                           <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                           <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                      <v-autocomplete 
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests"
                      multiple></v-autocomplete>
                        </v-col>
                        </v-row>
                        </v-container>
                      <small>*indicates required field</small>
                      </v-card-text>
                     <v-card-actions>
                     <v-spacer></v-spacer>
                       <v-btn color="blue-darken-1" variant="text" @click="dialog = false">Close</v-btn>
                       <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Save</v-btn>
                     </v-card-actions>
                    </v-card>
                   </v-dialog>
                   </v-row>
                </v-card-action>
              </v-card>
          </v-col>
        </v-row>
      </v-container-fluid>
    </div>
</template>

<script>
export default {
  data(){
    return {
      team:[
        {name:'Carlos', role:'FullStack developer', imgUrl:'../images/1.png'},
        {name:'Ngarison', role:'Javascript/Java/Python Engineer',imgUrl:'../images/3.png'},
        {name:'Ayoub', role:'Project Manager',imgUrl:'../images/4.png'},
        {name:'Sara', role:'Community Manager',imgUrl:'../images/2.png'},
        {name:'Khadija', role:'RH',imgUrl:'../images/5.png'},
      ], 
      dialog: false,
    }
  }
}
</script>