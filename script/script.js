//for cookies
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const btn = document.getElementById("accept-cookies");

  if (localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "none";
  }

  btn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
});

// scroll to top

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("scrollTopBtn");

  // Scroll-ზე გამოჩნდეს / გაქრეს ღილაკი
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // ღილაკზე დაჭერისას ზემოთ დაბრუნება
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});







const menuItems = [
  "Margherita Pizza New", "Crispy Fried Chicken", "Black Pepper Burger",
  "Chinese Pasta", "Ruti With Beef Slice", "Shroom Bacon Burger", "Roll Shaped Cigar Samosa"
];

// შემთხვევითი პროდუქტების გენერატორი
function getRandomOrder() {
  const count = Math.floor(Math.random() * 3) + 1; // 1-3 პროდუქტი
  const order = [];
  while (order.length < count) {
    const item = menuItems[Math.floor(Math.random() * menuItems.length)];
    if (!order.includes(item)) order.push(item);
  }
  return order.join(", ");
}

// API მოთხოვნა მომხმარებლებისთვის
fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    const ordersDiv = document.getElementById('orders');

    data.results.forEach(user => {
      const orderEl = document.createElement('div');
      orderEl.className = 'order';
      orderEl.innerHTML = `
                        <img src="${user.picture.thumbnail}" alt="${user.name.first}">
                        <div>
                            <strong>${user.name.first} ${user.name.last}</strong>
                            <p>Order: ${getRandomOrder()}</p>
                        </div>
                    `;
      ordersDiv.appendChild(orderEl);
    });
  });



//Form

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const container = document.querySelector('.container');
const animateCircles = document.querySelector('.animate-circles');

togglePassword.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.textContent = 'Hide Password';
  } else {
    password.type = 'password';
    togglePassword.textContent = 'Show Password';
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usernameValue = username.value;
  const emailValue = email.value;
  const PhoneNumberValue = phonenumber.value;
  const PasswordValue = password.value;

  if (usernameValue === '') {
    errorMessage(username, "Username is empty");
  } else {
    successMessage(username);
  }

  if (emailValue === '') {
    errorMessage(email, "Email is empty");
  } else if (!validateEmail(emailValue)) {
    errorMessage(email, "Email is invalid");
  } else {
    successMessage(email);
  }

  if (PhoneNumberValue === '') {
    errorMessage(phonenumber, "Phone Number is empty");
  } else if (PhoneNumberValue.length < 9) {
    errorMessage(phonenumber, "Phone Number is too short");
  } else {
    successMessage(phonenumber);
  }

  // if (adressValue === '') {
  //   errorMessage(address, "Address is empty");
  // } else {
  //   successMessage(address);
  // }
  if (PasswordValue === '') {
    errorMessage(password, 'Password is empty');
  } else {
    successMessage(password);
  }



  if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && phonenumber.parentElement.classList.contains('success') && password.parentElement.classList.contains('success')) {

    container.classList.add('complete');
    animateCircles.classList.add('complete');

  }
});

function errorMessage(value, message) {
  const formControl = value.parentElement;

  if (formControl.classList.contains('success')) {
    formControl.classList.remove('success');
    formControl.classList.add('error');
  } else {
    formControl.classList.add('error');
  }
  formControl.querySelector('.errorMessage').textContent = message;


}

function successMessage(value) {
  const formControl = value.parentElement;

  if (formControl.classList.contains('error')) {
    formControl.classList.remove('error');
    formControl.classList.add('success');
  } else {
    formControl.classList.add('success');
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//burger bar
const burgerBar = document.getElementById('burgerbar');
const navBar = document.getElementById('navBar');
const bars = document.getElementById('icon-bars');
const xmark = document.getElementById('icon-x');

burgerBar.addEventListener('click', () => {
  navBar.classList.toggle('activenavigation');

  bars.style.display =
    bars.style.display === 'none' ? 'block' : 'none';

  xmark.style.display =
    xmark.style.display === 'block' ? 'none' : 'block';
});
