class JogoDaVelha {
  constructor() {
    this.buttonX = document.querySelector("#x");
    this.buttonO = document.querySelector("#o");
    this.container = document.querySelector("#outter-square");
    this.restartBtn = document.querySelector("#restart");
  }

  runTheMethod() {
    this.Marking_X_O();
    this.selecting_X_O();
    this.win();
    this.restart();
  }

  win() {
    window.onclick = (e) => {
      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-1").innerHTML === "x" &&
        document.querySelector(".square-2").innerHTML === "x" &&
        document.querySelector(".square-3").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-2").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-4").innerHTML === "x" &&
        document.querySelector(".square-5").innerHTML === "x" &&
        document.querySelector(".square-6").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-4").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-6").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-7").innerHTML === "x" &&
        document.querySelector(".square-8").innerHTML === "x" &&
        document.querySelector(".square-9").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-8").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-1").innerHTML === "x" &&
        document.querySelector(".square-4").innerHTML === "x" &&
        document.querySelector(".square-7").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-4").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-2").innerHTML === "x" &&
        document.querySelector(".square-5").innerHTML === "x" &&
        document.querySelector(".square-8").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-2").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-8").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-3").innerHTML === "x" &&
        document.querySelector(".square-6").innerHTML === "x" &&
        document.querySelector(".square-9").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-6").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-3").innerHTML === "x" &&
        document.querySelector(".square-5").innerHTML === "x" &&
        document.querySelector(".square-7").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonX &&
        document.querySelector(".square-1").innerHTML === "x" &&
        document.querySelector(".square-5").innerHTML === "x" &&
        document.querySelector(".square-9").innerHTML === "x"
      ) {
        document.querySelector("#win_msgX").classList.add("isActive");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }
      //----------------------------------------------------------------------
      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-1").innerHTML === "o" &&
        document.querySelector(".square-2").innerHTML === "o" &&
        document.querySelector(".square-3").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-2").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-4").innerHTML === "o" &&
        document.querySelector(".square-5").innerHTML === "o" &&
        document.querySelector(".square-6").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-4").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-6").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-7").innerHTML === "o" &&
        document.querySelector(".square-8").innerHTML === "o" &&
        document.querySelector(".square-9").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-8").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-1").innerHTML === "o" &&
        document.querySelector(".square-4").innerHTML === "o" &&
        document.querySelector(".square-7").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-4").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-2").innerHTML === "o" &&
        document.querySelector(".square-5").innerHTML === "o" &&
        document.querySelector(".square-8").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-2").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-8").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-3").innerHTML === "o" &&
        document.querySelector(".square-6").innerHTML === "o" &&
        document.querySelector(".square-9").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-6").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-1").innerHTML === "o" &&
        document.querySelector(".square-5").innerHTML === "o" &&
        document.querySelector(".square-9").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-1").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-9").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }

      if (
        e.target !== this.buttonO &&
        document.querySelector(".square-3").innerHTML === "o" &&
        document.querySelector(".square-5").innerHTML === "o" &&
        document.querySelector(".square-7").innerHTML === "o"
      ) {
        document.querySelector("#win_msgO").classList.add("isActive2");
        document.querySelector(".square-3").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-5").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
        document.querySelector(".square-7").style.backgroundColor = "rgba(38, 214, 38, 0.9)";
      }
    };
  }

  selecting_X_O() {
    document.onclick = (e) => {
      if (e.target === this.buttonX && this.buttonX.classList.contains('not-your-turn')) {
        return alert("Não é a sua vez!!");  
      }
      if (e.target === this.buttonO && this.buttonO.classList.contains('not-your-turn')) {
        return alert("Não é a sua vez!!");
      }
      if (e.target === this.buttonX) {
        this.buttonO.classList.remove("not-your-turn");
        this.buttonX.classList.add("not-your-turn");
        this.buttonX.classList.add("active");
        return;
      }
      if (e.target === this.buttonO) {
        this.buttonX.classList.remove("not-your-turn");
        this.buttonO.classList.add("not-your-turn");
        this.buttonO.classList.add("active");
        return;
      }
    };
  }

  Marking_X_O() {//it'll be added an "x" or an "o" in the innerHTML of the e.target only if the the button X or the button O has the class "active".
    this.container.onclick = (e) => {
      if (this.buttonX.classList.contains("active")) {
        e.target.innerHTML = "x";
        this.buttonX.classList.remove("active");
      }
      if (this.buttonO.classList.contains("active")) {
        e.target.innerHTML = "o";
        this.buttonO.classList.remove("active");
      }
    };
  }

  restart() {
    let clean = this.container.querySelectorAll(".inner-square");
    this.restartBtn.onclick = () => {
      for (let i of clean) {
        i.innerHTML = " ";
        i.style.backgroundColor = 'white';
      }
      document.querySelector("#win_msgX").classList.remove("isActive");
        document.querySelector("#win_msgO").classList.remove("isActive2");
    };
  }
}

const jogo = new JogoDaVelha();

jogo.runTheMethod();
