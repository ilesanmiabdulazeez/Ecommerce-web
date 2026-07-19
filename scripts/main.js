

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
            data-product-id =" ${product.id}">
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
            const productData = button.dataset.productId;
            let matchingItem;
            cart.forEach((cartItem)=>{
                if(cartItem.productId === productId){
                    matchingItem = cart.productId
                }
            });

            if(matchingItem){
                matchingItem.quantity += 1
            }else{
                cart.push({
                    productId: productId,
                    quantity: 1
                })
            }

        });
    });
