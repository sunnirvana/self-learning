(function () {
  function setFeedback(el, ok, text) {
    el.hidden = false;
    el.classList.toggle("is-right", ok);
    el.classList.toggle("is-wrong", !ok);
    el.textContent = text;
  }

  function lockChoices(container, picked, ok) {
    var answer = container.getAttribute("data-answer");
    container.querySelectorAll("button").forEach(function (btn) {
      btn.disabled = true;
      if (btn === picked) {
        btn.setAttribute("data-state", ok ? "right" : "wrong");
        return;
      }
      var isCorrect =
        btn.getAttribute("data-correct") === "true" ||
        (answer !== null && btn.getAttribute("data-pick") === answer);
      if (!ok && isCorrect) btn.setAttribute("data-state", "right");
    });
  }

  function updateScore(root) {
    var scoreEl = root.querySelector("[data-score]");
    if (!scoreEl) return;
    var items = root.querySelectorAll(".quiz, .scene");
    var answered = 0;
    var correct = 0;
    items.forEach(function (item) {
      if (item.getAttribute("data-done") === "1") {
        answered += 1;
        if (item.getAttribute("data-ok") === "1") correct += 1;
      }
    });
    scoreEl.textContent =
      answered === 0
        ? "答完会在这里计分。"
        : "已答 " + answered + " / " + items.length + "，对 " + correct + " 题。";
  }

  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var feedback = quiz.querySelector(".feedback");
    quiz.querySelectorAll(".choices button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (quiz.getAttribute("data-done") === "1") return;
        var ok = btn.getAttribute("data-correct") === "true";
        quiz.setAttribute("data-done", "1");
        quiz.setAttribute("data-ok", ok ? "1" : "0");
        lockChoices(quiz, btn, ok);
        setFeedback(feedback, ok, btn.getAttribute("data-why"));
        updateScore(quiz.closest(".practice") || document);
      });
    });
  });

  document.querySelectorAll(".scene").forEach(function (scene) {
    var feedback = scene.querySelector(".feedback");
    var answer = scene.getAttribute("data-answer");
    scene.querySelectorAll(".choices button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (scene.getAttribute("data-done") === "1") return;
        var ok = btn.getAttribute("data-pick") === answer;
        scene.setAttribute("data-done", "1");
        scene.setAttribute("data-ok", ok ? "1" : "0");
        lockChoices(scene, btn, ok);
        setFeedback(feedback, ok, scene.getAttribute("data-why"));
        updateScore(scene.closest(".practice") || document);
      });
    });
  });
})();
