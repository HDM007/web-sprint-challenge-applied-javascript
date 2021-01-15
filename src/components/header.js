const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement("header");
  header.classList.add("header");

  const headerSpan = document.createElement("span");
  headerSpan.classList.add("date");

  const headerTitle = document.createElement("h1");

  const headerTemp = document.createElement("span");
  headerTemp.classList.add("temp");

  headerSpan.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  header.appendChild(headerSpan)
  header.appendChild(headerTitle)
  header.appendChild(headerTemp)

  console.log("working with a header!")
  console.log("passed value of " + title + date + temp)
  return header


}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const header = Header()
  header.classList.add(selector)
  const targetLocation = document.querySelector(`${selector}`)
  targetLocation.appendChild(header)

}

export { Header, headerAppender }
