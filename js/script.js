const btns = document.querySelectorAll(".like");


btns.forEach((btn) => {
    let count =0;
  btn.addEventListener("click", () => {
    count++;
    console.log("Total likes:", count);
    btn.textContent=`like${count}`;
  });
});
