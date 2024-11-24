// Fetch data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer');

        // Populate the cards with data
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.Imagen}" alt="${item.Descripcion}">
                <h3>${item.Descripcion}</h3>
                <p><strong>Codigo Productos:</strong> ${item.Codigo}</p>
                <p><strong>Codigo Barras:</strong> ${item.CodigoBarras}</p>
                <p><strong>Precio:</strong> ${item.Precio}</p>
            `;
            cardContainer.appendChild(card);
        });

        // Add search functionality
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', function() {
            const filter = searchBar.value.toLowerCase();
            const cards = cardContainer.getElementsByClassName('card');

            for (let i = 0; i < cards.length; i++) {
                const description = cards[i].getElementsByTagName('h3')[0];
                const textValue = description.textContent || description.innerText;
                cards[i].style.display = textValue.toLowerCase().includes(filter) ? '' : 'none';
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));