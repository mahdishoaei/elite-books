<template>
    <CoreCard width="230px" height="280px">
        <template #cardContent>
           <div class="">
              <div class="d-flex justify-center align-center px-3 py-5">
                <img 
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"  
                    alt="image">
                <span class="app-font-size-14 app-font-weight-600 pt-2">
                    Ali Mazlom
                </span>
              </div>
              <div class="d-flex flex-column justify-center px-2">
              
                <span class="app-font-size-12 app-color-primary">
                     Author of Elite Books
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
}
</style>