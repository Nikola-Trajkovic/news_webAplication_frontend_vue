<template>
  <div class="overflow-auto">
  

    <b-table
      id="my-table"
      :items="items[0]"
      :fields="fields"
      @row-clicked = "rowClicked"
      small
    >
    


    </b-table>

  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'VestDatum',

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
         'vestiDatum'
      ]),
    },


    mounted() {
    
        this.fetchVestiDatum().then(data => {
            this.items.push(data);
        })
        
        
      
        
    },

    methods: {
      ...mapActions([
        'fetchVestiDatum',
        'updateBrojPoseta'
      ]),

      rowClicked(item){


          var vest = {

            id: item.id,
            naslov: item.naslov,
            text: item.text,
            vremeKreiranja: item.vreme_kreiranja,
            brojPoseta: item.broj_poseta,
            fk_korisnik: 1,
            fk_kategorija: item.fk_kategorija,

          }

          this.updateBrojPoseta(vest)

          console.log(item);
          this.$router.push({ name: 'ClickedVest', params: { id: item.id } });

      }

     
    }
  }

</script>

<style scoped>



</style>