// Function to fetch product data and display it
function fetchAndDisplayProducts(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';  // Clear the container before displaying new products

            data.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                
                const productImage = document.createElement('img');
                productImage.classList.add('product-image');
                productImage.src = product.imageUrl;
                productImage.alt = product.name;
                
                const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
                
                const productName = document.createElement('h3');
                productName.textContent = product.name;

                // Create the Open Link button
                const productLink = document.createElement('a');
                productLink.target = '_blank';  // Open in a new tab
                productLink.href = product.productLink;  // This should be a URL to the product's page

                const shoppingIcon = document.createElement('i');
                shoppingIcon.classList.add('fas', 'fa-shopping-cart'); // Shopping cart icon

                productLink.appendChild(shoppingIcon);
                productInfo.appendChild(productName);
                productInfo.appendChild(productLink);
                
                productCard.appendChild(productImage);
                productCard.appendChild(productInfo);
                
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}
