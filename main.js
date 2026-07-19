// * the main idea of javascript is
//save the data
// generate the html
// make it interactive

//  * save the data
  const products = [{
    image: './product-images/cooker.jpg',
    name: 'Electric cooker',
    priceCents: 200,
    stars:[
        {
            rating: 3,
            count: 10
        }
    ]
  },{
    image: './product-images/electric-heater.jpg',
    name: 'Electric-heater',
    priceCents: 80,
    stars:[{
        rating: 4.5,
        count: 15
    }]
  },{
    image: './product-images/electric-toaster.jpg',
    name: 'Electric portable toaster',
    priceCents: 50,
    stars:[{
        rating: 2.5,
        count: 20
    }]
  },{
    image: './product-images/family-size-fridge.jpg',
    name: 'Family size fridge',
    priceCents: 150,
    stars:[{
        rating: 3,
        count: 12
    }]
  },{
    image: './product-images/macbook-air.jpg',
    name: 'Macbook AIR',
    priceCents:1000,
    stars:[{
        rating: 3.5,
        count: 8
    }]
  },{
    image: './product-images/tv.jpg',
    name: 'Hisense LCD',
    priceCents: 250,
    stars:[{
        rating: 4,
        count: 15
    }]
  },{
    image: './product-images/washing-machine.jpg',
    name: 'Portable washing maching',
    priceCents:150,
    stars:[{
        rating: 5,
        count: 50
    }]
  },{
    image: './product-images/vacum-cleaner.jpg',
    name: 'Electric Vacum tube',
    priceCents: 300,
    stars:[{
        rating: 4.5,
        count: 80
    }]
  }];

    //* generate the html
    let productHtml = "";
    products.forEach((product)=>{
     productHtml +=  `
            <div class="product-item">
            <img src="${product.image}" alt="">
            <div class="product-name">
                <h4>
                    ${product.name}
                </h4>
            </div>
            <div class="product-price">
                $${(product.priceCents).toFixed(2)}
            </div>
            <div class="product-rating">
                <img src="./icons/star.jpg" alt="star-icon">
            </div>
            <div class="select-quantity">
                <select class= "
                js-select-quantity">
                    <option value ="0">0</option>
                    <option value = "1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                    <option value ="6">6</option>
                    <option value ="7">7</option>
                    <option value ="8">8</option>
                    <option value ="9">9</option>
                    <option value ="10">10</option>
                </select>
            </div>
            <div class="product-btn">
                <button class="js-cart-btn" 
            data-product-name =" ${product.name}">
                    Add to cart
                </button>
            </div>
        </div>
        `;

        });

    // DOM manipulation for the container grid
    document.querySelector('.js-product-container').innerHTML = productHtml;


    // get the dataset from the button 
    // loop through each of the button by adding a forloop & eventlister

    document.querySelectorAll('.js-cart-btn').forEach((button)=>{
        button.addEventListener('click', ()=>{
            const productData = button.dataset.productName;
            let matchingItem;
            cart.forEach((cartItem)=>{
                if(cartItem.productName === productName){
                    matchingItem = cart.productName
                }
            });

            if(matchingItem){
                matchingItem.quantity += 1
            }else{
                cart.push({
                    productName: productName,
                    quantity: 1
                })
            }

        });
    });
