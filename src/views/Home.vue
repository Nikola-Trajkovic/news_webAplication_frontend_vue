<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            <div class="stiki"><h1>Vesti:</h1></div>
              
              <Vest/>
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    import Vest from '../components/VestDatum.vue'
    import Title from '../components/Title.vue'
    

  export default {
    name: 'Home',
       
    data() {
        return {
            title: "Najnovije vesti:"
        }
    },

    components: {
       Vest,
       Title,
       
    },
    



  }
</script>

<style scoped>

  
   .stiki{
     position: -webkit-sticky;
     position: sticky;
     top: 0;
     z-index: 9;
     background-color: white;
   }
  

</style>