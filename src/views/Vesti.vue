<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            
              <VestiList/>
              
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    
    import Title from '../components/Title.vue'
    import VestiList from '../components/VestiList.vue'
    

  export default {
    name: 'Vesti',
       
    data() {
        return {
            title: "Vesti:"
        }
    },

    components: {

        VestiList,
       Title,
       
    },
    



  }
</script>

<style scoped>

  
  

</style>