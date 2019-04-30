var app = new Vue({
    el: '#app',
    data: {
        productOne: 'Caramel Hoodie',
        imageOne: './assets/Hoodie1(Caramel).jpg',
        inventoryOne: 25,
        detailsOne: ['Very comfortable hoodie.'],
        variantsOne: [
         
            {
                variantId: 1,
                variantColor: "caramel",
                variantImage: './assets/Hoodie1(Caramel).jpg'
            }
        ],
        
        productTwo: 'Khaki Hoodie',
        imageTwo: './assets/Hoodie1(Khaki).jpg',
        inventoryTwo: 25,
        detailsTwo: ['Very comfortable hoodie.'],
        variantsTwo: [
         
            {
                variantId: 2,
                variantColor: "khaki",
                variantImage: './assets/Hoodie1(Khaki).jpg'
            }
        ],
        
        productThree: 'Stone Hoodie',
        imageThree: './assets/Hoodie2(Stone).jpg',
        inventoryThree: 25,
        detailsThree: ['Very comfortable hoodie.'],
        variantsThree: [
         
            {
                variantId: 3,
                variantColor: "stone",
                variantImage: './assets/Hoodie2(Stone).jpg'
            }
        ],
        productFour: 'White Hoodie',
        imageFour: './assets/Hoodie2(White).jpg',
        inventoryFour: 25,
        detailsFour: ['Very comfortable hoodie.'],
        variantsFour: [
         
            {
                variantId: 4,
                variantColor: "white",
                variantImage: './assets/Hoodie2(White).jpg'
            }
        ],
        productFive: 'Black Hoodie',
        imageFive: './assets/Hoodie3.jpg',
        inventoryFive: 25,
        detailsFive: ['Very comfortable hoodie.'],
        variantsFive: [
         
            {
                variantId: 5,
                variantColor: "black",
                variantImage: './assets/Hoodie3.jpg'
            }
        ],
        productSix: 'Blue Jeans',
        imageSix: './assets/Jeans1.jpg',
        inventorySix: 25,
        detailsSix: ['Slick Jeans.'],
        variantsSix: [
         
            {
                variantId: 6,
                variantColor: "blue",
                variantImage: './assets/Jeans1.jpg'
            }
        ],
        
        productSeven: 'Black Jeans',
        imageSeven: './assets/Jeans2.jpg',
        inventorySeven: 25,
        detailsSeven: ['Slick Jeans.'],
        variantsSeven: [
         
            {
                variantId: 7,
                variantColor: "black",
                variantImage: './assets/Jeans2.jpg'
            }
        ],
        
        productEight: 'Dark Blue Jeans',
        imageEight: './assets/Jeans3.jpg',
        inventoryEight: 25,
        detailsEight: ['Slick Jeans.'],
        variantsEight: [
         
            {
                variantId: 8,
                variantColor: "dark blue",
                variantImage: './assets/Jeans3.jpg'
            }
        ],
        
        productNine: 'Light Blue Jeans',
        imageNine: './assets/Jeans4.jpg',
        inventoryNine: 25,
        detailsNine: ['Slick Jeans.'],
        variantsNine: [
         
            {
                variantId: 9,
                variantColor: "light blue",
                variantImage: './assets/Jeans4.jpg'
            }
        ],
        
        productTen: 'Dark Blue Jeans',
        imageTen: './assets/Jeans5.jpg',
        inventoryTen: 25,
        detailsTen: ['Slick Jeans.'],
        variantsTen: [
         
            {
                variantId: 10,
                variantColor: "Dark blue",
                variantImage: './assets/Jeans5.jpg'
            }
        ]
    },
    method: {
        addToCart: function(){
            this.cart += 1
        },
    }
    })
    
   /*`,
    data() {
      return {
          products: [
              {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'yellow',
              variantImage: './assets/Hoodie 1(Caramel).jpg',
              variantQuantity: 15
            },
            {
              variantId: 2,
              color: 'green',
              variantImage: './assets/Hoodie 1(Khaki).jpg',
              variantQuantity: 15
            },
          ]
        },
          {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'yellow',
              variantImage: './assets/Hoodie 2(stone).jpg',
              variantQuantity: 15
            },
            {
              variantId: 2,
              color: 'white',
              variantImage: './assets/Hoodie 2(white).jpg',
              variantQuantity: 15
            },
          ]
        },
            {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'black',
              variantImage: './assets/Hoodie3.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'white',
              variantImage: './assets/Hoodie4.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'green',
              variantImage: './assets/Hoodie5.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans1.jpg',
              variantQuantity: 10
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'black',
              variantImage: './assets/Jeans2.jpg',
              variantQuantity: 15
            },
          ]
        },
              {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans3.jpg',
              variantQuantity: 15
            },
          ]
        },
               {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans4.jpg',
              variantQuantity: 15
            },
          ]
        },
               {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans5.jpg',
              variantQuantity: 15
            },
          ]
        },
              ]
      }
    },
        methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {  
            this.selectedVariant = index
        },
        addReview(productReview) {
          this.reviews.push(productReview)
        }
      },
      computed: {
          title() {
              return this.brand + ' ' + this.product  
          },
          image(){
              return this.variants[this.selectedVariant].variantImage
          },
          inStock(){
              return this.variants[this.selectedVariant].variantQuantity
          },
          shipping() {
            if (this.premium) {
              return "Free"
            }
              return 2.99
          }
      }
  })


 Vue.component('productDetails', {
  props: ['prodIndex'],
  template: `
    <div class="productDetails">
      <div class="product-name">
        <h1>{{products[prodIndex].model}}</h1>
      </div>  
      <div class="product-image">
        <img :src="getImage(prodIndex)" />
      </div>

      <div class="product-info">

      <div class="color-box"
        v-for="(variant, index) in products[prodIndex].variants" 
        :key="variant.variantId"
        :style="{ backgroundColor: variant.color }"
        @mouseover="updateProduct(index)"
      >

      </div>
      <div class="price">
      <p>{{products[prodIndex].price}}</p>
      </div>
      <div class="description">
        <p>{{products[prodIndex].description}}</p>
      </div>

      <button v-on:click="addToCart(prodIndex)" 
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        >
      Add to cart
      </button>

      </div>
    </div>
  `,
    d data() {
      return {
          products: [
              {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'yellow',
              variantImage: './assets/Hoodie 1(Caramel).jpg',
              variantQuantity: 15
            },
            {
              variantId: 2,
              color: 'green',
              variantImage: './assets/Hoodie 1(Khaki).jpg',
              variantQuantity: 15
            },
          ]
        },
          {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'yellow',
              variantImage: './assets/Hoodie 2(stone).jpg',
              variantQuantity: 15
            },
            {
              variantId: 2,
              color: 'white',
              variantImage: './assets/Hoodie 2(white).jpg',
              variantQuantity: 15
            },
          ]
        },
            {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'black',
              variantImage: './assets/Hoodie3.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'white',
              variantImage: './assets/Hoodie4.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Hoodies',
          productId: 1,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'green',
              variantImage: './assets/Hoodie5.jpg',
              variantQuantity: 15
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans1.jpg',
              variantQuantity: 10
            },
          ]
        },
        {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'black',
              variantImage: './assets/Jeans2.jpg',
              variantQuantity: 15
            },
          ]
        },
              {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans3.jpg',
              variantQuantity: 15
            },
          ]
        },
               {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans4.jpg',
              variantQuantity: 15
            },
          ]
        },
               {
          brand: 'Sweet Stuff',
          product: 'Jeans',
          productId: 2,
          selectedVariant: 0,  
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/Jeans5.jpg',
              variantQuantity: 15
            },
          ]
        },
              ]
      }
    },
                methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {  
            this.selectedVariant = index
        },
        addReview(productReview) {
          this.reviews.push(productReview)
        }
      },
      computed: {
          title() {
              return this.brand + ' ' + this.product  
          },
          image(){
              return this.variants[this.selectedVariant].variantImage
          },
          inStock(){
              return this.variants[this.selectedVariant].variantQuantity
          },
          shipping() {
            if (this.premium) {
              return "Free"
            }
              return 2.99
          }
      }
  })
  
  var app = new Vue({
      el: '#app',
      data: {
        premium: true,
        cart: []
      },
      methods: {
        updateCart(id) {
          this.cart.push(id)
        }
      }
  })
  function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(function() {
  function updateTotals(){
    var length = $('[data-cart] [data-cart-item]:not(.template)').length;
    $('[data-cart-item-count]').html(length);
  }
  
  $('[data-cart-toggle]').on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    
    $('[data-cart]').toggleClass('expanded');
  });
  
  $('[data-cart-products]').on('click', '[data-cart-add]', function(e){
    e.preventDefault();
    e.stopPropagation();
    
    var $button = $(this);
    var $template = $('.template[data-cart-item]').clone();
    var $cart = $('[data-cart]');
    
    var $itemImg = $button.closest('[data-cart-product]').find('[data-image]');
    var $itemImgClone = $itemImg.clone();
    
    if( $cart.hasClass('expanded') ){
    
      $itemImgClone
          .offset({ top: $itemImg.offset().top, left: $itemImg.offset().left })
          .css({ position: 'absolute', width: $itemImg.width(), height: $itemImg.height(), opacity: 0.75 })
          .appendTo($('body'))
          .animate({ width: $itemImg.width() / 2, height: $itemImg.height() / 2, left: $cart.offset().left - ($itemImg.width() / 2), top: $cart.offset().top, opacity: 0 }, function(){
            $itemImgClone.remove();
          }); 
      
    } else {
      
      setTimeout( function(){
        
        $itemImgClone
          .offset({ top: $itemImg.offset().top, left: $itemImg.offset().left })
          .css({ position: 'absolute', width: $itemImg.width(), height: $itemImg.height(), opacity: 0.75 })
          .appendTo($('body'))
          .animate({ width: $itemImg.width() / 2, height: $itemImg.height() / 2, left: $cart.offset().left - ($itemImg.width() / 2), top: $cart.offset().top, opacity: 0 }, function(){
            $itemImgClone.remove();
          }); 
        
      },200);
      
      
    }
    
    $template.find('[data-cart-name]').html( $button.data('cart-name') );
    $template.find('[data-cart-price]').html( $button.data('cart-price') );
    
    $template.find('[data-cart-thumb]').attr('src', $button.data('cart-thumb') );
    
    $template.removeClass('template').addClass('toggling');
    
    $('[data-cart-items-container]').prepend($template);
    
    if( !$cart.hasClass('expanded')){
      $cart.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
        $template.removeClass('toggling');
      });
      $cart.addClass('expanded');
    } else {
      setTimeout( function(){
        $template.removeClass('toggling');
      }, 1); 
    }
    
    updateTotals();
    
    console.log($template);
  });
  
  $('[data-cart]').on('click', '[data-cart-remove]', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $button = $(this);
    var $cartItem = $(this).closest('[data-cart-item]');
    $cartItem.addClass('removing');

    $cartItem.one('transitionend webkitTransitionEnd oTransitionEnd', function(){
      $cartItem.remove();
      updateTotals();
    });
    
    $cartItem.addClass('toggling');
  });
    
    const apiKey = pk.eyJ1IjoiazAwMjMwNzY1IiwiYSI6ImNqdXR1eml1YTBiMnc0NXJrejBkcXdieTYifQ.Qlukvv548dWX0EGgFpzEMQ;
    
    let url = 'https://api.mapbox.com/{endpoint}?access_token={apiKey}'
});
*/