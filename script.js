// Responsive navigation menu
$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.nav-links').slideToggle();
    });
});

let burger = document.querySelector(".burger")

function showNavLinks() {
    burger.addEventListener("click",() =>{
        burger.style.alignSelf = "center"
    })
}

//search 
const products = [
    {
        id: 1,
        name: "Hesperantha coccinea 'Sunrise",
        price: 19,
        image: "./images/img2.jpg",
    },
    {
        id: 2,
        name: "Daisy Flower'",
        price: 29,
        image: "./images/img3.jpg",
    },
    {
        id: 3,
        name: "Marigold flowers",
        price: 39,
        image: "./images/img4.jpg",
    },
    {
        id: 4,
        name: "Floribunda Rose",
        price: 49,
        image: "./images/img7.jpg",
    },
    {
        id: 5,
        name: "Orchid Cactus",
        price: 59,
        image: "./images/img5.jpg",
    },
    , {
        id: 5,
        name: "Jasmine flower",
        price: 69,
        image: "./images/img1.png",
    },
];

const searchBox = document.querySelector("#search-section");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.trim().toLowerCase(); // Trim search input
    const filteredProducts = products.filter((product) => {
        const productName = product.name.trim().toLowerCase(); // Trim product name
        return productName.includes(searchValue);
    });

    searchInput.value = "";
    //clearSearchResults(); // Clear existing search results
    
    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};


clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});

document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const additionalInfo = button.nextElementSibling;
        additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
    });
});

document.getElementById('policy-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.alert('This is our Privacy Policy.');
});

