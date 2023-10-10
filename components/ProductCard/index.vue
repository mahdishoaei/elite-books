<template >
    <div class=" px-4 py-4">
        <CoreCard
          width="340px"
          height="230px"
          >
        <template  #cardContent >
           <div  class="d-flex" >
              <div  class="img-sec">
                <img 
                  :src="img" 
                  alt="img" 
                 />
              </div>
              <div class="d-flex flex-column justify-center px-2 py-2 content-sec">
                <span class="app-font-size-18 app-font-weight-600 ">
                    {{ name }}
                </span>
                <span class="app-font-size-14 app-color-primary " >
                    {{ category }}
                </span>
                <span class="app-font-size-20 app-font-weight-800 ">
                    {{ price }}
                </span>
                <span class="app-font-size-12 pt-2 app-color-gray">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual
                </span>
                <div class="pt-2 ">
                 <CoreBtn 
                  name="Add to cart"
                  background="outline-primary-hover"
                  borderRadius="5px" 
                  width="145px"
                  height="25px"
                />
                </div>
              </div>
           </div>
        </template>
    </CoreCard>
</div>
    
</template>

<script setup>

const props = defineProps({
    name: {
        type: String,
        default : "",
        required : false
    },
    price: {
        type: String,
        default : "",
        required : false
    },
    category: {
        type: String,
        default : "",
        required : false
    },
    img: {
        type: String,
        default : "",
        required : false
    }
})
</script>


<style lang="scss" scoped>
.img-sec{
    width:50%;
    img{
    width: 165px;
    height:230px;
}
}
.content-sec{
    width:50%;
    overflow:hidden;
}

</style>