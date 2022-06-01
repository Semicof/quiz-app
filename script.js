const quizData = [
  {
    q: "Ngày giải phóng Miền Nam, thống nhất đất nước?",
    a: "30/4/1974",
    b: "20/5/1975",
    c: "30/5/1975",
    d: "30/4/1975",
    correct: "d",
  },
  {
    q: "Q2",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q3",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q4",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q5",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q6",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q7",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q8",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q9",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
  {
    q: "Q10",
    a: "A1",
    b: "A2",
    c: "A3",
    d: "A4",
    correct: "d",
  },
];

const Q_El = document.getElementById("question");
const a_txt = document.getElementById("a_txt");
const b_txt = document.getElementById("b_txt");
const c_txt = document.getElementById("c_txt");
const d_txt = document.getElementById("d_txt");
const submitBtn = document.getElementById("submit");
const ansEls = document.querySelectorAll(".ans");
const quiz = document.querySelector(".q-header");

let currentQ = 0;
let scores = 0;

loadQ();
function loadQ() {
  deSelect();
  const currentQData = quizData[currentQ];
  Q_El.innerText = currentQData.q;
  a_txt.innerText = currentQData.a;
  b_txt.innerText = currentQData.b;
  d_txt.innerText = currentQData.d;
  c_txt.innerText = currentQData.c;
}

function select() {
  let ans = undefined;

  ansEls.forEach((ansEl) => {
    if (ansEl.checked) {
      ans = ansEl.id;
    }
  });
  return ans;
}

function deSelect() {
  ansEls.forEach((ansEl) => {
    ansEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const ans = select();
  if (ans) {
    if (ans === quizData[currentQ].correct) {
      scores++;
    }
    currentQ++;
    if (currentQ === quizData.length - 1) {
      submitBtn.innerText = "Submit";
    }
  } else window.alert("You have to choose one answer!");
  if (currentQ < quizData.length) {
    loadQ();
  } else {
    if (scores > 1) quiz.innerHTML = `<h1>!--You got ${scores} scores--!</h1>`;
    else quiz.innerHTML = `<h1>!--You got ${scores} score--!</h1>`;
    submitBtn.innerText = "Refresh";
    submitBtn.addEventListener("click", () => {
        location.reload();
    });
  }
});
