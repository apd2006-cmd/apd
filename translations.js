// Arabic / English language switch for Abdulteyf's portfolio.
(() => {
  const translations = {
  "navHome": "Home",
  "navAbout": "About",
  "navSkills": "Skills",
  "navProjects": "Projects",
  "navJourney": "Journey",
  "navContact": "Contact",
  "availability": "Information Technology Student • Aspiring Developer",
  "hello": "Hello, I'm",
  "heroName": "Abdulteyf Jameel Ali Al-Shugary",
  "heroRole": "Turning ideas into digital solutions.",
  "heroDesc": "Interested in software development, building web and mobile applications, databases, and solving technical problems. I keep learning and enjoy turning knowledge into practical projects.",
  "seeWork": "Explore my projects",
  "contactMe": "Get in touch",
  "field": "Information Technology",
  "location": "Yemen",
  "learning": "Always learning",
  "visualCaption": "Curiosity in technology, ideas becoming reality",
  "scroll": "Scroll to explore",
  "aboutTag": "01 / ABOUT ME",
  "aboutTitle": "Learning today, building <span class=\"accent\">tomorrow's solutions.</span>",
  "photoNote": "Technology is more than code; it's a way to make an impact.",
  "aboutLead": "I'm Abdulteyf Jameel Ali Al-Shugary, an Information Technology student passionate about technology, programming, and designing digital solutions.",
  "aboutText": "I'm developing my skills in web development, mobile applications, and databases. I care about understanding the problem before writing the solution. I believe the best way to learn is by building, so I turn what I study into practical projects that can grow over time.",
  "fact1": "Information Technology student",
  "fact2": "Interested in app development",
  "fact3": "Enjoy solving problems",
  "fact4": "Learn by doing",
  "myJourney": "Explore my journey",
  "skillsTag": "02 / MY TOOLKIT",
  "skillsTitle": "Tools I use in <span class=\"accent\">technology</span>",
  "skillsIntro": "Technologies I've studied or am actively improving through coursework and hands-on practice.",
  "skillWeb": "Web Development",
  "skillProgramming": "Programming",
  "skillMobile": "Mobile Applications",
  "skillDatabase": "Databases",
  "skillNetwork": "Networks & Systems",
  "skillDesign": "Design & Planning",
  "levelLearning": "Learning & practical use",
  "projectsTag": "03 / SELECTED WORK",
  "projectsTitle": "Projects I build <span class=\"accent\">and develop</span>",
  "projectsIntro": "Examples of educational concepts and projects I use to practice my skills and explore real-world problems.",
  "mobileApp": "Mobile application",
  "roadDesc": "A Flutter app concept for reporting road issues, including location detection, photo attachments, report descriptions, and status tracking.",
  "graduationConcept": "Graduation project concept",
  "netDesc": "A concept for a system that helps users diagnose network issues, understand possible causes, and follow practical troubleshooting steps.",
  "webProject": "Web project",
  "webTitle": "Personal portfolio website",
  "webDesc": "A responsive personal website showcasing skills, projects, and interests, with Arabic and English language support.",
  "projectNote": "These projects represent educational work and concepts in development, not claims of completed commercial products.",
  "journeyTag": "04 / MY JOURNEY",
  "journeyTitle": "Small steps, <span class=\"accent\">continuous growth.</span>",
  "journeyIntro": "My path in technology is shaped by study, experimentation, and building projects. Every experience adds something new.",
  "stageStudy": "CURRENT FOCUS",
  "stage1Title": "Studying Information Technology",
  "stage1Desc": "Strengthening foundations in programming, databases, networking, and systems analysis and design.",
  "stageBuild": "PRACTICAL EXPERIENCE",
  "stage2Title": "Turning knowledge into projects",
  "stage2Desc": "Exploring apps and websites, and developing ideas that serve users and address real problems.",
  "stageNext": "NEXT GOAL",
  "stage3Title": "Growing as a professional developer",
  "stage3Desc": "Improving code quality, gaining practical experience, and contributing to projects within a technical team.",
  "interestsTag": "05 / BEYOND THE CODE",
  "interestsTitle": "Things that inspire me",
  "interest1": "Exploring technology",
  "interest2": "Design & drawing",
  "interest3": "Anime & storytelling",
  "interest4": "Learning & growth",
  "contactTag": "06 / LET'S CONNECT",
  "contactTitle": "Have an idea or an opportunity?<br><span class=\"accent\">I'd be glad to talk.</span>",
  "contactDesc": "Open to learning, project collaboration, and connecting with people interested in technology and software development.",
  "emailBtn": "Email me",
  "emailNote": "Replace the sample email with your real address before publishing.",
  "backTop": "Back to top ↑",
  "footerText": "Built with a passion for technology and continuous learning."
};
  const toggle = document.getElementById('languageToggle');
  const label = document.getElementById('languageLabel');
  const nav = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  let language = 'ar';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (translations[key]) node.innerHTML = next === 'en' ? translations[key] : node.dataset.ar || node.innerHTML;
    });
    // Keep original Arabic strings in data attributes on first load.
    if (next === 'ar') {
      document.querySelectorAll('[data-i18n]').forEach((node) => {
        if (!node.dataset.ar) node.dataset.ar = node.innerHTML;
      });
    }
    label.textContent = next === 'ar' ? 'English' : 'العربية';
    toggle.setAttribute('aria-label', next === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.title = next === 'ar'
      ? 'عبداللطيف جميل علي الشقاري | مطور برمجيات'
      : 'Abdulteyf Jameel Ali Al-Shugary | Developer';
  }

  // Cache Arabic copy before any translation takes place.
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.dataset.ar = node.innerHTML; });
  toggle.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));

  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();