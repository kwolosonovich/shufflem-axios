document.addEventListener("DOMContentLoaded", function () {
  
    const baseURL = "https://deckofcardsapi.com/api/deck";
    
    let draw = $("#draw");
    let cards = $("#cards");
    var deckId = null

    const shuffle = async () => {

      let newDeck = await $.getJSON(`${baseURL}/new/shuffle/`);
      deckId = newDeck.deck_id
        draw.show().on("click", async function () {
        let cardData = await $.getJSON(`${baseURL}/${newDeck.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        cards.append(
          $("<img>", {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,
            },
          })
        );
        if (cardData.remaining === 0) draw.remove();
      });
    }
    draw.on("click", shuffle);
});

