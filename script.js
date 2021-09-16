import fetch from "node-fetch";

const response = await fetch('https://the-cocktail-db.p.rapidapi.com/search.php');

console.log(response);
