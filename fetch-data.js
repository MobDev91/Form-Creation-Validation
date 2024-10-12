

document.addEventListener("DOMContentLoaded", async function() {

async function fetchUserData(){
    const apiUrl ="https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement("ul");
        users.forEach(user => {
            let element = document.createElement("li");
            element.textContent = user.name;
            userList.appendChild(element);
        });

        dataContainer.appendChild(userList);
    }

    catch(error){
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

fetchUserData();
});
