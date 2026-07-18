// ===============================
// Typing Effect
// ===============================


const words = [

"Cybersecurity Student",

"Ethical Hacking",

"Linux & Windows",

"Security Research",

"Programming"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typing = document.getElementById("typing");



function typeEffect(){


let currentWord = words[wordIndex];



if(!deleting){


typing.textContent =
currentWord.substring(0,charIndex++);



if(charIndex > currentWord.length){


deleting = true;

setTimeout(typeEffect,1000);

return;

}



}else{


typing.textContent =
currentWord.substring(0,charIndex--);



if(charIndex < 0){


deleting = false;

wordIndex++;


if(wordIndex >= words.length){

wordIndex = 0;

}


}


}



setTimeout(typeEffect,80);


}



typeEffect();









// ===============================
// Copy Button
// ===============================


function copyText(text){


navigator.clipboard.writeText(text)


.then(()=>{


alert("Copied successfully ✓");


});


}









// ===============================
// Translation
// ===============================


const translations = {


en:{


home:"Home",

aboutNav:"About",

skillsNav:"Skills",

projectsNav:"Projects",

contactNav:"Contact",



contactBtn:"Contact Me",



aboutTitle:"About Me",

skillsTitle:"Skills",

projectsTitle:"Projects",

contactTitle:"Contact",



name:"REPO",




intro:

"I'm Saged, passionate about cybersecurity, technology and programming. I'm building my journey in cybersecurity and working toward creating RPL Cyber Security.",





about:

"I'm Saged. I am interested in cybersecurity, ethical hacking, Linux, Windows systems, programming and technology. I'm continuously learning and improving my knowledge in security, systems and networks with the goal of becoming a cybersecurity expert and building RPL Cyber Security in the future."

},







ar:{


home:"الرئيسية",

aboutNav:"عني",

skillsNav:"المهارات",

projectsNav:"المشاريع",

contactNav:"التواصل",



contactBtn:"تواصل معي",



aboutTitle:"نبذة عني",

skillsTitle:"المهارات",

projectsTitle:"المشاريع",

contactTitle:"التواصل",



name:"ريبو",




intro:

"أنا ساجد، مهتم بالأمن السيبراني والبرمجة والتكنولوجيا. ببني رحلتي في مجال السايبر وبطور نفسي عشان أوصل لمستوى احترافي وأعمل RPL Cyber Security.",





about:

"أنا ساجد. مهتم بالأمن السيبراني والـ Ethical Hacking والـ Linux والـ Windows والبرمجة وكل حاجة ليها علاقة بالكمبيوتر والتكنولوجيا. بتعلم وبطور نفسي باستمرار في مجال أمن المعلومات والأنظمة والشبكات، وهدفي أكون خبير في الأمن السيبراني وأبني شركة RPL Cyber Security في المستقبل."

}


};









// ===============================
// Change Language
// ===============================


function changeLang(lang){



document.documentElement.lang = lang;



if(lang === "ar"){


document.documentElement.dir = "rtl";


}else{


document.documentElement.dir = "ltr";


}






document.querySelectorAll("[data-lang]")
.forEach(element=>{


let key = element.dataset.lang;



if(translations[lang][key]){


element.textContent =
translations[lang][key];


}



});





document.getElementById("name").textContent =

translations[lang].name;





document.getElementById("intro").textContent =

translations[lang].intro;





document.getElementById("aboutText").textContent =

translations[lang].about;



}









// ===============================
// Language Menu
// ===============================


const langBtn =
document.getElementById("langBtn");


const langMenu =
document.getElementById("langMenu");



langBtn.onclick = ()=>{


langMenu.classList.toggle("show");


};









// ===============================
// Scroll Animation
// ===============================


const sections =
document.querySelectorAll("section");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";


}


});


});





sections.forEach(section=>{


section.style.opacity="0";


section.style.transform="translateY(40px)";


section.style.transition="0.8s ease";



observer.observe(section);


});









console.log(`

========================

 REPO CYBER SECURITY

 SYSTEM ONLINE ✓

========================

`);