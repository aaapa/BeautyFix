import data from "./data.js";

export const services = () => {
  const healthList = document.querySelector(".services__list.health");
  const sportList = document.querySelector(".services__list.sport");
  const detoxList = document.querySelector(".services__list.detox");
  const beautyList = document.querySelector(".services__list.beauty");

  let dataList = [];
  let categoryClass = "";

  if (healthList) {
    dataList = data.health;
    categoryClass = "health";
  } else if (sportList) {
    dataList = data.sport;
    categoryClass = "sport";
  } else if (detoxList) {
    dataList = data.detox;
    categoryClass = "detox";
  } else if (beautyList) {
    dataList = data.beauty;
    categoryClass = "beauty";
  } else {
    return;
  }

  const list = healthList || sportList || detoxList || beautyList;

  dataList.forEach((item) => {
    const listCard = document.createElement("li");
    listCard.innerHTML = `
      <button class="services__service-card ${categoryClass}" type="button" data-id="${item.id}">
        <span class="services__service-card-content">
          <span class="services__service-card-header">
            <h5 class="services__service-card-title">${item.title}</h5>
            <strong class="services__service-card-price"><span>от</span> ${item.price} ₽</strong>
          </span>
          <span class="services__service-card-footer">
            <strong class="services__service-card-label">${item.label}</strong>
          </span>
        </span>
        <img class="services__service-card-image" src="${item.img}" alt="">
      </button>
    `;
    list.appendChild(listCard);
  });

  const createPopup = (item) => {
    const popup = document.createElement("div");
    popup.classList.add("services__popup");
    popup.innerHTML = `
      <div class="services__popup-body container">
        <header class="services__popup-card-header">
          <button class="services__popup-close-button" type="button" aria-label="Закрыть окно" data-tippy-content="Закрыть окно"></button>
        </header>
        <div class="services__popup-info" data-simplebar>
          <div class="services__popup-image-container">
            <img class="services__service-card-image" src="${item.img}" alt="">
          </div>
          <div class="services__popup-info-content">
            <header class="services__popup-info-header">
              <h5 class="services__popup-info-title">${item.title}</h5>
              <span class="services__popup-info-price">${item.price} ₽</span>
            </header>
            <footer class="services__popup-info-footer">
              <a class="services__popup-button button" href="tel:+79955367699" data-tippy-content="+7 995 536-76-99">Заказать</a>
              <div class="services__popup-description">
                ${item.description}
              </div>
              <div class="services__popup-sub-info">
                <span>
                  <b>Состав:</b> ${item.compound}
                </span>
                <span> 
                  <b>Время процедуры:</b> ${item.time}
                </span> 
              </div>
            </footer>        
          </div>
        </div>           
      </div>
    `;
    document.body.appendChild(popup);

    document.documentElement.style.overflow = "hidden";

    const closeButton = popup.querySelector(".services__popup-close-button");
    closeButton.addEventListener("click", () => {
      popup.remove();
      document.documentElement.style.overflow = "";
    });
  };

  document.querySelectorAll(".services__service-card").forEach(card => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      const id = card.getAttribute("data-id");
      const item = dataList.find(i => i.id === id);
      createPopup(item);
    });
  });
}
