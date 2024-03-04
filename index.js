document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch JSON data from file
    async function fetchCardsData() {
        try {
            const response = await fetch('cards.json');
            if (!response.ok) {
                throw new Error('Failed to fetch cards data');
            }
            const data = await response.json();
            generateCards(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Function to generate cards dynamically
    function generateCards(cardsData) {
        const container = document.querySelector('.container');

        cardsData.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');

            const imageElement = document.createElement('img');
            imageElement.src = card.image;
            imageElement.alt = card.title;
            cardElement.appendChild(imageElement);

            const titleElement = document.createElement('h2');
            titleElement.textContent = card.title;
            cardElement.appendChild(titleElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = card.description;
            cardElement.appendChild(descriptionElement);

            // Make card clickable to open link in new tab
            cardElement.addEventListener('click', function() {
                window.open(card.link, '_blank');
            });

            container.appendChild(cardElement);
        });
    }

    // Call the function to fetch JSON data and generate cards
    fetchCardsData();
});
