const navBarHTMLStorageKey = "navigation";

async function LoadNavBarASync(fromPage) {
  if (!fromPage) return;

  //get nav bar html from local storage
  let text = localStorage.getItem(navBarHTMLStorageKey);
  if (!text) {
    //if nav bar html is not in local storage, fetch it and store it
    const response = await fetch("/HtmlComponents/NavBar.html");
    text = await response.text();

    localStorage.setItem(navBarHTMLStorageKey, text);
  }

  //set inner html of navigation
  const nav = document.getElementById("navigation");
  nav.innerHTML = text;
  //update active link based on given page
  const links = nav.getElementsByClassName("nav-link");
  for (let i = 0; i < links.length; i++) {
    const el = links[i];
    if (el.innerHTML == fromPage) {
      el.classList.add("active");
      break;
    }
  }
}
