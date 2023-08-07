function addFriend() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const imageURL = document.getElementById('imageURL').value;
    const pets = document.getElementById('pets').value.split(',').map(pet => pet.trim());

    if (username.includes('.') && username.trim() !== '' && name.trim() !== '' && imageURL.trim() !== '' && pets.length > 0) {
        const friendRow = document.createElement('tr');
        friendRow.innerHTML = `
            <td>${username}</td>
            <td>${name}</td>
            <td>${imageURL}</td>
            <td>${pets.join(', ')}</td>
            <td><button onclick="showPets('${username}', '${pets.join(', ')}')">Ver Mascotas</button></td>
        `;
        document.getElementById('friendTable').appendChild(friendRow);

        document.getElementById('friendForm').reset();
    } else {
        alert('Por favor, complete todos los campos y asegúrese de que el username incluya al menos un "."');
    }
}

function showPets(username, pets) {
    alert(`${username} tiene las siguientes mascotas: ${pets}`);
}