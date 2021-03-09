function randomPokemon() {
  const randomNumber = [Math.floor(Math.random() * 1000)];

  function randomData() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let randomResults = data.results[randomNumber];
        document.getElementById("randomUser").textContent = randomResults.name;
        document.getElementById("randomUrl").textContent = randomResults.url;
      });
  }
  randomData();

  function randomImage() {
    let url = ` https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
    fetch(url)
      .then((res) => res.json())
      .then((urlData) => {
        console.log(urlData);
        console.log(urlData.sprites.front_default);
        document.getElementById("randomImageUrl").textContent =
          urlData.sprites.front_default;
        document.getElementById("randomImage").src =
          urlData.sprites.front_default;
      });
  }
  randomImage();
}
randomPokemon();
document.getElementById("randomUser").src = urlData.sprites.front_default;
