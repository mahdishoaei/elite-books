<template >
    <CoreCard width="350px">
        <template  #cardContent >
           <div  class="d-flex" >
              <div  class="d-flex justify-center align-center px-5 py-5">
                <img 
                 :src="img" 
                  alt="img" 
                 />
              </div>
              <div class="d-flex flex-column justify-center px-2">
                <span class="app-font-size-14 app-font-weight-600 pt-2">
                    {{ name }}
                </span>
                <span class="app-font-size-12 app-color-primary">
                    {{ position }}
                </span>
                <span class="app-font-size-12 pt-3 app-color-gray">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                    used to demonstrate the visual
                </span>
                <div class="d-flex mt-3 mb-3">
                    <BootstrapIconLinkedin />
                    <BootstrapIconTwitter class="mx-2" />
                    <BootstrapIconTelegram />
                    <BootstrapIconYoutube class="mx-2" />
                </div>
              </div>
           </div>
        </template>
    </CoreCard>
</template>



<script setup>

const props = defineProps({
    name: {
        type: String,
        default : "",
        required : false
    },
    position: {
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
img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>