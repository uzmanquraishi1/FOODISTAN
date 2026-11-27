// Food Items
const foodItems = [
  {
    id: 1,
    name: "Cheese Burger",
    category: "Burgers",
    price: 120,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Delicious cheese burger",
  },
  {
    id: 2,
    name: "Veg Pizza",
    category: "Pizza",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAqx3bgE3-cJ1WBPVqWh7heRulPJiYRDsi3C34Jk2xg&s=10",
    description: "Fresh vegetable pizza",
  },
  {
    id: 3,
    name: "French Fries",
    category: "Snacks",
    price: 90,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    description: "Crispy golden fries",
  },
  {
    id: 4,
    name: "Hakka Noodles",
    category: "Noodles",
    price: 150,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    description: "Tasty vegetable noodles",
  },
  {
    id: 5,
    name: "Chicken Burger",
    category: "Burgers",
    price: 180,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    description: "Juicy chicken burger",
  },
  {
    id: 6,
    name: "Chicken Cheese Sandwich",
    category: "Sandwiches",
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0yK5lJ2eJCmBo1yb86p9DLHdt8LOQfb513CtaS4f3w&s=10",
    description: "Cheesy chicken sandwich",
  },
  {
    id: 7,
    name: "Veg Sandwich",
    category: "Sandwiches",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc5Mhf3TAQ7VjrHb0U_k3sstgfgxM-VcS4s6Tj70W9A&s=10",
    description: "Sandwich filled with fresh vegies",
  },
  {
    id: 8,
    name: "Chicken Tikka Pizza",
    category: "Pizza",
    price: 280,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_uSOET9LY5DzLF7--wjRl8t2DaGTw_L3sqGIvrnqUZA&s=10",
    description: "Tasty pizza with roasted chicken and cheese",
  },
  {
    id: 9,
    name: "Chicken Noodles",
    category: "Noodles",
    price: 220,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJxgZzM6CWgBI4jU6W0TGqeLBfzX-GCpqb4kUuWm5KQ&s=10",
    description: "Juicy chicken noodles",
  },
  {
    id: 10,
    name: "Foodistan's Special Chicken Combo",
    category: "Combos",
    price: 850,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndOutQAIIltLrbAK99dfqy1vNUihmqvBcG6qGd08PS9GX2Fy82t_jyB8&s=10",
    description: "All chicken items 1pcs + 500ml Coke Complimentary",
  },
  {
    id: 11,
    name: "Foodistan's Special Veg Combo",
    category: "Combos",
    price: 550,
    image:
      "https://thumbs.dreamstime.com/b/tempting-image-gourmet-burger-pizza-french-fries-rustic-wooden-cutting-board-delicious-combo-meal-375225885.jpg",
    description: "All veg items 1pcs + 500ml Coke Complimentary",
  },
  {
    id: 12,
    name: "Coke 500ml",
    category: "Beverages",
    price: 50,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTq-F51zgXynB7L5IW98IhxSXkqSsDL7fDJ1h3NuFW6A&s=10",
    description: "Refreshing 500ml Coca-Cola soft drink, served chilled.",
  },
  {
    id: 13,
    name: "Fruit flavored Ice Tea",
    category: "Beverages",
    price: 100,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHACViw0yZMvMO8RSh7vfT3V_HXafGMSfKDIsfhrauzg&s=10",
    description:
      "Options like kiwi, lemon, peach, and raspberry, served over ice for a refreshing experience.",
  },
  {
    id: 14,
    name: "Thick Shake",
    category: "Beverages",
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtnvqE5wjWRoPIKQ2s5o_dhxYj6J21qN24uvqIwGXww&s=10",
    description:
      "A thick and creamy shake with a variety of fruit, chocolate, butterscotch, dry fruits and vanilla flavors, served in a tall glass.",
  },
  {
    id: 15,
    name: "Milk Shake With Ice Cream",
    category: "Beverages",
    price: 130,
    image:
      "https://jonahsbistro.in/wp-content/uploads/2023/05/thick-shakes.jpg",
    description:
      "A creamy milkshake available in flavors like chocolate, vanilla, butterscotch and all type of fruits flavors, served in a tall glass with scoup of your favorite ice cream.",
  },
];

// DOM Elements
const foodContainer = document.getElementById("food-container");
const cartItemsContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const grandTotalElement = document.getElementById("grand-total");
const placeOrderBtn = document.getElementById("place-order-btn");
const orderStatus = document.getElementById("order-status");
const orderHistoryContainer = document.getElementById("order-history");
const categoryButtons = document.querySelectorAll(".category-btn");

// Application State
let cart = JSON.parse(localStorage.getItem("foodCart")) || [];
let orderHistory = JSON.parse(localStorage.getItem("foodOrders")) || [];
let selectedCategory = "All";

const DELIVERY_FEE = 30;
const CANCELLATION_TIME = 2 * 60 * 1000; // 2 minutes
const DELIVERY_TIME = 20 * 1000; // 20 seconds after cancellation window

// Store timeout IDs for each order
const orderTimers = new Map();

// Save Data
function saveData() {
  localStorage.setItem("foodCart", JSON.stringify(cart));
  localStorage.setItem("foodOrders", JSON.stringify(orderHistory));
}

// Update Order Confirmation Message
function updateOrderStatusMessage() {
  const latestOrder = orderHistory[0];

  if (!latestOrder) {
    orderStatus.textContent = "";
    return;
  }

  if (latestOrder.status === "Preparing") {
    orderStatus.textContent =
      "🎉 Order confirmed! You can cancel it within 2 minutes.";
  } else if (latestOrder.status === "Out for Delivery") {
    orderStatus.textContent = "🚚 Your order is out for delivery!";
  } else {
    // Clear message when order is Delivered or Cancelled
    orderStatus.textContent = "";
  }
}

// Display Food Items
function displayFoodItems() {
  foodContainer.innerHTML = "";

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  filteredItems.forEach((item) => {
    const foodCard = document.createElement("div");
    foodCard.className = "food-card";

    foodCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}"
           onerror="this.src='https://placehold.co/400x250?text=Food'">
      <div class="food-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="food-price">₹${item.price}</div>
        <button class="add-btn" data-id="${item.id}">Add to Cart</button>
      </div>
    `;

    foodContainer.appendChild(foodCard);
  });
}

// Category Filter
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    selectedCategory = button.dataset.category;
    displayFoodItems();
  });
});

// Add Food to Cart
foodContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("add-btn")) return;

  const foodId = Number(event.target.dataset.id);
  const existingItem = cart.find((item) => item.id === foodId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    const food = foodItems.find((item) => item.id === foodId);

    cart.push({
      ...food,
      quantity: 1,
    });
  }

  saveData();
  renderCart();
  alert("Food added to cart!");
});

// Render Cart
function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div>
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.quantity}</p>
      </div>

      <div class="quantity-controls">
        <button data-action="decrease" data-id="${item.id}">−</button>
        <span>${item.quantity}</span>
        <button data-action="increase" data-id="${item.id}">+</button>
        <button id="remove-btn" data-action="remove" data-id="${item.id}">
          Remove
        </button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSummary();
}

// Cart Quantity and Remove Actions
cartItemsContainer.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  const foodId = Number(event.target.dataset.id);

  if (!action) return;

  const item = cart.find((item) => item.id === foodId);
  if (!item) return;

  if (action === "increase") {
    item.quantity++;
  }

  if (action === "decrease") {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter((item) => item.id !== foodId);
    }
  }

  if (action === "remove") {
    cart = cart.filter((item) => item.id !== foodId);
  }

  saveData();
  renderCart();
});

// Calculate Total
function updateCartSummary() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = cart.length > 0 ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + deliveryFee;

  subtotalElement.textContent = `₹${subtotal}`;
  document.getElementById("delivery-fee").textContent = `₹${deliveryFee}`;
  grandTotalElement.textContent = `₹${grandTotal}`;

  placeOrderBtn.disabled = cart.length === 0;
}

// Promise Based Order Confirmation
function processOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Your order has been confirmed!");
    }, 2000);
  });
}

// Clear all timers belonging to an order
function clearOrderTimers(orderId) {
  const timers = orderTimers.get(orderId);

  if (timers) {
    clearTimeout(timers.preparingTimer);
    clearTimeout(timers.deliveryTimer);
    orderTimers.delete(orderId);
  }
}

// Schedule the order status changes
function scheduleOrder(order) {
  clearOrderTimers(order.id);

  if (order.status !== "Preparing" && order.status !== "Out for Delivery") {
    return;
  }

  const timers = {};

  if (order.status === "Preparing") {
    const preparingDelay = Math.max(0, order.cancelUntil - Date.now());

    timers.preparingTimer = setTimeout(() => {
      const currentOrder = orderHistory.find((item) => item.id === order.id);

      if (!currentOrder || currentOrder.status !== "Preparing") return;

      currentOrder.status = "Out for Delivery";
      saveData();
      displayOrderHistory();
      updateOrderStatusMessage();

      scheduleOrder(currentOrder);
    }, preparingDelay);
  }

  if (order.status === "Out for Delivery") {
    const deliveryDelay = Math.max(0, order.deliveryAt - Date.now());

    timers.deliveryTimer = setTimeout(() => {
      const currentOrder = orderHistory.find((item) => item.id === order.id);

      if (!currentOrder || currentOrder.status !== "Out for Delivery") return;

      currentOrder.status = "Delivered";
      saveData();
      displayOrderHistory();
      updateOrderStatusMessage();

      orderTimers.delete(order.id);
    }, deliveryDelay);
  }

  orderTimers.set(order.id, timers);
}

// Place Order
async function placeOrder() {
  if (cart.length === 0) return;

  const confirmed = confirm("Are you sure you want to place this order?");
  if (!confirmed) return;

  placeOrderBtn.disabled = true;
  orderStatus.textContent = "Processing your order...";

  try {
    await processOrder();

    // Take a separate copy of the cart for this order
    const orderedItems = cart.map((item) => ({ ...item }));
    const subtotal = orderedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const now = Date.now();

    const newOrder = {
      id: now,
      items: orderedItems,
      total: subtotal + DELIVERY_FEE,
      date: new Date(now).toLocaleString(),
      status: "Preparing",
      cancelUntil: now + CANCELLATION_TIME,
      deliveryAt: now + CANCELLATION_TIME + DELIVERY_TIME,
    };

    orderHistory.unshift(newOrder);
    cart = [];

    saveData();
    renderCart();
    displayOrderHistory();
    scheduleOrder(newOrder);
    updateOrderStatusMessage();
  } catch (error) {
    console.error("Order processing error:", error);
    orderStatus.textContent = "Something went wrong. Please try again.";
  } finally {
    updateCartSummary();
  }
}

// Cancel Order
function cancelOrder(orderId) {
  const order = orderHistory.find((item) => item.id === orderId);

  if (!order) return;

  if (order.status !== "Preparing" || Date.now() >= order.cancelUntil) {
    alert("Sorry! The cancellation time for this order has expired.");
    return;
  }

  const confirmed = confirm("Are you sure you want to cancel this order?");
  if (!confirmed) return;

  clearOrderTimers(orderId);

  order.status = "Cancelled";
  order.cancelledAt = Date.now();

  saveData();
  displayOrderHistory();
  updateOrderStatusMessage();

  alert("Your order has been cancelled successfully.");
}

// Display Order History
function displayOrderHistory() {
  orderHistoryContainer.innerHTML = "";

  if (orderHistory.length === 0) {
    orderHistoryContainer.innerHTML = `<p class="empty-history">No orders placed yet.</p>`;
    return;
  }

  orderHistory.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.className = "order-card";

    const itemNames = order.items
      .map((item) => `${item.name} × ${item.quantity}`)
      .join(", ");

    const statusClass = order.status.toLowerCase().replaceAll(" ", "-");

    let cancellationSection = "";

    if (
      order.status === "Preparing" &&
      order.cancelUntil &&
      Date.now() < order.cancelUntil
    ) {
      cancellationSection = `
        <p class="cancel-countdown">
          Cancellation available for:
          <span data-countdown-id="${order.id}"></span>
        </p>
        <button class="cancel-order-btn" data-cancel-id="${order.id}">
          Cancel Order
        </button>
      `;
    }

    orderCard.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p><strong>Items:</strong> ${itemNames}</p>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p><strong>Date:</strong> ${order.date}</p>
      <p>
        <strong>Status:</strong>
        <span class="order-status-${statusClass}">${order.status}</span>
      </p>
      ${cancellationSection}
    `;

    orderHistoryContainer.appendChild(orderCard);
  });

  updateCountdowns();
}

// Update cancellation countdown every second
function updateCountdowns() {
  const countdownElements = document.querySelectorAll("[data-countdown-id]");

  countdownElements.forEach((element) => {
    const orderId = Number(element.dataset.countdownId);
    const order = orderHistory.find((item) => item.id === orderId);

    if (!order || order.status !== "Preparing") {
      return;
    }

    const remainingTime = order.cancelUntil - Date.now();

    if (remainingTime <= 0) {
      element.textContent = "00:00";
      return;
    }

    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    element.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  });
}

// Cancel button click handling
orderHistoryContainer.addEventListener("click", (event) => {
  const cancelButton = event.target.closest("[data-cancel-id]");

  if (!cancelButton) return;

  const orderId = Number(cancelButton.dataset.cancelId);

  cancelOrder(orderId);
});

// Restore active order timers after page refresh
function restoreOrders() {
  const now = Date.now();

  orderHistory.forEach((order) => {
    // Older orders created before the cancellation feature
    if (!order.cancelUntil || !order.deliveryAt) {
      if (order.status === "Preparing" || order.status === "Out for Delivery") {
        order.status = "Delivered";
      }
      return;
    }

    if (order.status === "Preparing" && now >= order.cancelUntil) {
      order.status = "Out for Delivery";
    }

    if (order.status === "Out for Delivery" && now >= order.deliveryAt) {
      order.status = "Delivered";
    }

    if (order.status === "Preparing" || order.status === "Out for Delivery") {
      scheduleOrder(order);
    }
  });

  saveData();
}

// Place Order Button
placeOrderBtn.addEventListener("click", placeOrder);

// Initial Display
restoreOrders();
updateOrderStatusMessage();
displayFoodItems();
renderCart();
displayOrderHistory();

// Refresh countdown every second
setInterval(updateCountdowns, 1000);
