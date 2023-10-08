<template>
    <div class="auth-layout-container">
       <div class="img-container">
            <img 
                src="https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/10044334/shutterstock_1718964076.jpg" 
                alt="img"
            >
       </div>
       <div class="router-container app-container d-flex flex-column justify-center">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.auth-layout-container{
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    .img-container{
        width: 50%;
        height: 100vh;
        img{
            width: 100%;
            height: 100vh;
            border-radius: 0 200px 200px 0;
        }
    }
    .router-container{
        width: 50%;
        height: 100vh;
    }
}

@media (max-width: 900px) {
    .auth-layout-container{
        .img-container{
            display: none;
        }
        .router-container{
            width: 100%;
        }
    }
}
</style>