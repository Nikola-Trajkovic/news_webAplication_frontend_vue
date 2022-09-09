<template>
    <div>
        <br>
        <h1>Vesti za komponentu: {{this.$route.params.item.ime}}</h1>
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
    name: 'KategorijeVesti',

       
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
         'vestKategorijaList'
      ]),
    },


    mounted() {

        

        this.vestKategorija(this.$route.params.item.id).then(data => {

            this.items.push(data);
        })
        
        
      
        
    },

    
     methods: {
      ...mapActions([
        'vestKategorija'
      ]),
    }


  }
</script>