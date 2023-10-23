<template>
    <v-sheet
        style="background: none;"
    >
        <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
        >
            <v-slide-group-item
                v-for="item in items"
                :key="item.id"
            >
            <v-tooltip :text="item.name">
                <template v-slot:activator="{ props }">
                    <img 
                        v-bind="props"
                        :src="item.img"
                        alt="img"
                        @click="navigateTo(`/products/category/${item.name}`)"
                    />
                </template>
              </v-tooltip>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script setup>
const model = ref(null)

const items = ref([
    {
        id : 0,
        name : "Biography",
        img: 'https://img.freepik.com/premium-vector/biography-story-writing-autobiography-personal-narrative-composition-author-essay-flat-table-desk_101884-2138.jpg',
    },
    {
        id : 1,
        name : "Fiction",
        img : "https://static.vecteezy.com/system/resources/thumbnails/000/208/951/small/eezy_63-01.jpg"
    },
    {
        id : 2,
        name : "Mystery",
        img : "https://img.freepik.com/premium-vector/mysterious-man-spotlight-businessman-with-no-identity-noir-concept-illustration_201904-603.jpg",
    },
    {
        id : 3,
        name : "Fantasy",
        img : "https://img.freepik.com/free-vector/black-spooky-castle-flying-dragon-canyon-with-mountains-forest-cartoon-fantasy-illustration-with-medieval-palace-with-towers-creepy-beast-with-wings-rocks-pine-trees_107791-4592.jpg",
    },
    {
        id : 4,
        name : "Romance",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWPTCapdXLflpoVwpQ0bjZb0X2CDfLk1Z2SVjQfEWLEhAKc59xWtSN-mLAF4vO-Xtq84&usqp=CAU",
    },
    {
        id : 5,
        name : "Coming Soon...",
        img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/879/small_2x/sports-time-poster-with-purple-athletes-silhouettes-free-vector.jpg',
    },
    {
        id : 6,
        name : "Coming Soon...",
        img : "https://static.vecteezy.com/system/resources/thumbnails/001/759/760/small/physics-supplies-and-books-vector.jpg",
    },
    {
        id : 7,
        name : "Coming Soon...",
        img : "https://img.freepik.com/premium-vector/web-developer-hands-using-tablet-pc-creating-program-code-development-software-programming-concept_48369-33861.jpg",
    },
    {
        id : 8,
        name : "Coming Soon...",
        img : "https://static.vecteezy.com/system/resources/previews/004/689/213/non_2x/coin-hunting-in-investment-trading-free-vector.jpg",
    },
    {
        id : 9,
        name : "Coming Soon...",
        img : "https://img.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_335657-1627.jpg",
    },
])
</script>

<style lang="scss" scoped>
img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 20px;
    cursor: pointer;
    border: 4px solid #fd7403;
}
</style>