const friends = {};

function addFriend() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const imageURL = document.getElementById('imageURL').value;
    const pets = document.getElementById('pets').value.split(',').map(pet => pet.trim());

    if (username.includes('.') && username.trim() !== '' && name.trim() !== '' && imageURL.trim() !== '' && pets.length > 0) {
        if (friends.hasOwnProperty(username)) {
            friends[username].pets = [...new Set([...friends[username].pets, ...pets])];
            console.log(username)
            console.log(friends[username])
        } else {
            friends[username] = { name, imageURL, pets };
            console.log(username)
            console.log(friends[username])
        }

        updateTable();
        document.getElementById('friendForm').reset(); // <= comentar para hacer las pruebas. 
    } else {
        alert('Por favor, complete todos los campos y asegúrese de que el username incluya al menos un "."');
    }
}

function updateTable() {
    const friendTable = document.getElementById('friendTable');
    friendTable.innerHTML = `
        <tr>
            <th>Username</th>
            <th>Nombre</th>
            <th>URL de la imagen</th>
            <th>Ver Mascotas</th>
        </tr>
    `;

    for (const username in friends) {
        if (friends.hasOwnProperty(username)) {
            const { name, imageURL, pets } = friends[username];
            const friendRow = document.createElement('tr');
            friendRow.innerHTML = `
                <td>${username}</td>
                <td>${name}</td>
                <td> <a href="${imageURL}">Imagen</a></td>
                <td><button onclick="showPets('${username}', '${pets.join(', ')}')">Ver Mascotas</button></td>
            `;
            friendTable.appendChild(friendRow);
        }
    }
}

function showPets(username, pets) {
    alert(`${username} tiene las siguientes mascotas: ${pets}`);
}