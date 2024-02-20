const body = document.querySelector("body"),
      mode = body.querySelector(".moon-sun");
    //   modeText = body.querySelector(".switch");

      mode.addEventListener("click", () =>{
        body.classList.toggle("dark");
      })