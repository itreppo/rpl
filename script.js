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
nav_skills:"Skills",
nav_contact:"Contact",

loader_text:"Initializing Secure Environment...",

hero_terminal:"root@rpl:~$ system_online",
hero_desc:"Building secure digital solutions through Cyber Security, Programming, Security Research and Ethical Hacking.",

btn_skills:"Explore Skills",
btn_contact:"Contact Me",

about_title:"About Me",
about_who_title:"Who Am I?",
about_who_p1:"Hi, I'm Saged — founder of RPL Cyber Security. I focus on ethical hacking, security research, and building practical solutions across Linux and Windows environments.",
about_who_p2:"My mission is simple: build secure, reliable digital solutions and keep sharpening my skills so RPL can offer real value to the people and businesses we work with.",
about_features_title:"Our Features",
about_feature_1:"⚡ Fast & Reliable Support",
about_feature_2:"🔬 Continuous Security Research",
about_feature_3:"🛠️ Hands-on Practical Experience",
about_feature_4:"🎯 Tailored Solutions",
about_feature_5:"🤝 Honest & Trustworthy",
about_feature_6:"📈 Always Up To Date",

skills_title:"Skills",
skill1_title:"Cyber Security",
skill1_desc:"Solid grounding in security fundamentals, blue team practices, and ongoing research.",
skill2_title:"Linux",
skill2_desc:"Comfortable working across Kali Linux, Ubuntu, and the Bash command line.",
skill3_title:"Programming",
skill3_desc:"Writing tools and scripts in Python, JavaScript, HTML, and CSS.",
skill4_title:"Network Security",
skill4_desc:"Understanding TCP/IP, routing, firewalls, and traffic analysis with Wireshark.",
skill5_title:"Ethical Hacking",
skill5_desc:"Web application testing, OSINT gathering, and thorough enumeration.",
skill6_title:"Security Tools",
skill6_desc:"Hands-on experience with Burp Suite, Nmap, and Metasploit.",

services_title:"Our Services",
service1_title:"Security Assessment",
service1_desc:"Vulnerability scanning and risk assessment for your systems and infrastructure.",
service2_title:"Penetration Testing",
service2_desc:"Ethical hacking to find and fix security weaknesses before attackers do.",
service3_title:"Web Security",
service3_desc:"Securing websites and web apps against common and advanced attacks.",
service4_title:"Linux Server Hardening",
service4_desc:"Configuring and hardening Linux servers to reduce attack surface.",
service5_title:"Custom Security Tools",
service5_desc:"Building custom scripts and tools with Python for security tasks.",
service6_title:"Security Consulting",
service6_desc:"Guidance and best practices to keep your digital environment secure.",

contact_title:"Contact Me",
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

footer_desc:"Building Secure Digital Solutions.",
footer_home:"Home",
footer_skills:"Skills",
footer_contact:"Contact",
footer_copyright:"© 2026 RPL Cyber Security. All Rights Reserved."

},

ar:{

nav_home:"الرئيسية",
nav_about:"من نحن",
nav_skills:"المهارات",
nav_contact:"تواصل",

loader_text:"جاري تهيئة البيئة الآمنة...",

hero_terminal:"root@rpl:~$ النظام_متصل",
hero_desc:"نبني حلولاً رقمية آمنة من خلال الأمن السيبراني والبرمجة والبحث الأمني والاختراق الأخلاقي.",

btn_skills:"استكشف المهارات",
btn_contact:"تواصل معي",

about_title:"من نحن",
about_who_title:"من أنا؟",
about_who_p1:"أنا Saged، مؤسس RPL Cyber Security. أنا شغوف بالاختراق الأخلاقي والبحث الأمني، وبأبني حلول عملية فعلاً بتشتغل على بيئات لينكس وويندوز.",
about_who_p2:"هدفي بسيط: أبني حلول رقمية آمنة وموثوقة، وأفضل أطور نفسي باستمرار عشان RPL تقدر تقدّم قيمة حقيقية للناس والشركات اللي بنتعامل معاها.",
about_features_title:"مميزاتنا",
about_feature_1:"⚡ دعم سريع وموثوق",
about_feature_2:"🔬 بحث أمني مستمر",
about_feature_3:"🛠️ خبرة عملية حقيقية",
about_feature_4:"🎯 حلول مخصصة لاحتياجاتك",
about_feature_5:"🤝 مصداقية وأمانة في التعامل",
about_feature_6:"📈 مواكبة لآخر التهديدات والتقنيات",

skills_title:"المهارات",
skill1_title:"الأمن السيبراني",
skill1_desc:"أساسيات الأمن السيبراني، ممارسات الفريق الأزرق، والبحث المستمر.",
skill2_title:"لينكس",
skill2_desc:"شغل مريح على كالي لينكس وأوبونتو والتعامل مع الـ Bash.",
skill3_title:"البرمجة",
skill3_desc:"كتابة أدوات وسكربتات بلغات بايثون وجافاسكريبت و HTML و CSS.",
skill4_title:"أمن الشبكات",
skill4_desc:"فهم TCP/IP والتوجيه والجدران النارية وتحليل الترافيك بـ Wireshark.",
skill5_title:"الاختراق الأخلاقي",
skill5_desc:"اختبار تطبيقات الويب وجمع معلومات OSINT والاستكشاف الدقيق.",
skill6_title:"أدوات أمنية",
skill6_desc:"خبرة عملية بأدوات زي Burp Suite و Nmap و Metasploit.",

services_title:"خدماتنا",
service1_title:"تقييم الأمان",
service1_desc:"فحص الثغرات وتقييم المخاطر لأنظمتك وبنيتك التحتية.",
service2_title:"اختبار الاختراق",
service2_desc:"اختراق أخلاقي لاكتشاف نقاط الضعف الأمنية وإصلاحها قبل المهاجمين.",
service3_title:"أمن المواقع",
service3_desc:"تأمين المواقع وتطبيقات الويب ضد الهجمات الشائعة والمتقدمة.",
service4_title:"تحصين سيرفرات لينكس",
service4_desc:"إعداد وتحصين سيرفرات لينكس لتقليل نقاط الاختراق المحتملة.",
service5_title:"أدوات أمنية مخصصة",
service5_desc:"بناء سكربتات وأدوات مخصصة ببايثون للمهام الأمنية.",
service6_title:"استشارات أمنية",
service6_desc:"إرشادات وأفضل الممارسات للحفاظ على بيئتك الرقمية آمنة.",

contact_title:"تواصل معي",
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

footer_desc:"نبني حلولاً رقمية آمنة.",
footer_home:"الرئيسية",
footer_skills:"المهارات",
footer_contact:"تواصل",
footer_copyright:"© 2026 RPL Cyber Security. جميع الحقوق محفوظة."

}

};

/* Words for the hero typing effect, per language */

const wordsByLang = {

en:[
    "Cyber Security Researcher",
    "Ethical Hacker",
    "Python Developer",
    "Linux Enthusiast",
    "Security Researcher"
],

ar:[
    "باحث أمن سيبراني",
    "مخترق أخلاقي",
    "مطور بايثون",
    "عاشق لينكس",
    "باحث أمني"
]

};

/* Live terminal lines, per language */

const terminalLinesByLang = {

en:[

`root@rpl:~$ whoami

Saged

Status : Online ✓`,

`root@rpl:~$ systemctl status firewall

Firewall : Active

Threats : 0`,

`root@rpl:~$ nmap localhost

Scanning...

Ports : 22 80 443

Done.`,

`root@rpl:~$ python scanner.py

Initializing...

Scan Completed

0 Vulnerabilities Found.`,

`root@rpl:~$ echo "Welcome"

Welcome to RPL Cyber Security`

],

ar:[

`root@rpl:~$ whoami

Saged

الحالة : متصل ✓`,

`root@rpl:~$ systemctl status firewall

الجدار الناري : نشط

التهديدات : 0`,

`root@rpl:~$ nmap localhost

جارٍ الفحص...

المنافذ : 22 80 443

تم.`,

`root@rpl:~$ python scanner.py

جارٍ التهيئة...

اكتمل الفحص

0 ثغرات تم اكتشافها.`,

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

function applyLanguage(lang){

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.dataset.lang;

        if(translations[lang][key]){
            el.textContent = translations[lang][key];
        }

    });

    localStorage.setItem("language", lang);

    resetTyping();
    resetTerminal();

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
   Initial Language Apply
========================== */

applyLanguage(currentLang);

/* ==========================
   End
========================== */

console.log("Website Loaded Successfully.");
