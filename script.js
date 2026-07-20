/* =====================================
   RPL CYBER SECURITY V2
===================================== */

"use strict";

/* ==========================
   Translations
========================== */

const translations = {

en:{

nav_home:"Home",
nav_about:"About",
nav_services:"Services",
nav_projects:"Projects",
nav_contact:"Contact",

loader_text:"Initializing Secure Environment...",

hero_terminal:"root@rpl:~$ system_online",
hero_desc:"RPL Cyber Security is an early-stage startup building practical cyber security solutions through hands-on research, ethical hacking, and secure software development. We are still growing — and building in the open.",

btn_explore:"Explore RPL",
btn_contact:"Contact Us",

about_title:"About RPL",
about_who_title:"Who Is RPL?",
about_who_p1:"RPL Cyber Security is an early-stage cyber security startup. We are currently in our building phase, laying the groundwork for the research, tools, and services we plan to offer.",
about_who_p2:"Our work today is focused on hands-on learning, security research, and developing the practical skills that will shape RPL's future services.",
about_vision_title:"Our Vision",
about_vision_p1:"To grow into a trusted cyber security brand that combines continuous research with practical, real-world solutions — helping individuals and businesses stay secure in an evolving digital landscape.",
about_mission_title:"Our Mission",
about_mission_p1:"To build a solid foundation of security expertise through ethical hacking practice, security research, and secure software development, and to grow step by step into a team capable of delivering reliable security services.",

services_title:"Future Services",
services_subtitle:"RPL is still growing. The services below are planned for future release as our team and expertise expand.",
service1_title:"Penetration Testing",
service1_desc:"Ethical hacking engagements to help identify and address security weaknesses before attackers do.",
service2_title:"Security Consulting",
service2_desc:"Guidance and best practices to help teams build and maintain a more secure digital environment.",
service3_title:"Vulnerability Assessment",
service3_desc:"Structured scanning and risk assessment for systems and infrastructure.",
service4_title:"Secure Web Development",
service4_desc:"Building websites and web applications with security best practices in mind from the start.",
service5_title:"Linux Hardening",
service5_desc:"Configuring and hardening Linux servers to reduce attack surface.",
service6_title:"Security Automation",
service6_desc:"Custom scripts and tools to automate repetitive security tasks.",
service7_title:"Incident Response",
service7_desc:"Rapid response support to help contain, investigate, and recover from security incidents.",
service8_title:"Cloud Security",
service8_desc:"Securing cloud environments and configurations against common misconfigurations and threats.",

projects_title:"Our Projects",
projects_subtitle:"Our projects are currently under development. More details will be shared as they take shape.",
status_dev:"In Development",
project1_title:"RPL Recon Toolkit",
project1_desc:"An internal toolkit for reconnaissance and OSINT gathering during security research.",
project2_title:"RPL Vulnerability Scanner",
project2_desc:"A Python-based scanner concept for identifying common security misconfigurations.",
project3_title:"RPL Automation Scripts",
project3_desc:"A growing collection of scripts to automate routine security research tasks.",

contact_title:"Contact RPL",
contact_subtitle:"Have a question or want to follow our progress? Reach out to us through any of the channels below.",
contact_email_title:"Email",
btn_send_email:"Send Email",
contact_discord_title:"Discord",
contact_discord_desc:"Join Our Community",
btn_join_server:"Join Server",
contact_whatsapp_title:"WhatsApp",
contact_whatsapp_desc:"Contact Directly",
btn_chat_now:"Chat Now",
contact_instagram_title:"Instagram",
contact_instagram_desc:"Follow Us",
btn_follow_now:"Follow",

footer_desc:"Building the future of secure digital solutions.",
footer_home:"Home",
footer_contact:"Contact",
footer_rights:"All Rights Reserved.",

chatbot_title:"RPL Assistant",
chatbot_placeholder:"Ask a question...",
chatbot_greeting:"Hey! 👋 I'm the RPL assistant. Ask me about our services, projects, or how to get in touch.",
chatbot_fallback:"I can only help with information about RPL's website — try asking about our services, projects, or how to contact us.",
chatbot_intent_greeting:"Hey there! 👋 Welcome — ask me anything about RPL Cyber Security.",
chatbot_intent_thanks:"You're welcome! 😊 Let me know if you need anything else.",
chatbot_topic_services:"Our services",
chatbot_topic_projects:"Our projects",
chatbot_topic_about:"Who is RPL?",
chatbot_topic_contact:"How to contact you",
chatbot_answer_services:"We're planning Penetration Testing, Security Consulting, Vulnerability Assessment, Secure Web Development, Linux Hardening, Security Automation, Incident Response, and Cloud Security. These are upcoming services as RPL grows — check the Services section for details.",
chatbot_answer_projects:"We're currently building the RPL Recon Toolkit, RPL Vulnerability Scanner, and RPL Automation Scripts — all still in development. Check out the Projects section for more.",
chatbot_answer_about:"RPL Cyber Security is an early-stage startup building the foundation for our future research, tools, and services. Right now we're focused on hands-on learning and security research.",
chatbot_answer_contact:"You can reach us by Email, Discord, WhatsApp, or Instagram — scroll down to the Contact section for direct links."

},

ar:{

nav_home:"الرئيسية",
nav_about:"من نحن",
nav_services:"الخدمات",
nav_projects:"المشاريع",
nav_contact:"تواصل",

loader_text:"جاري تهيئة البيئة الآمنة...",

hero_terminal:"root@rpl:~$ النظام_شغال",
hero_desc:"إحنا RPL Cyber Security، شركة ناشئة لسه في أول خطواتها، وبنبني حلول أمن سيبراني عملية من خلال بحث تطبيقي واختراق أخلاقي وتطوير برمجيات آمنة. لسه في مرحلة البناء، وبنشارككم كل خطوة أول بأول.",

btn_explore:"استكشف RPL",
btn_contact:"كلمنا",

about_title:"مين احنا",
about_who_title:"مين RPL؟",
about_who_p1:"RPL Cyber Security شركة ناشئة في مجال الأمن السيبراني، دلوقتي بنبني الأساس بتاعنا، يعني بنركز على البحث والأدوات والخدمات اللي هنقدمها في المستقبل.",
about_who_p2:"شغلنا حاليًا متركز على التعلم العملي والبحث الأمني، وبنطور المهارات اللي هتشكّل خدمات RPL في المستقبل.",
about_vision_title:"رؤيتنا",
about_vision_p1:"حلمنا إننا نبقى اسم موثوق في عالم الأمن السيبراني، ندمج فيه البحث المستمر مع حلول عملية وواقعية تساعد الأفراد والشركات يفضلوا آمنين في عالم رقمي بيتغير كل يوم.",
about_mission_title:"مهمتنا",
about_mission_p1:"بنبني نفسنا خطوة خطوة، من خلال الاختراق الأخلاقي والبحث الأمني وتطوير برمجيات آمنة، لحد ما نوصل لفريق قادر يقدّم خدمات أمنية تقدر تعتمد عليها.",

services_title:"خدماتنا الجاية",
services_subtitle:"RPL لسه في أول الطريق، والخدمات دي هنطرحها بعدين مع ما فريقنا وخبرتنا يكبروا.",
service1_title:"اختبار الاختراق",
service1_desc:"عمليات اختراق أخلاقي بتساعد نكتشف نقاط الضعف الأمنية ونعالجها قبل ما حد يستغلها.",
service2_title:"استشارات أمنية",
service2_desc:"إرشادات وأفضل الممارسات بتساعد الفرق يبنوا ويحافظوا على بيئة رقمية أكتر أمانًا.",
service3_title:"تقييم الثغرات",
service3_desc:"فحص منظم وتقييم مخاطر للأنظمة والبنية التحتية.",
service4_title:"تطوير مواقع آمنة",
service4_desc:"بناء مواقع وتطبيقات ويب مع مراعاة أفضل ممارسات الأمان من أول خطوة.",
service5_title:"تحصين سيرفرات لينكس",
service5_desc:"إعداد وتحصين سيرفرات لينكس عشان نقلل نقاط الاختراق المحتملة.",
service6_title:"أتمتة العمليات الأمنية",
service6_desc:"سكربتات وأدوات مخصصة لأتمتة المهام الأمنية المتكررة.",
service7_title:"الاستجابة للحوادث الأمنية",
service7_desc:"دعم سريع يساعدنا نحتوي الحادث الأمني ونحقق فيه ونرجع الأمور لطبيعتها.",
service8_title:"أمن السحابة",
service8_desc:"تأمين بيئات وإعدادات الكلاود من الأخطاء الشائعة والتهديدات.",

projects_title:"مشاريعنا",
projects_subtitle:"مشاريعنا لسه تحت التطوير، وهنشارككم التفاصيل أول ما تخلص.",
status_dev:"قيد التطوير",
project1_title:"RPL Recon Toolkit",
project1_desc:"أداة داخلية بنجمع بيها معلومات استطلاعية وOSINT وقت البحث الأمني.",
project2_title:"RPL Vulnerability Scanner",
project2_desc:"فكرة أداة فحص ببايثون بتكتشف الأخطاء الأمنية الشائعة في الإعدادات.",
project3_title:"RPL Automation Scripts",
project3_desc:"مجموعة سكربتات بتكبر يوم بعد يوم، بتساعدنا نؤتمت مهام البحث الأمني الروتينية.",

contact_title:"تواصل معانا",
contact_subtitle:"عندك سؤال أو حابب تتابعنا؟ كلمنا من أي قناة من دول.",
contact_email_title:"البريد الإلكتروني",
btn_send_email:"إرسال بريد",
contact_discord_title:"ديسكورد",
contact_discord_desc:"انضم لمجتمعنا",
btn_join_server:"انضم للسيرفر",
contact_whatsapp_title:"واتساب",
contact_whatsapp_desc:"تواصل مباشرة",
btn_chat_now:"ابدأ المحادثة",
contact_instagram_title:"إنستجرام",
contact_instagram_desc:"تابعنا",
btn_follow_now:"متابعة",

footer_desc:"بنبني مستقبل الحلول الرقمية الآمنة.",
footer_home:"الرئيسية",
footer_contact:"تواصل",
footer_rights:"جميع الحقوق محفوظة.",

chatbot_title:"مساعد RPL",
chatbot_placeholder:"اسأل سؤال...",
chatbot_greeting:"هاي! 👋 أنا مساعد RPL. اسألني عن خدماتنا أو مشاريعنا أو إزاي تتواصل معانا.",
chatbot_fallback:"أنا بس بقدر أساعدك بمعلومات جوه موقع RPL Cyber Security — جرب تسألني عن خدماتنا، مشاريعنا، أو إزاي تتواصل معانا.",
chatbot_intent_greeting:"وعليكم السلام ورحمة الله! 👋 أهلاً بيك، اسألني عن أي حاجة في موقع RPL Cyber Security.",
chatbot_intent_thanks:"العفو! 😊 لو محتاج أي حاجة تانية أنا موجود.",
chatbot_topic_services:"خدماتنا",
chatbot_topic_projects:"مشاريعنا",
chatbot_topic_about:"مين RPL؟",
chatbot_topic_contact:"إزاي أتواصل معاكم",
chatbot_answer_services:"احنا دلوقتي بنجهز خدمات زي اختبار الاختراق، استشارات أمنية، تقييم الثغرات، تطوير مواقع آمنة، تحصين سيرفرات لينكس، أتمتة العمليات الأمنية، الاستجابة للحوادث، وأمن السحابة. دول خدمات جاية مع نمو RPL — شوف قسم خدماتنا الجاية للتفاصيل.",
chatbot_answer_projects:"دلوقتي بنشتغل على RPL Recon Toolkit وRPL Vulnerability Scanner وRPL Automation Scripts، وكلهم لسه تحت التطوير. شوف قسم مشاريعنا لمزيد من التفاصيل.",
chatbot_answer_about:"RPL Cyber Security شركة ناشئة لسه في أول خطواتها، بنبني فيها الأساس بتاعنا من بحث وأدوات وخدمات جاية. دلوقتي بنركز على التعلم العملي والبحث الأمني.",
chatbot_answer_contact:"تقدر تتواصل معانا عن طريق الإيميل أو ديسكورد أو واتساب أو إنستجرام — انزل لقسم تواصل معانا تحت هتلاقي اللينكات مباشرة."

}

};

/* Words for the hero typing effect, per language */

const wordsByLang = {

en:[
    "Securing the Digital Future",
    "An Early-Stage Cyber Security Startup",
    "Research. Build. Secure.",
    "Building Practical Security Solutions",
    "Growing Through Research & Ethical Hacking"
],

ar:[
    "نؤمّن مستقبلك الرقمي",
    "شركة ناشئة في الأمن السيبراني",
    "نبحث. نبني. نؤمّن.",
    "نبني حلول أمنية عملية",
    "ننمو من خلال البحث والاختراق الأخلاقي"
]

};

/* Live terminal lines, per language */

const terminalLinesByLang = {

en:[

`root@rpl:~$ whoami

RPL_Cyber_Security

Stage : Early Startup ✓`,

`root@rpl:~$ systemctl status firewall

Firewall : Active

Threats : 0`,

`root@rpl:~$ nmap localhost

Scanning...

Ports : 22 80 443

Done.`,

`root@rpl:~$ python automation.py

Initializing...

Task Running...

Building in progress 🚧`,

`root@rpl:~$ echo "Welcome"

Welcome to RPL Cyber Security`

],

ar:[

`root@rpl:~$ whoami

RPL_Cyber_Security

المرحلة : شركة ناشئة ✓`,

`root@rpl:~$ systemctl status firewall

الجدار الناري : نشط

التهديدات : 0`,

`root@rpl:~$ nmap localhost

جارٍ الفحص...

المنافذ : 22 80 443

تم.`,

`root@rpl:~$ python automation.py

جارٍ التهيئة...

جارٍ تنفيذ المهمة...

قيد البناء 🚧`,

`root@rpl:~$ echo "مرحباً"

مرحباً بكم في RPL للأمن السيبراني`

]

};

/* ==========================
   Language State
========================== */

const langBtn = document.getElementById("langBtn");

let currentLang = localStorage.getItem("language") || "en";

/* These get (re)initialized once the typing + terminal
   sections below are set up, but applyLanguage needs to be
   able to reset them, so declare the hooks here. */

let resetTyping = () => {};
let resetTerminal = () => {};
let resetChatbotUI = () => {};

function applyLanguage(lang){

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;

        if(translations[lang][key]){
            el.textContent = translations[lang][key];
        }

    });

    document.querySelectorAll("[data-lang-placeholder]").forEach(el => {

        const key = el.dataset.langPlaceholder;

        if(translations[lang][key]){
            el.placeholder = translations[lang][key];
        }

    });

    localStorage.setItem("language", lang);

    resetTyping();
    resetTerminal();
    resetChatbotUI();

}

langBtn.innerHTML = '<i class="fa-solid fa-language"></i>';

langBtn.onclick = () => {

    currentLang = currentLang === "en" ? "ar" : "en";

    applyLanguage(currentLang);

};

/* ==========================
   Loader
========================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1800);

});


/* ==========================
   Typing Effect
========================== */

const typingElement = document.getElementById("typing");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const current = wordsByLang[currentLang][wordIndex];

    if (!deleting) {

        typingElement.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= wordsByLang[currentLang].length)

                wordIndex = 0;

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 90);

}

resetTyping = () => {

    wordIndex = 0;
    charIndex = 0;
    deleting = false;

    if(typingElement){
        typingElement.textContent = "";
    }

};

typingEffect();

/* ==========================
   Fade Animation
========================== */

const animatedItems = document.querySelectorAll(

    ".about-card,.skill-card,.service-card,.contact-card"

);

animatedItems.forEach(item=>{

    item.classList.add("fade-up");

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

animatedItems.forEach(item=>{

    observer.observe(item);

});

/* ==========================
   Back To Top Button
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Smooth Scroll
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================
   Live Terminal
========================== */

const terminal = document.getElementById("terminal");

let terminalIndex = 0;

function updateTerminal(){

    terminal.style.opacity = "0";

    setTimeout(()=>{

        terminal.textContent = terminalLinesByLang[currentLang][terminalIndex];

        terminal.style.opacity = "1";

        terminalIndex++;

        if(terminalIndex >= terminalLinesByLang[currentLang].length){

            terminalIndex = 0;

        }

    },300);

}

resetTerminal = () => {

    terminalIndex = 0;

    if(terminal){
        terminal.style.opacity = "1";
        terminal.textContent = terminalLinesByLang[currentLang][0];
    }

};

setInterval(updateTerminal,4000);


/* ==========================
   Terminal Cursor
========================== */

setInterval(()=>{

    if(!terminal.textContent.endsWith("█")){

        terminal.textContent += " █";

    }else{

        terminal.textContent = terminal.textContent.slice(0,-2);

    }

},600);

/* ==========================
   Mouse Glow Effect
========================== */

const glow = document.createElement("div");

glow.id = "mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/* ==========================
   Card Tilt Effect
========================== */

const cards = document.querySelectorAll(

".skill-card,.service-card,.contact-card,.about-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;

        const rotateX = (0.5 - y / rect.height) * 12;

        card.style.transform =

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/* ==========================
   Navbar Shadow
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.boxShadow = "none";

    }

});


/* ==========================
   Current Year
========================== */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/* ==========================
   Safe Element Check
========================== */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

/* ==========================
   Page Loaded Animation
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   Prevent Double Click
========================== */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("dragstart", e => {

        e.preventDefault();

    });

});

/* ==========================
   Keyboard Shortcuts
========================== */

document.addEventListener("keydown", (e) => {

    // Ctrl + Home
    if (e.ctrlKey && e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================
   Performance
========================== */

window.addEventListener("resize", () => {

    document.body.style.overflowX = "hidden";

});

/* ==========================
   Console Message
========================== */

console.clear();

console.log(

"%cRPL Cyber Security",

"color:#00a8ff;font-size:22px;font-weight:bold;"

);

console.log(

"%cWelcome Developer 👋",

"color:#00ff88;font-size:14px;"

);

console.log(

"%chttps://itreppo.github.io/rpl/",

"color:white;font-size:13px;"

);

/* ==========================
   Chatbot (FAQ Assistant)
========================== */

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotSuggestions = document.getElementById("chatbotSuggestions");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");

/* Suggestion chips shown when the chat first opens */
const chatbotTopics = [

    {
        id:"services",
        keywords:["service","services","offer","provide","pricing","price",
                   "خدم","خدمة","خدمات","بتقدموا","تقدموا","اسعار","سعر"],
        labelKey:"chatbot_topic_services",
        answerKey:"chatbot_answer_services"
    },
    {
        id:"projects",
        keywords:["project","projects","tool","tools",
                   "مشروع","مشاريع","اداة","أداة"],
        labelKey:"chatbot_topic_projects",
        answerKey:"chatbot_answer_projects"
    },
    {
        id:"about",
        keywords:["who","about","company","rpl",
                   "مين","انتوا","إنتوا","شركة","تعريف","احنا"],
        labelKey:"chatbot_topic_about",
        answerKey:"chatbot_answer_about"
    },
    {
        id:"contact",
        keywords:["contact","email","reach","talk","phone","discord","whatsapp","instagram",
                   "تواصل","ايميل","إيميل","واتس","واتساب","انستجرام","إنستجرام","ديسكورد","كلم","اتصال"],
        labelKey:"chatbot_topic_contact",
        answerKey:"chatbot_answer_contact"
    }

];

/* Fixed short replies for greetings / thanks — checked before anything else */
const chatbotIntents = [
    {
        id:"greeting",
        keywords:["hi","hello","hey","good morning","good evening",
                   "سلام","اهلا","أهلا","مرحبا","صباح الخير","مساء الخير","ازيك","إزيك","هاي"],
        replyKey:"chatbot_intent_greeting"
    },
    {
        id:"thanks",
        keywords:["thanks","thank you","thx","appreciate",
                   "شكرا","شكرًا","متشكر","تسلم","الله يخليك"],
        replyKey:"chatbot_intent_thanks"
    }
];

/* Narrow, specific matches for individual services/projects — reuse the
   exact same title/desc translation keys already used elsewhere on the
   site, so the chatbot always stays in sync with the page content. */
const chatbotKnowledge = [

    { keywords:["pentest","penetration","اختراق","بنتست"], titleKey:"service1_title", descKey:"service1_desc" },
    { keywords:["consult","advice","استشار"], titleKey:"service2_title", descKey:"service2_desc" },
    { keywords:["assessment","risk assessment","تقييم"], titleKey:"service3_title", descKey:"service3_desc" },
    { keywords:["secure web","web development","website security","تطوير مواقع","موقع آمن"], titleKey:"service4_title", descKey:"service4_desc" },
    { keywords:["linux hardening","harden linux","linux server","تحصين","لينكس"], titleKey:"service5_title", descKey:"service5_desc" },
    { keywords:["security automation","automate","اتمتة العمليات","أتمتة العمليات"], titleKey:"service6_title", descKey:"service6_desc" },
    { keywords:["incident response","incident","استجابة","حادث امني","حادث أمني"], titleKey:"service7_title", descKey:"service7_desc" },
    { keywords:["cloud security","cloud","كلاود","سحابة"], titleKey:"service8_title", descKey:"service8_desc" },

    { keywords:["recon","reconnaissance","osint","استطلاع","اوسينت","أوسينت"], titleKey:"project1_title", descKey:"project1_desc" },
    { keywords:["scanner","vulnerability scanner","سكانر","فحص ثغرات"], titleKey:"project2_title", descKey:"project2_desc" },
    { keywords:["automation script","scripts","سكربتات"], titleKey:"project3_title", descKey:"project3_desc" }

];

let chatbotStarted = false;

function addChatMsg(text,sender){

    const msg = document.createElement("div");
    msg.className = "chat-msg " + sender;
    msg.textContent = text;
    chatbotMessages.appendChild(msg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

}

function renderChatbotSuggestions(){

    chatbotSuggestions.innerHTML = "";

    chatbotTopics.forEach(topic => {

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = translations[currentLang][topic.labelKey];
        btn.addEventListener("click", () => handleTopic(topic));
        chatbotSuggestions.appendChild(btn);

    });

}

function handleTopic(topic){

    addChatMsg(translations[currentLang][topic.labelKey],"user");

    setTimeout(() => {
        addChatMsg(translations[currentLang][topic.answerKey],"bot");
    },300);

}

function findIntent(lower){

    return chatbotIntents.find(intent =>
        intent.keywords.some(k => lower.includes(k.toLowerCase()))
    );

}

function findKnowledge(lower){

    return chatbotKnowledge.find(item =>
        item.keywords.some(k => lower.includes(k.toLowerCase()))
    );

}

function findTopic(lower){

    return chatbotTopics.find(topic =>
        topic.keywords.some(k => lower.includes(k.toLowerCase()))
    );

}

function getBotReply(text){

    const lower = text.toLowerCase();

    const intent = findIntent(lower);
    if(intent) return translations[currentLang][intent.replyKey];

    const knowledge = findKnowledge(lower);
    if(knowledge){
        const title = translations[currentLang][knowledge.titleKey];
        const desc = translations[currentLang][knowledge.descKey];
        return title + " — " + desc;
    }

    const topic = findTopic(lower);
    if(topic) return translations[currentLang][topic.answerKey];

    return translations[currentLang].chatbot_fallback;

}

function startChat(){

    if(chatbotStarted) return;
    chatbotStarted = true;

    addChatMsg(translations[currentLang].chatbot_greeting,"bot");
    renderChatbotSuggestions();

}

chatbotToggle.addEventListener("click", () => {

    chatbotWindow.classList.toggle("open");

    if(chatbotWindow.classList.contains("open")){
        startChat();
        chatbotInput.focus();
    }

});

chatbotClose.addEventListener("click", () => {

    chatbotWindow.classList.remove("open");

});

chatbotForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const text = chatbotInput.value.trim();
    if(!text) return;

    addChatMsg(text,"user");
    chatbotInput.value = "";

    const reply = getBotReply(text);

    setTimeout(() => {
        addChatMsg(reply,"bot");
    },300);

});

resetChatbotUI = () => {

    if(chatbotStarted){
        renderChatbotSuggestions();
    }

};

/* ==========================
   Initial Language Apply
========================== */

applyLanguage(currentLang);

/* ==========================
   End
========================== */

console.log("Website Loaded Successfully.");
