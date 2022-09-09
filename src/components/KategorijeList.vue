<template>
  <div class="overflow-auto">
  
    <b-pagination class="p"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items[0]"
      :fields="fields"
      @row-clicked="rowClickded"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >
    
    <template #cell(actions)="row">
        <b-button size="sm" @click="izmeni(row.item)" class="mr-1">
            Izmeni
        </b-button>
        <b-button size="sm" @click="obrisi(row.item)">
            Obrisi
        </b-button>
      </template>

    </b-table>

    <button @click="clicked()">Dodaj kategoriju</button>
    
    <b-form v-if="this.form.clicked == 1"  @submit.stop.prevent>
    <br>
      <label for="feedback-user">ime</label>
      <b-form-input class="input" v-model="form.ime" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your ime must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <b-form v-if="this.form.clicked == 1" @submit.stop.prevent>
      <label for="opis">opis</label>
      <b-form-input class="input" v-model="form.opis" :state="validation2" id="opis"></b-form-input>
      <b-form-invalid-feedback :state="validation2">
        Your opis must be more than 3 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation2">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <input v-if="this.form.clicked == 1" type="submit" value="Dodaj" @click="submit()">

     <b-form v-if="this.form.clickedUpdate == 1"  @submit.stop.prevent>
   
      <label for="feedback-user">ime</label>
      <b-form-input class="input" v-model="form.ime" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your ime must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <b-form v-if="this.form.clickedUpdate == 1" @submit.stop.prevent>
      <label for="opis">opis</label>
      <b-form-input class="input" v-model="form.opis" :state="validation2" id="opis"></b-form-input>
      <b-form-invalid-feedback :state="validation2">
        Your opis must be more than 3 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation2">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     <input v-if="this.form.clickedUpdate == 1" type="submit" value="Update" @click="update()">

     

  </div>

</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'KategorijeList',

    data() {
      return {
        fields: [
          {
            key: 'ime',
            sortable: false
          },
          {
            key: 'opis',
            sortable: false
          },
          {
            key: 'actions', label: 'Actions'
          }
        ],
        items: [],
        form:{
            ime: '',
            opis: '',
            clicked : 0,
            clickedUpdate: 0,
            id: ''
        },
        currentPage: 1,
        perPage: 2,
        
      }
    },

    computed: {
      ...mapState([
         'kategorijeList'
      ]),
      validation() {
        return this.form.ime.length > 2 && this.form.ime.length < 16
      },
      validation2() {
        return this.form.opis.length > 2
      },
      rows() {
        return this.kategorijeList.length
      }
    },


    mounted() {
        
        this.fetchKategorijeList().then(data => {
            this.items.push(data);
        })
        
        
      
        
    },

    methods: {
      ...mapActions([
        'fetchKategorijeList',
        'deleteKategorija',
        'updateKategorija',
        'addKategorija',
      ]),

        submit(){
            if(this.form.ime.length > 2 && this.form.ime.length < 16){
                var kat = {
                    ime: this.form.ime,
                    opis: this.form.opis
                }
                this.addKategorija(kat);
                window.location.reload();
            }
        },

        clicked(){

            this.form.clickedUpdate = 0;
            this.form.ime = '';
            this.form.opis = '';

            if(this.form.clicked == 1){
                this.form.clicked = 0;
            }else{
                this.form.clicked = 1;
            }

        },

        obrisi(item){

            this.deleteKategorija(item.id);
            window.location.reload();

        },

        izmeni(item){

            this.form.clicked = 0;

            if(this.form.clickedUpdate == 1){
                this.form.clickedUpdate = 0;
            }else{
                this.form.clickedUpdate = 1;
            }
            this.form.ime = item.ime
            this.form.opis = item.opis
            this.form.id = item.id

        },

        update(){
            
            var kat = {
                id: this.form.id,
                ime: this.form.ime,
                opis: this.form.opis
            }

            this.updateKategorija(kat);
            window.location.reload();

        },

        rowClickded(item){
            this.$router.push({ name: 'KategorijeVesti', params: { item: item } });
        }
     
    }
  }

</script>

<style scoped>

    .p{
        text-align: center;
        justify-content: center;
    }
    .overflow-auto{
        text-align: center;
    }
    .input{
        width: 50%;
        margin-left: 25%;
        margin-top: 10px;
    }
    .glavni{
        margin-top: 20px;
    }

</style>