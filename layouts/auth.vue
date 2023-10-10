<template>
    <div class="auth-layout-container">
       <div class="img-container">
           <div class="glass">
                <div class="router-container app-container d-flex flex-column justify-center app-bg-white">
                    <slot />
                </div>
            </div>
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
        width: 100%;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/06/10044334/shutterstock_1718964076.jpg');
        .glass{
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(54, 54, 54, 0.45);
            backdrop-filter: blur( 8px );
            -webkit-backdrop-filter: blur( 8px );
            .router-container{
                width: 360px;
                padding: 20px 20px;
                border-radius: 15px;
            }
        }
    }
}
</style>