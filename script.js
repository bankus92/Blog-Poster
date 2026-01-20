//Blog title input
const title = document.getElementById("titleInput");

//Blog body input
const blogBody = document.getElementById("bodyInput");
/*
Using Tab to indent instead of switching elements,
pulled from Stackoverflow:
https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea 
*/
blogBody.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    this.value =
      this.value.substring(0, start) + "  " + this.value.substring(end);

    this.selectionStart = this.selectionEnd = start + 2;
  }
});

//Output
const titleOut = document.getElementById("titleOutput");
const bodyOut = document.getElementById("bodyOutput");

//"Post" button
const btn = document.getElementById("generateBtn");
btn.addEventListener("click", () => {
  //Gets value of 'Title' & 'Body'
  const titleValue = title.value;
  const bodyValue = blogBody.value;
  //Outputs value of 'Title' & 'Body'
  titleOut.textContent = titleValue;
  bodyOut.textContent = bodyValue;
});
