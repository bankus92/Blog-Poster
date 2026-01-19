//Blog title input
const title = document.getElementById("titleInput");

//Blog body input
const body = document.getElementById("bodyInput");

//Output
const titleOut = document.getElementById("titleOutput");
const bodyOut = document.getElementById("bodyOutput");

//"Post" button
const btn = document.getElementById("generateBtn");
btn.addEventListener("click", () => {
  //Gets value of 'Title' & 'Body'
  const titleValue = title.value;
  const bodyValue = body.value;
  //Outputs value of 'Title' & 'Body'
  titleOut.textContent = titleValue;
  bodyOut.textContent = bodyValue;
});
