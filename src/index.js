window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import './SASS/custom.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import './SASS/style.scss';

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item));

// Start The Most Selling
document.querySelectorAll('.add-to-card-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('أضيف المنتج إلى عربة الشراء');
    })
})
// End The Most Selling;

// Start Product Page;
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
});

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
});
// End Product Page

// Start
document.querySelectorAll('.quantity').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit;
        parent.querySelector('.total-price-for-product').innerHTML = newQuantity * pricePerUnit + '$';

        calculateTotalPrice();
    })
});

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove();

        calculateTotalPrice();
    })
})

function calculateTotalPrice() {
<<<<<<< HEAD
    let totalPriceForAllProduct = 0;

    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('.quantity').value;
        const totalPriceForProduct = pricePerUnite * quantity;

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.querySelector('#total-price-for-all-product').innerHTML = totalPriceForAllProduct;
=======
        let totalPriceForAllProduct = 0;

        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.querySelector('.quantity').value;
            const totalPriceForProduct = pricePerUnite * quantity;

            totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
        })
        document.querySelector('#total-price-for-all-product').innerHTML = totalPriceForAllProduct;
>>>>>>> 1a941935939b0c3a546c75a33ebea3f8f8eca10a
}
// End

// Start payment Page
// Select "Choose City"
const citiesByCountry = {
<<<<<<< HEAD
    sa: ['جدة', 'الرياض'],
    eg: ['القاهرة', 'الإسكندرية'],
    jo: ['عمان', 'الزرقاء'],
    sy: ['حلب', 'حماة', 'دمشق']
=======
    sa: ['جدة' ,'الرياض'],
    eg: ['القاهرة' ,'الإسكندرية'],
    jo: ['عمان' ,'الزرقاء'],
    sy: ['حلب' ,'حماة', 'دمشق']
>>>>>>> 1a941935939b0c3a546c75a33ebea3f8f8eca10a
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value;
        const cities = citiesByCountry[country];

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

        const firstOption = document.createElement('option');
        const optionText = document.createTextNode('إختر المدينة');
        firstOption.appendChild(optionText);
        firstOption.setAttribute('value', '');
        firstOption.setAttribute('disabled', 'true');
        firstOption.setAttribute('selected', 'true');

        const city_options = document.getElementById('paymentcities');
        city_options.appendChild(firstOption);

        cities.forEach(city => {
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(city);
            newOption.appendChild(optionText);
            newOption.setAttribute('value', city);
            city_options.appendChild(newOption);
        })
    })
})

// START HIDDEN PAYMENT INPUTS
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentMethod = item.value;

        const creditCardInputs = document.querySelectorAll('#credit_card_info input');

        if (paymentMethod === 'on_delivery') {
            creditCardInputs.forEach(input => {
                input.style.display = 'none';
            })
        } else {
            creditCardInputs.forEach(input => {
                input.style.display = 'block';
            })
        }
    })
})
// END HIDDEN PAYMENT INPUTS
// End payment Page

// Start copyright date;
document.querySelector('.thisYear').textContent = `${new Date().getFullYear()}`;
// End copyright date;

