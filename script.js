const heroes = [
    { 
        firstName: "Jan", 
        lastName: "Kowalski", 
        age: 30, 
        weight: 75, 
        image: "https://github.com/mplik/database/blob/main/images/1._pokemon.png?raw=true", // Przykładowe zdjęcie
        description: "Bohater, który walczy o sprawiedliwość."
    },
    { 
        firstName: "Anna", 
        lastName: "Nowak", 
        age: 25, 
        weight: 60, 
        image: "https://github.com/mplik/database/blob/main/images/2._pokemon.png?raw=true", // Przykładowe zdjęcie
        description: "Twarda i niezłomna obrończyni."
    },
    { 
        firstName: "Piotr", 
        lastName: "Zalewski", 
        age: 28, 
        weight: 80, 
        image: "https://github.com/mplik/database/blob/main/images/3._pokemon.png?raw=true", // Przykładowe zdjęcie
        description: "Mistrz sztuk walki."
    },
    { 
        firstName: "Katarzyna", 
        lastName: "Wiśniewska", 
        age: 22, 
        weight: 55, 
        image: "https://github.com/mplik/database/blob/main/images/4._pokemon.png?raw=true", // Przykładowe zdjęcie
        description: "Niezwykła strateg i lider."
    },
     { 
        firstName: "Worek", 
        lastName: "Śmiechu", 
        age: 30, 
        weight: 25, 
        image: "https://github.com/mplik/database/blob/main/images/5._pokemon.png?raw=true", // Przykładowe zdjęcie
        description: "Mistrz w kręceniu hula-hoop."
    }
];

let currentHeroIndex = 0;

function updateHero() {
    const hero = heroes[currentHeroIndex];
    document.getElementById('hero-name').innerText = `${hero.firstName} ${hero.lastName}`;
    document.getElementById('hero-age').innerText = `Wiek: ${hero.age}`;
    document.getElementById('hero-weight').innerText = `Waga: ${hero.weight} kg`;
    document.getElementById('hero-description').innerText = hero.description;
    document.getElementById('hero-image').src = hero.image; // Ustawia zdjęcie
    currentHeroIndex = (currentHeroIndex + 1) % heroes.length; // Przechodzi do następnego bohatera
}

document.getElementById('change-hero').addEventListener('click', updateHero);

// Inicjalizacja pierwszego bohatera
updateHero();