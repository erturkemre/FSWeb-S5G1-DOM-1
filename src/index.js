const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

const navLink = document.querySelectorAll(".container nav a");
navLink.forEach((navLink, i) => {
  navLink.setAttribute("class", "italic");
  //navLink.classList.add("italik")
  navLink.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

document
  .querySelector("#logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

document.querySelector(".cta-text h1").textContent = "Bu DOM Mükemmel";
document.querySelector(".cta-text button").textContent = "Başlayın";

document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

const textCont = document.querySelectorAll(".top-content .text-content h4");

textCont[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textCont[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const tContent = document.querySelector(".top-content ");
const pContent = tContent.querySelectorAll("p");
pContent[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
pContent[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

document.getElementById("middle-img").src = siteContent.images["accent-img"];

/*
const bContent = document.querySelectorAll(".bottom-content .text-content");
bContent[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["servisler-h4"];
bContent[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

bContent[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
bContent[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

bContent[2].querySelector("h4").textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
bContent[2].querySelector("p").textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];
  */

const content1 = document.querySelectorAll(".buttom-content .text-content");
content1.forEach((s, i) => {
  const contArr = ["servisler", "ürünler", "vizyon"];
  s.querySelector("h4").textContent =
    siteContent["ana-içerik"][`${contArr[i]}-h4`];
  s.querySelector("p").textContent =
    siteContent["ana-içerik"][`${contArr[i]}-içeriği`];
});

const con = document.querySelectorAll(".contact ");
con[0].querySelector("h4").textContent = siteContent.iletisim["iletişim-h4"];
con[0].querySelector("p").textContent = siteContent.iletisim.adres;
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim.telefon;
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim.email;
const foot = document.querySelector("footer a");
foot.textContent = siteContent.footer.copyright;
foot.setAttribute("class", "bold");
