const API_URL = "http://localhost:3000/products";

const form = document.getElementById("productForm");
const btnSave = document.getElementById("btnSave");
const productIdInput = document.getElementById("productId");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const productList = document.getElementById("productList");
const message = document.getElementById("message");

let isEditing = false;

// READ
async function getProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    productList.innerHTML = "";

    products.forEach((product) => {
      const li = document.createElement("li");

      li.innerHTML = `
          <strong>${product.name}</strong>
          <p>Price: £${product.price}</p>
  
          <div class="actions">
            <button onclick="editProduct('${product.id}', '${product.name}', ${product.price})">
              Edit ${product.name}
            </button>
  
            <button onclick="deleteProduct('${product.id}')">
              Delete ${product.name}
            </button>
          </div>
        `;

      productList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    message.textContent = "Unable to load products. Please try again.";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const productId = productIdInput.value;
  const productData = {
    name: nameInput.value,
    price: Number(priceInput.value),
  };

  try {
    if (productId) {
      await updateProduct(productId, productData);
      message.textContent = "Product updated successfully.";
      isEditing = false;
    } else {
      await createProduct(productData);
      message.textContent = "Product created successfully.";
    }

    form.reset();
    productIdInput.value = "";
    btnSave.textContent = isEditing ? "Update Product" : "Save Product";

    await getProducts();
  } catch (error) {
    console.error(error);
    message.textContent = "Something went wrong. Please try again.";
  }
});

const createProduct = async (productData) => {
  isEditing = false;
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  message.textContent = "Product created successfully";
};

const updateProduct = async (id, productData) => {
  isEditing = true;
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  btnSave.textContent = message.textContent = "Product updated successfully.";
};

function editProduct(id, name, price) {
  productIdInput.value = id;
  nameInput.value = name;
  priceInput.value = price;

  btnSave.textContent = "Update product";

  message.textContent = `Editing ${name}.`;
}

// DELETE
async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  message.textContent = "Product deleted successfully.";
  await getProducts();
}

getProducts();
