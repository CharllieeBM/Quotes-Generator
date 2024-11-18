function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "words go here",
    autoStart: true,
    delay: 55,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
