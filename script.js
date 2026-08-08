const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const dropdownButtons = document.querySelectorAll(".has-dropdown > button");
const cookieBanner = document.querySelector("[data-cookie]");
const cookieButton = document.querySelector("[data-cookie-accept]");
const footer = document.querySelector(".site-footer");
const brand = document.querySelector(".brand");
const pageHero = document.querySelector(".page-hero");

const isDeepPage = location.pathname.includes("/pages/services/") || location.pathname.includes("/pages/solutions/") || location.pathname.includes("/pages/news/");
const isPageRoot = location.pathname.includes("/pages/");

const pageDepth = isDeepPage
  ? "../"
  : isPageRoot
    ? ""
    : "pages/";
const assetDepth = isDeepPage ? "../../assets/" : isPageRoot ? "../assets/" : "assets/";

if (brand) {
  brand.innerHTML = `<img class="brand-logo" src="${assetDepth}chirope-logo-blue.png" alt="CHIROPE Freight Service" />`;
}

if (pageHero && !document.querySelector(".cross-feature")) {
  const isArticle = location.pathname.includes("/pages/news/");
  const isQuote = location.pathname.endsWith("/quote.html");
  const isAbout = location.pathname.endsWith("/about.html");
  const title = isArticle
    ? "Freight insight backed by real operating context"
    : isQuote
      ? "Expert route planning starts with clear cargo details"
      : isAbout
        ? "A coordinated team behind every shipment handoff"
        : "Connected transport support for every cargo route";
  const first = isArticle
    ? "Every article is written around practical shipping decisions: what to prepare, what to confirm and what to share before cargo moves."
    : isQuote
      ? "Our team reviews origin, destination, cargo profile, timing and delivery requirements together, so the quote can become an actionable route."
      : isAbout
        ? "CHIROPE combines supplier coordination, documentation awareness and destination handoff planning for cargo teams shipping into Europe and North America."
        : "From container movement to air cargo, inland trucking and warehouse delivery, CHIROPE connects the transport steps that keep international cargo moving.";
  const second = isArticle
    ? "That operating lens helps cargo owners reduce guesswork and turn freight updates into decisions their teams can act on."
    : "The result is a cleaner logistics workflow with fewer scattered updates and clearer ownership from booking to delivery.";
  const cross = document.createElement("section");
  cross.className = isAbout || isArticle ? "cross-feature reverse" : "cross-feature";
  cross.innerHTML = `
    <div class="cross-media" role="img" aria-label="Port freight operations with containers, cranes, ship and trucking"></div>
    <div class="cross-copy">
      <h2>${title}</h2>
      <p>${first}</p>
      <p>${second}</p>
    </div>
  `;
  pageHero.insertAdjacentElement("afterend", cross);
}

if (footer) {
  footer.innerHTML = `
    <div class="footer-brand">
      <img class="footer-logo" src="${assetDepth}chirope-logo-blue.png" alt="CHIROPE Freight Service" />
      <span>China-based international logistics for Europe and North America, covering ocean freight, air freight, rail freight, road freight and multimodal transport.</span>
    </div>
    <div class="footer-col">
      <h3>Company</h3>
      <a href="${pageDepth}services.html">Services</a>
      <a href="${pageDepth}about.html">Markets</a>
      <a href="${pageDepth}about.html">Company</a>
      <a href="${pageDepth}news.html">Insights</a>
      <a href="${pageDepth}quote.html">Contact</a>
    </div>
    <div class="footer-col">
      <h3>Services</h3>
      <a href="${pageDepth}services/ocean-freight.html">Ocean Freight</a>
      <a href="${pageDepth}services/air-freight.html">Air Freight</a>
      <a href="${pageDepth}services/rail-freight.html">Rail Freight</a>
      <a href="${pageDepth}services/road-freight.html">Road Freight</a>
      <a href="${pageDepth}services/value-added-services.html">Value-Added Services</a>
    </div>
    <div class="footer-col footer-contact">
      <h3>Direct contact</h3>
      <a href="mailto:official@chirope.cn">official@chirope.cn</a>
      <p>Company Address: China</p>
    </div>
  `;
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!window.matchMedia("(max-width: 760px)").matches) {
      button.blur();
      button.closest(".has-dropdown")?.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      return;
    }
    const item = button.closest(".has-dropdown");
    const isOpen = item?.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.querySelectorAll(".has-dropdown.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("button")?.setAttribute("aria-expanded", "false");
    });
  }
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element) || event.target.closest(".site-header")) return;
  document.querySelectorAll(".has-dropdown.is-open").forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector("button")?.setAttribute("aria-expanded", "false");
  });
});

const canStoreCookieChoice = () => {
  try {
    localStorage.setItem("chirope-storage-test", "1");
    localStorage.removeItem("chirope-storage-test");
    return true;
  } catch {
    return false;
  }
};

const storageAvailable = canStoreCookieChoice();

if (storageAvailable && localStorage.getItem("chirope-cookie-ok") === "true") {
  cookieBanner?.classList.add("is-hidden");
}

cookieButton?.addEventListener("click", () => {
  if (storageAvailable) {
    localStorage.setItem("chirope-cookie-ok", "true");
  }
  cookieBanner?.classList.add("is-hidden");
});
