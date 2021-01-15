import axios from "axios";

const container = document.querySelector(".cards-container")

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  const articleCard = document.createElement("div")
  articleCard.classList.add("card")

  const articleHeadline = document.createElement("div")
  articleHeadline.classList.add("headline")
  articleHeadline.textContent = article.headline

  const articleAuthor = document.createElement("div")
  articleAuthor.classList.add("author")

  const articleImageDiv = document.createElement("div")
  articleImageDiv.classList.add("img-container")

  const articleImg = document.createElement("img")
  articleImg.src = article.authorPhoto

  const articleAuthorSpan = document.createElement("span")
  articleAuthorSpan.textContent = article.authorName


  articleCard.appendChild(articleHeadline)
  articleCard.appendChild(articleAuthor)
  articleAuthor.appendChild(articleImageDiv)
  articleImageDiv.appendChild(articleImg)
  articleCard.appendChild(articleAuthorSpan)

  return articleCard

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const targetLocation = document.querySelector(selector)

  axios.get(`https://lambda-times-api.herokuapp.com/articles`).then((res) => {
    //console.log(res)
    const data = res.data.articles

    const articlesArrays = [data.javascript, data.bootstrap, data.technology,data.jquery, data.node]

    console.log(articlesArrays)

    for (let i = 0; i< articlesArrays.length; i++){
      console.log(i)
      for (let j = 0; j < articlesArrays[i].length; j++){
        console.log(j)
        const card = Card(articlesArrays[i][j])
        targetLocation.appendChild(card)

      }
      //for (let j = 0; j < articlesArrays[i].length; j++){
        //console.log(j)
      //}
    }



  }).catch(console.log("no data received!"))

}

export { Card, cardAppender }
