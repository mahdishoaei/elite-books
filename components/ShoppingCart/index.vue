<template >
    <CoreCard
        width="250px"
    >
        <template #cardContent>
            <div>
                <div class="img-container">
                    <img
                        :src="`https://bookcart.azurewebsites.net/Upload/${img}`" 
                        alt="img" 
                    >
                </div>
                <div class="d-flex flex-column px-3 mb-2 content-container">
                    <span class="app-font-size-10 app-font-weight-600 pt-2">
                        {{ name }} <p class="app-color-primary d-inline">From</p> {{ author }}
                    </span>
                    <div class="d-flex">
                        <span class="app-font-size-12 app-font-weight-600 pt-1">
                            Price
                        </span>
                        <span class="app-font-size-14 app-font-weight-900 px-2 pt-1">
                            $ {{ price }}.99 
                        </span>
                    </div>
                    <div class="d-flex">
                        <span class="app-font-size-12 app-font-weight-600 pt-1">
                            Total
                        </span>
                        <span class="app-font-size-14 app-font-weight-900 px-2 pt-1">
                            $500.99
                        </span>
                    </div>
                    <div class="d-flex w-100 mt-1">
                       <div class="d-flex w-50">
                        <CoreBtn
                         name="-"
                         background="blue"
                         borderRadius="15px"
                         width="25px"
                        />
                        <span class="app-font-size-18 app-font-weight-900 pt-1 px-2">
                          8
                        </span>
                        <CoreBtn
                         name="+"
                         background="blue"
                         borderRadius="15px"
                         width="25px"
                        />
                       </div>
                        <div class="d-flex justify-end w-50">
                            <div class="app-bg-danger px-2 pt-2" style="border-radius: 15px;">
                                <BootstrapIconTrashFill />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </template>
    </CoreCard>
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
    width:250px;
    height:250px;
    img{
       width: 100%; 
       height: 250px;
    }

}
.content-container{
    width: 100%;
}

</style>