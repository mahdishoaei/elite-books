import { defineStore } from 'pinia'

export const productDS = defineStore('books' , {

    state: () => ({
        books:[],
        search: [],
        loading: false
    }),

    actions: {
        FilterByCategory(categoryName: string) {
            this.loading = true
            const proxyParser = JSON.stringify(this.books)
            const parseToArray = JSON.parse(proxyParser)
            const result = parseToArray.filter((book: any) => {
                return book.category === categoryName
            })
            setTimeout(() => {
                this.loading = false
                this.books = result
            }, 1500)
        }
    }
    
})