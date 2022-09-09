<template>
  <div class="glavni">
    <b-form  @submit.stop.prevent>
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
     <b-form  @submit.stop.prevent>
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
     <input type="submit" value="Submit" @click="submit()">
    
  </div>
</template>

<script>

 import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        form:{
            ime: '',
            opis: '',
        }
      }
    },
    computed: {
      validation() {
        return this.form.ime.length > 2 && this.form.ime.length < 16
      },
      validation2() {
        return this.form.opis.length > 2
      }
    },

    methods: {
        ...mapActions([
            'addKategorija'
        ]),

        submit(){
            if(this.form.ime.length > 2 && this.form.ime.length < 16){
                this.addKategorija(this.form);
                window.location.reload();
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