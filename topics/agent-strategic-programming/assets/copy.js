(function () {
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var original = btn.textContent;
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.getAttribute("data-copy"));
      if (!target) return;
      var text = target.textContent.replace(/^\n+|\n+$/g, "");
      function ok() {
        btn.textContent = "已复制";
        setTimeout(function () {
          btn.textContent = original;
        }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok).catch(function () {
          fallback(text, ok);
        });
      } else {
        fallback(text, ok);
      }
    });
  });

  function fallback(text, ok) {
    var area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      ok();
    } finally {
      document.body.removeChild(area);
    }
  }
})();
