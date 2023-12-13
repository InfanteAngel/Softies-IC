
// Menu Scripts For Image changes

//Ice Cream Buttons

const icChocBtn = document.getElementById("ic-choc-btn");
const icVanillaBtn = document.getElementById("ic-vanilla-btn");
const icStrawBtn = document.getElementById("ic-straw-btn");
const icMintChoc = document.getElementById("ic-mintChoc-btn");
const icBttrPec = document.getElementById("ic-bttrPec-btn");
const icRckyRd = document.getElementById("ic-rckyRd-btn");
const icCksCrm = document.getElementById("ic-ckscrm-btn");
const icCkDough = document.getElementById("ic-ckDough-btn");

const icBtnList = [icChocBtn, icVanillaBtn, icStrawBtn, icMintChoc, icBttrPec, icRckyRd, icCksCrm, icCkDough];

//Ice Cream Section Images

const chocImg =  "./resources/Images/ic-images/chocolate.jpg";
const vanillaImg =  "./resources/Images/vanilla_img.jpg";
const strawImg = "./resources/Images/ic-images/strawberry.jpg";
const mintImg = "./resources/Images/ic-images/mint.jpg";
const bttrImg = "./resources/Images/ic-images/Butter-Pecan-Ice-Cream-3-681x1024.jpg";
const rckyImg = "./resources/Images/ic-images/rocky-road-ice-cream-11-1200.jpg";
const cookiesImg = "./resources/Images/ic-images/cookies and cream.jpg";
const doughImg = "./resources/Images/ic-images/cookie-dough-ice-cream-4.jpg"

const icImagesList = [chocImg, vanillaImg, strawImg, mintImg, bttrImg, rckyImg, cookiesImg, doughImg];

// Ice Cream Section Text

const chocIcTxt = "Weather enjoyed in a cone, a cup, or as part of decadent dessert, our Chocolate Ice Cream promises a moment of pure bliss with each spoonful. Indulge in the timeless allure of chocolate, transformed into a frozen masterpiece";
const vanillaIcTxt = "A classic indulgence prefected.m Immerse your senses in the velvety richness of pure, high-quality vanilla, expertly churned into a creamy masterpice. Every scoop is a journey through the simplicity of perfection, where the delicate sweetness and aromatic vanilla notes dance on your cone or cup!";
const strawIcTxt = "Delight in the sweet embrace of our Strawberry Ice Cream - a burst of luscious red berries in every spoonful. Immerse yourself in the fruity symphony of ripe strawberries, skillfully blended into a velvety delight. Each scoop is a celebration of freshness and sweetness, capturing the essance of sun-kissed strawberries at their peak";
const mintIcTxt = "Revitalize your taste buds with our Mint Ice Cream _ a cool, refreshing escape into pure indulgence. Immerse yourself in the invigorating essance of fresh mint, expertly blended into a creamy symphony. Each scoop is a breath of crisp, cool air, leaving behind a trail of minty swetness";
const bttrIcTxt = "Satisfy your sweet craving with our Butter Scotch Ice Cream - a velvety blend of rich crael and buttery indulgence. Immerse yourself in the golden swirls of butterscotch, expertly crafted into a creamy masterpice";
const rckyIcTxt = "Take a flavorfuladventure with our Rocky Road Ice Cream - a perfectl blend of indulgance and crunch. Immerse yourself in the creamy swirls of chocolate ice cream, generoulsy studded with marshmallows and roasted almonds. Each bite is a symphony of textures, where the smoothness of chocolate meets the delightful crunch of almonds and pillowy softness of marshmallows";
const cookiesIcTxt = "Indulge in the perfect harmony of swetness and crunch of Cookeis and Cream Ice Cream Cone. Immerse yourself in velvety vanilla ice cream generously speckled with chunks of chocolate cookies. Each bite is a delightful blend of creamy goodness and the satisfying cunch of cookies pieces";
const doughIcTxt = "Dive into decadent delight of our COokie Dough ICe Cream - a tantilizing fusion of creamy indulgence and chunks of irresistible cookie dough. Immerse yourself in velvety vanilla ice cream generously laden with chunks of soft, cookied dough. Immerse yourself in velvety vanilla ice cream generously laden with chunks of soft, cookie dough morsels";

const icTextList = [chocIcTxt, vanillaIcTxt, strawIcTxt, mintIcTxt, bttrIcTxt, rckyIcTxt, cookiesIcTxt, doughIcTxt];

//Shaved Ice Cream Buttons
const simangonadaBtn = document.getElementById("si-mangonada-btn");
const sicherryBtn = document.getElementById("si-cherry-btn");
const siStrawBtn = document.getElementById("si-straw-btn");
const sibnnaBtn = document.getElementById("si-bnna-btn");
const sibblgumBtn = document.getElementById("si-bblGum-btn");
const sipunchBtn = document.getElementById("si-punch-btn");
const sigrapeBtn = document.getElementById("si-grape-btn");
const sigrnAppleBtn = document.getElementById("si-grnAppl-btn");

const siBtnList = [simangonadaBtn, sicherryBtn, siStrawBtn, sibnnaBtn, sibblgumBtn, sipunchBtn, sigrapeBtn, sigrnAppleBtn]; 

//Shaved Ice Cream Section Images

const mangImg = "./resources/Images/mangonada.jpg";
const chrryImg = "./resources/Images/si-img/d741d4028112bb75253abd2ca3e86a8a.jpg";
const strawImgSi = "./resources/Images/si-img/punch-sc.jpg";
const bnnaImg = "./resources/Images/si-img/bannna-si.jpg";
const bblGumImg = "./resources/Images/si-img/bblgum.jpg";
const punchImg = "./resources/Images/si-img/punch-sc.jpg";
const grapeImg = "./resources/Images/si-img/grape-sc.jpg";
const grnApplImg = "./resources/Images/si-img/greenapple.jpg";

const siImgList = [mangImg, chrryImg, strawImgSi, bnnaImg, bblGumImg, punchImg, grapeImg, grnApplImg];

//Shaved Ice Cream Text Section

const mangTxt = "Just In! A tropical escape in every sip> Immerse yourself in the vibrant fusion of sweet mango, tangy chamoy, and a hint of psicy Tajin, expertly crafted into a refreshing beverage. Let the luscious mango falvors transport you to sun-soaked paradises, while the zing of chamoy and Tajin adds a perfect twist";
const chrryTxt = "Just when you thought this classic, delicious flavor could not possibly get any better, it has. This crowd favorite is our best seller, and for good reason. If you are looking for the perfect cherry snow cone, look no further";
const strawTxt = "Nothing says SUMMER like a sweet and fruity strawberry snow cone. There is nothing better than biting into a deliciously ripe strawberry. his shaved ice falvor has the sweet, fresh taste of a strawberry and the refreshment of an icy snow cone, all in one";
const bnnaTxt ="Enjoy the sweet, tropical flavor of banana with this falvor. Tastes like summer with a cozy flavor that coats your pallete. Enjoy our renound flavor Banana!";
const bblTxt = "Like a kid running twoards the ice cream truck and tasting the colors of what is your childhood. This flavor tastes like the bubblegum of childhood";
const punchTxt = "A tropical flavor with a punch attactched to it. Enjoy our Hawaiian Punch and cool down while you stay cool with our Punch flavor";
const grpeTxt = "An eycatching color but an even more tastefull taste pacekd with grape flavor. Just the right amount of flavor for you grape lovers out there guaranteed to be enjoyed!";
const grnAplTxt = "If you can't decide between sour or sweet, then you shouldnt have to! Our Green Apple flavored shaved ice is a guaranteed hit that everyone can enjoy. With the perfect combination of sour and sweet, Green Apple snow cone syrup is one of our more popular flavors.";

const siTextList = [mangTxt, chrryTxt, strawTxt, bnnaTxt,bblTxt, punchTxt, grpeTxt, grnAplTxt];

//Gealto Ice Cream Section

//Gelato Btn

const hzlnutBtn = document.getElementById("g-hzlnut-btn");
const trmsisuBtn = document.getElementById("g-trmisu-btn");
const zppaBtn = document.getElementById("g-zppa-btn");
const pnnaBtn = document.getElementById("g-pnna-btn");
const cntuBtn = document.getElementById("g-cntu-btn");
const crmelBtn = document.getElementById("g-crmel-btn");
const castagnaBtn = document.getElementById("g-castagna-btn");

const gelatoBtnList = [hzlnutBtn, trmsisuBtn, zppaBtn, pnnaBtn, cntuBtn, crmelBtn, castagnaBtn];

// Gelato Image Section

const hzlImg = "./resources/Images/g-image/chestnut.jpg";
const trmSuImg = "./resources/Images/g-image/Tiramisu-Gelato-1-of-3-683x1024.jpg";
const zppaImg = "./resources/Images/g-image/gelato-zuppa-inglese-senza-gelatiera-3-v-320x480.jpg";
const pnnaImg = "./resources/Images/g-image/panna.jpg";
const cntuImg = "./resources/Images/g-image/gelato-almond.jpg"
const crmlImg = "./resources/Images/g-image/creme-caramel-wfgfytonkyxn.jpg";
const cstgnaImg = "./resources/Images/g-image/OIP.jpg";

const gImgList = [hzlImg, trmSuImg, zppaImg, pnnaImg, cntuImg, crmlImg, cstgnaImg]


// Gelato Text Section

const hzlTxt = "Savor the sophisticated of indulgence wiht our Hazelnut Gelato - a Symphony of rich, nutty perfection. Immerse your taste buds in a velvetyblend of finely roasted hazelnuts, meticulously crafted into a luscious gelato";
const trmSuTxt = "Introducing our Tiramisu Gelato - a captivating fustion of Italian decadence and frozen bliss. Immerse yourself in layers of velvety mascarpone, delicate ladyginfers, and a hing of cocoa, meticulously churned into a dreamy gelato";
const zppaTxt = "Dive into the enchanting world of our Zuppa Inglese Gleato - a tantalizing blend of Itlalian sophistication and frozen delight. Immerse your senses in layers of velvety ustard, decadent chocolate, and a whisper of liqueur, skillfully crafted into a heavenly gelato";
const pnnaTxt = "Savo each spoonful as teh pure indulgence of Panna Gelato melts on your palate, leaving behind a trail of decadent delight. Whether enjoyed on its own or as a perfect accompaniment to your favorite desserts, our Panna Gelato promises a luscious and luxurious escape int othe world of creamery perfection";
const cntuTxt = "Immerse yourself in the enchanting marrige of crumbly cantucci cookies and velvety gelato. Each schoop is a celebration of textures, as the sweet crunch of almond-studded cantucci meets the creamy embrace of our artisanal gelato";
const crmlTxt = "A symphony of velvety caramel swirls that dance on your taste buds. Immerse yourself in the reichness of golden caramel, meticulously churned into a creamy masterpiece. Each spoonful is a journey through a caramel lover's paradise, where every nuance of swetness unfolds in perfect harmony";
const cstgnaTxt = "Indulge in the rich, earthy flabor of roasted chestnuts, skillfully blended in to a velvety gelato. Each spoonful unveils the distinctive taste of fall, offering a symphony of nuttiness that trancends orfinary desserts";

const gTextlist = [hzlTxt, trmSuTxt, zppaTxt, pnnaTxt, cntuTxt, crmlTxt, cstgnaTxt];


//Frozen Yogurt Image Section

const chocYgImg = "./resources/Images/yg-img/OIP (1).jpg";
const vanillaYgImg = "./resources/Images/yg-img/vanilla-yg.jpg";
const cfeeImg = "./resources/Images/yg-img/coffee-froyo-2.png";
const trtImg = "./resources/Images/yg-img/trt-yg.jpg";
const cookiesYgImg = "./resources/Images/yg-img/cks-cream-yg.jpg";
const chscakeImg = "./resources/Images/yg-img/cheesecake-yg.jpg";
const blbrryImg = "./resources/Images/yg-img/blueberry-yg.jpg";
const ccnImg = "./resources/Images/yg-img/coco-yg.jpg";
const wtrmlnImg = "./resources/Images/yg-img/wtrmln-yg.jpg";
const orngImg = "./resources/Images/yg-img/peach-yg.jpg";

const ygImgList = [chocYgImg, vanillaYgImg, cfeeImg, trtImg, cookiesYgImg, chscakeImg, blbrryImg, ccnImg, wtrmlnImg, orngImg];


// Frozen Yogurt Text Section

//Frozen Yogurt Button

const ygChoBtn = document.getElementById("yg-choc-btn");
const ygVnllaBtn = document.getElementById("yg-vnlla-btn");
const ygCfeeBtn = document.getElementById("yg-cffee-btn");
const ygtrtBtn = document.getElementById("yg-trt-btn");
const ygCksCremBtn = document.getElementById("yg-cksCrem-btn");
const ygChscakeBtn = document.getElementById("yg-chscake-btn");
const ygBlbrryBtn = document.getElementById("yg-blberry-btn");
const ygCocoBtn = document.getElementById("yg-ccnt-btn");
const ygWtrmlBtn = document.getElementById("yg-wtrmln-btn");
const ygOrngBtn = document.getElementById("yg-orng-btn");

const ygBtnList = [ygChoBtn, ygVnllaBtn, ygCfeeBtn, ygtrtBtn, ygCksCremBtn, ygChscakeBtn, ygBlbrryBtn, ygCocoBtn, ygWtrmlBtn, ygOrngBtn];


const chocYgTxt = "Satisfy your chocolate cravings guilt free with our Chocoalte Frozen Yogurt - a delightful susion of rich cocoa goodness and the tangy allure of yogurt. Immerse yourself in the velvety smoothness of chocoalte, expertly blended into a creamy frozen yogurt";
const vanillaYgTxt = "Expierence the perfect balance of indulgence and guilt-free delight with our Vanilla Frozen Yogurt. Immerse yourself in the velvety smoothenss of premium vanilla flavor, blended flawlessly into a refreshing frozen yogurt";
const cfeeTxt = "Awaken your taste buds iwht our Coffee Frozen Yogurt - a delightful fusion of bold coffee flavor and the creamy goodness of yogurt. Immerse yourself in the rich, aromatic notes of premium coffee expertly blended into a velvety frozen yogurt";
const trtTxt = "Delight in the tangy sensation of our Tart Frozen Yogurt - a refreshing and vibrant expierence for your taste buds. Immerse yourself in the zesty goodness of yogurt, expertly crafted into a velvety frozen treat";
const cookiesYgTxt = "Indulge inte hbesy of both worlds with our Cookies and Cream Frozen Yogurt - a delightful fusion of creamy yogurt and irresistable cookies chunks. Immerse yourself in the velvety smoothness of frozen yogurt";
const chscakeTxt = "Savor the guilt-free pleasure of this delightful treat, creating a perfect balance of flavor that's both delicious and refreshing. Treat yourself yo the elegance of Cheesecake Frozen Yogurt - a truly divine frozen dessert expierence";
const blbrryTxt = "A delightful fusion of tart blueberries and creamy yogurt. Immerse yourself in the liuscious swilrs of frozen yogurt, expertly infused with the vibrant flavor of ripe blueberries. Each spoonful is a journey into a world of fruity bliss, where the tangy notes of bluebrry perfectly compliment the smooth yogurt base.";
const ccnTxt = "Expierence tropical bliss of our Coco Frozen Yogurt - a luscious blend of coconut delight and creamy yogurt. Immerse yourself in the velvety smoothness of forzen yogurt, generously infused with the exotic flavor of coconut.";
const wtrmlnTxt = "A refreshing blend of juicy watermelon and creamy yogurt. Immerse yourself in the vibrant swirlds of frozen yogurt, expertly infused with the sweet essance of sun-ripened watermelon. Elevate your dessert expierence with the invigorating allure of Watermelon Frozen Yogurt.";
const orngTxt = "A delightflu blend of creamy yogurt and the sweet juiciness of ripe eaches. Immerse yourself in the velvety swirls of forzen yogurt, expertly infused with teh refresing essance of sun-kissed peaches. Each spoonful is a burst of fruty delight, where the smoothness of yogurt meets the juicy and sweet notes of peach.";

const ygTxtList = [chocYgTxt, vanillaYgTxt, cfeeTxt, trtTxt, cookiesYgTxt, chscakeTxt, blbrryTxt, ccnTxt, wtrmlnTxt, orngTxt];

//All Headers 

const icHeader = document.getElementById("ic-header-txt");
const siHeader = document.getElementById("si-header-txt");
const gHeader = document.getElementById("g-header-text");
const ygHeader = document.getElementById("yg-header-text");


const headerList = [icHeader, siHeader, gHeader, ygHeader];

// All Sub Text Containers

const icSubText = document.getElementById("ic-sub-text");
const siSubText = document.getElementById("si-sub-text");
const gSubText = document.getElementById("g-sub-text");
const ygSubText = document.getElementById("yg-sub-text");

const subTextList = [icSubText, siSubText, gSubText, ygSubText];


//My functions in order to change layout for my menu based on what button the user selects

function changeLayout(imageTarget, myImage, myHeader, myHeaderText, textTarget, myText){
    console.log("Layout Changed!");
    document.getElementById(imageTarget).src = myImage;
    myHeader.innerHTML = myHeaderText;
    textTarget.innerHTML = myText;
}


//Ice Cream Button Toggle Ice Cream Section

icBtnList[0].addEventListener("click", chocolateBtnIc);
function chocolateBtnIc(){
    changeLayout("vanilla-IC", icImagesList[0], headerList[0], "Chocolate", subTextList[0] , icTextList[0]);
} 


icBtnList[1].addEventListener("click", vanillaBtnIc);
function vanillaBtnIc(){
    changeLayout("vanilla-IC", icImagesList[1], headerList[0], "Vanilla", subTextList[0], icTextList[1]);
}


icBtnList[2].addEventListener("click", strawberryBtnIC);
function strawberryBtnIC(){
    changeLayout("vanilla-IC", icImagesList[2], headerList[0], "Strawberry", subTextList[0], icTextList[2]);
}

icBtnList[3].addEventListener("click", mintBtn);
function mintBtn(){
    changeLayout("vanilla-IC", icImagesList[3], headerList[0], "Mint Chocolate", subTextList[0], icTextList[3]);
}

icBtnList[4].addEventListener("click", butterPecanBtn);
function butterPecanBtn(){
    changeLayout("vanilla-IC", icImagesList[4], headerList[0], "Butter Pecan", subTextList[0], icTextList[4]);
}

icBtnList[5].addEventListener("click", rockyRoadBtn);
function rockyRoadBtn(){
    changeLayout("vanilla-IC", icImagesList[5], headerList[0], "Rocky Road", subTextList[0], icTextList[5]);
}

icBtnList[6].addEventListener("click", cookiesCreamBtn);
function cookiesCreamBtn(){
    changeLayout("vanilla-IC", icImagesList[6], headerList[0], "Cookies And Cream", subTextList[0], icTextList[6]);
}

icBtnList[7].addEventListener("click", cookieDoughBtn);
function cookieDoughBtn(){
    changeLayout("vanilla-IC", icImagesList[7], headerList[0], "Cookie Doough", subTextList[0], icTextList[7]);
}

//Shaved ice cream Toggle Button Section

siBtnList[0].addEventListener("click", mangonadaBtn);
function mangonadaBtn(){
    changeLayout("shaved-IC", siImgList[0], headerList[1], "Mangonada", subTextList[1], siTextList[0]);
}

siBtnList[1].addEventListener("click", cherryBtn);
function cherryBtn(){
    changeLayout("shaved-IC", siImgList[1], headerList[1], "Cherry", subTextList[1], siTextList[1]);
}

siBtnList[2].addEventListener("click", strawberryBtnSi);
function strawberryBtnSi(){
    changeLayout("shaved-IC", siImgList[2], headerList[1], "Strawberry", subTextList[1], siTextList[2]);
}

siBtnList[3].addEventListener("click", bannanaBtn);
function bannanaBtn (){
    changeLayout("shaved-IC", siImgList[3], headerList[1], "Banana", subTextList[1], siTextList[3]);
}

siBtnList[4].addEventListener("click", bubbleGumBtn);
function bubbleGumBtn (){
    changeLayout("shaved-IC", siImgList[4], headerList[1], "Bubble Gum", subTextList[1], siTextList[4]);
}

siBtnList[5].addEventListener("click", punchBtn);
function punchBtn (){
    changeLayout("shaved-IC", siImgList[5], headerList[1], "Punch", subTextList[1], siTextList[5]);
}

siBtnList[6].addEventListener("click", grapeBtn);
function grapeBtn (){
    changeLayout("shaved-IC", siImgList[6], headerList[1], "Grape", subTextList[1], siTextList[6]);
}

siBtnList[7].addEventListener("click", greenAppleBtn);
function greenAppleBtn(){
    changeLayout("shaved-IC", siImgList[7], headerList[1], "Green Apple", subTextList[1], siTextList[7]);
}

//Gealto Toggle Button Section

gelatoBtnList[0].addEventListener("click", hazelnutBtn);
function hazelnutBtn (){
    changeLayout("gelato", gImgList[0], headerList[2], "Hazelnut", subTextList[2], gTextlist[0]);
}

gelatoBtnList[1].addEventListener("click", tiramisuBtn);
function tiramisuBtn(){
    changeLayout("gelato", gImgList[1], headerList[2], "Tiramisu", subTextList[2], gTextlist[1]);
}

gelatoBtnList[2].addEventListener("click", zuppaBtn);
function zuppaBtn(){
    changeLayout("gelato", gImgList[2], headerList[2], "Zuppa Inglese", subTextList[2], gTextlist[2]);
}

gelatoBtnList[3].addEventListener("click", pannaBtn);
function pannaBtn(){
    changeLayout("gelato", gImgList[3], headerList[2], "Panna Cotta", subTextList[2], gTextlist[3]);
}

gelatoBtnList[4].addEventListener("click", cantucciBtn);
function cantucciBtn(){
    changeLayout("gelato", gImgList[4], headerList[2], "Cantucci", subTextList[2], gTextlist[4]);
}

gelatoBtnList[5].addEventListener("click", caramelBtn);
function caramelBtn(){
    changeLayout("gelato", gImgList[5], headerList[2], "Caramel", subTextList[2], gTextlist[5]);
}

gelatoBtnList[6].addEventListener("click", castagnaButton);
function castagnaButton(){
    changeLayout("gelato", gImgList[6], headerList[2], "Castagna", subTextList[2], gTextlist[6]);
}

// Fozen Yogurt Section

ygBtnList[0].addEventListener("click", ygChocolateBtn);
function ygChocolateBtn (){
    changeLayout("greek-yg", ygImgList[0], headerList[3], "Chocolate", subTextList[3], ygTxtList[0]);
}


ygBtnList[1].addEventListener("click", ygVanillaBtn);
function ygVanillaBtn (){
    changeLayout("greek-yg", ygImgList[1], headerList[3], "Vanilla", subTextList[3], ygTxtList[1]);
}

ygBtnList[2].addEventListener("click", ygCoffeeBtn);
function ygCoffeeBtn (){
    changeLayout("greek-yg", ygImgList[2], headerList[3], "Coffee", subTextList[3], ygTxtList[2]);
}


ygBtnList[3].addEventListener("click", tartBtn);
function tartBtn (){
    changeLayout("greek-yg", ygImgList[3], headerList[3], "Tart", subTextList[3], ygTxtList[3]);
}


ygBtnList[4].addEventListener("click", cookiesCreamBtnYg);
function cookiesCreamBtnYg (){
    changeLayout("greek-yg", ygImgList[4], headerList[3], "Cookies And Cream", subTextList[3], ygTxtList[4]);
}


ygBtnList[5].addEventListener("click", cheesecakeBtn);
function cheesecakeBtn (){
    changeLayout("greek-yg", ygImgList[5], headerList[3], "CheeseCake", subTextList[3], ygTxtList[5]);
}


ygBtnList[6].addEventListener("click", blueberryBtn);
function blueberryBtn(){
    changeLayout("greek-yg", ygImgList[6], headerList[3], "BlueBerry", subTextList[3], ygTxtList[6]);
}

ygBtnList[7].addEventListener("click", cocoBtn);
function cocoBtn(){
    changeLayout("greek-yg", ygImgList[7], headerList[3], "Coconut", subTextList[3], ygTxtList[7]);
}


ygBtnList[8].addEventListener("click", watermelonBtn);
function watermelonBtn (){
    changeLayout("greek-yg", ygImgList[8], headerList[3], "Watermelon", subTextList[3], ygTxtList[8]);
}

ygBtnList[9].addEventListener("click", peachBtn);
function peachBtn (){
    changeLayout("greek-yg", ygImgList[9], headerList[3], "Peach", subTextList[3], ygTxtList[9]);
}



