<template >
    <div>
        <CoreCard
          width="340px"
          height="200px"
          >
        <template  #cardContent >
           <div class="d-flex">
              <div class="img-container" @click="navigateTo(`/products/${id}`)">
                <v-img 
                  :src="`https://bookcart.azurewebsites.net/Upload/${img}`" 
                  alt="img" 
                ></v-img>
              </div>

              <div class=" px-3 pt-2 content-container">
                <div
                    class="d-flex flex-column" 
                    @click="navigateTo(`/products/${id}`)">
                    <span class="app-font-size-12 app-font-weight-600">
                        {{ author }}
                    </span>
                    <span class="app-font-size-12 app-color-primary py-2">
                        {{ category }}
                    </span>
                    <span class="app-font-size-12 app-font-weight-800">
                        $ {{ price }}.99
                    </span>
                    <span class="app-font-size-12 app-color-gray">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elite...
                    </span>
                </div>

                <div class="d-flex flex-column"
                >
                    <div class="mt-6">
                        <CoreBtn 
                            name="Add to cart"
                            background="outline-primary-hover"
                            borderRadius="5px" 
                            width="145px"
                            height="32px"
                            icon="addtocart"
                        />
                    </div>
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
        type: Number,
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
    },
    author: {
        type: String,
        default : "",
        required : false
    },
    id: {
        type: Number,
        default : 0,
        required : false
    }
})
</script>


<style lang="scss" scoped>
.img-container{
    width:50%;
    img{
        width: 165px;
        height:200px;
    }
}
.content-container{
    width:50%;
    height: 200px;
    overflow:hidden;
}

</style>