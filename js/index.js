// main.js

// URL de la API
const apiUrl = 'https://api.escuelajs.co/api/v1/users';

// Función para obtener los datos de la API
async function getUsers() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
}
// Función para mostrar la lista de usuarios en la página
async function displayUsers() {
    const userList = document.getElementById('user-list');
    const users = await getUsers();

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <div class="media">
                <img src="${user.avatar}" alt="${user.name}" class="mr-3 rounded-circle" width="64">
                <div class="media-body">
                    <h5 class="mt-0">${user.name}</h5>
                    <p>Email: ${user.email}</p>
                    <p>Password: ${user.password}</p>
                </div>
            </div>
        `;
        userList.appendChild(listItem);
    });
}

// Llama a la función para mostrar los usuarios
displayUsers();
