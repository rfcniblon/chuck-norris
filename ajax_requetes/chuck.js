// This function loads pokemon data from the Pokemon API
function fetchChuckJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const chuck = 0 ;
  const url = `https://api.chucknorris.io/jokes/random`;
  axios.get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(chuck) {
      console.log('data decoded from JSON:', chuck);

      // Build a block of HTML
      const chuckHtml = `
        <p><strong>${chuck.value}</strong></p>
        <img src="${chuck.icon_url}" />
      `;
      document.querySelector('#chuck-norris').innerHTML = chuckHtml;
    });
}

fetchChuckJSON();