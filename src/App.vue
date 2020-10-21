<template>
  <div id="app">
    <div class="Desktop">
      <Desktop/>

    </div>
    <div class="Mobile">
      <Mobile/>
    </div>
    
  </div>
</template>
<script>
import Mobile from '@/views/Mobile.vue'
import Desktop from '@/views/Desktop.vue'
export default {
  components: {
    Mobile,
    Desktop
  }
}
</script>

<style scoped>
#app{
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("../src/assets/backgroundImage.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 1);
  }
@font-face {
  font-family: "Perpetua";
  src: local("Perpetua"),
   url("../src/assets/Perpetua.TTF") format("truetype");
}
  
  @media only screen and (max-width: 930px) {
  .Desktop{
    display: none;
  }
  .Mobile{
    display: block;
  }
}
@media only screen and (min-width: 920px) {
  .Desktop{
    display: block;
  }
  .Mobile{
    display: none;
  }
}
</style>
