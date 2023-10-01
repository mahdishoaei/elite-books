<script setup>
definePageMeta({
    layout: "auth",
});
</script>

<template>
    <div>
        <div class="d-flex px-2">
           <span class="app-font-size-18">
              Login with
           </span>
           <span class="px-2 app-font-size-18 app-font-weight-600 app-color-primary">
            Elite Books
           </span>
        </div>

       <div class="d-flex mt-5 w-100">
        <div class="pt-6 px-2">
            <BootstrapIconPersonFill />
        </div>
        <div class="w-100">
            <CoreInput
                label="Username"
            />
        </div>
       </div>

       <div class="d-flex mt-2 w-100">
        <div class="pt-6 px-2">
            <BootstrapIconEyeFill />
        </div>
        <div class="w-100">
            <CoreInput
                label="Password"
            />
        </div>
       </div>

       <div class="d-flex mt-5">
            <CoreBtn 
                class="mx-2"
                name="Login" 
                background="primary" 
                borderRadius="5px" 
                width="80px"
                height="40px"
            /> 
            <CoreBtn 
                name="Create Account" 
                background="outline-primary-hover"  
                borderRadius="5px" 
                width="130px"
                height="40px"
            />
       </div>
       
    </div>
</template>