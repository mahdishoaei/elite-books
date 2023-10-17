<template>
<div class="app-container ">

        <div class="mt-10">
            <div class="d-flex justify-center">
            <CoreDivider name="Book Details" width="92px" />
            </div >
        </div >

           <div class=" detail-container mt-10">
              <div class="img-container">
                <img 
                  src="https://bookcart.azurewebsites.net/Upload/9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg" 
                  alt="img" 
                />
              </div>
              <div class=" content-container ">
                <span class="app-font-size-14 app-font-weight-600 mt-2">
                     author 
                </span>
                <span class="app-font-size-14 app-color-primary py-2" >
                     category 
                </span>
                <span class="app-font-size-14 app-font-weight-800 py-2">
                    $  price .99
                </span>
                <span class="app-font-size-14 app-color-gray py-2">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elite...
                </span>
                <div class="d-flex buttons ">
                    <div class="add-to-cart">
                        <CoreBtn 
                            name="Add to cart"
                            background="outline-primary-hover"
                            borderRadius="5px" 
                            width="130px"
                            height="32px"
                            icon="addtocart"
                        />
                    </div>
                    <div class=" favorite">
                        <CoreBtn 
                            name="Favorite"
                            background="outline-primary"
                            borderRadius="5px" 
                            width="130px"
                            height="32px"
                            icon="favorite"
                        />
                    </div>
                </div>
              </div>
           </div>

        <div class="mt-10">
            <div class="d-flex justify-center">
            <CoreDivider name="Similar Books" width="101px" />
            </div>
            <SuggestSlider />
        </div>

</div>
</template>

<script setup>

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
.detail-container{
     margin: auto;
     width:70%;
     height:250px;
     display:flex;
    .img-container{
        width:40%;
        overflow: hidden;
        
    img{
        width:75%;
        min-width: 150px;
        min-height: 240px;
    }
    }
    .content-container{
        display: flex;
        flex-direction: column;
        width:60%;
        overflow:hidden;
        .buttons{
            .favorite{
                margin-left: 10px;
                
            }
        }

    }

}
@media(max-width: 800px){
    .detail-container{
     margin: auto;
     width:80%;
     height:auto;
     display:flex;
     flex-direction: column;
    

     .img-container{
        width:100%;
        overflow: hidden;
        

    img{
        width:100%;
        max-height: 300px;
        
    }
    }
    .content-container{
        display: flex;
        flex-direction: column;
        width:100%;
        .buttons{
            .favorite{
                margin-left:4px;
                
            }
        }
       
    }

}

}
@media(max-width: 392px){
        .buttons{
            display: flex;
            flex-direction: column;
            .favorite{
                margin:10px 0;
                background-color: aqua;

                
            }
            .add-to-cart{
                margin:0 4px;
                background-color: aqua;

                
            }
        }
       
    }

</style>