<template>
    <div>

        <div class="fleks">

          <div class="unutra">
            <div class="stiki"><h1>Kategorije:</h1></div>
              <KategorijeList />
          </div>
          

        </div>
        
        
    </div>  
</template>

<script>

    import KategorijeList from '../components/KategorijeList.vue'
  

  export default {
    name: 'Kategorije',
       
    data() {
        return{
            
        }
    },

    components: {
       KategorijeList,
       
      
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