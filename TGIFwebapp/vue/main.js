Vue.component('product',{
    template: `
    <div class="product">

            <div class="product-image float-left">

                <img v-bind:src="image" width="200">

            </div>

            <div class="product-info float-left">

                <h1>{{ title }}</h1>
                
                <p v-if="inStock">In Stock</p>
                
                <p v-else>Out of Stock</p>
                
                <ul>
                    
                   <li v-for="detail in details">{{ detail }}</li> 
                    
                </ul>
                
                <ul>
                    
                    <li v-for="size in sizes">{{ size }}</li>
                    
                </ul>
                
                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" 
                :style="{backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">
                    
                </div>
                
                <button v-on:click="addToCart" :disabled="! inStock"
                :class="{ disabledButton: !inStock }">Add to Cart</button>
                
                <button v-on:click="deleteToCart" :disabled="! inStock"
                :class="{ disabledButton: !inStock }">Delete to Cart</button>
                
                <div class="cart">Cart({{cart}})</div>
                
                <a v-bind:href="link" target="_blank">More products like this</a>

            </div>

        </div>
` ,
    
    data() {
        return
        {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "socks.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "blue.jpg",
                    variantQuantity: 0
                }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            cart: 0
        }
    },
    methods: {
        
        addToCart: function (){
            this.cart += 1
        },
        deleteToCart: function(){
            this.cart -= 1
        },
        updateProduct: function (index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title(){
            return this.brand + ' '+this.product
        },
        image(){
           return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
    
})

var app = new Vue({
    
    el: '#app'
    
})
