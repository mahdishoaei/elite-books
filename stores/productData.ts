import { defineStore } from 'pinia'
import { IBooks, ISearch } from '../services/interfaces'
import { singleProduct } from '@/client/api/singleProductApi'

export const productDS = defineStore('books' , {

    state: () => ({
        books:[] as IBooks[],
        search: [] as ISearch[],
        singleBook: {},
        productsLoading: false,
        searchLoading: false,
        emptystatus: true,
    }),

    actions: {
        FilterByCategory(categoryName: string) {
            this.productsLoading = true
            const proxyParser = JSON.stringify(this.books)
            const parseToArray = JSON.parse(proxyParser)
            const result = parseToArray.filter((book: any) => {
                return book.category === categoryName
            })
            setTimeout(() => {
                this.productsLoading = false
                this.books = result
            }, 1500)
        },
        SearchInBooks(bookName: string) {
            this.searchLoading = true
            this.emptystatus = false
            const proxyParser = JSON.stringify(this.books)
            const parseToArray = JSON.parse(proxyParser)
            const result = parseToArray.filter((book: any) => {
                return book.title.match(bookName)
            })
            setTimeout(() => {
                this.search = result
                if(this.search.length === 0) {
                    this.searchLoading = false
                    this.emptystatus = true
                } else {
                    this.searchLoading = false
                    this.emptystatus = false
                }
               
            }, 1500)
        },
       async SingleProduct(id : number){
          const response = await singleProduct(id)
          this.singleBook = response
        }
    }
    
})