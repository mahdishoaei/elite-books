<script setup>
import { validaRequired, validEmail } from '@/utils/validate'

const form = ref({
    email: '',
    name: '',
    message: ''
})

const error = ref({
    email: {
        status: false , 
        message: ''
    },
    name: {
        status: false , 
        message: ''
    },
    message: {
        status: false , 
        message: ''
    }
})

const handleMessage = () => {
    let AccessToLogin = true
    if(!validaRequired(form.value.name)){
        AccessToLogin = false
        error.value.name.status = true
        error.value.name.message = 'Name  can not be empty'
    } else {
        AccessToLogin = true
        error.value.name.status = false
        error.value.name.message = ''
    }
    if(!validEmail(form.value.email)){
        AccessToLogin = false
        error.value.email.status = true
        error.value.email.message = 'Email address is incorrect'
    } else {
        AccessToLogin = true
        error.value.email.status = false
        error.value.email.message = ''
    }
}
</script>
<template>
    <div class="app-container pt-10 __application_animation">
        <div class="contact-container">
          <div class="text-container d-flex flex-column justify-center align-center px-2 mt-10">
            <span class="app-font-size-16 app-color-primary">
              Contact To Elite Book
            </span>
             <span class="app-font-size-14 pt-2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente, id ex molestiae eos quibusdam veritatis ducimus, molestias, voluptatibus modi porro natus laboriosam asperiores dolores consequuntur possimus fuga aliquam vitae?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sapiente, id ex molestiae eos quibusdam veritatis ducimus, molestias, voluptatibus modi porro natus laboriosam asperiores dolores consequuntur possimus fuga aliquam vitae?
             </span>
             <div class="d-flex mt-2">
               <div>
                <BootstrapIconPhoneFill />
               </div>
               <span class="app-font-size-14 px-2">
                +58 9663 456
               </span>
             </div>
             <div class="d-flex mt-2">
               <div>
                <BootstrapIconGeoAltFill />
               </div>
               <span class="app-font-size-14 px-2">
                 USA - Neveda
               </span>
             </div>
             <div class="d-flex mt-2">
               <div>
                <BootstrapIconInstagram />
               </div>
               <div class="mx-2">
                <BootstrapIconYoutube />
               </div>
               <div>
                <BootstrapIconTwitter />
               </div>
               <div class="mx-2">
                <BootstrapIconLinkedin />
               </div>
               <div>
                <BootstrapIconDiscord />
               </div>
             </div>
          </div>
          <div class="form-container d-flex flex-column px-2 mt-10">
            <span class="app-font-size-16 app-color-primary py-3">
             Send Message To Elite Book
            </span>
            <div class="w-100">
                <CoreInput
                    label="Type you name"
                    v-model="form.name"
                    :error="error.name.status"
                    :messageError="error.name.message"
                />
            </div>
            <div class="w-100 mt-2">
                <CoreInput
                    label="Type your email"
                    v-model="form.email"
                    :error="error.email.status"
                    :messageError="error.email.message"
                />
            </div>
            <div class="w-100 mt-2">
                <v-textarea 
                    clearable 
                    label="Type your message for elite books" 
                    variant="underlined"
                ></v-textarea>
            </div>
            <CoreBtn 
                name="Submit" 
                background="primary" 
                borderRadius="5px" 
                width="80px"
                height="32px"
                @click="handleMessage"
            /> 
          </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.contact-container{
    width: 100%;
    display: flex;
    .text-container{
        width: 50%;
    }
    .form-container{
       width: 50%;
    }
}

@media (max-width: 900px) {
    .contact-container{
        flex-direction: column;
        .text-container{
            width: 100%;
        }
        .form-container{
            width: 100%;
        }
    }
}
</style>