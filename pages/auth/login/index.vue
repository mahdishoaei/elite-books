<script setup>
import { validUsername, validPassword } from '@/utils/validate'

definePageMeta({
    layout: "auth",
});

const form = ref({
    username : '',
    password: ''
})

const error = ref({
    username: {
        status: false , 
        message: ''
    },
    password: {
        status: false , 
        message: ''
    }
})

const handleLogin = () => {
    let AccessToLogin = true
    if(!validUsername(form.value.username)){
        AccessToLogin = false
        error.value.username.status = true
        error.value.username.message = 'Username should must be 5 charecter'
    } else {
        AccessToLogin = true
        error.value.username.status = false
        error.value.username.message = ''
    }
    if(!validPassword(form.value.password)){
        AccessToLogin = false
        error.value.password.status = true
        error.value.password.message = 'Password should must be 8 charecter'
    } else {
        AccessToLogin = true
        error.value.password.status = false
        error.value.password.message = ''
    }
}
</script>

<template>
    <div class="__application_animation">
        <div class="d-flex">
           <span class="app-font-size-18">
              Sign in with
           </span>
           <span class="px-2 app-font-size-18 app-font-weight-600 app-color-primary">
            Elite Books
           </span>
        </div>

       <div class="d-flex mt-5 w-100">
        <div class="w-100">
            <CoreInput
                label="Username"
                v-model="form.username"
                :error="error.username.status"
                :messageError="error.username.message"
            />
        </div>
       </div>
       
       <div class="d-flex mt-2 w-100">
        <div class="w-100">
            <CoreInput
                label="Password"
                v-model="form.password"
                :error="error.password.status"
                :messageError="error.password.message"
            />
        </div>
       </div>

       <div class="d-flex mt-5">
            <CoreBtn 
                name="Sign in" 
                background="primary" 
                borderRadius="5px" 
                width="80px"
                height="32px"
                @click="handleLogin"
            /> 
            <div class="mx-2">
                <CoreBtn 
                    name="Create Account" 
                    background="outline-primary-hover"  
                    borderRadius="5px" 
                    width="130px"
                    height="32px"
                    @click="navigateTo('/auth/register')"
                />
            </div>
       </div>
       
    </div>
</template>