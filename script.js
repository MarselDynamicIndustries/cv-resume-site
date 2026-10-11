const storage = {
  getItem(key) { try { return localStorage.getItem(key); } catch { return null; } },
  setItem(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ } }
};
const themeToggle = document.getElementById("themeToggle");
const savedTheme = storage.getItem("theme");
const languagePicker = document.getElementById("languagePicker");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  storage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});

const translations = {
  "ru": {
    "nav_about": "Обо мне",
    "nav_skills": "Навыки",
    "nav_projects": "Проекты",
    "nav_contact": "Контакты",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Привет, я<br><span class=\"accent\">Марсель Мухамеджанов</span>",
    "hero_text": "Специалист по информационной безопасности уровня Junior / Junior+. Работаю на стыке AppSec, инфраструктуры и разработки: провожу проверки, готовлю рекомендации и создаю собственные приложения.",
    "hero_projects_btn": "Смотреть проекты",
    "hero_contact_btn": "Связаться",
    "stats_title": "Коротко обо мне",
    "about_title": "Обо мне",
    "about_text": "Я Марсель Мухамеджанов. Около года работаю в информационной безопасности; до этого два года самостоятельно практиковался в пентесте и аудите. По образованию — программист, поэтому мне интересно не только проверять системы, но и понимать, как они устроены изнутри.",
    "edu_title": "Образование",
    "edu_college": "Колледж",
    "edu_college_text": "Программист по образованию (среднее профессиональное образование).",
    "edu_uni": "Институт",
    "edu_uni_text": "Обучаюсь на последнем курсе, продолжаю развиваться в ИБ и разработке.",
    "skills_title": "Навыки",
    "ai_title": "AI и автоматизация",
    "ai_text": "Использую AI как помощника при работе с кодом и документацией, пробую автоматизировать рутинные задачи. Проверяю предложенные решения.",
    "projects_title": "Проекты",
    "contact_title": "Связаться",
    "contact_subtitle": "Быстрые контакты",
    "stats_item_1": "<strong>1</strong> год в информационной безопасности",
    "stats_item_2": "<strong>2 года</strong> практики в пентесте и security-аудите до официальной работы",
    "stats_item_3": "<strong>Неформально</strong> вел задачи сетевого администрирования в проектной практике",
    "edu_college_level": "Завершено",
    "edu_uni_level": "В процессе",
    "level_junior": "Junior+",
    "skills_langdev_title": "Языки и разработка",
    "skills_os_title": "ОС и администрирование",
    "skills_os_text": "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Сети",
    "skills_networks_text": "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Code Security",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps и инструменты",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Локальное рабочее пространство для заметок, задач и файлов. Папки, теги, полнотекстовый поиск и импорт/экспорт данных. Проект на Flutter с SQLite; версия alpha.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Проект браузера на базе Firefox ESR: вертикальные вкладки, рабочие пространства и настройки приватности. В репозитории — overlay-модули, UI-превью и скрипты сборки; разработка продолжается.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Хаб умного дома для самостоятельного размещения: интерфейс устройств и комнат, HTTP/MQTT-интеграции, WebSocket и файловое хранилище. Python/FastAPI и React; часть интеграций ещё в разработке.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "Настольное приложение для личного бюджета: доходы и расходы, категории, цели, графики и экспорт. Python, PySide6 и SQLite; предусмотрены резервные копии данных.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Локальное рабочее пространство для заметок, задач и файлов. Папки, теги, полнотекстовый поиск и импорт/экспорт данных. Проект на Flutter с SQLite; версия alpha.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Проект браузера на базе Firefox ESR: вертикальные вкладки, рабочие пространства и настройки приватности. В репозитории — overlay-модули, UI-превью и скрипты сборки; разработка продолжается.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Хаб умного дома для самостоятельного размещения: интерфейс устройств и комнат, HTTP/MQTT-интеграции, WebSocket и файловое хранилище. Python/FastAPI и React; часть интеграций ещё в разработке.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "Настольное приложение для личного бюджета: доходы и расходы, категории, цели, графики и экспорт. Python, PySide6 и SQLite; предусмотрены резервные копии данных.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Самооценка навыков: Junior / Junior+. Сложные задачи решаю с документацией и обратной связью более опытных коллег.",
    "contact_cta": "Написать мне",
    "focus_text": "Кибербезопасность · сети · разработка",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "В рабочей практике занимался аудитом веб-приложений, анализом кода, проверкой настроек серверов, сетевых сервисов и CI/CD. Готовил технические отчёты, формулировал рекомендации для разработчиков и администраторов, возвращался к задачам после исправлений и проверял результат.",
    "about_workstyle": "Отдельное направление — инструменты автоматизации и документация по ИБ. Учусь связывать технические наблюдения с приоритетами бизнеса и объяснять результаты понятным языком. В личных проектах развиваю навыки frontend, Python и Flutter. Ищу команду, где смогу приносить пользу на задачах Junior / Junior+ и расти через практику и обратную связь.",
    "experience_title": "Практический опыт",
    "experience_intro": "Информационная безопасность · 2025–2026",
    "exp_web_title": "Веб-приложения и код",
    "exp_web_text": "Проводил проверки веб-приложений и анализ исходного кода. Описывал результаты, готовил рекомендации и повторно проверял внесённые исправления.",
    "exp_infra_title": "Инфраструктура и CI/CD",
    "exp_infra_text": "Проверял конфигурации серверов, сетевых сервисов и процессов сборки. Участвовал в задачах управления доступом и безопасного обращения с секретами.",
    "exp_auto_title": "Автоматизация проверок",
    "exp_auto_text": "Работал над внутренними инструментами для проверок безопасности и инвентаризации. Использовал скрипты и специализированные средства, чтобы упростить сбор и обработку результатов.",
    "exp_docs_title": "Документация и взаимодействие",
    "exp_docs_text": "Готовил отчёты, рекомендации и документы по ИБ. Участвовал в разборе инцидентов, приоритизации задач и проверке выполнения мер вместе с технической командой.",
    "projects_intro": "Личные проекты с открытым кодом. Каждый показывает отдельную сторону моей практики — от локального хранения данных до интерфейсов и автоматизации.",
    "project_source": "Код на GitHub",
    "project_details": "О проекте",
    "art_note": "Авторские иллюстрации проектов · не скриншоты интерфейсов"
  },
  "en": {
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_projects": "Projects",
    "nav_contact": "Contact",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Hi, I’m<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "Junior / Junior+ cybersecurity specialist working across application security, infrastructure and development. I carry out reviews, write recommendations and build personal software projects.",
    "hero_projects_btn": "View Projects",
    "hero_contact_btn": "Contact Me",
    "stats_title": "Quick Facts",
    "about_title": "About Me",
    "about_text": "I’m Marsel Mukhamedzhanov. I have about a year of cybersecurity work experience, preceded by two years of independent pentest and audit practice. My vocational background is programming, so I enjoy understanding how systems work as well as reviewing them.",
    "edu_title": "Education",
    "edu_college": "College",
    "edu_college_text": "Programmer degree (secondary vocational education).",
    "edu_uni": "Institute",
    "edu_uni_text": "Final-year student, continuously improving in cybersecurity and software development.",
    "skills_title": "Skills",
    "ai_title": "AI and Automation",
    "ai_text": "I use AI to help with code and documentation and explore automation of routine tasks. I check the suggested solutions.",
    "projects_title": "Projects",
    "contact_title": "Contact",
    "contact_subtitle": "Quick Contacts",
    "stats_item_1": "<strong>1</strong> year in cybersecurity",
    "stats_item_2": "<strong>2 years</strong> of pentest and security audit practice before official employment",
    "stats_item_3": "<strong>Informally</strong> handled network administration tasks in project practice",
    "edu_college_level": "Completed",
    "edu_uni_level": "In Progress",
    "level_junior": "Junior+",
    "skills_langdev_title": "Languages and Development",
    "skills_os_title": "OS and Administration",
    "skills_os_text": "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Networks",
    "skills_networks_text": "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Code Security",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps and Tools",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "A local workspace for notes, tasks and files, with folders, tags, full-text search and data import/export. Built with Flutter and SQLite; alpha version.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "A browser project based on Firefox ESR, with vertical tabs, workspaces and privacy settings. The repository contains overlay modules, a UI preview and build scripts. In development.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "A self-hosted smart home hub with device and room controls, HTTP/MQTT integrations, WebSocket updates and file storage. Python/FastAPI and React; some integrations are still in development.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "A desktop personal budget app for income, expenses, categories, goals, charts and exports. Built with Python, PySide6 and SQLite, with data backups.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "A local workspace for notes, tasks and files, with folders, tags, full-text search and data import/export. Built with Flutter and SQLite; alpha version.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "A browser project based on Firefox ESR, with vertical tabs, workspaces and privacy settings. The repository contains overlay modules, a UI preview and build scripts. In development.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "A self-hosted smart home hub with device and room controls, HTTP/MQTT integrations, WebSocket updates and file storage. Python/FastAPI and React; some integrations are still in development.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "A desktop personal budget app for income, expenses, categories, goals, charts and exports. Built with Python, PySide6 and SQLite, with data backups.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Self-assessment: Junior / Junior+. I approach complex tasks with documentation and feedback from more experienced colleagues.",
    "contact_cta": "Get in touch",
    "focus_text": "Cybersecurity · networks · development",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "My work has included web application reviews, source code analysis, and checks of server, network service and CI/CD configurations. I have written technical reports and recommendations for developers and administrators, then revisited tasks to verify the changes.",
    "about_workstyle": "I also work on security automation tools and documentation. I’m learning to connect technical observations with business priorities and explain results clearly. Personal projects help me develop frontend, Python and Flutter skills. I’m looking for a team where I can contribute at Junior / Junior+ level and grow through practice and feedback.",
    "experience_title": "Practical experience",
    "experience_intro": "Cybersecurity · 2025–2026",
    "exp_web_title": "Web applications & code",
    "exp_web_text": "Reviewed web applications and source code, documented results, prepared recommendations and rechecked implemented fixes.",
    "exp_infra_title": "Infrastructure & CI/CD",
    "exp_infra_text": "Reviewed server, network service and build configurations. Contributed to access management and secure handling of secrets.",
    "exp_auto_title": "Check automation",
    "exp_auto_text": "Worked on internal tools for security checks and inventory. Used scripts and specialist tools to simplify collecting and processing results.",
    "exp_docs_title": "Documentation & teamwork",
    "exp_docs_text": "Prepared security reports, recommendations and documentation. Participated in incident analysis, task prioritization and follow-up checks with the technical team.",
    "projects_intro": "Personal projects with public source code, exploring local data storage, interfaces and automation.",
    "project_source": "Code on GitHub",
    "project_details": "About the project",
    "art_note": "Original project illustrations · not interface screenshots"
  },
  "de": {
    "nav_about": "Über mich",
    "nav_skills": "Fähigkeiten",
    "nav_projects": "Projekte",
    "nav_contact": "Kontakt",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Hallo, ich bin<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "Junior / Junior+ in der Cybersicherheit, an der Schnittstelle von AppSec, Infrastruktur und Entwicklung. Ich führe Prüfungen durch, formuliere Empfehlungen und entwickle eigene Anwendungen.",
    "hero_projects_btn": "Projekte ansehen",
    "hero_contact_btn": "Kontakt",
    "stats_title": "Kurzprofil",
    "about_title": "Über mich",
    "about_text": "Ich bin Marsel Mukhamedzhanov. Ich habe etwa ein Jahr Berufserfahrung in der Cybersicherheit und zuvor zwei Jahre selbstständig Pentests und Audits geübt. Durch meine Programmierausbildung interessiert mich auch die technische Umsetzung hinter den Systemen.",
    "edu_title": "Ausbildung",
    "edu_college": "College",
    "edu_college_text": "Programmierer-Ausbildung (berufliche Sekundarausbildung).",
    "edu_uni": "Institut",
    "edu_uni_text": "Im letzten Studienjahr, mit Schwerpunkt auf Cybersecurity und Entwicklung.",
    "skills_title": "Fähigkeiten",
    "ai_title": "KI und Automatisierung",
    "ai_text": "Ich nutze KI als Unterstützung für Code und Dokumentation und erprobe die Automatisierung von Routineaufgaben. Vorschläge prüfe ich nach.",
    "projects_title": "Projekte",
    "contact_title": "Kontakt",
    "contact_subtitle": "Schnellkontakt",
    "stats_item_1": "<strong>1</strong> Jahr in der Cybersicherheit",
    "stats_item_2": "<strong>2 Jahre</strong> Pentest- und Security-Audit-Praxis vor offizieller Anstellung",
    "stats_item_3": "<strong>Inoffiziell</strong> Netzwerkadministrationsaufgaben in Projektpraxis übernommen",
    "edu_college_level": "Abgeschlossen",
    "edu_uni_level": "In Bearbeitung",
    "level_junior": "Junior+",
    "skills_langdev_title": "Sprachen und Entwicklung",
    "skills_os_title": "Betriebssysteme und Administration",
    "skills_os_text": "Linux-Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Netzwerke",
    "skills_networks_text": "TCP/IP, OSI-Modell, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall-Regeln, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Code-Sicherheit",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps und Tools",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Lokaler Arbeitsbereich für Notizen, Aufgaben und Dateien mit Ordnern, Tags, Volltextsuche und Datenimport/-export. Flutter und SQLite; Alpha-Version.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Browserprojekt auf Basis von Firefox ESR mit vertikalen Tabs, Arbeitsbereichen und Datenschutzeinstellungen. Overlay-Module, UI-Vorschau und Build-Skripte im Repository; in Entwicklung.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Selbst gehosteter Smart-Home-Hub mit Geräte- und Raumsteuerung, HTTP/MQTT, WebSocket und Dateispeicher. Python/FastAPI und React; einige Integrationen in Entwicklung.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "Desktop-App für Einnahmen, Ausgaben, Kategorien, Ziele, Diagramme und Export. Python, PySide6 und SQLite mit Datensicherung.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Lokaler Arbeitsbereich für Notizen, Aufgaben und Dateien mit Ordnern, Tags, Volltextsuche und Datenimport/-export. Flutter und SQLite; Alpha-Version.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Browserprojekt auf Basis von Firefox ESR mit vertikalen Tabs, Arbeitsbereichen und Datenschutzeinstellungen. Overlay-Module, UI-Vorschau und Build-Skripte im Repository; in Entwicklung.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Selbst gehosteter Smart-Home-Hub mit Geräte- und Raumsteuerung, HTTP/MQTT, WebSocket und Dateispeicher. Python/FastAPI und React; einige Integrationen in Entwicklung.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "Desktop-App für Einnahmen, Ausgaben, Kategorien, Ziele, Diagramme und Export. Python, PySide6 und SQLite mit Datensicherung.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Selbsteinschätzung: Junior / Junior+. Bei komplexen Aufgaben nutze ich Dokumentation und Feedback erfahrener Kollegen.",
    "contact_cta": "Kontakt aufnehmen",
    "focus_text": "Cybersicherheit · Netzwerke · Entwicklung",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "Zu meiner Praxis gehören Webanwendungsprüfungen, Quellcodeanalysen sowie Prüfungen von Server-, Netzwerk- und CI/CD-Konfigurationen. Ich erstellte technische Berichte, formulierte Empfehlungen und überprüfte Änderungen nach ihrer Umsetzung.",
    "about_workstyle": "Außerdem beschäftige ich mich mit Prüfautomatisierung und Sicherheitsdokumentation. Ich lerne, technische Beobachtungen mit geschäftlichen Prioritäten zu verbinden. Eigene Projekte vertiefen meine Kenntnisse in Frontend, Python und Flutter. Ich suche ein Team, in dem ich auf Junior- / Junior+-Niveau beitragen und durch Praxis wachsen kann.",
    "experience_title": "Praktische Erfahrung",
    "experience_intro": "Cybersicherheit · 2025–2026",
    "exp_web_title": "Webanwendungen & Code",
    "exp_web_text": "Prüfung von Webanwendungen und Quellcode, Dokumentation der Ergebnisse, Empfehlungen und erneute Prüfung umgesetzter Änderungen.",
    "exp_infra_title": "Infrastruktur & CI/CD",
    "exp_infra_text": "Prüfung von Server-, Netzwerk- und Build-Konfigurationen sowie Mitarbeit bei Zugriffsverwaltung und sicherem Umgang mit Secrets.",
    "exp_auto_title": "Automatisierte Prüfungen",
    "exp_auto_text": "Arbeit an internen Prüf- und Inventarisierungswerkzeugen. Skripte und Fachwerkzeuge erleichterten die Sammlung und Verarbeitung der Ergebnisse.",
    "exp_docs_title": "Dokumentation & Teamarbeit",
    "exp_docs_text": "Berichte, Empfehlungen und Sicherheitsdokumentation. Mitarbeit bei Vorfallanalysen, Priorisierung und Nachprüfungen mit dem technischen Team.",
    "projects_intro": "Eigene Projekte mit öffentlichem Quellcode zu lokaler Datenhaltung, Benutzeroberflächen und Automatisierung.",
    "project_source": "Code auf GitHub",
    "project_details": "Zum Projekt",
    "art_note": "Projektillustrationen · keine Screenshots"
  },
  "es": {
    "nav_about": "Sobre mí",
    "nav_skills": "Habilidades",
    "nav_projects": "Proyectos",
    "nav_contact": "Contacto",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Hola, soy<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "Especialista Junior / Junior+ en ciberseguridad, entre AppSec, infraestructura y desarrollo. Realizo revisiones, preparo recomendaciones y desarrollo aplicaciones propias.",
    "hero_projects_btn": "Ver proyectos",
    "hero_contact_btn": "Contactar",
    "stats_title": "Resumen rápido",
    "about_title": "Sobre mí",
    "about_text": "Soy Marsel Mukhamedzhanov. Tengo alrededor de un año de experiencia laboral en ciberseguridad, precedido por dos años de práctica independiente en pentesting y auditoría. Mi formación es en programación y me interesa entender cómo funcionan los sistemas.",
    "edu_title": "Educación",
    "edu_college": "Colegio",
    "edu_college_text": "Programador de formación (educación profesional secundaria).",
    "edu_uni": "Instituto",
    "edu_uni_text": "Actualmente en el último curso, creciendo en ciberseguridad y desarrollo.",
    "skills_title": "Habilidades",
    "ai_title": "IA y automatización",
    "ai_text": "Uso IA como apoyo para código y documentación, y exploro la automatización de tareas rutinarias. Reviso las soluciones propuestas.",
    "projects_title": "Proyectos",
    "contact_title": "Contacto",
    "contact_subtitle": "Contactos rápidos",
    "stats_item_1": "<strong>1</strong> año en ciberseguridad",
    "stats_item_2": "<strong>2 años</strong> de práctica en pentest y auditoría de seguridad antes del empleo oficial",
    "stats_item_3": "<strong>De forma no oficial</strong> realicé tareas de administración de redes en proyectos",
    "edu_college_level": "Completado",
    "edu_uni_level": "En curso",
    "level_junior": "Junior+",
    "skills_langdev_title": "Lenguajes y desarrollo",
    "skills_os_title": "Sistemas operativos y administración",
    "skills_os_text": "Administración Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Redes",
    "skills_networks_text": "TCP/IP, Modelo OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, reglas de firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Seguridad de código",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps y herramientas",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Espacio local para notas, tareas y archivos con carpetas, etiquetas, búsqueda de texto e importación/exportación. Flutter y SQLite; versión alfa.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Proyecto de navegador basado en Firefox ESR: pestañas verticales, espacios de trabajo y privacidad. Incluye módulos overlay, vista previa y scripts de compilación. En desarrollo.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Hub de hogar inteligente autoalojado: dispositivos, habitaciones, HTTP/MQTT, WebSocket y almacenamiento. Python/FastAPI y React; algunas integraciones en desarrollo.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "Aplicación de escritorio para ingresos, gastos, categorías, objetivos, gráficos y exportación. Python, PySide6 y SQLite, con copias de seguridad.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Espacio local para notas, tareas y archivos con carpetas, etiquetas, búsqueda de texto e importación/exportación. Flutter y SQLite; versión alfa.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Proyecto de navegador basado en Firefox ESR: pestañas verticales, espacios de trabajo y privacidad. Incluye módulos overlay, vista previa y scripts de compilación. En desarrollo.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Hub de hogar inteligente autoalojado: dispositivos, habitaciones, HTTP/MQTT, WebSocket y almacenamiento. Python/FastAPI y React; algunas integraciones en desarrollo.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "Aplicación de escritorio para ingresos, gastos, categorías, objetivos, gráficos y exportación. Python, PySide6 y SQLite, con copias de seguridad.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Autoevaluación: Junior / Junior+. Abordo tareas complejas con documentación y comentarios de compañeros con más experiencia.",
    "contact_cta": "Hablemos",
    "focus_text": "Ciberseguridad · redes · desarrollo",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "He revisado aplicaciones web, código fuente y configuraciones de servidores, servicios de red y CI/CD. He preparado informes y recomendaciones para equipos técnicos, y comprobado los cambios después de su implementación.",
    "about_workstyle": "También trabajo con automatización y documentación de seguridad. Aprendo a relacionar observaciones técnicas con prioridades del negocio y a explicar los resultados. Mis proyectos personales me permiten practicar frontend, Python y Flutter. Busco un equipo donde aportar como Junior / Junior+ y seguir aprendiendo.",
    "experience_title": "Experiencia práctica",
    "experience_intro": "Ciberseguridad · 2025–2026",
    "exp_web_title": "Aplicaciones web y código",
    "exp_web_text": "Revisión de aplicaciones y código fuente, documentación de resultados, recomendaciones y verificación de correcciones.",
    "exp_infra_title": "Infraestructura y CI/CD",
    "exp_infra_text": "Revisión de configuraciones de servidores, redes y compilación. Colaboración en gestión de accesos y manejo seguro de secretos.",
    "exp_auto_title": "Automatización",
    "exp_auto_text": "Trabajo en herramientas internas de comprobación e inventario. Scripts y herramientas especializadas para recopilar y procesar resultados.",
    "exp_docs_title": "Documentación y equipo",
    "exp_docs_text": "Informes, recomendaciones y documentación. Participación en análisis de incidentes, priorización y comprobaciones con el equipo técnico.",
    "projects_intro": "Proyectos personales con código público sobre almacenamiento local, interfaces y automatización.",
    "project_source": "Código en GitHub",
    "project_details": "Sobre el proyecto",
    "art_note": "Ilustraciones de proyectos · no son capturas"
  },
  "fr": {
    "nav_about": "À propos",
    "nav_skills": "Compétences",
    "nav_projects": "Projets",
    "nav_contact": "Contact",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Bonjour, je suis<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "Spécialiste Junior / Junior+ en cybersécurité, entre AppSec, infrastructure et développement. Je mène des vérifications, rédige des recommandations et crée mes propres applications.",
    "hero_projects_btn": "Voir les projets",
    "hero_contact_btn": "Me contacter",
    "stats_title": "En bref",
    "about_title": "À propos",
    "about_text": "Je suis Marsel Mukhamedzhanov. J’ai environ un an d’expérience professionnelle en cybersécurité, après deux ans de pratique autonome en pentest et audit. Ma formation en programmation me donne envie de comprendre le fonctionnement interne des systèmes.",
    "edu_title": "Formation",
    "edu_college": "Collège",
    "edu_college_text": "Formation de programmeur (enseignement professionnel secondaire).",
    "edu_uni": "Institut",
    "edu_uni_text": "Dernière année d'études, progression continue en cybersécurité et développement.",
    "skills_title": "Compétences",
    "ai_title": "IA et automatisation",
    "ai_text": "J’utilise l’IA pour m’aider avec le code et la documentation et explorer l’automatisation des tâches courantes. Je vérifie les solutions proposées.",
    "projects_title": "Projets",
    "contact_title": "Contact",
    "contact_subtitle": "Contacts rapides",
    "stats_item_1": "<strong>1</strong> an en cybersécurité",
    "stats_item_2": "<strong>2 ans</strong> de pratique pentest et audit sécurité avant l'emploi officiel",
    "stats_item_3": "<strong>De manière non officielle</strong> gestion réseau sur des projets",
    "edu_college_level": "Terminé",
    "edu_uni_level": "En cours",
    "level_junior": "Junior+",
    "skills_langdev_title": "Langages et développement",
    "skills_os_title": "Systèmes et administration",
    "skills_os_text": "Administration Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Réseaux",
    "skills_networks_text": "TCP/IP, modèle OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, règles firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Sécurité du code",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps et outils",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Espace local pour notes, tâches et fichiers : dossiers, étiquettes, recherche plein texte et import/export. Flutter et SQLite ; version alpha.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Projet de navigateur basé sur Firefox ESR : onglets verticaux, espaces de travail et confidentialité. Modules overlay, aperçu UI et scripts de compilation. En développement.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Hub domotique auto-hébergé : appareils, pièces, HTTP/MQTT, WebSocket et stockage de fichiers. Python/FastAPI et React ; certaines intégrations en développement.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "Application de bureau pour revenus, dépenses, catégories, objectifs, graphiques et export. Python, PySide6 et SQLite, avec sauvegardes.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Espace local pour notes, tâches et fichiers : dossiers, étiquettes, recherche plein texte et import/export. Flutter et SQLite ; version alpha.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Projet de navigateur basé sur Firefox ESR : onglets verticaux, espaces de travail et confidentialité. Modules overlay, aperçu UI et scripts de compilation. En développement.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Hub domotique auto-hébergé : appareils, pièces, HTTP/MQTT, WebSocket et stockage de fichiers. Python/FastAPI et React ; certaines intégrations en développement.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "Application de bureau pour revenus, dépenses, catégories, objectifs, graphiques et export. Python, PySide6 et SQLite, avec sauvegardes.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Autoévaluation : Junior / Junior+. Pour les tâches complexes, je m’appuie sur la documentation et les retours de collègues expérimentés.",
    "contact_cta": "Me contacter",
    "focus_text": "Cybersécurité · réseaux · développement",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "J’ai travaillé sur des revues d’applications web, de code source et de configurations serveur, réseau et CI/CD. J’ai rédigé des rapports et recommandations pour les équipes techniques, puis vérifié les modifications réalisées.",
    "about_workstyle": "Je travaille aussi sur l’automatisation des contrôles et la documentation de sécurité. J’apprends à relier les observations techniques aux priorités métier et à communiquer clairement. Mes projets personnels développent mes compétences en frontend, Python et Flutter. Je cherche une équipe où contribuer au niveau Junior / Junior+ et progresser.",
    "experience_title": "Expérience pratique",
    "experience_intro": "Cybersécurité · 2025–2026",
    "exp_web_title": "Applications web & code",
    "exp_web_text": "Revues d’applications et de code, documentation des résultats, recommandations et vérification des corrections.",
    "exp_infra_title": "Infrastructure & CI/CD",
    "exp_infra_text": "Revues de configurations serveur, réseau et de compilation. Participation à la gestion des accès et à la protection des secrets.",
    "exp_auto_title": "Automatisation",
    "exp_auto_text": "Travail sur des outils internes de contrôle et d’inventaire. Scripts et outils spécialisés pour collecter et traiter les résultats.",
    "exp_docs_title": "Documentation & équipe",
    "exp_docs_text": "Rapports, recommandations et documentation. Participation à l’analyse d’incidents, à la priorisation et aux vérifications avec l’équipe technique.",
    "projects_intro": "Projets personnels au code public, autour du stockage local, des interfaces et de l’automatisation.",
    "project_source": "Code sur GitHub",
    "project_details": "À propos du projet",
    "art_note": "Illustrations des projets · pas des captures d’écran"
  },
  "it": {
    "nav_about": "Chi sono",
    "nav_skills": "Competenze",
    "nav_projects": "Progetti",
    "nav_contact": "Contatti",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Ciao, sono<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "Specialista Junior / Junior+ in cybersicurezza, tra AppSec, infrastruttura e sviluppo. Eseguo verifiche, preparo raccomandazioni e creo applicazioni personali.",
    "hero_projects_btn": "Vedi progetti",
    "hero_contact_btn": "Contattami",
    "stats_title": "In breve",
    "about_title": "Chi sono",
    "about_text": "Sono Marsel Mukhamedzhanov. Ho circa un anno di esperienza lavorativa nella cybersicurezza, preceduto da due anni di pratica autonoma in pentest e audit. La mia formazione in programmazione mi porta a voler capire come funzionano i sistemi.",
    "edu_title": "Formazione",
    "edu_college": "College",
    "edu_college_text": "Programmatore di formazione (istruzione professionale secondaria).",
    "edu_uni": "Istituto",
    "edu_uni_text": "Attualmente all'ultimo anno, continuo a crescere in cybersecurity e sviluppo.",
    "skills_title": "Competenze",
    "ai_title": "IA e automazione",
    "ai_text": "Uso l’IA come supporto per codice e documentazione e sperimento l’automazione di attività ripetitive. Verifico le soluzioni proposte.",
    "projects_title": "Progetti",
    "contact_title": "Contatti",
    "contact_subtitle": "Contatti rapidi",
    "stats_item_1": "<strong>1</strong> anno in cybersecurity",
    "stats_item_2": "<strong>2 anni</strong> di pratica pentest e audit sicurezza prima del lavoro ufficiale",
    "stats_item_3": "<strong>In modo non ufficiale</strong> ho gestito attività di amministrazione di rete in progetti",
    "edu_college_level": "Completato",
    "edu_uni_level": "In corso",
    "level_junior": "Junior+",
    "skills_langdev_title": "Linguaggi e sviluppo",
    "skills_os_title": "Sistemi operativi e amministrazione",
    "skills_os_text": "Amministrazione Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Reti",
    "skills_networks_text": "TCP/IP, modello OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, regole firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Sicurezza del codice",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps e strumenti",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Spazio locale per note, attività e file, con cartelle, tag, ricerca full-text e import/export. Flutter e SQLite; versione alpha.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Progetto browser basato su Firefox ESR: schede verticali, spazi di lavoro e privacy. Moduli overlay, anteprima UI e script di build. In sviluppo.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Hub domotico self-hosted: dispositivi, stanze, HTTP/MQTT, WebSocket e archivio file. Python/FastAPI e React; alcune integrazioni in sviluppo.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "App desktop per entrate, spese, categorie, obiettivi, grafici ed esportazione. Python, PySide6 e SQLite, con backup dei dati.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Spazio locale per note, attività e file, con cartelle, tag, ricerca full-text e import/export. Flutter e SQLite; versione alpha.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Progetto browser basato su Firefox ESR: schede verticali, spazi di lavoro e privacy. Moduli overlay, anteprima UI e script di build. In sviluppo.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Hub domotico self-hosted: dispositivi, stanze, HTTP/MQTT, WebSocket e archivio file. Python/FastAPI e React; alcune integrazioni in sviluppo.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "App desktop per entrate, spese, categorie, obiettivi, grafici ed esportazione. Python, PySide6 e SQLite, con backup dei dati.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Autovalutazione: Junior / Junior+. Affronto le attività complesse con documentazione e feedback di colleghi più esperti.",
    "contact_cta": "Contattami",
    "focus_text": "Cybersicurezza · reti · sviluppo",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "Ho lavorato su verifiche di applicazioni web, codice sorgente e configurazioni di server, reti e CI/CD. Ho preparato rapporti e raccomandazioni per i team tecnici e verificato le modifiche dopo la loro applicazione.",
    "about_workstyle": "Mi occupo anche di automazione dei controlli e documentazione. Imparo a collegare osservazioni tecniche e priorità aziendali e a comunicare con chiarezza. Nei progetti personali sviluppo competenze frontend, Python e Flutter. Cerco un team dove contribuire come Junior / Junior+ e crescere.",
    "experience_title": "Esperienza pratica",
    "experience_intro": "Cybersicurezza · 2025–2026",
    "exp_web_title": "Applicazioni web e codice",
    "exp_web_text": "Verifiche di applicazioni e codice, documentazione dei risultati, raccomandazioni e controllo delle correzioni.",
    "exp_infra_title": "Infrastruttura e CI/CD",
    "exp_infra_text": "Verifiche di configurazioni server, reti e build. Partecipazione alla gestione degli accessi e alla protezione dei segreti.",
    "exp_auto_title": "Automazione",
    "exp_auto_text": "Lavoro su strumenti interni di verifica e inventario. Script e strumenti specializzati per raccogliere ed elaborare risultati.",
    "exp_docs_title": "Documentazione e team",
    "exp_docs_text": "Rapporti, raccomandazioni e documentazione. Partecipazione ad analisi degli incidenti, priorità e verifiche con il team tecnico.",
    "projects_intro": "Progetti personali con codice pubblico su dati locali, interfacce e automazione.",
    "project_source": "Codice su GitHub",
    "project_details": "Sul progetto",
    "art_note": "Illustrazioni dei progetti · non screenshot"
  },
  "tr": {
    "nav_about": "Hakkımda",
    "nav_skills": "Yetenekler",
    "nav_projects": "Projeler",
    "nav_contact": "İletişim",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "Merhaba, ben<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "AppSec, altyapı ve geliştirme alanlarında çalışan Junior / Junior+ siber güvenlik uzmanıyım. İncelemeler yapıyor, öneriler hazırlıyor ve kendi uygulamalarımı geliştiriyorum.",
    "hero_projects_btn": "Projeleri Gör",
    "hero_contact_btn": "İletişime Geç",
    "stats_title": "Kısa Bilgi",
    "about_title": "Hakkımda",
    "about_text": "Ben Marsel Mukhamedzhanov. Siber güvenlikte yaklaşık bir yıllık iş deneyimim, öncesinde iki yıllık bağımsız pentest ve denetim pratiğim var. Programlama eğitimim sayesinde sistemlerin iç işleyişini anlamaya ilgi duyuyorum.",
    "edu_title": "Eğitim",
    "edu_college": "Kolej",
    "edu_college_text": "Programcı eğitimi (orta mesleki eğitim).",
    "edu_uni": "Enstitü",
    "edu_uni_text": "Son sınıftayım, siber güvenlik ve geliştirme alanında ilerlemeye devam ediyorum.",
    "skills_title": "Yetenekler",
    "ai_title": "Yapay Zeka ve Otomasyon",
    "ai_text": "Kod ve dokümantasyonda yapay zekâdan destek alıyor, rutin görevlerin otomasyonunu deniyorum. Önerilen çözümleri kontrol ediyorum.",
    "projects_title": "Projeler",
    "contact_title": "İletişim",
    "contact_subtitle": "Hızlı İletişim",
    "stats_item_1": "<strong>1</strong> yıl siber güvenlik deneyimi",
    "stats_item_2": "<strong>2 yıl</strong> resmi iş öncesi pentest ve güvenlik denetimi pratiği",
    "stats_item_3": "<strong>Gayriresmi olarak</strong> proje bazlı ağ yönetimi görevleri",
    "edu_college_level": "Tamamlandı",
    "edu_uni_level": "Devam ediyor",
    "level_junior": "Junior+",
    "skills_langdev_title": "Diller ve geliştirme",
    "skills_os_title": "İşletim sistemleri ve yönetim",
    "skills_os_text": "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    "skills_networks_title": "Ağlar",
    "skills_networks_text": "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    "skills_pentest_title": "Pentest",
    "skills_pentest_text": "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    "skills_appsec_title": "AppSec / Kod Güvenliği",
    "skills_appsec_text": "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    "skills_devops_title": "DevOps ve araçlar",
    "skills_devops_text": "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "Notlar, görevler ve dosyalar için klasör, etiket, tam metin arama ve içe/dışa aktarma sunan yerel çalışma alanı. Flutter ve SQLite; alfa sürümü.",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "Firefox ESR tabanlı tarayıcı projesi: dikey sekmeler, çalışma alanları ve gizlilik ayarları. Overlay modülleri, UI önizlemesi ve derleme betikleri. Geliştirme aşamasında.",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "Kendi sunucunuzda çalışan akıllı ev merkezi: cihazlar, odalar, HTTP/MQTT, WebSocket ve dosya depolama. Python/FastAPI ve React; bazı entegrasyonlar geliştirme aşamasında.",
    "project_4_title": "Finance Calculator",
    "project_4_text": "Gelir, gider, kategoriler, hedefler, grafikler ve dışa aktarma için masaüstü bütçe uygulaması. Python, PySide6 ve SQLite, veri yedekleme desteği.",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "Notlar, görevler ve dosyalar için klasör, etiket, tam metin arama ve içe/dışa aktarma sunan yerel çalışma alanı. Flutter ve SQLite; alfa sürümü.",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "Firefox ESR tabanlı tarayıcı projesi: dikey sekmeler, çalışma alanları ve gizlilik ayarları. Overlay modülleri, UI önizlemesi ve derleme betikleri. Geliştirme aşamasında.",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "Kendi sunucunuzda çalışan akıllı ev merkezi: cihazlar, odalar, HTTP/MQTT, WebSocket ve dosya depolama. Python/FastAPI ve React; bazı entegrasyonlar geliştirme aşamasında.",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "Gelir, gider, kategoriler, hedefler, grafikler ve dışa aktarma için masaüstü bütçe uygulaması. Python, PySide6 ve SQLite, veri yedekleme desteği.",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "Öz değerlendirme: Junior / Junior+. Karmaşık görevlerde dokümantasyondan ve deneyimli meslektaşlarımın geri bildiriminden yararlanıyorum.",
    "contact_cta": "İletişime geç",
    "focus_text": "Siber güvenlik · ağlar · geliştirme",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "Web uygulamaları, kaynak kodu, sunucu, ağ hizmetleri ve CI/CD yapılandırmaları üzerinde çalıştım. Teknik raporlar ve öneriler hazırladım; uygulanan değişiklikleri yeniden kontrol ettim.",
    "about_workstyle": "Kontrol otomasyonu ve güvenlik dokümantasyonuyla da ilgileniyorum. Teknik gözlemleri iş öncelikleriyle ilişkilendirmeyi ve açık anlatmayı öğreniyorum. Kişisel projelerde frontend, Python ve Flutter becerilerimi geliştiriyorum. Junior / Junior+ seviyesinde katkıda bulunup büyüyebileceğim bir ekip arıyorum.",
    "experience_title": "Pratik deneyim",
    "experience_intro": "Siber güvenlik · 2025–2026",
    "exp_web_title": "Web uygulamaları ve kod",
    "exp_web_text": "Uygulama ve kaynak kodu incelemeleri, sonuçların belgelenmesi, öneriler ve düzeltmelerin yeniden kontrolü.",
    "exp_infra_title": "Altyapı ve CI/CD",
    "exp_infra_text": "Sunucu, ağ ve derleme yapılandırmalarının incelenmesi. Erişim yönetimi ve sırların güvenli işlenmesine katkı.",
    "exp_auto_title": "Otomasyon",
    "exp_auto_text": "Dahili kontrol ve envanter araçları üzerinde çalışma. Sonuçları toplamak ve işlemek için betikler ve uzman araçlar kullanımı.",
    "exp_docs_title": "Dokümantasyon ve ekip",
    "exp_docs_text": "Raporlar, öneriler ve güvenlik belgeleri. Teknik ekiple olay analizi, önceliklendirme ve takip kontrollerine katılım.",
    "projects_intro": "Yerel veri saklama, arayüzler ve otomasyon üzerine herkese açık kaynak kodlu kişisel projeler.",
    "project_source": "GitHub kodu",
    "project_details": "Proje hakkında",
    "art_note": "Proje illüstrasyonları · arayüz ekran görüntüsü değildir"
  },
  "zh": {
    "nav_about": "关于我",
    "nav_skills": "技能",
    "nav_projects": "项目",
    "nav_contact": "联系",
    "hero_kicker": "Junior / Junior+ · Cybersecurity",
    "hero_title": "你好，我是<br><span class=\"accent\">Marsel Mukhamedzhanov</span>",
    "hero_text": "我是一名 Junior / Junior+ 网络安全从业者，关注应用安全、基础设施和开发，开展安全检查、撰写建议，并开发个人应用。",
    "hero_projects_btn": "查看项目",
    "hero_contact_btn": "联系我",
    "stats_title": "简介",
    "about_title": "关于我",
    "about_text": "我是 Marsel Mukhamedzhanov。我拥有约一年的网络安全工作经验，此前进行了两年的独立渗透测试与审计实践。我的专业背景是编程，因此也很关注系统的内部实现。",
    "edu_title": "教育背景",
    "edu_college": "学院",
    "edu_college_text": "程序员专业（中等职业教育）。",
    "edu_uni": "大学",
    "edu_uni_text": "目前在读最后一年，持续深耕网络安全与开发。",
    "skills_title": "技能",
    "ai_title": "AI 与自动化",
    "ai_text": "我使用 AI 辅助代码和文档工作，并尝试自动化日常任务。我会检查所建议的解决方案。",
    "projects_title": "项目",
    "contact_title": "联系",
    "contact_subtitle": "快捷联系方式",
    "stats_item_1": "<strong>1</strong> 年网络安全经验",
    "stats_item_2": "<strong>2 年</strong> 在正式工作前从事渗透测试与安全审计实践",
    "stats_item_3": "<strong>非正式</strong> 参与过项目型网络管理工作",
    "edu_college_level": "已完成",
    "edu_uni_level": "进行中",
    "level_junior": "Junior+",
    "skills_langdev_title": "语言与开发",
    "skills_os_title": "操作系统与管理",
    "skills_os_text": "Linux 管理、Windows Server、Active Directory、Kali Linux、OSQuery、Velociraptor",
    "skills_networks_title": "网络",
    "skills_networks_text": "TCP/IP、OSI 模型、DNS/DHCP、Routing & Switching、VLAN/VPN、防火墙规则、NAT/PAT、Wireshark、Suricata、Zeek",
    "skills_pentest_title": "渗透测试",
    "skills_pentest_text": "Nmap、Metasploit、Burp Suite、OWASP ZAP、Nikto、Gobuster、SQLMap、Hydra、John the Ripper、Hashcat",
    "skills_appsec_title": "AppSec / 代码安全",
    "skills_appsec_text": "Semgrep、Snyk、SonarQube、Trivy、Dependency-Check、Checkmarx、GitHub Advanced Security、DefectDojo",
    "skills_soc_title": "SOC / SIEM / IR",
    "skills_soc_text": "Splunk、Wazuh、ELK Stack、Graylog、TheHive、Cortex、MISP、CrowdSec",
    "skills_devops_title": "DevOps 与工具",
    "skills_devops_text": "Docker、VMware/VirtualBox、Git/GitHub、Vite、Figma",
    "project_1_title": "MarsFlow",
    "project_1_text": "用于笔记、任务和文件的本地工作空间，支持文件夹、标签、全文搜索及数据导入导出。采用 Flutter 和 SQLite，目前为 alpha 版本。",
    "project_2_title": "MarsFlow Browser",
    "project_2_text": "基于 Firefox ESR 的浏览器项目，提供垂直标签页、工作空间和隐私设置。仓库包含 overlay 模块、UI 预览和构建脚本，仍在开发中。",
    "project_3_title": "MarsFlow Home Assistant",
    "project_3_text": "可自行部署的智能家居中心，提供设备与房间控制、HTTP/MQTT、WebSocket 和文件存储。使用 Python/FastAPI 和 React，部分集成仍在开发。",
    "project_4_title": "Finance Calculator",
    "project_4_text": "个人预算桌面应用，支持收入、支出、分类、目标、图表和导出。使用 Python、PySide6 和 SQLite，并支持数据备份。",
    "modal_1_title": "MarsFlow",
    "modal_1_text": "用于笔记、任务和文件的本地工作空间，支持文件夹、标签、全文搜索及数据导入导出。采用 Flutter 和 SQLite，目前为 alpha 版本。",
    "modal_2_title": "MarsFlow Browser",
    "modal_2_text": "基于 Firefox ESR 的浏览器项目，提供垂直标签页、工作空间和隐私设置。仓库包含 overlay 模块、UI 预览和构建脚本，仍在开发中。",
    "modal_3_title": "MarsFlow Home Assistant",
    "modal_3_text": "可自行部署的智能家居中心，提供设备与房间控制、HTTP/MQTT、WebSocket 和文件存储。使用 Python/FastAPI 和 React，部分集成仍在开发。",
    "modal_4_title": "Finance Calculator",
    "modal_4_text": "个人预算桌面应用，支持收入、支出、分类、目标、图表和导出。使用 Python、PySide6 和 SQLite，并支持数据备份。",
    "contact_phone": "📞 +7 (909) 295-11-15",
    "contact_email": "✉️ marselmuhamedzanoa@gmail.com",
    "contact_telegram": "💬 Telegram: @llfatell",
    "contact_github": "GitHub: MarselDynamicIndustries",
    "skills_note": "技能自评：Junior / Junior+。处理复杂任务时，我会参考文档并向更有经验的同事请教。",
    "contact_cta": "联系我",
    "focus_text": "网络安全 · 网络 · 开发",
    "level_foundation": "Junior",
    "level_practice": "Junior+",
    "about_more": "工作实践涉及 Web 应用检查、源代码分析，以及服务器、网络服务和 CI/CD 配置检查。我编写技术报告，为开发与运维人员提出建议，并在修改后复查结果。",
    "about_workstyle": "我也参与检查自动化和安全文档工作，学习将技术观察与业务优先级联系起来，并清晰地解释结果。个人项目帮助我提升前端、Python 和 Flutter 技能。我希望加入能以 Junior / Junior+ 水平贡献并持续成长的团队。",
    "experience_title": "实践经验",
    "experience_intro": "网络安全 · 2025–2026",
    "exp_web_title": "Web 应用与代码",
    "exp_web_text": "检查应用与源代码，记录结果，提出建议，并复查已实施的修改。",
    "exp_infra_title": "基础设施与 CI/CD",
    "exp_infra_text": "检查服务器、网络服务与构建配置，参与访问管理和敏感凭据的安全处理。",
    "exp_auto_title": "检查自动化",
    "exp_auto_text": "参与内部检查和资产清点工具的开发，利用脚本与专业工具简化结果收集和处理。",
    "exp_docs_title": "文档与协作",
    "exp_docs_text": "编写报告、建议与安全文档，和技术团队一起参与事件分析、任务排序及后续检查。",
    "projects_intro": "源代码公开的个人项目，涵盖本地数据存储、界面和自动化。",
    "project_source": "GitHub 源码",
    "project_details": "项目介绍",
    "art_note": "项目主题插图，并非界面截图"
  }
};

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.ru;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const translated = dict[key] || translations.en[key] || translations.ru[key];
    if (translated) {
      el.textContent = translated;
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const translated = dict[key] || translations.en[key] || translations.ru[key];
    if (translated) {
      el.innerHTML = translated;
    }
  });
  document.documentElement.lang = lang;
  storage.setItem("language", lang);
};

if (languagePicker) {
  const options = [...languagePicker.querySelectorAll("[data-language]")];
  const selectLanguage = (lang) => {
    const selected = options.find((button) => button.dataset.language === lang) || options[0];
    applyLanguage(selected.dataset.language);
    document.getElementById("languageLabel").textContent = selected.childNodes[0].textContent;
    options.forEach((button) => button.setAttribute("aria-pressed", String(button === selected)));
  };
  selectLanguage(storage.getItem("language") || "ru");
  options.forEach((button) => button.addEventListener("click", () => {
    selectLanguage(button.dataset.language);
    languagePicker.open = false;
    languagePicker.querySelector("summary").focus();
  }));
  document.addEventListener("click", (event) => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });
  languagePicker.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      languagePicker.open = false;
      languagePicker.querySelector("summary").focus();
    }
  });
  languagePicker.addEventListener("focusout", (event) => {
    if (!languagePicker.contains(event.relatedTarget)) languagePicker.open = false;
  });
}

const filterButtons = document.querySelectorAll(".chip");
const skillCards = document.querySelectorAll(".skill-card");
const skillGroups = document.querySelectorAll(".skills-group");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    skillCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.type === filter;
      card.classList.toggle("hide", !shouldShow);
    });

    skillGroups.forEach((group) => {
      const visibleCards = group.querySelectorAll(".skill-card:not(.hide)");
      group.classList.toggle("hide", visibleCards.length === 0);
    });
  });
});

const modalOpenButtons = document.querySelectorAll(".open-modal-btn");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modals = document.querySelectorAll(".modal");
const faqButtons = document.querySelectorAll(".faq-btn");
const roadmapButtons = document.querySelectorAll(".roadmap-btn");
const roadmapPanels = document.querySelectorAll(".roadmap-panel");

document.getElementById("year").textContent = String(new Date().getFullYear());

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      modal.returnFocus = button;
      modal.querySelector("button").focus();
    }
  });

  button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      button.click();
    }
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      modal.returnFocus?.focus();
    }
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      modal.returnFocus?.focus();
    }
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (item) {
      item.classList.toggle("open");
    }
  });
});

roadmapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roadmapButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const roadmap = button.dataset.roadmap;

    roadmapPanels.forEach((panel) => {
      panel.classList.toggle("hide", panel.dataset.roadmapPanel !== roadmap);
    });
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Service worker is optional for local static development.
    });
  });
}

document.addEventListener("keydown", (event) => {
  const modal = document.querySelector(".modal.open");
  if (!modal) return;
  if (event.key === "Escape") modal.querySelector("[data-close-modal]").click();
  if (event.key === "Tab") {
    const controls = [...modal.querySelectorAll('button, a[href], input, [tabindex="0"]')];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

// Motion is decorative. Content stays visible without browser APIs or JavaScript.
(() => {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)');
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'motion-toggle'; toggle.id = 'motionToggle';
  document.getElementById('themeToggle')?.after(toggle);
  let enabled = true;
  let observer;
  let userDisabled = storage.getItem('motion') === 'off';
  const labels = {
    ru: ['Отключить анимации', 'Включить анимации', 'Движение уменьшено в настройках системы'],
    en: ['Pause animations', 'Enable animations', 'Motion reduced in system settings'],
    de: ['Animationen pausieren', 'Animationen aktivieren', 'Bewegung in Systemeinstellungen reduziert'],
    es: ['Pausar animaciones', 'Activar animaciones', 'Movimiento reducido por el sistema'],
    fr: ['Suspendre les animations', 'Activer les animations', 'Mouvements réduits par le système'],
    it: ['Disattiva animazioni', 'Attiva animazioni', 'Movimento ridotto dal sistema'],
    tr: ['Animasyonları durdur', 'Animasyonları aç', 'Sistem hareketleri azaltıyor'],
    zh: ['暂停动画', '启用动画', '系统已设置减少动态效果']
  };
  const refreshLabel = () => {
    const dict = labels[document.documentElement.lang] || labels.en;
    const title = reducedMotion?.matches ? dict[2] : dict[enabled ? 0 : 1];
    toggle.title = title; toggle.setAttribute('aria-label',title);
    toggle.setAttribute('aria-pressed',String(enabled));
    toggle.textContent = enabled ? 'Ⅱ' : '▷';
    toggle.disabled = !!reducedMotion?.matches;
  };
  const applyMotion = () => {
    enabled = !userDisabled && !reducedMotion?.matches;
    document.body.classList.toggle('motion-off', !enabled);
    document.body.classList.toggle('motion-enabled', enabled);
    if (!enabled) document.querySelectorAll('.motion-pending').forEach(el => el.classList.add('is-visible'));
    refreshLabel();
  };
  toggle.addEventListener('click', () => { userDisabled = !userDisabled; storage.setItem('motion',userDisabled ? 'off' : 'on'); applyMotion(); });
  reducedMotion?.addEventListener?.('change',applyMotion);
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click',refreshLabel));
  applyMotion();
  if (enabled && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },{threshold:.06,rootMargin:'0px 0px -24px 0px'});
    document.querySelectorAll('.motion-item,.motion-heading').forEach(el => {
      // Large containers are never hidden; only small cards and headings animate.
      el.classList.add('motion-pending'); observer.observe(el);
    });
  }
  const progress = document.querySelector('.scroll-progress');
  let progressFrame = 0;
  const paintProgress = () => {
    progressFrame = 0;
    const range = document.documentElement.scrollHeight - window.innerHeight;
    progress?.style.setProperty('--reading-progress',String(range > 0 ? Math.min(1,Math.max(0,window.scrollY / range)) : 0));
  };
  const queueProgress = () => { if (!progressFrame) progressFrame = window.requestAnimationFrame(paintProgress); };
  if (progress && window.requestAnimationFrame) {
    window.addEventListener('scroll',queueProgress,{passive:true});
    window.addEventListener('resize',queueProgress); paintProgress();
  }
  document.querySelectorAll('.project-cover').forEach(cover => {
    let frame = 0;
    cover.addEventListener('pointermove',event => {
      if (!enabled || !finePointer?.matches || event.pointerType === 'touch') return;
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = cover.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height;
        cover.style.setProperty('--tilt-x',`${(x-.5)*3}deg`);
        cover.style.setProperty('--tilt-y',`${(.5-y)*3}deg`);
        cover.style.setProperty('--pointer-x',`${x*100}%`);
        cover.style.setProperty('--pointer-y',`${y*100}%`);
      });
    });
    cover.addEventListener('pointerleave',() => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;cover.style.setProperty('--tilt-x','0deg');cover.style.setProperty('--tilt-y','0deg');
    });
  });
})();
