function makeTextBigger() {
  alert("Hello, world!");

  document.getElementById("userText").style.fontSize = "24pt";
}

function toggleStyle() {
  var textArea = document.getElementById("userText");

  if (document.getElementById("fancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (document.getElementById("boring").checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function makeTextMoo() {
  var textArea = document.getElementById("userText");
  var text = textArea.value;

  var upperText = text.toUpperCase();

  var sentences = upperText.split(". ");

  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split(" ");

    words[words.length - 1] = words[words.length - 1] + "-Moo";

    sentences[i] = words.join(" ");
  }

  var modifiedText = sentences.join(". ");

  textArea.value = modifiedText;
}
