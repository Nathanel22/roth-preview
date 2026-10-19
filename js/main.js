/* ===== Zentrale Konfiguration: Marke und Kontaktdaten ===== */
var BRAND = { name: "ROTH", tagline: "IT · Web · Apps" };
var CONTACT = { email: "", linkedin: "", github: "" }; // Testversion: keine Kontaktdaten

document.querySelectorAll("[data-brand]").forEach(function(el){ el.textContent = BRAND[el.getAttribute("data-brand")]; });
document.title = BRAND.name + " – " + BRAND.tagline;
document.getElementById("yr").textContent = new Date().getFullYear();
var cm = document.getElementById("cmain"), cs = document.getElementById("csec");
cm.innerHTML = CONTACT.email ? '<a class="btn p cmail" href="mailto:'+CONTACT.email+'">E-Mail schreiben</a>' : '<span class="cdraft">Kontaktmöglichkeit folgt in Kürze</span>';
cs.innerHTML = [["LinkedIn",CONTACT.linkedin],["GitHub",CONTACT.github]].filter(function(x){return x[1];}).map(function(x){return '<a href="'+x[1]+'" rel="noopener">'+x[0]+'</a>';}).join("");
var b = document.querySelector(".burger"), m = document.getElementById("menu");
b.addEventListener("click", function(){ var o = m.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
m.addEventListener("click", function(){ m.classList.remove("open"); b.setAttribute("aria-expanded", false); });
var els = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, {threshold:.08});
  els.forEach(function(el){ io.observe(el); });
} else { els.forEach(function(el){ el.classList.add("in"); }); }

/* Menü auch per Escape oder Tipp ausserhalb schliessen */
document.addEventListener("keydown", function(e){ if (e.key === "Escape" && m.classList.contains("open")) { m.classList.remove("open"); b.setAttribute("aria-expanded", false); b.focus(); } });
document.addEventListener("click", function(e){ if (m.classList.contains("open") && !e.target.closest("nav")) { m.classList.remove("open"); b.setAttribute("aria-expanded", false); } });
