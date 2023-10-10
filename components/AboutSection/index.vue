<template>
      <div
        class="mt-10 d-flex about-section"
      >
        <div 
          class="text-container d-flex flex-column justify-center align-center" 
        >  
          <span 
            class="app-font-size-16 app-color-primary"
          >
            Elite Books About Us 
          </span>
          <span 
            class="app-font-size-14 app-color-gray description"
          >
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
            used to demonstrate the visual  In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
            used to demonstrate the visual  In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
            used to demonstrate the visual 
          </span>
        </div>
        
        <div class="img-container h-auto px-2 ma-2" >
            <v-img
              class="img"
              cover
              src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/10044334/shutterstock_1718964076.jpg"
            ></v-img>
        </div>
    </div>
</template>


<style scoped lang="scss">
.about-section{
    width: 100%;
    display: flex;
    .text-container{
      width: 50%;
    }
    .img-container{
      width: 50%;
      .img{
        width: 100;
        height: 350px;
        border-radius: 30px 100px 50px 200px;
      }
    }
}

@media (max-width: 900px) {
  .about-section{
    flex-direction: column;
    .text-container{
      width: 100%;
    }
    .img-container{
      display: none;
    }
  }
}
</style>