<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            <div class="stiki">
                <h1>{{this.form.naslov}}</h1>
            
                <p>Datum kreiranja: {{this.form.datum}}</p>
                
                <p>Text: {{this.form.text}}</p>
                <p>Tagovi:</p>
                <p v-for="tag in this.tagovi[0]" :key="tag.id" @click="tagClicked(tag)" >
                    {{tag.tag}}
                </p>

            </div>
            <div>

                <b-form  @submit.stop.prevent>
                <br>
                <label for="feedback-user">autor</label>
                <b-form-input class="input" v-model="formComment.autor" :state="validation" id="feedback-user"></b-form-input>
                <b-form-invalid-feedback :state="validation">
                    Your autor must be 3-15 characters long.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validation">
                    Looks Good.
                </b-form-valid-feedback>
                </b-form>
                <br><br>
                <b-form @submit.stop.prevent>
                <label for="text">text</label>
                <b-form-input class="input" v-model="formComment.text" :state="validation2" id="text"></b-form-input>
                <b-form-invalid-feedback :state="validation2">
                    Your text must be more than 3 characters long.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validation2">
                    Looks Good.
                </b-form-valid-feedback>
                </b-form>
                <br><br>
                <input type="submit" value="Dodaj" @click="submit()">

            </div>


            <div>

                <b-table
                id="my-table"
                :items="items[0]"
                :fields="fields"
                small
                >
    

                </b-table>

            </div>

              

              
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    import Title from '../components/Title.vue'
    import { mapActions , mapState} from 'vuex';
    

  export default {
    name: 'Home',
       
    data() {
        return {
            title: "Vest",
            form:{
                
                naslov: '',
                text: '',
                vremeKreiranja: '',
                brojPoseta:'',

            },
            formComment:{
                autor: '',
                text: '',
            },
            items: [],
            fields: [
            {
                key: 'autor',
                sortable: false
            },
            {
                key: 'text',
                sortable: false
            },
            
            ],
            tagovi: [],
            
        }
    },

    components: {
       Title,
       
    },

    computed: {
        ...mapState([
         'komentari',
         'tagoviVest'
      ]),
    
      validation() {
        return this.formComment.autor.length > 2 && this.formComment.autor.length < 16
      },
      validation2() {
        return this.formComment.text.length > 2
      }
    },

    mounted() {
        
        this.findVest(this.$route.params.id).then(data => {
            this.form = data
        })

        this.fetchKomentari(this.$route.params.id).then(data => {

            this.items.push(data)

        })

        this.getTagoviVest(this.$route.params.id).then(data => {

            this.tagovi.push(data)
            console.log(this.tagovi);

        })
        
        
      
        
    },
    
    methods: {
      ...mapActions([
        'addKomentar',
        'findVest',
        'fetchKomentari',
        'getTagoviVest'
      ]),

        submit(){
            if(this.formComment.autor.length > 2 && this.formComment.autor.length < 16){
                var kat = {
                    autor: this.formComment.autor,
                    text: this.formComment.text,
                    datum: "1/1/2021",
                    fk_vest: this.$route.params.id
                }
                console.log(kat);
                this.addKomentar(kat);
                window.location.reload();
            }
        },

        tagClicked(tag){
            this.$router.push({ name: 'TagVesti', params: { tag: tag } });
        }

      
      

        

       
     
    }



  }
</script>