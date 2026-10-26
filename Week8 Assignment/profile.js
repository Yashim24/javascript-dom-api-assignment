 // this is my profile information stored in an object
        const person = {
            name: "Bagwam Emmanuel Peter",
            age: 28,
            favouriteLanguage: "Python",
            country: "Nigeria"
        };

        
        const profileHTML = `
            <div class="profile-card">
                <h2>${person.name}</h2>
                <p>Age: ${person.age}</p>
                <p>Favourite Programming Language: ${person.favouriteLanguage}</p>
                <p>Country: ${person.country}</p>
            </div>
        `;

        // Display the profile card on the webpage
        document.getElementById("profile").innerHTML = profileHTML;