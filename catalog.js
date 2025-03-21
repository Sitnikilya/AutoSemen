// catalog.js
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.querySelector(".filter-button");
    const carGrid = document.getElementById("carGrid");

    // Данные автомобилей
    const carsData = [
        {
            brand: "audi",
            model: "Audi A3 35 TFSI, 2021",
            mileage: "37 000 км",
            price: "1 000 000 руб.",
            year: 2021,
            image: "images/audi_a3/audi_a3_1.jpg"
        },
        {
            brand: "bmw",
            model: "BMW X5 xDrive40i, 2020",
            mileage: "45 000 км",
            price: "3 500 000 руб.",
            year: 2020,
            image: "images/bmw_x5/bmw_x5_1.jpg"
        },
        {
            brand: "hyundai",
            model: "Hyundai Elantra LUX Premium Edition, 2021",
            mileage: "29 000 км",
            price: "1 200 000 руб.",
            year: 2021,
            image: "images/h_elantra/H_Elantra_1.jpg"
        }
    ];

    // Функция для отображения автомобилей
    function displayCars(cars) {
        carGrid.innerHTML = ""; // Очищаем сетку
        cars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.model}">
                <div class="car-info">
                    <h3>${car.model}</h3>
                    <p>Пробег: ${car.mileage}</p>
                    <p>Цена: <span class="price">${car.price}</span></p>
                    <button class="details-button">Подробнее</button>
                </div>
            `;
            carGrid.appendChild(carCard);
        });
    }

    // Изначально отображаем все автомобили
    displayCars(carsData);

    // Фильтрация автомобилей
    filterButton.addEventListener("click", function () {
        const brand = document.getElementById("brand").value;
        const price = parseFloat(document.getElementById("price").value);
        const year = parseInt(document.getElementById("year").value);

        const filteredCars = carsData.filter(car => {
            const carPrice = parseFloat(car.price.replace(/\D/g, '')); // Убираем всё, кроме цифр
            const carYear = car.year;

            return (brand === "all" || car.brand === brand) &&
                   (!price || carPrice <= price) &&
                   (!year || carYear >= year);
        });

        displayCars(filteredCars);
    });
});