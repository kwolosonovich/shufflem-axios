document.addEventListener("DOMContentLoaded", function () {
  
    const baseAPI = "https://deckofcardsapi.com/api/deck";
    let deckId = null;
    let draw = $("#draw");
    let cards = $("#cards");

    draw.on('click', drawCard)

    async function drawCard() {
        try {
            let res = await axios.get(`${baseAPI}/new/draw/?count=1`);
            console.log(res);
        } catch (e) {
            console.log("Sorry, an error has occured");
        }
    }
    
});
