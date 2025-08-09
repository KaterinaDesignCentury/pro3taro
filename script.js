document.addEventListener("DOMContentLoaded", () => {
    let cards = Array.from({length: 78}, (_, i) => i + 1);

    // Перетасовка по вашему принципу
    for (let i = 0; i < cards.length; i++) {
        let randomIndex = Math.floor(Math.random() * 78);
        [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
    }

    const blocksContainer = document.getElementById("blocks");
    blocksContainer.innerHTML = "";
    for (let b = 0; b < 6; b++) {
        let block = document.createElement("div");
        block.classList.add("block");

        let start = b * 13;
        let end = start + 13;
        let subset = cards.slice(start, end);

        subset.forEach(num => {
            let card = document.createElement("div");
            card.classList.add("card");

            let img = document.createElement("img");
            img.src = `images/${num}.png`; // путь к вашей папке с картинками
            img.alt = `Карта ${num}`;

            card.appendChild(img);
            card.addEventListener("click", () => selectCard(num, img.src));
            block.appendChild(card);
        });

        blocksContainer.appendChild(block);
    }

    let selectedSlots = document.querySelectorAll(".card-slot");
    let selectedCount = 0;

    function selectCard(num, imgSrc) {
        if (selectedCount >= 3) return;
        if (Array.from(selectedSlots).some(slot => slot.querySelector("img")?.src === imgSrc)) return;

        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `Карта ${num}`;
        selectedSlots[selectedCount].innerHTML = "";
        selectedSlots[selectedCount].appendChild(img);

        selectedCount++;
    }

    document.getElementById("restart-btn").addEventListener("click", () => {
        location.reload();
    });
});