import data from "./data.js";

export const news = () => {

  if (document.querySelector(".news__list.main-page")) {
    const newsListMain = document.querySelector(".news__list.main-page .swiper-wrapper");

    const lastTwoNews = data.slice(-2);

    lastTwoNews.forEach((item) => {
      const newsListCard = document.createElement("div");
      newsListCard.className = "swiper-slide";
      newsListCard.innerHTML = `
        <article class="news__card" style="background: url(${window.location.origin}/src/imgs/news/${item.image}) 0% 0% / cover no-repeat">
          <header class="news__header">
            <div class="news__label">
              <span>${item.label}</span>
            </div>
            <time datetime="${item.date}">${item.date}</time>
          </header>
          <footer class="news__footer">
            <h4 class="news__card-title">${item.title}</h4>
          </footer>
          <a class="news__card-link" href="${window.location.origin}/${item.link}"></a>
        </article>
      `;

      newsListMain.insertBefore(newsListCard, newsListMain.firstChild);
    });

    let newsListSwiper = new Swiper(".news__list", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".news__list-pagination",
        clickable: true,
      },
    });
  };

  if (document.querySelector(".all-news__list")) {
    const allNewsList = document.querySelector(".all-news__list");

    const newsList = document.createElement("ul");
    newsList.className = "all-news__list";

    data.forEach((item) => {
      const allNewsListCard = document.createElement("li");
      allNewsListCard.className = "all-news__list-item";
      allNewsListCard.innerHTML = `
        <article class="all-news__card">
          <img class="all-news__card-image" src="${window.location.origin}/src/imgs/news/${item.image}" alt="">
          <div class="all-news__card-content">
            <h5 class="all-news__card-title">${item.title}</h5>
            <time datetime="${item.date}" class="all-news__card-date">${item.date}</time>
            <span class="all-news__card-description">${item.description}</span>
          </div>
          <a class="all-news__card-link" href="${window.location.origin}/${item.link}"></a>
        </article>
      `;

      newsList.appendChild(allNewsListCard);
    });

    allNewsList.appendChild(newsList);
  }
};