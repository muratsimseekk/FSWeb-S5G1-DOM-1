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

/* Kodlar Buradan aşağıya */

const one = document.querySelectorAll(".container>header>nav>a");

for (let i = 0; i < one.length; i++) {
  one[i].className = "italic";
}
one[0].textContent = siteContent.nav["nav-item-1"];
one[1].textContent = siteContent.nav["nav-item-2"];
one[2].textContent = siteContent.nav["nav-item-3"];
one[3].textContent = siteContent.nav["nav-item-4"];
one[4].textContent = siteContent.nav["nav-item-5"];
one[5].textContent = siteContent.nav["nav-item-6"];

const two = document.querySelector("#logo-img");
const img1 = siteContent.images["logo-img"];
two.setAttribute("src", img1);

const three = document.querySelector(".container>.cta>.cta-text");
three.querySelector("h1").textContent = siteContent.cta.h1;
three.querySelector("button").textContent = siteContent.cta.button;

const four = document.getElementById("cta-img");
const img2 = siteContent.images["cta-img"];
four.setAttribute("src", img2);

const five = document.querySelectorAll(
  ".container>.main-content>.top-content>.text-content"
);

five[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];
five[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];

five[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];
five[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];
const six = document.getElementById("middle-img");
const img3 = siteContent.images["accent-img"];
six.setAttribute("src", img3);

const seven = document.querySelectorAll(
  ".container>.main-content>.bottom-content>.text-content"
);

seven[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["servisler-h4"];
seven[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

seven[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
seven[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

seven[2].querySelector("h4").textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
seven[2].querySelector("p").textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

const eight = document.querySelector(".contact>h4");
eight.textContent = siteContent.iletisim["iletişim-h4"];

const nine = document.querySelectorAll(".contact>p");

nine[0].textContent = siteContent.iletisim["adres"];
nine[1].textContent = siteContent.iletisim["telefon"];
nine[2].textContent = siteContent.iletisim["email"];

document.querySelector("footer>a").className = "bold";
document.querySelector("footer>a").textContent = siteContent.footer.copyright;
