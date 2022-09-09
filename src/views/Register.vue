<template>
  <div class="glavni">

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
     
     <input type="submit" value="Submit" @click="submit()">
  </div>
</template>

<script>
 
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        form: {
            ime: '',
            prezime: '',
            email: '',
            lozinka: '',
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

    methods: {
        ...mapActions([
            'register'
        ]),

        submit(){
            if( this.form.ime.length > 2 && this.form.ime.length < 16 
            &&  this.form.prezime.length > 2 && this.form.prezime.length < 16 && this.form.email.length>0 && this.form.email.length<16 && 
            this.form.lozinka.length > 2 && this.form.lozinka.length < 16){
                this.register(this.form);
                this.$router.push({ name: 'Login'})
            }
        }

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