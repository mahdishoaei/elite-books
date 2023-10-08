<script setup lang="ts">
import { applicationTheme } from '@/stores/applicationTheme'
const ThemeDS = applicationTheme()

const ThemeStatus = computed<string>(() => {
    return ThemeDS.theme
})
</script>

<template>
  <div
    :class="{
      'app-bg-dark': ThemeStatus === 'dark',
      'app-bg-light': ThemeStatus === 'light'
    }" 
    class="d-flex flex-column __application_animation"
  >  
      <div class="mt-10">
        <CategoryStorySlider />
      </div>

      <div class="mt-10">
          <CaresoulSection />
      </div>

      <div class="mt-10">
        <div class="w-100 d-flex justify-center">
          <span class="app-font-size-16 app-font-weight-500 app-color-primary">
            All Managers In Elite Books
          </span>
        </div>
        <ManagersSlider />
      </div>

      <div class="mt-10">
        <div class="w-100 d-flex justify-center">
          <span class="app-font-size-16 app-font-weight-500 app-color-primary">
            All Author In Elite Books
          </span>
        </div>
        <AuthorSlider />
      </div>

      <div class="app-container">
        <div class="info-container">
            <div class="img-container">
               <img 
                src="https://chilternbookshops.co.uk/wp-content/uploads/2023/01/IMG_3353-scaled.jpg" 
                alt="img"
               >
            </div>
            <div class="text-container">
              <span class="app-font-size-22 app-color-primary">
                Elite Books Ready For You
              </span>
              <p class="app-font-size-14 app-color-gray">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
              </p>
              <div class="d-flex">
                <CoreBtn 
                  class="mt-5"
                  name="About Us"
                  background="primary"
                  borderRadius="5px" 
                  width="100px"
                  height="33px"
                />
                <CoreBtn 
                  class="mt-5 mx-2"
                  name="Contact Us"
                  background="outline-primary-hover"
                  borderRadius="5px" 
                  width="100px"
                  height="33px"
                />
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.info-container{
  width: 100%;
  display: flex;
  .img-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    img{
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }
  .text-container{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 900px) {
   .info-container{
    flex-direction: column;
    .img-container{
     width: 100%;
    }
    .text-container{
      margin: 40px 0;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
   }
}
</style>