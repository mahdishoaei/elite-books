<template>
    <div 
    class="navigation"
    >
        <div 
        class="d-flex w-50 px-4 py-1"
        >
          <AppLogo />
          <div 
          class="d-flex justify-center align-center px-2"
          >
            <v-icon class="app_pointer"
            >mdi-cart-outline</v-icon>
          </div>
          <div 
          class="d-flex justify-center align-center"
          >
            <ThemeSwichter />
          </div>
        </div>
        <div 
        class="d-flex justify-end align-center w-50 px-4"
        >
         <div 
         class="d-flex align-center"
         >
          <CoreBtn 
            class="mx-2"
            name="Sign In" 
            background="primary" 
            borderRadius="5px" 
            width="80px"
            height="33px"
          /> 
          <CoreBtn 
            name="Sign Up" 
            background="secondary"  
            borderRadius="5px" 
            width="80px"
            height="33px"
          />
         </div>
      </div>
    </div>
</template>

<style lang="scss">
.navigation{
    width: 100%;
    display: flex;
    box-shadow: 0 0 2px 0 #fd7403a2;
}
</style>