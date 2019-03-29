Vue.component('product', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

            <div class="product-image float-left">

                <img v-bind:src="image" width="200">

            </div>

            <div class="product-info float-left">

                <h1>{{ product }}</h1>
                
                <p v-if="inStock">In Stock</p>
                
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                
                <ul>
                    
                   <li v-for="detail in details">{{ detail }}</li> 
                    
                </ul>
                
                <ul>
                    
                    <li v-for="size in sizes">{{ size }}</li>
                    
                </ul>
                
                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" 
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)">
                    
                </div>
                
                <button v-on:click="addToCart" :disabled="! inStock"
                :class="{ disabledButton: !inStock }">Add to Cart</button>
                
                <button v-on:click="deleteToCart" :disabled="! inStock"
                :class="{ disabledButton: !inStock }">Delete to Cart</button>
                
                <a v-bind:href="link" target="_blank">More products like this</a>

            </div>

            <product-review @review-subtited="addReview"></product-review>

        </div>
` ,
    
    data() {
        return {
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
            reviews: []
        }
    },
    methods: {
        
        addToCart: function (){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        deleteToCart: function(){
            this.$emit('delete-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function (index){
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview){
            this.reviews.push(productReview)
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
        },
        shipping(){
            if(this.premium){
                return "Free"
            }
            return 2.99
        }
    }
    
})

Vue.component('product-review', {
    template: `
        <from class="review-form" @submit.prevent="onSubmit">

        <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        </p>

        <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>
        </p>

        <p>
        <input type="submit" value="Submit">
        </p>
        </from>
`,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
        }
    }
})

var app = new Vue({
    
    el: '#app',
    data: {
        premium: false,
        cart: []
},
    methods: {
        updateCart (id) {
            this.cart.push(id)
        },
        deleteCart (id) {
            for(var i = this.cart.length - 1; i > -1; i--) {
            if (this.cart[i] === id) {
               this.cart.splice(i, 1);
            }
          }
        }
    }
    
})

