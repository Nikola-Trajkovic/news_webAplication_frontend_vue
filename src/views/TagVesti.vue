<template>
    <div>
        <br>
        <h1>Vesti za tag: {{this.$route.params.tag.tag}}</h1>
        <br>
        <br>
        <b-table
            id="my-table"
            :items="items[0]"
            :fields="fields"
            small
        >
        </b-table>
       

        
        
    </div>  
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'TagVesti',

       
    data() {
      return {
        fields: [
          {
            key: 'naslov',
            sortable: false
          },
          {
            key: 'text',
            sortable: false
          },
          {
            key: 'vreme_kreiranja',
            label: 'Datum kreiranja',
            sortable: false
          },
          {
            key: 'broj_poseta',
            label: 'Broj poseta',
            sortable: false
          }
        ],
        items: [],
        
      }
    },

    computed: {
      ...mapState([
         'tagVest'
      ]),
    },


    mounted() {

        

        this.fetchVestTag(this.$route.params.tag.id).then(data => {

            this.items.push(data);
        })
        
        
      
        
    },

    
     methods: {
      ...mapActions([
        'fetchVestTag'
      ]),
    }


  }
</script>