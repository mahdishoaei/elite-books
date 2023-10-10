<template >
    <div >
        <CoreCard
          width="200px"
          height="350px"
          >
        <template  #cardContent >
           <div class="" >
              <div class="img-container  ">
                <v-img class="img"
                 :src="`https://bookcart.azurewebsites.net/Upload/${img}`" 
                  alt="img" 
                ></v-img>
              </div>
              <div class="d-flex flex-column px-3 pt-2 content-container">
                <span class="app-font-size-14 app-font-weight-600">
                    {{ name }} <p class="from app-color-primary d-inline">From</p> {{ author }}
                </span>
                <span class="app-font-size-16 app-font-weight-800">
                    $ {{ price }}.99 
                </span>
                <div class="d-inline pt-2">
                    <span class=" app-font-size-12 app-color-primary py-2" >
                      Quantity :
                    </span>
                    <div  class="app-color-gray d-inline">
                        <v-icon size="small" @click="handlePlus">mdi-plus-thick</v-icon>
                        {{ count }}
                        <v-icon @click="handleMinus" size="small">mdi-minus-thick</v-icon>
                    </div>
                </div>
                <div class="d-inline">
                    <span class="app-font-size-14 app-font-weight-600">
                    Total: $ {{ price }}.99
                    </span>
                    <div class="d-inline delete">
                     <v-icon>mdi-delete-forever</v-icon>
                    </div>
                </div>
              </div>
           </div>
        </template>
    </CoreCard>
</div>
    
</template>

<script setup>

const count = ref(1)
const handlePlus = () => {
     count.value ++
}
const handleMinus = () => {
    if(count.value > 1){
        count.value --
    }
}


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
    }
})

</script>


<style lang="scss" scoped>
.img-container{
    height:200px;
    width:200px;
    overflow:hidden;

    .img{
        max-height:328px;
        width:100%;

    }

}
.content-container{
    height:140px;
    width:200px;
    overflow:hidden;
    .delete{
       padding-left:40px;

    }
}

</style>