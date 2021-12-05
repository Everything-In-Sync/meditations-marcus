const url = "https://confident-borg-c29ce3.netlify.app/";
const user_id = "stoicmarcus";
const hash_tags = "";
const params = "menubar=no,toolbar=no,status=no,width=570,height=570";
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const reddit = document.querySelector(".reddit");
const email = document.querySelector(".email");

// facebook.addEventListener("click", function (ev) {
//     let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
//     window.open(shareUrl, "NewWindow", params);
// });
twitter.addEventListener("click", function (ev) {
    let author = " - Marcus Aurelius"
    let sharedQuote = document.querySelector(".quote").innerHTML;
    let text = encodeURIComponent(sharedQuote + author);
    let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;
    window.open(shareUrl, "NewWindow", params);
});
reddit.addEventListener("click", function (ev) {
    let author = " - Marcus Aurelius"
    let sharedQuote = document.querySelector(".quote").innerHTML;
    let passage = document.querySelector(".passage").innerHTML
    if (sharedQuote != " ") {
        let text = encodeURIComponent(sharedQuote + " ~ " + passage + author);
        let shareUrl = `https://reddit.com/submit?url=${url}&title=${text}`;
        window.open(shareUrl, "NewWindow", params);
    } else {
        text = encodeURIComponent("Marcus Aurelius Passages from Meditations");
        let shareUrl = `https://reddit.com/submit?url=${url}&title=${text}`;
        window.open(shareUrl, "NewWindow", params);
    }
});
// email.addEventListener("click", function(ev){
//     let sharedQuote = document.querySelector(".quote").innerHTML;
//     let passage = document.querySelector(".passage").innerHTML
//     let toEmail = "test@me.com";
//     let subject = "Marcus%20Aurelius%20Passage%20from%20Meditations";
//     let body = sharedQuote + passage;
//     let mailto = `mailto:${toEmail}?subject=${subject}`;
//     console.log(mailto);
//     email.href = mailto;
//     console.log(email.href);
// });
