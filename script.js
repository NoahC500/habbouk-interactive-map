function changeTitle() {
  document.getElementById("title").innerHTML = "#MI-is-the-best-branch-lol"
}

const siteBtn = document.getElementById("siteBtn")
siteBtn.addEventListener("click", changeTitle);

function toHQ() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/HQ.png?v=1721254807039"
  document.getElementById("image").alt = "Map of HQ"
  document.getElementById("image").setAttribute("usemap", "#hqMap")
  document.getElementById("title").innerHTML = "HabboUK Headquarters"
}

const hqBtn = document.getElementById("hqBtn");
hqBtn.addEventListener("click", toHQ);

const constHQBtn = document.getElementById("constHQBtn");
constHQBtn.addEventListener("click", toHQ);

function toBigBen() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/Big%20Ben%20(The%20Exterior).png?v=1721256159781"
  document.getElementById("image").alt = "Map of Big Ben"
  document.getElementById("image").setAttribute("usemap", "#bigBenMap")
  document.getElementById("title").innerHTML = "Big Ben (The Elizabeth Tower, Westminster Palace)"
}

const bigBenBtn = document.getElementById("bigBenBtn");
bigBenBtn.addEventListener("click", toBigBen);

const downingStToBigBenBtn = document.getElementById("downingStToBigBenBtn");
downingStToBigBenBtn.addEventListener("click", toBigBen);

function toCOIL() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/COIL%20TEMP.png"
  document.getElementById("image").alt = "Map of the COIL"
  document.getElementById("image").setAttribute("usemap", "#coilMap")
  document.getElementById("title").innerHTML = "The Cabinet Office Intelligence Link (MI Hallway)"
}

const coilBtn = document.getElementById("coilBtn");
coilBtn.addEventListener("click", toCOIL);

function toEE() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/Employee%20Entrance%20TEMP.png?v=1721262252357"
  document.getElementById("image").alt = "Map of the Employee Entrance"
  document.getElementById("image").setAttribute("usemap", "#eeMap")
  document.getElementById("title").innerHTML = "The Employee Entrance"
}

const eeBtn = document.getElementById("eeBtn");
eeBtn.addEventListener("click", toEE);

function toRotunda() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/ERROR.png?v=1721260165750"
  document.getElementById("image").alt = "Map of the Westminster Palace Rotunda"
  document.getElementById("image").setAttribute("usemap", "#rotundaMap")
  document.getElementById("title").innerHTML = "The Houses of Parliament Rotunda"
}

const legiBtn = document.getElementById("legiBtn");
legiBtn.addEventListener("click", toRotunda);

const bigBenToLegiBtn = document.getElementById("bigBenToLegiBtn");
bigBenToLegiBtn.addEventListener("click", toRotunda);

function toJudiCorridor() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/ERROR.png?v=1721260165750"
  document.getElementById("image").alt = "Map of the Judicial Corridor"
  document.getElementById("image").setAttribute("usemap", "#judiCorridorMap")
  document.getElementById("title").innerHTML = "Judicial Hallway"
}

const judiBtn = document.getElementById("judiBtn");
judiBtn.addEventListener("click", toJudiCorridor);

function toTenDowningInt() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/10%20Downing%20Street%20(Entrance%20Hall).png?v=1721259973504"
  document.getElementById("image").alt = "Map of the 10 Downing St. Entrance Hall Interior"
  document.getElementById("image").setAttribute("usemap", "#tenDowningIntMap")
  document.getElementById("title").innerHTML = "10 Downing Street Entrance Hall"
}

const tenDowningIntBtn = document.getElementById("tenDowningIntBtn");
tenDowningIntBtn.addEventListener("click", toTenDowningInt);

const downingExtToEntranceHallBtn = document.getElementById("downingExtToEntranceHallBtn");
downingExtToEntranceHallBtn.addEventListener("click", toTenDowningInt);

function toDowningExt() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/Downing Street (Exterior).png?v=1721264157631"
  document.getElementById("image").alt = "Map of the Downing St. Exterior"
  document.getElementById("image").setAttribute("usemap", "#downingExtMap")
  document.getElementById("title").innerHTML = "Downing Street Exterior"
}

const downingExtBtn = document.getElementById("downingExtBtn");
downingExtBtn.addEventListener("click", toDowningExt);

function toBuckinghamPalace() {
  document.getElementById("image").src = "https://cdn.glitch.global/5b59437a-a6f1-4283-bccb-f9e3bdf00a82/Buckingham%20Palace%20(The%20Exterior).png?v=1721265630354"
  document.getElementById("image").alt = "Map of the Buckingham Palace Exterior"
  document.getElementById("image").setAttribute("usemap", "#buckinghamPalaceExtMap")
  document.getElementById("title").innerHTML = "Buckingham Palace Exterior"
}

const buckingPalaceExtBtn = document.getElementById("buckingPalaceExtBtn");
buckingPalaceExtBtn.addEventListener("click", toBuckinghamPalace);

const downingStToBuckingPalaceBtn = document.getElementById("downingStToBuckingPalaceBtn");
downingStToBuckingPalaceBtn.addEventListener("click", toBuckinghamPalace);