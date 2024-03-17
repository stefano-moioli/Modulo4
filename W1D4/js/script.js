/* const getAlbums = async ()=>{
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.log("Errore durante la richiesta degli album");
    }
}*/

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
  .then(response => {
    // Controlla se la risposta è OK (status 200-299)
    if (!response.ok) {
      throw new Error(`Errore di rete: ${response.status}`);
    }
    // Parsifica la risposta JSON
    return response.json();
  })
  .then(data => {
    // Fai qualcosa con i dati ottenuti
    console.log(data);
  })
  .catch(error => {
    // Gestisci gli errori di rete o di parsing
    console.error('Si è verificato un errore:', error);
  });

  //example of "new function synthax"
  //let sum = new Function('a', 'b', 'return a + b');
  // alert( sum(1, 2) ); // 3

