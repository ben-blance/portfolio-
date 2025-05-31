// Particles.js Configurationnnn
particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (scrollTopButton) {
        if (window.pageYOffset > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    }
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.createElement("div");
    burger.classList.add("burger");
    burger.innerHTML = '<div></div><div></div><div></div>';
    document.querySelector(".navbar").appendChild(burger);

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Translation Configuration
const translations = {
    en: {
        // Navigation
        about: "ABOUT",
        skills: "SKILLS",
        projects: "PROJECTS",
        contact: "CONTACT",
        
        // Header
        fullStackDev: "Full Stack Dev",
        
        // About section
        hireMe: "Hire Me",
        aboutText: "I'm a third-year Computer Science student with a knack for full-stack development and a taste for innovation. Proficient in Nakama-script, C++, Python, HTML, CSS, JavaScript, and Flutter, I create solutions that are as creative as they are functional. From crafting custom interpreted languages to designing sleek Flutter apps like Cipher-Guard, I turn ideas into reality. Recently, I wrapped up the TONI AI project and am diving into new languages like ZIG. Always pushing the tech boundaries and committed to continuous learning. Ready to build something amazing? Let's get started.",
        
        // Features section
        features: "Features",
        frontEnd: "Front-End",
        frontEndText: "Expertise in crafting intuitive user interfaces using HTML, CSS, and JavaScript, along with proficiency in popular front-end frameworks like React and Angular. Skilled in creating responsive designs and seamless user experiences across various platforms and devices.",
        backEnd: "Back-End",
        backEndText: "Behind the scenes, Experienced in server-side development with Node.js, Python (Django), or Java and frameworks like Express.js or Django. Proficient in database design, complex logic, and data security. Experienced in third-party service integration and server-side optimization.",
        devOps: "DevOps",
        devOpsText: "Experienced in deploying web applications on cloud platforms like AWS, Heroku, and Firebase, managing CI/CD pipelines for automated deployment, and implementing containerization with Docker and infrastructure as code using Terraform or CloudFormation for scalable deployments.",
        
        // Projects section
        browseRecent: "Browse My Recent",
        projectsTitle: "Projects",
        github: "Github",
        liveDemo: "Live Demo",
        
        // Contact section
        letsConnect: "Let's Connect",
        contactText: "Got an idea or need some tech magic? Fill out the form below, and I'll get back to you in no time.",
        email: "Your email",
        subject: "Subject",
        message: "Leave us a message",
        send: "SEND ➤"
    },
    jp: {
        // Navigation
        about: "概要",
        skills: "スキル",
        projects: "プロジェクト",
        contact: "連絡先",
        
        // Header
        fullStackDev: "フルスタック開発者",
        
        // About section
        hireMe: "採用する",
        aboutText: "私は、フルスタック開発の才能とイノベーションへの情熱を持つ3年生のコンピュータサイエンス学生です。Nakama-script、C++、Python、HTML、CSS、JavaScript、Flutterに精通し、創造的かつ機能的なソリューションを作成します。カスタム解釈言語の作成からCipher-Guardのような洗練されたFlutterアプリの設計まで、アイデアを現実にします。最近、TONI AIプロジェクトを完了し、ZIGなどの新しい言語に取り組んでいます。常にテクノロジーの境界を押し広げ、継続的な学習に取り組んでいます。素晴らしいものを作る準備はできていますか？始めましょう。",
        
        // Features section
        features: "特徴",
        frontEnd: "フロントエンド",
        frontEndText: "HTML、CSS、JavaScriptを使用した直感的なユーザーインターフェースの作成に関する専門知識、およびReactやAngularなどの人気のフロントエンドフレームワークの習熟度。様々なプラットフォームやデバイスでのレスポンシブデザインとシームレスなユーザーエクスペリエンスの作成に長けています。",
        backEnd: "バックエンド",
        backEndText: "Node.js、Python（Django）、JavaやExpress.js、Djangoなどのフレームワークを使用したサーバーサイド開発の経験があります。データベース設計、複雑なロジック、データセキュリティに精通しています。サードパーティサービスの統合とサーバーサイドの最適化の経験があります。",
        devOps: "デブオプス",
        devOpsText: "AWS、Heroku、Firebaseなどのクラウドプラットフォームでのウェブアプリケーションのデプロイ、自動デプロイのためのCI/CDパイプラインの管理、Dockerを使用したコンテナ化、およびTerraformやCloudFormationを使用したスケーラブルなデプロイメントのためのインフラストラクチャとしてのコードの実装の経験があります。",
        
        // Projects section
        browseRecent: "最近の作品をブラウズ",
        projectsTitle: "プロジェクト",
        github: "Github",
        liveDemo: "ライブデモ",
        
        // Contact section
        letsConnect: "つながりましょう",
        contactText: "アイデアがありますか？または技術的な魔法が必要ですか？以下のフォームに記入してください。すぐに返信いたします。",
        email: "メールアドレス",
        subject: "件名",
        message: "メッセージを残す",
        send: "送信 ➤"
    }
};

// Typing effect variables and functionality
let currentTimeout;
let isTyping = false;
const typewriterElement = document.getElementById('typewriter');
const speed = 100; // typing speed in milliseconds
let phraseIndex = 0;

// Initial phrases (will be updated based on language)
window.phrases = [
    "Sahil Andhare",
    "80% Creative",
    "20% weird",
    "Scroll for more!"
];

function typeWriter() {
    // Clear any existing timeouts to prevent conflicts
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }
    
    // Clear the element content at the start - THIS IS THE FIX
    typewriterElement.innerHTML = '';
    
    let index = 0;
    const text = window.phrases[phraseIndex];
    isTyping = true;

    function typeCharacter() {
        if (index < text.length && isTyping) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            currentTimeout = setTimeout(typeCharacter, speed);
        } else if (isTyping) {
            currentTimeout = setTimeout(eraseText, 2000); // wait before erasing
        }
    }

    function eraseText() {
        if (index > 0 && isTyping) {
            typewriterElement.innerHTML = text.substring(0, index - 1);
            index--;
            currentTimeout = setTimeout(eraseText, speed / 2); // erasing speed
        } else if (isTyping) {
            phraseIndex = (phraseIndex + 1) % window.phrases.length; // move to the next phrase
            currentTimeout = setTimeout(typeWriter, 500); // wait before typing the next phrase
        }
    }

    typeCharacter();
}

// Function to reset typing effect
function resetTypingEffect() {
    // Stop current typing animation
    isTyping = false;
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }
    
    // Reset variables
    typewriterElement.innerHTML = '';
    phraseIndex = 0;
    isTyping = true;
    
    // Start fresh typing animation
    typeWriter();
}

// Function to change the language
function changeLanguage(lang) {
    // Save the selected language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === lang.toUpperCase()) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update typing effect phrases
    window.phrases = (lang === 'jp') ? [
        "アンダレ・サヒル",
        "80%クリエイティブ",
        "20%不気味",
        "続きを見る！"
    ] : [
        "Sahil Andhare",
        "80% Creative",
        "20% weird",
        "Scroll for more!"
    ];
    
    // Reset and restart typing effect with new phrases
    resetTypingEffect();
}

// Initialize language switching and typing effect
document.addEventListener('DOMContentLoaded', function() {
    // Add data-translate attributes to all elements that need translation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const key = link.textContent.toLowerCase();
        link.setAttribute('data-translate', key);
    });
    
    // Add other elements that need translation
    document.querySelector('h3').setAttribute('data-translate', 'fullStackDev');
    
    // Set up language button event listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.toLowerCase();
            changeLanguage(lang);
        });
    });
    
    // Load preferred language from localStorage or default to English
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(preferredLanguage);
    
    // Start the typing effect
    if (typewriterElement) {
        typeWriter();
    }
});
