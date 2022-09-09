<template>

    <div>

        <div>
          <Title :title="title" />
        </div>
        <div class="fleks">

          <div class="unutra">
            
            <KorisniciList/>
              
          </div>

        </div>
        
        
    </div>  

</template>

<script>

    
    import Title from '../components/Title.vue'
    import KorisniciList from '../components/KorisniciList.vue'
    

  export default {
    name: 'Korisnici',
       
    data() {
        return {
            title: "Korisnici:"
        }
    },

    components: {
        KorisniciList,
       Title,
       
    },
    



  }
</script>

<style scoped>



</style>