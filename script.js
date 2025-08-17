

document.addEventListener("DOMContentLoaded", () => {

let setCard = [
    { "id": 0, "name": "Шут", "description": "Начало пути, свобода и доверие миру.\nИмпульсивность и открытость переменам." },
    { "id": 1, "name": "Маг", "description": "Сила воли и концентрация.\nУмение использовать ресурсы для целей." },
    { "id": 2, "name": "Верховная Жрица", "description": "Интуиция и тайные знания.\nТишина, ожидание, внутренняя мудрость." },
    { "id": 3, "name": "Императрица", "description": "Изобилие и творчество.\nМатеринская забота и рост." },
    { "id": 4, "name": "Император", "description": "Стабильность и порядок.\nАвторитет, закон и защита." },
    { "id": 5, "name": "Иерофант", "description": "Традиция и духовность.\nУчитель, наставник, вера." },
    { "id": 6, "name": "Влюблённые", "description": "Выбор и гармония.\nОтношения, союз, любовь." },
    { "id": 7, "name": "Колесница", "description": "Победа и движение вперёд.\nКонтроль, решимость, сила." },
    { "id": 8, "name": "Сила", "description": "Внутреннее мужество и терпение.\nСострадание, управление эмоциями." },
    { "id": 9, "name": "Отшельник", "description": "Поиск истины и уединение.\nМудрость, духовный путь." },
    { "id": 10, "name": "Колесо Фортуны", "description": "Циклы и перемены.\nУдача, судьба, поворот событий." },
    { "id": 11, "name": "Справедливость", "description": "Правда и баланс.\nЧестность, ответственность, закон." },
    { "id": 12, "name": "Повешенный", "description": "Пауза и переоценка.\nЖертва ради нового взгляда." },
    { "id": 13, "name": "Смерть", "description": "Конец цикла и трансформация.\nИзменения, освобождение, переход." },
    { "id": 14, "name": "Умеренность", "description": "Гармония и баланс.\nСпокойствие, терпение, целостность." },
    { "id": 15, "name": "Дьявол", "description": "Зависимости и искушения.\nМатериальность, плен у желаний." },
    { "id": 16, "name": "Башня", "description": "Резкий кризис и разрушение.\nОсвобождение через шок." },
    { "id": 17, "name": "Звезда", "description": "Надежда и вдохновение.\nИсцеление, вера, новые горизонты." },
    { "id": 18, "name": "Луна", "description": "Иллюзии и страхи.\nСкрытое, сны, неопределённость." },
    { "id": 19, "name": "Солнце", "description": "Радость и успех.\nЯсность, энергия, детская открытость." },
    { "id": 20, "name": "Суд", "description": "Пробуждение и карма.\nОсвобождение, новый этап." },
    { "id": 21, "name": "Мир", "description": "Завершение и целостность.\nДостижение, гармония, итог пути." },
  
    { "id": 22, "name": "Туз Жезлов", "description": "Начало действия и вдохновения.\nСила воли, энергия." },
    { "id": 23, "name": "Двойка Жезлов", "description": "Планирование и выбор.\nШирокие перспективы." },
    { "id": 24, "name": "Тройка Жезлов", "description": "Прогресс и ожидание.\nВидение будущего." },
    { "id": 25, "name": "Четвёрка Жезлов", "description": "Праздник и стабильность.\nДом, радость, союз." },
    { "id": 26, "name": "Пятёрка Жезлов", "description": "Соперничество и борьба.\nКонфликты, конкуренция." },
    { "id": 27, "name": "Шестёрка Жезлов", "description": "Победа и признание.\nУспех, поддержка других." },
    { "id": 28, "name": "Семёрка Жезлов", "description": "Отстаивание позиции.\nМужество, защита." },
    { "id": 29, "name": "Восьмёрка Жезлов", "description": "Скорость и события.\nБыстрые новости, движение." },
    { "id": 30, "name": "Девятка Жезлов", "description": "Выдержка и защита.\nОпыт, осторожность." },
    { "id": 31, "name": "Десятка Жезлов", "description": "Бремя и нагрузка.\nОтветственность, усталость." },
    { "id": 32, "name": "Паж Жезлов", "description": "Любопытство и энергия.\nВесть, вдохновение." },
    { "id": 33, "name": "Рыцарь Жезлов", "description": "Импульсивность и страсть.\nПоездки, смелость." },
    { "id": 34, "name": "Королева Жезлов", "description": "Уверенность и тепло.\nХаризма, творчество." },
    { "id": 35, "name": "Король Жезлов", "description": "Лидерство и видение.\nЭнергия, решимость." },
  
    { "id": 36, "name": "Туз Кубков", "description": "Начало чувств и любви.\nЭмоции, вдохновение." },
    { "id": 37, "name": "Двойка Кубков", "description": "Партнёрство и союз.\nПритяжение, доверие." },
    { "id": 38, "name": "Тройка Кубков", "description": "Радость и дружба.\nПраздник, поддержка." },
    { "id": 39, "name": "Четвёрка Кубков", "description": "Недовольство и апатия.\nПоиск смысла." },
    { "id": 40, "name": "Пятёрка Кубков", "description": "Потери и сожаления.\nГрусть, упущенные возможности." },
    { "id": 41, "name": "Шестёрка Кубков", "description": "Ностальгия и воспоминания.\nДетство, доброта." },
    { "id": 42, "name": "Семёрка Кубков", "description": "Иллюзии и соблазны.\nМного выборов." },
    { "id": 43, "name": "Восьмёрка Кубков", "description": "Отказ и уход.\nПоиск нового пути." },
    { "id": 44, "name": "Девятка Кубков", "description": "Исполнение желаний.\nУдовлетворение и радость." },
    { "id": 45, "name": "Десятка Кубков", "description": "Счастье и гармония.\nСемья, любовь, союз." },
    { "id": 46, "name": "Паж Кубков", "description": "Нежность и фантазия.\nВесть, романтика." },
    { "id": 47, "name": "Рыцарь Кубков", "description": "Очарование и роман.\nПредложение, мечтательность." },
    { "id": 48, "name": "Королева Кубков", "description": "Эмпатия и забота.\nИнтуиция, мягкость." },
    { "id": 49, "name": "Король Кубков", "description": "Уравновешенность и мудрость.\nСострадание, зрелость." },
  
    { "id": 50, "name": "Туз Мечей", "description": "Истина и ясность.\nНовый взгляд, идеи." },
    { "id": 51, "name": "Двойка Мечей", "description": "Сомнения и выбор.\nНеопределённость, закрытость." },
    { "id": 52, "name": "Тройка Мечей", "description": "Боль и разрыв.\nРазочарование, потери." },
    { "id": 53, "name": "Четвёрка Мечей", "description": "Отдых и восстановление.\nМедитация, пауза." },
    { "id": 54, "name": "Пятёрка Мечей", "description": "Конфликт и поражение.\nСпоры, предательство." },
    { "id": 55, "name": "Шестёрка Мечей", "description": "Переход и движение.\nУход из трудностей." },
    { "id": 56, "name": "Семёрка Мечей", "description": "Хитрость и обман.\nСекретные действия." },
    { "id": 57, "name": "Восьмёрка Мечей", "description": "Ограничения и страхи.\nЗахваченность обстоятельствами." },
    { "id": 58, "name": "Девятка Мечей", "description": "Тревоги и кошмары.\nБеспокойство, страх." },
    { "id": 59, "name": "Десятка Мечей", "description": "Конец и поражение.\nБолезненный финал." },
    { "id": 60, "name": "Паж Мечей", "description": "Любопытство и наблюдение.\nВесть, новые идеи." },
    { "id": 61, "name": "Рыцарь Мечей", "description": "Стремительность и решимость.\nКонфликты, напор." },
    { "id": 62, "name": "Королева Мечей", "description": "Логика и независимость.\nЧестность, строгость." },
    { "id": 63, "name": "Король Мечей", "description": "Разум и власть.\nАвторитет, справедливость." },
  
    { "id": 64, "name": "Туз Пентаклей", "description": "Начало в материальном.\nФинансы, возможности." },
    { "id": 65, "name": "Двойка Пентаклей", "description": "Баланс и гибкость.\nМножество дел, адаптация." },
    { "id": 66, "name": "Тройка Пентаклей", "description": "Сотрудничество и мастерство.\nРабота в команде." },
    { "id": 67, "name": "Четвёрка Пентаклей", "description": "Скупость и удержание.\nСтрах потерь." },
    { "id": 68, "name": "Пятёрка Пентаклей", "description": "Трудности и лишения.\nНужда, кризис." },
    { "id": 69, "name": "Шестёрка Пентаклей", "description": "Щедрость и помощь.\nБаланс отдачи и получения." },
    { "id": 70, "name": "Семёрка Пентаклей", "description": "Ожидание и труд.\nТерпение, рост." },
    { "id": 71, "name": "Восьмёрка Пентаклей", "description": "Учёба и мастерство.\nПрактика, улучшение." },
    { "id": 72, "name": "Девятка Пентаклей", "description": "Достаток и независимость.\nУспех, комфорт." },
    { "id": 73, "name": "Десятка Пентаклей", "description": "Семья и наследие.\nБогатство, традиции." },
    { "id": 74, "name": "Паж Пентаклей", "description": "Учёба и возможности.\nНовые начинания." },
    { "id": 75, "name": "Рыцарь Пентаклей", "description": "Трудолюбие и надёжность.\nСтабильность, упорство." },
    { "id": 76, "name": "Королева Пентаклей", "description": "Забота и практичность.\nУют, плодородие." },
    { "id": 77, "name": "Король Пентаклей", "description": "Богатство и власть.\nДостижения, стабильность." }
  ];

  let cards = Array.from({length: 78}, (_, i) => i);

  // тасовка Фишера-Йейтса
  for (let i = cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }

  const blocksContainer = document.getElementById("blocks");
  blocksContainer.innerHTML = "";

  // мелкие карты = рубашки
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
          img.src = "img/img2.png";   // маленькая рубашка
          img.alt = "Рубашка карты";

          card.appendChild(img);
          card.addEventListener("click", () => selectCard(num));
          block.appendChild(card);
      });

      blocksContainer.appendChild(block);
  }

  // большие карты (3 слота)
  let selectedSlots = document.querySelectorAll(".card-slot");
  let selectedCount = 0;

  // при старте показываем большие рубашки
  selectedSlots.forEach(slot => {
      slot.innerHTML = "";
      let img = document.createElement("img");
      img.src = "img/img1.png";   // большая рубашка
      img.alt = "Рубашка карты";
      slot.appendChild(img);
  });

  function selectCard(num) {
      if (selectedCount >= 3) return;

      let cardInfo = setCard.find(c => c.id === num);

      let slot = selectedSlots[selectedCount];
      slot.innerHTML = "";

      // лицо карты
      let img = document.createElement("img");
      img.src = `images/${num}.png`;
      img.alt = cardInfo.name;
      slot.appendChild(img);

      // подсказка
      let tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.innerHTML = `<strong>${cardInfo.name}</strong><br>${cardInfo.description}`;
      slot.appendChild(tooltip);

      selectedCount++;
  }


  

  function selectCard(num) {
    if (selectedCount >= 3) return;

    let cardInfo = setCard.find(c => c.id === num);
    let slot = selectedSlots[selectedCount];
    slot.innerHTML = "";

    // лицо карты
    let img = document.createElement("img");
    img.src = `images/${num}.png`;
    img.alt = cardInfo.name;
    slot.appendChild(img);

    selectedCount++;

    // обновляем общий блок с описаниями
    const cardsInfo = document.getElementById("cards-info");
    cardsInfo.innerHTML = ""; // очищаем

    for (let i = 0; i < selectedCount; i++) {
        let info = document.createElement("div");
        let selectedNum = selectedSlots[i].querySelector("img").src.split("/").pop().replace(".png","");
        let infoCard = setCard.find(c => c.id == selectedNum);
        info.innerHTML = `<strong>${infoCard.name}</strong>: ${infoCard.description}`;
        info.style.color = "#fff"; // белый текст
        info.style.marginBottom = "8px";
        cardsInfo.appendChild(info);
    }
}




  // перезапуск
  document.getElementById("restart-btn").addEventListener("click", () => {
      location.reload();
  });
});
