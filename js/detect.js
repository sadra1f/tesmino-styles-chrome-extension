(() => {
  let target = undefined;

  document.querySelectorAll("meta").forEach((item) => {
    if (
      !target &&
      !window.location.href.startsWith("http://gitlab.com") &&
      !window.location.href.startsWith("https://gitlab.com") &&
      item.getAttribute("property") == "og:site_name" &&
      item.getAttribute("content") &&
      item.getAttribute("content").toLowerCase() == "gitlab"
    ) {
      target = "gitlab";
    }
  });

  if (target) {
    console.log(`Loading ${target} custom styles...`);

    let css = undefined;

    switch (target) {
      case "gitlab":
        css = "/css/gitlab.css";
        break;
    }

    const element = document.createElement("link");
    element.rel = "stylesheet";
    element.type = "text/css";
    element.href = chrome.runtime.getURL(css);
    document.head.appendChild(element);
  }
})();
