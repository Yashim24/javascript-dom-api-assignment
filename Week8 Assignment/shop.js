 //six supermarket items
        const items = [
            "Rice",
            "Bread",
            "Milk",
            "Eggs",
            "Apples",
            "Sugar"
        ];

    
        const shoppingList = document.getElementById("shoppingList");

    
        for (let i = 0; i < items.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = items[i];
            shoppingList.appendChild(listItem);
        }

        
        const totalButton = document.getElementById("totalButton");
        const result = document.getElementById("result");

        
        totalButton.addEventListener("click", function () {
            result.textContent = "Total Items: " + items.length;
        });