let url = "https://6724b5b4c39fedae05b2723c.mockapi.io/api/luiza/clientes";
const list = document.getElementById('list');


fetch(url)
    .then(response => response.json())
    .then(myArray => {
        console.log(myArray)
        for (let animal of myArray) {
            let newItem = document.createElement('li');
            newItem.innerHTML = `ID: ${animal.id}   Nome: ${animal.name}   Idade ${animal.age}   Raça: ${animal.breed}  `;
            list.appendChild(newItem);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

    function adicionar() {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": 'Totó',
                "age": 10,
                "breed": 'dog'
            })
        })
        .then(response => response.json())
        .then(newAnimal => {
            // Display the new item immediately after adding it
            let newItem = document.createElement('li');
            newItem.innerHTML = `ID: ${newAnimal.id}   Nome: ${newAnimal.name}   Idade: ${newAnimal.age}   Raça: ${newAnimal.breed}`;
            list.appendChild(newItem);
        })
        .catch(error => console.error('Error adding new data:', error));
    }