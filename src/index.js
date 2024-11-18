function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 45,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d4ef035e3fbd4697b7a638t907f10o0c";
  let prompt = `User instructions: Generate a quote about parenting using ${instructionsInput.value} as keywords`;
  let context =
    "Your task is to separate the sentences into two separate lines and to make sure to follow user instructions. Please sign '— SheCodes AI' inside a <strong> element at the end of the quote and put the signature in a new line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">⏳ Please wait, generating a quote now about ${instructionsInput.value}...</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator");
quoteFormElement.addEventListener("submit", generateQuote);
