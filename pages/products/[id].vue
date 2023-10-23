<template>
<div class="app-container ">

        <div class="mt-10">
            <div class="d-flex">
                <CoreDivider name="Book Details" width="92px" />
            </div >
        </div >

        <div class=" detail-container mt-10">
            <div class="img-container">
                <img 
                    :src="`https://bookcart.azurewebsites.net/Upload/${singleBook.coverFileName}`"  
                    alt="img" 
                />
            </div>
            <div class=" content-container ">
            <span class="app-font-size-14 app-font-weight-600 mt-2">
                    author 
            </span>
            <span class="app-font-size-14 app-font-weight-600 mt-2">
                    {{ singleBook.author }} 
            </span>
            <span class="app-font-size-14 app-color-primary py-2" >
                    category    
            </span>
            <span class="app-font-size-14 app-font-weight-600 mt-2">
                    {{ singleBook.category }} 
            </span>
            <span class="app-font-size-14 app-font-weight-800 py-2">
                $  price {{ singleBook.price }}.99
            </span>
            <span class="app-font-size-14 app-color-gray py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elite...
            </span>
                <div class="d-flex mt-5">
                    <CoreBtn 
                        name="Add to cart"
                        background="outline-primary-hover"
                        borderRadius="5px" 
                        width="125px"
                        height="32px"
                        icon="addtocart"
                    />
                    <div class="mx-2">
                        <CoreBtn 
                            name="Favorite"
                            background="outline-primary"
                            borderRadius="5px" 
                            width="100px"
                            height="32px"
                            icon="favorite"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div class="d-flex">
                <CoreDivider name="Similar Books" width="101px" />
            </div>
            <SuggestSlider 
              :dataSource="categorySuggest"
            />
        </div>

</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { productDS } from '@/stores/productData'
const { data: response } = await useFetch('/api/products/books')


const productsDSModule = productDS()
const Route = useRoute()

const singleBook = computed(() => {
    return productsDSModule.singleBook
})

const categorySuggest = computed(() => {
    return productsDSModule.categorySuggest
}) 

onMounted(async () => {
    productsDSModule.books = response.value
    await productsDSModule.SingleProduct(Route.params.id)
    productsDSModule.FilterByCategoryForSuggest(singleBook.value.category)
})

</script>


<style lang="scss" scoped>
.detail-container{
     width:100%;
     display:flex;
    .img-container{
        width:40%;
        overflow: hidden;
        img{
            width:100%;
            height: 300px;
            border-radius: 10px;
        }
    }
    .content-container{
        display: flex;
        flex-direction: column;
        width:60%;
        padding: 0 15px;
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
        width:100%;
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
        }
    }
}
</style>