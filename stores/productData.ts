import { defineStore } from 'pinia'

export const productDS = defineStore('books' , {

    state: () => ({
        books:[
            {
                id : 0,
                img: 'https://img.freepik.com/premium-vector/biography-story-writing-autobiography-personal-narrative-composition-author-essay-flat-table-desk_101884-2138.jpg',
                name : 'Nicolas',
                price : '$53.20',
                category : 'Biography'
                
            },
            {
                id : 1,
                img : "https://static.vecteezy.com/system/resources/thumbnails/000/208/951/small/eezy_63-01.jpg",
                name : 'Angela',
                price : '$12.20',
                category : 'Fiction'
                
            },
            {
                id : 2,
                img : "https://img.freepik.com/premium-vector/mysterious-man-spotlight-businessman-with-no-identity-noir-concept-illustration_201904-603.jpg",                name : 'Paul',
                price : '$48.35',
                category : 'Mystery'
                
            },
            {
                id : 3,
                img : "https://img.freepik.com/free-vector/black-spooky-castle-flying-dragon-canyon-with-mountains-forest-cartoon-fantasy-illustration-with-medieval-palace-with-towers-creepy-beast-with-wings-rocks-pine-trees_107791-4592.jpg",
                name : 'Micel',
                price : '$35.14',
                category : 'Fantasy'
                
            },
            {
                id : 4,
                img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWPTCapdXLflpoVwpQ0bjZb0X2CDfLk1Z2SVjQfEWLEhAKc59xWtSN-mLAF4vO-Xtq84&usqp=CAU",
                name : 'Salman',
                price : '$18.90',
                category : 'Romance'
                
            },
            {
                id : 5,
                img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/879/small_2x/sports-time-poster-with-purple-athletes-silhouettes-free-vector.jpg',
                name : 'Alexa',
                price : '$26.20',
                category : 'Historical fiction'
                
            },
            {
                id : 6,
                img : "https://static.vecteezy.com/system/resources/thumbnails/001/759/760/small/physics-supplies-and-books-vector.jpg",
                name : 'Bella',
                price : '$39.10',
                category : 'Science'
                
            },
            {
                id : 7,
                img : "https://img.freepik.com/premium-vector/web-developer-hands-using-tablet-pc-creating-program-code-development-software-programming-concept_48369-33861.jpg",
                name : 'jessy',
                price : '$66.45',
                category : 'Humor'
                
            },
            {
                id : 8,
                img : "https://static.vecteezy.com/system/resources/previews/004/689/213/non_2x/coin-hunting-in-investment-trading-free-vector.jpg",
                name : 'Sarah',
                price : '$80.20',
                category : 'Picture book'
                
            },
            {
                id : 9,
                img : "https://img.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_335657-1627.jpg",
                name : 'Andrew',
                price : '$10.65',
                category : 'Adventure fiction'
                
            },
        ]
    }) 
})