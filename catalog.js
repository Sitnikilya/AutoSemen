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
            image: "images/audi_a3/audi_a3_1.jpg",
            link: "audi_a3.html"
        },
        {
            brand: "bmw",
            model: "BMW X1 xDrive25Li Premium Edition, 2023",
            mileage: "13 000 км",
            price: "185 000 ¥",
            year: 2023,
            image: "images/bmw_x1/x1_1.jpg",
            link: "bmw_x1.html"
        },
        {
            brand: "toyota",
            model: "Toyota RAV4 2021 2.0L CVT 2WD Fashion",
            mileage: "48 000 км",
            price: "131 800 ¥",
            year: 2021,
            image: "images/toy_rav4/rav4_1.jpg",
            link: "toyota_rav4.html"
        },
        {
            brand: "toyota",
            model: "Toyota C-HR 2020",
            mileage: "8 700 км",
            price: "88 000 ¥",
            year: 2020,
            image: "images/toy_ch-r/ch-r_1.jpg",
            link: "toyota_chr.html"
        },
        {
            brand: "hyundai",
            model: "Hyundai Elantra 2021 1.5L CVT LUX Premium Edition",
            mileage: "29 000 км",
            price: "77 000 ¥",
            year: 2021,
            image: "images/h_elantra/h_elantra_1.jpg",
            link: "hyundai_elantra.html"
        }
    ];

    // Функция для отображения автомобилей
    function displayCars(cars) {
        carGrid.innerHTML = ""; // Очищаем сетку
        cars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");
            carCard.innerHTML = `
                <a href="${car.link}">
                    <img src="${car.image}" alt="${car.model}">
                    <div class="car-info">
                        <h3>${car.model}</h3>
                        <p>Пробег: ${car.mileage}</p>
                        <p>Цена: <span class="price">${car.price}</span></p>
                    </div>
                </a>
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