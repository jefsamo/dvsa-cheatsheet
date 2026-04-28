const productsContainer = document.getElementById("products");
const statusEl = document.getElementById("status");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let currentPage = 1;

// const BASE_URL = "https://eleganthomeaffairs.shopeyin.com/api/v1/product";
const BASE_URL = "http://localhost:3000/api/v1/product";

const fetchProducts = async (page = 1, limit = 10) => {
  try {
    statusEl.textContent = "Loading products...";
    productsContainer.innerHTML = "";

    const response = await fetch(`${BASE_URL}?${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    renderProducts(data.items);
    updatePagination(data);

    statusEl.textContent = `Showing ${data.items.length} of ${data.totalItems} products`;
  } catch (error) {
    statusEl.textContent = "Something went wrong while loading products";
    productsContainer.innerHTML = `<p>${error.message}</p>`;
  }
};

const renderProducts = (items) => {
  if (!items.length) {
    productsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  productsContainer.innerHTML = items
    .map((item) => {
      return `
      <div class="card">
        <img src="${
          item.images?.[0] || "https://via.placeholder.com/300"
        }" alt="${item.name}" />
        <div class="card-content">
          <h3>${item.name}</h3>
          <p><strong>Category:</strong> ${item.categoryName}</p>
          <p>${item.description}</p>
          <p><strong>Color:</strong> ${item.colors?.join(", ") || "N/A"}</p>
          <p><strong>Stock:</strong> ${item.stock}</p>
          <p class="price">₦${item.price.toLocaleString()}</p>
        </div>
      </div>
    `;
    })
    .join("");
};

function updatePagination(data) {
  currentPage = data.currentPage;

  pageInfo.textContent = `Page ${data.currentPage} of ${data.totalPages}`;

  prevBtn.disabled = !data.hasPrevPage;
  nextBtn.disabled = !data.hasNextPage;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    fetchProducts(currentPage - 1);
  }
});

nextBtn.addEventListener("click", () => {
  fetchProducts(currentPage + 1);
});

fetchProducts(currentPage);
