<template>
  <div class="overflow-auto">
  

    <b-table
      id="my-table"
      :items="items[0]"
      :fields="fields"
      small
    >
    
    <template #cell(actions)="row">
        <b-button size="sm" @click="izmeni(row.item)" class="mr-1">
            Izmeni
        </b-button>
        <b-button size="sm" @click="obrisi(row.item)">
            Obrisi
        </b-button>
        <b-button size="sm" @click="clicked()">
            Dodaj
        </b-button>
      </template>

    </b-table>


    <div v-if="this.form.clicked == 1">
        <b-form  @submit.stop.prevent>
        <label for="feedback-user">Ime</label>
        <b-form-input class="input" v-model="form.ime" :state="validation1" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation1">
            Your first name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation1">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>


     <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">Prezime</label>
        <b-form-input class="input" v-model="form.prezime" :state="validation2" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation2">
            Your last name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation2">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

    <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">Email</label>
        <b-form-input class="input" v-model="form.email" :state="validation3" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation3">
            Your need to enter email.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation3">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>


     <br><br>

     <b-form  @submit.stop.prevent>
      <label for="lozinka">Lozinka</label>
      <b-form-input class="input" v-model="form.lozinka" :state="validation4" id="lozinka"></b-form-input>
      <b-form-invalid-feedback :state="validation4">
        Your lozinka must be 3-15 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation4">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>
     <br><br>
     
     <input type="submit" value="Dodaj" @click="submit()">

    </div>

    <div v-if="this.form.clickedUpdate == 1">
      <b-form   @submit.stop.prevent>
        <label for="feedback-user">Ime</label>
        <b-form-input class="input" v-model="form.ime" :state="validation1" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation1">
            Your first name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation1">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>


     <br><br>

    <b-form  @submit.stop.prevent>
        <label for="feedback-user">Prezime</label>
        <b-form-input class="input" v-model="form.prezime" :state="validation2" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation2">
            Your last name must be 3-15 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation2">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

    <br><br>

    <b-form  @submit.stop.prevent>

        <label for="feedback-user">Email</label>
        <b-form-input class="input" v-model="form.email" :state="validation3" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation3">
            Your need to enter email.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation3">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

     <br><br>

     <b-form  @submit.stop.prevent>
      
        <label for="feedback-user">Tip</label>
        <b-form-input class="input" v-model="form.tip" :state="validation3" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation3">
            Your need to enter tip.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation3">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

     <br><br>

     <b-form  @submit.stop.prevent>
      
        <label for="feedback-user">Status</label>
        <b-form-input class="input" v-model="form.status" :state="validation3" id="feedback-user"></b-form-input>
        <b-form-invalid-feedback :state="validation3">
            Your need to enter status.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation3">
            Looks Good.
        </b-form-valid-feedback>
        </b-form>

     <br><br>

     
     <input type="submit" value="Promeni" @click="update()">
    </div>

  </div>

</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'KategorijeList',

    data() {
      return {
        fields: [
          {
            key: 'id',
            sortable: false
          },
          {
            key: 'ime',
            sortable: false
          },
          {
            key: 'prezime',
            sortable: false
          },
          {
            key: 'email',
            sortable: false
          },
          {
            key: 'tip',
            sortable: false
          },
          {
            key: 'status',
            sortable: false
          },
          {
            key: 'actions', label: 'Actions'
          }
        ],
        items: [],
        form:{
            id: '',
            ime: '',
            opis: '',
            clicked : 0,
            clickedUpdate: 0,
            prezime: '',
            email: '',
            lozinka: '',
            status: '',
            tip: '',
        }
        
      }
    },

    computed: {

      validation1() {
        return this.form.ime.length > 2 && this.form.ime.length < 16
      },
      validation2() {
        return this.form.prezime.length > 2 && this.form.prezime.length < 16
      },
      validation3() {
        return this.form.email.length>0 && this.form.email.length<16
      },
      validation4() {
        return this.form.lozinka.length > 2 && this.form.lozinka.length < 16
      }

    },


    mounted() {
        
        this.fetchKorisnici().then(data => {
            this.items.push(data);
        })
        
        
      
        
    },

    methods: {
      ...mapActions([
        'fetchKorisnici',
        'deleteKorisnik',
        'register',
        'updateKorisnik'
      ]),

        submit(){

          if( this.form.ime.length > 2 && this.form.ime.length < 16 
            &&  this.form.prezime.length > 2 && this.form.prezime.length < 16 && this.form.email.length>0 && this.form.email.length<16 && 
            this.form.lozinka.length > 2 && this.form.lozinka.length < 16){
                var kor = {
                  ime: this.form.ime,
                  prezime: this.form.prezime,
                  email: this.form.email,
                  lozinka: this.form.lozinka,

                }

                this.register(kor);
                window.location.reload();
            }
            
        },

        clicked(){

            this.form.clickedUpdate = 0;
            this.form.ime = '';
            this.form.prezime = '';
            this.form.email = '';
            this.form.lozinka = '';
            this.form.status= '';
            this.form.tip = '';
            this.form.id = '';

            if(this.form.clicked == 1){
                this.form.clicked = 0;
            }else{
                this.form.clicked = 1;
            }

        },

        obrisi(item){

            console.log(item.id);
            this.deleteKorisnik(item.id);
            window.location.reload();

        },

        izmeni(item){

            this.form.clicked = 0;

            if(this.form.clickedUpdate == 1){
                this.form.clickedUpdate = 0;
            }else{
                this.form.clickedUpdate = 1;
            }
            this.form.id = item.id
            this.form.ime = item.ime
            this.form.prezime = item.prezime
            this.form.email = item.email
            this.form.status = item.status
            this.form.tip = item.tip

        },

        update(){
            if( this.form.ime.length > 2 && this.form.ime.length < 16 
            &&  this.form.prezime.length > 2 && this.form.prezime.length < 16 && this.form.email.length>0 && this.form.email.length<16){
                var up ={
                    id: this.form.id,
                    ime: this.form.ime,
                    prezime: this.form.prezime,
                    email: this.form.email,
                    tip: this.form.tip,
                    status: this.form.status

                }
                console.log(up);
                this.updateKorisnik(up);
                window.location.reload()
            }
           
        },

     
    }
  }

</script>

<style scoped>

    .input{
        width: 50%;
        margin-left: 25%;
        margin-top: 10px;
    }
    .glavni{
        margin-top: 20px;
    }

</style>