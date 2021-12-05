const quote = document.querySelector(".quote").innerHTML;
const quoteAttribute = document.querySelector(".quote")
const passage = document.querySelector(".passage");
const newQuoteBtn = document.querySelector(".new-quote");
newQuoteBtn.addEventListener("click", nextQuote);
function nextQuote() {
    if (quotes.length > 0) {
        const quote = document.querySelector(".quote");
        const passage = document.querySelector(".passage");
        //use math random on the id, then take the quote and passNum from that object and display it
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; //Selects a random object from the quotes array
        let quoteUsed = randomQuote.used;
        if (quoteUsed == false) { //Checks if the quote has been used or not. All used property values are originally false
            let displayedQuote = randomQuote.quote; //Selects the quote text from that object
            let displayedPassage = randomQuote.passNum; //Selects the passage number
            quote.innerHTML = (displayedQuote);
            passage.innerHTML = (displayedPassage);
            randomQuote.used = true; //After the quote has been displayed, sets the used property value to true
            usedQuotes.push(randomQuote); //Moves the used quote into the usedQuotes array
            addTransition()
            let id = randomQuote.id; //takes the current object ID and if it equals an ID in the quotes array, it removes that object
            for (var i = quotes.length - 1; i >= 0; --i) {
                if (quotes[i].id == id) {
                    quotes.splice(i, 1);
                }
            }
  
        
        } else {
            passage.innerHTML = `You have read all of the quotes <br> Click here to submit your own`;
            newQuoteBtn.style.display = "none";
        }
    }
    else {
        passage.innerHTML = `You have read all of the quotes <br> Idk I'll probably add more later <br> Peace love <br> -Rob`;
        newQuoteBtn.style.display = "none";
    }
    function addTransition() {
        setTimeout(function () {
            quoteAttribute.classList.remove("fade"); //After the quote has had time to load, remove the transition effect
        }, 3000);
        quoteAttribute.setAttribute("class", "quote align-center fade"); //Adds the transition effect on again, so the next quote will have a transition
    }
    }
