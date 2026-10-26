 const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const usersContainer =
      document.getElementById("usersContainer");

    const showUsernamesButton =
      document.getElementById("showUsernames");

    const usernamesList =
      document.getElementById("usernames");

    const status = document.getElementById("status");

    let fetchedUsers = [];

    // this is the Fetch user information from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then(users => {
        fetchedUsers = users;
        status.textContent = `Loaded ${users.length} users.`;

        // this is to Display each user in an individual card
        users.forEach(user => {
          const card = document.createElement("div");
          card.classList.add("user-card");

          const name = document.createElement("h2");
          name.textContent = user.name;

          const email = document.createElement("p");
          email.innerHTML = "<span class='label'>Email:</span> ";
          email.appendChild(
            document.createTextNode(user.email)
          );

          const city = document.createElement("p");
          city.innerHTML = "<span class='label'>City:</span> ";
          city.appendChild(
            document.createTextNode(user.address.city)
          );

          card.appendChild(name);
          card.appendChild(email);
          card.appendChild(city);

          usersContainer.appendChild(card);
        });
      })
      .catch(error => {
        status.textContent =
          "Unable to load users. Please try again.";
        console.error("Error:", error);
      });

    
    showUsernamesButton.addEventListener("click", () => {
      if (fetchedUsers.length === 0) {
        status.textContent =
          "Users are still loading or could not be fetched.";
        return;
      }

      usernamesList.innerHTML = "";

      fetchedUsers.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.username;
        usernamesList.appendChild(listItem);
      });

      usernamesList.hidden = false;
    });