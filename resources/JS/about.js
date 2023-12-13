//Button Toggle text-content-
const plus1 = document.getElementById("plus1");
const plus2 = document.getElementById("plus2");
const plus3 = document.getElementById("plus3");
const plus4 = document.getElementById("plus4");
const plus5 = document.getElementById("plus5");
const plus6 = document.getElementById("plus6");

const plusList = [plus1, plus2, plus3, plus4, plus5, plus6];


//TextBox Item List
const txtBox1 = document.getElementById("textBox1");
const txtBox2 = document.getElementById("textBox2");
const txtBox3 = document.getElementById("textBox3");
const txtBox4 = document.getElementById("textBox4");
const txtBox5 = document.getElementById("textBox5");
const txtBox6 = document.getElementById("textBox6");

const textBoxList = [txtBox1, txtBox2, txtBox3, txtBox4, txtBox5, txtBox6];

//TextContent Item List
const content1 = document.getElementById("text-content-1");
const content2 = document.getElementById("text-content-2");
const content3 = document.getElementById("text-content-3");
const content4 = document.getElementById("text-content-4");
const content5 = document.getElementById("text-content-5");
const content6 = document.getElementById("text-content-6");

const textContentList = [content1, content2, content3, content4, content5, content6];

//Initially hides the text content


for (var i=0; i < plusList.length; i++){
    if (plusList[i].getAttribute("aria-expanded") == "false"){
        textContentList[i].classList.toggle("faq-textContent-static");
    }
}







function dropdownReset(a){
    for (var i = 0; i < plusList.length; i++){
        if ((plusList[a] != plusList[i]) && (plusList[i].getAttribute("aria-expanded") == "true")){
            const target = [i];
            console.log(target);
            plusList[target].classList.remove("faq-toggle-active");
            plusList[target].classList.toggle("faq-toggle-static");
            plusList[target].setAttribute("aria-expanded", "false");



            textBoxList[target].classList.remove("faq-textBox-active");
            textBoxList[target].classList.toggle("faq-textBox-static");
            textBoxList[target].setAttribute("aria-expanded", "false");



            textContentList[target].classList.remove("faq-textContent-active");
            textContentList[target].classList.toggle("faq-textContent-static");
            textContentList[target].setAttribute("aria-expanded", "false");
        }
    }
}

function toggleSwitch(a){
    if (plusList[a].getAttribute("aria-expanded") == "false"){
        plusList[a].setAttribute("aria-expanded", "true");
        plusList[a].classList.remove("faq-toggle-static");
        plusList[a].classList.toggle("faq-toggle-active");




        textBoxList[a].setAttribute("aria-expanded", "true");
        textBoxList[a].classList.remove("faq-textBox-static");
        textBoxList[a].classList.toggle("faq-textBox-active");



        textContentList[a].setAttribute("aria-expanded", "true");
        textContentList[a].classList.remove("faq-textContent-static");
        textContentList[a].classList.toggle("faq-textContent-active");

    }
    else if (plusList[a].getAttribute("aria-expanded") == "true"){
        plusList[a].setAttribute("aria-expanded", "false");
        plusList[a].classList.remove("faq-toggle-active");
        plusList[a].classList.toggle("faq-toggle-static");

        textBoxList[a].setAttribute("aria-expanded", "false");
        textBoxList[a].classList.remove("faq-textBox-active");
        textBoxList[a].classList.toggle("faq-textBox-static");

        textContentList[a].setAttribute("aria-expanded", "false");
        textContentList[a].classList.remove("faq-textContent-active");
        textContentList[a].classList.toggle("faq-textContent-static");
    }
}


plus1.addEventListener("click", toggleButtonP1);

function toggleButtonP1(){
    dropdownReset(0);
    toggleSwitch(0);
}


plus2.addEventListener("click", toggleButtonP2);

function toggleButtonP2(){
    dropdownReset(1);
    toggleSwitch(1);
}


plus3.addEventListener("click", toggleButtonP3);

function toggleButtonP3(){
    dropdownReset(2);
    toggleSwitch(2);
}


plus4.addEventListener("click", toggleButtonP4);

function toggleButtonP4(){
    dropdownReset(3);
    toggleSwitch(3);
}


plus5.addEventListener("click", toggleButtonP5);

function toggleButtonP5(){
    dropdownReset(4);
    toggleSwitch(4);
}


plus6.addEventListener("click", toggleButtonP6);

function toggleButtonP6(){
    dropdownReset(5);
    toggleSwitch(5);
}