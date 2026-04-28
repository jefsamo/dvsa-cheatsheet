const API_KEY = "dccc5f03";

const movieForm = document.getElementById("movieForm");
const movieInput = document.getElementById("movieInput");
const anotherInput = document.getElementById("anotherInput");
const freestyleText = document.getElementById("freestyle");
const title = document.getElementById("title");
const year = document.getElementById("year");
const result = document.getElementById("result");

const fetchMovie = async (movieName) => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
      movieName
    )}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }
  return res.json();
};

movieForm.addEventListener("submit", async (event) => {
  console.log("HERE");
  event.preventDefault();

  const movieName = movieInput.value.trim();
  const another = anotherInput.value.trim();
  const text = anotherInput.value.trim();
  freestyleText.textContent = text;

  if (!movieName) {
    result.textContent = "Please enter a movie name";
    result.style.color = "red";
    return;
  }

  result.textContent = "Loading...";

  try {
    const movie = await fetchMovie(movieName);

    title.textContent = `Title: ${movie.Title}`;
    year.textContent = `Year: ${movie.Year}`;

    result.innerHTML = `
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
    `;
  } catch (error) {
    result.textContent = error.message;
  }
});
