
// 2) Створити сторінку, яка отримує список порід. Список порід вивести в вигляді списку.
//  При кліку на породу собаки, зробити запит і вивести фото поруч з назвою породи.
//         Використати АПІ
//         https://dog.ceo/dog-api/documentation/



let currentImgElem = null;
let currentBreedIndex = 0;

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = Object.keys(data.message);
    const breedList = document.getElementById("breed-list");

    for (let i = 0; i < breeds.length; i++) {
      const breedName = breeds[i];
      const breed = document.createElement("div");
      breed.classList.add("breed");
      breed.dataset.index = currentBreedIndex++;

      const breedNameElem = document.createElement("div");
      breedNameElem.classList.add("breed-name");
      breedNameElem.textContent = breedName;
      breed.appendChild(breedNameElem);

      const breedImgElem = document.createElement("img");
      breedImgElem.classList.add("breed-img");
      breed.appendChild(breedImgElem);

      breedNameElem.addEventListener("click", () => {
        if (breedImgElem.style.display === "none") {
          if (currentImgElem) {
            currentImgElem.style.display = "none";
          }
          currentImgElem = breedImgElem;

          fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then((response) => response.json())
            .then((data) => {
              breedImgElem.src = data.message;
              breedImgElem.style.display = "block";
            });
        } else {
          breedImgElem.style.display = "none";
          currentImgElem = null;
        }
      });

      breedList.appendChild(breed);
    }
  });
