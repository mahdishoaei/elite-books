<template>
    
      <div
      class="mt-10 d-flex  app-container pa-2 container "  >
        
        <div class=" about d-flex flex-column align-center h-auto px-2 ma-2  " >
              
                <span class="app-font-size-30 app-color-primary  ">
                     About us 
                </span>
                <span class="app-font-size-18 pa-3 app-color-gray description ">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual  In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual  In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual 
                </span>
        </div>
        <div class="d-flex flex-column align-center w-50 h-auto px-2 ma-2  " >
            <v-img
            class="img-sec"
             :width="600"
              aspect-ratio="16/9"
              cover
              src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/10044334/shutterstock_1718964076.jpg"
            ></v-img>
        </div>
    </div>
</template>


<style scoped lang="scss">
.container{
    height:300px;
    .description{
    overflow:hidden;
    }
    @media (max-width: 800px) {
      .description{
        font-size:14px;
      }
      .img-sec{
        display: none;
      }
    }
}
</style>