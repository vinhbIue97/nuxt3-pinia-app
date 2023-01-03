import { defineStore } from 'pinia'
import products from '@/data/products.json'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProductsStore = defineStore('ProductStore', {
  state: () => ({ 
    products: [ 
      {
          "name": "Product 1",
          "price" : 12
      },
      {
          "name": "Product 2",
          "price" : 19
      },
      {
          "name": "Product 3",
          "price" : 4
      },
      {
          "name": "Product 4",
          "price" : 9
      }
  ]
  }),
    actions: {
      addNewProduct(product) {
        const nextIndex = this.products.length + 1;
        this.products.push({
          "name": "Product " + nextIndex,
          "price": Math.random()*10
        })
      }
    }
  })
