// Objeto para almacenar los amigos del usuario
const friends = {};

// Función para agregar un amigo
function addFriend() {
    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const imageURL = document.getElementById('imageURL').value;
    const pets = document.getElementById('pets').value.split(',').map(pet => pet.trim());

    // Verificar que todos los campos estén completos y que el username incluya al menos un "."
    if (username.includes('.') && username.trim() !== '' && name.trim() !== '' && imageURL.trim() !== '' && pets.length > 0) {
        // Si el username ya existe en friends, actualizar la lista de mascotas para ese amigo usando un conjunto para evitar duplicados
        if (friends.hasOwnProperty(username)) {
            friends[username].pets = [...new Set([...friends[username].pets, ...pets])];
        } else {
            // Si el username no existe en friends, agregar al amigo con su nombre, imagen y lista de mascotas
            friends[username] = { name, imageURL, pets };
        }

        // Actualizar la tabla con la lista de amigos
        updateTable();
        // Resetear el formulario para borrar los campos
        document.getElementById('friendForm').reset();
    } else {
        // Mostrar una alerta si algún campo está vacío o el username no incluye al menos un "."
        alert('Por favor, complete todos los campos y asegúrese de que el username incluya al menos un "."');
    }
}

// Función para actualizar la tabla con la lista de amigos
function updateTable() {
    // Obtener el elemento de la tabla con el id "friendTable"
    const friendTable = document.getElementById('friendTable');

    // Actualizar el contenido de la tabla con una fila de encabezados para mostrar los nombres de las columnas
    friendTable.innerHTML = `
        <tr>
            <th>Username</th>
            <th>Nombre</th>
            <th>URL de la imagen</th>
            <th>Mascotas</th>
            <th>Ver Mascotas</th>
        </tr>
    `;

    // Recorrer los amigos almacenados en el objeto friends y crear una fila para cada amigo en la tabla
    for (const username in friends) {
        if (friends.hasOwnProperty(username)) {
            const { name, imageURL, pets } = friends[username];
            // Crear una fila para el amigo y agregar sus datos en las celdas correspondientes
            const friendRow = document.createElement('tr');
            friendRow.innerHTML = `
                <td>${username}</td>
                <td>${name}</td>
                <td>${imageURL}</td>
                <td>${pets.join(', ')}</td>
                <td><button onclick="showPets('${username}', '${pets.join(', ')}')">Ver Mascotas</button></td>
            `;
            // Agregar la fila completa a la tabla
            friendTable.appendChild(friendRow);
        }
    }
}

// Función para mostrar las mascotas de un amigo cuando se hace clic en el botón "Ver Mascotas"
function showPets(username, pets) {
    // Mostrar una alerta con el username del amigo y la lista de mascotas que tiene
    alert(`${username} tiene las siguientes mascotas: ${pets}`);
}
