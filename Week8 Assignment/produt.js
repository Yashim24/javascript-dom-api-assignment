// this is my Array of products
    const products = [
      { name: "Laptop", price: 250000, category: "Electronics" },
      { name: "Headphones", price: 4500, category: "Accessories" },
      { name: "School Bag", price: 7500, category: "Fashion" },
      { name: "Notebook", price: 1500, category: "Stationery" },
      { name: "Smartphone", price: 180000, category: "Electronics" },
      { name: "Water Bottle", price: 3000, category: "Home & Living" }
    ];

    const container = document.getElementById("productContainer");

    
    products.forEach(function(product) {
      let priceColour;

      
      if (product.price >= 5000) {
        priceColour = "high-price";
      } else {
        priceColour = "low-price";
      }

      
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <h2>${product.name}</h2>
        <p class="category">Category: ${product.category}</p>
        <p class="price ${priceColour}">
          Price: ₦${product.price.toLocaleString("en-NG")}
        </p>
      `;

      container.appendChild(card);
    });