<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            
            <NajcitanijeList/>
              
              
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    
    import Title from '../components/Title.vue'
    import NajcitanijeList from '../components/NajcitanijeList.vue'
    

  export default {
    name: 'Najcitanije',
       
    data() {
        return {
            title: "Najcitanije vesti:"
        }
    },

    components: {
       Title,
       NajcitanijeList
       
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