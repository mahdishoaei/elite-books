<template>
  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="item in items"
      :key="item.id"
    >
     <img 
      :src="item.img" 
      alt="img" 
     />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = ref([
  {
    id: 0,
    img: 'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/10044334/shutterstock_1718964076.jpg'
  },
  {
    id: 1,
    img: 'https://www.iheartbritain.com/wp-content/uploads/2020/02/daunt-books-pretty-london-bookshops-in-england.jpg'
  },
  {
    id: 2,
    img: 'https://couponqueen.co.uk/wp-content/uploads/2022/03/Second-Hand-BookShops-in-London-1024x576.jpg'
  }
])
</script>

<style scoped>
img{
  width: 100%;
  height: 450px;
}
</style>