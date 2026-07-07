const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
const langSelect = document.getElementById("langSelect");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
});

const translations = {
  ru: {
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_contact: "Контакты",
    hero_kicker: "Cybersecurity Specialist",
    hero_title: "Привет, я <span class=\"accent\">Марсель Мухамеджанов Ильдарович</span>",
    hero_text: "Занимаюсь кибербезопасностью: защищаю инфраструктуру, анализирую уязвимости и повышаю устойчивость систем к атакам.",
    hero_projects_btn: "Смотреть проекты",
    hero_contact_btn: "Связаться",
    stats_title: "Коротко обо мне",
    about_title: "Обо мне",
    about_text: "Я специалист по ИБ: провожу аудит безопасности, тестирование на проникновение и выстраиваю процессы защиты. До официальной работы в ИБ два года занимался пентестом и аудитом в формате частной практики. Также есть проектный неформальный опыт сетевого администрирования. При этом умею во frontend, поэтому могу закрывать задачи на стыке безопасности и интерфейсов.",
    edu_title: "Образование",
    edu_college: "Колледж",
    edu_college_text: "Программист по образованию (среднее профессиональное образование).",
    edu_uni: "Институт",
    edu_uni_text: "Обучаюсь на последнем курсе, продолжаю развиваться в ИБ и разработке.",
    skills_title: "Навыки",
    ai_title: "AI и автоматизация",
    ai_text: "Использование AI для анализа кода и уязвимостей, ускорение pentest/appsec задач, автоматизация рутинных процессов через AI-инструменты, prompt engineering для рабочих сценариев.",
    projects_title: "Проекты",
    contact_title: "Связаться",
    contact_subtitle: "Быстрые контакты",
    stats_item_1: "<strong>1</strong> год в информационной безопасности",
    stats_item_2: "<strong>2 года</strong> практики в пентесте и security-аудите до официальной работы",
    stats_item_3: "<strong>Неформально</strong> вел задачи сетевого администрирования в проектной практике",
    stats_item_4: "<strong>200+</strong> реализованных проектов в разных направлениях",
    stats_item_5: "<strong>24/7</strong> фокус на надежность и безопасность",
    edu_college_level: "Завершено",
    edu_uni_level: "В процессе",
    level_middle: "Middle",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Языки и разработка",
    skills_os_title: "ОС и администрирование",
    skills_os_text: "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Сети",
    skills_networks_text: "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Code Security",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps и инструменты",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Панель мониторинга инцидентов с приоритизацией рисков и визуализацией уязвимостей по системам.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Интерфейс для результатов сканирования: CVE, severity, remediation шаги и экспорт отчетов.",
    project_3_title: "SOC Landing",
    project_3_text: "Лендинг для SOC-сервиса с акцентом на доверие, SLA и быструю коммуникацию с клиентами.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Практический стенд по сегментации сети, настройке firewall rules, VPN и мониторингу сетевых аномалий.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "Интеграция SAST/SCA/Container scanning в CI: Semgrep, Snyk, Trivy с отчетами и автоматизацией triage.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "Набор IR-сценариев и шаблонов реагирования для SOC: от алерта до пост-инцидентного отчета и lessons learned.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Центр мониторинга инцидентов: агрегация логов, риск-скоринг, таймлайн событий и приоритеты реагирования.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Интерфейс анализа уязвимостей с triage по CVSS, дедупликацией и назначением remediation-задач.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Лендинг сервиса с акцентом на SLA, процесс онбординга и прозрачную коммуникацию при инцидентах.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Лаборатория для практики хардненинга: сегментация VLAN, VPN-туннели, firewall policy и проверка устойчивости.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "Пайплайн DevSecOps со сканированием кода и зависимостей, quality gates и автоматическим формированием отчетов.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Стандартизированные playbooks для SOC: классификация инцидента, containment, eradication и post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_kicker: "Cybersecurity Specialist",
    hero_title: "Hi, I am <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "I work in cybersecurity: protecting infrastructure, analyzing vulnerabilities, and improving system resilience.",
    hero_projects_btn: "View Projects",
    hero_contact_btn: "Contact Me",
    stats_title: "Quick Facts",
    about_title: "About Me",
    about_text: "I am a cybersecurity specialist focused on audits, penetration testing, and defense processes. Before official employment, I spent two years in pentest and security audit private practice. I also have project-based unofficial network administration experience. I can also handle frontend tasks at the security/UI intersection.",
    edu_title: "Education",
    edu_college: "College",
    edu_college_text: "Programmer degree (secondary vocational education).",
    edu_uni: "Institute",
    edu_uni_text: "Final-year student, continuously improving in cybersecurity and software development.",
    skills_title: "Skills",
    ai_title: "AI and Automation",
    ai_text: "Using AI for code and vulnerability analysis, speeding up pentest/appsec tasks, automating routine workflows, and prompt engineering for practical scenarios.",
    projects_title: "Projects",
    contact_title: "Contact",
    contact_subtitle: "Quick Contacts",
    stats_item_1: "<strong>1</strong> year in cybersecurity",
    stats_item_2: "<strong>2 years</strong> of pentest and security audit practice before official employment",
    stats_item_3: "<strong>Informally</strong> handled network administration tasks in project practice",
    stats_item_4: "<strong>200+</strong> completed projects across different areas",
    stats_item_5: "<strong>24/7</strong> focus on reliability and security",
    edu_college_level: "Completed",
    edu_uni_level: "In Progress",
    level_middle: "Middle",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Languages and Development",
    skills_os_title: "OS and Administration",
    skills_os_text: "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Networks",
    skills_networks_text: "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Code Security",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps and Tools",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Incident monitoring dashboard with risk prioritization and vulnerability visualization by systems.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Interface for scanner results: CVE, severity, remediation steps, and report export.",
    project_3_title: "SOC Landing",
    project_3_text: "Landing page for SOC service focused on trust, SLA, and fast communication.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Practical lab for network segmentation, firewall rules, VPN, and anomaly monitoring.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "SAST/SCA/container scanning integrated into CI with reporting and triage automation.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "A set of IR scenarios and response templates for SOC from alert to post-incident report.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Incident monitoring center: log aggregation, risk scoring, event timeline, and response priorities.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Vulnerability analysis interface with CVSS triage, deduplication, and remediation task assignment.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Service landing page emphasizing SLA, onboarding flow, and transparent incident communication.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Hardening lab: VLAN segmentation, VPN tunnels, firewall policy, and resilience validation.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "DevSecOps pipeline with code/dependency scans, quality gates, and automated reporting.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Standardized SOC playbooks: incident classification, containment, eradication, and post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  de: {
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    hero_kicker: "Cybersecurity Specialist",
    hero_title: "Hallo, ich bin <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "Ich arbeite in der Cybersicherheit: Infrastruktur schützen, Schwachstellen analysieren und Systemresilienz erhöhen.",
    hero_projects_btn: "Projekte ansehen",
    hero_contact_btn: "Kontakt",
    stats_title: "Kurzprofil",
    about_title: "Über mich",
    about_text: "Ich bin Cybersecurity-Spezialist mit Fokus auf Security Audits, Penetrationstests und Schutzprozesse. Vor der offiziellen Tätigkeit habe ich zwei Jahre Pentest- und Audit-Praxis gesammelt. Zusätzlich habe ich projektbezogene inoffizielle Netzwerkadministrations-Erfahrung.",
    edu_title: "Ausbildung",
    edu_college: "College",
    edu_college_text: "Programmierer-Ausbildung (berufliche Sekundarausbildung).",
    edu_uni: "Institut",
    edu_uni_text: "Im letzten Studienjahr, mit Schwerpunkt auf Cybersecurity und Entwicklung.",
    skills_title: "Fähigkeiten",
    ai_title: "KI und Automatisierung",
    ai_text: "KI für Code- und Schwachstellenanalyse, Beschleunigung von Pentest/AppSec-Aufgaben und Automatisierung repetitiver Prozesse.",
    projects_title: "Projekte",
    contact_title: "Kontakt",
    contact_subtitle: "Schnellkontakt",
    stats_item_1: "<strong>1</strong> Jahr in der Cybersicherheit",
    stats_item_2: "<strong>2 Jahre</strong> Pentest- und Security-Audit-Praxis vor offizieller Anstellung",
    stats_item_3: "<strong>Inoffiziell</strong> Netzwerkadministrationsaufgaben in Projektpraxis übernommen",
    stats_item_4: "<strong>200+</strong> abgeschlossene Projekte in verschiedenen Bereichen",
    stats_item_5: "<strong>24/7</strong> Fokus auf Zuverlässigkeit und Sicherheit",
    edu_college_level: "Abgeschlossen",
    edu_uni_level: "In Bearbeitung",
    level_middle: "Mittel",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Sprachen und Entwicklung",
    skills_os_title: "Betriebssysteme und Administration",
    skills_os_text: "Linux-Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Netzwerke",
    skills_networks_text: "TCP/IP, OSI-Modell, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall-Regeln, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Code-Sicherheit",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps und Tools",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Dashboard zur Vorfallüberwachung mit Risikopriorisierung und Visualisierung von Schwachstellen nach Systemen.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Oberfläche für Scan-Ergebnisse: CVE, Schweregrad, Remediation-Schritte und Report-Export.",
    project_3_title: "SOC Landing",
    project_3_text: "Landingpage für SOC-Service mit Fokus auf Vertrauen, SLA und schnelle Kommunikation.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Praktisches Labor für Netzwerksegmentierung, Firewall-Regeln, VPN und Anomalieüberwachung.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "SAST/SCA/Container-Scanning in CI integriert mit Reporting und Triage-Automatisierung.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "IR-Szenarien und Reaktionsvorlagen für SOC vom Alert bis zum Post-Incident-Report.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Vorfallüberwachungszentrum: Log-Aggregation, Risk-Scoring, Ereignis-Timeline und Reaktionsprioritäten.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Schwachstellenanalyse mit CVSS-Triage, Deduplizierung und Zuweisung von Remediation-Aufgaben.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Service-Landingpage mit Fokus auf SLA, Onboarding-Prozess und transparente Vorfallkommunikation.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Hardening-Labor: VLAN-Segmentierung, VPN-Tunnel, Firewall-Policy und Resilienzprüfung.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "DevSecOps-Pipeline mit Code/Dependency-Scans, Quality Gates und automatischer Berichterstellung.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Standardisierte SOC-Playbooks: Klassifizierung, Containment, Eradication und Post-Mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    hero_kicker: "Especialista en Ciberseguridad",
    hero_title: "Hola, soy <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "Trabajo en ciberseguridad: protejo infraestructura, analizo vulnerabilidades y mejoro la resiliencia de sistemas.",
    hero_projects_btn: "Ver proyectos",
    hero_contact_btn: "Contactar",
    stats_title: "Resumen rápido",
    about_title: "Sobre mí",
    about_text: "Soy especialista en ciberseguridad: realizo auditorías, pruebas de penetración y desarrollo procesos de defensa. Antes del empleo oficial, tuve dos años de práctica en pentest y auditoría de seguridad. También tengo experiencia no oficial en administración de redes por proyectos.",
    edu_title: "Educación",
    edu_college: "Colegio",
    edu_college_text: "Programador de formación (educación profesional secundaria).",
    edu_uni: "Instituto",
    edu_uni_text: "Actualmente en el último curso, creciendo en ciberseguridad y desarrollo.",
    skills_title: "Habilidades",
    ai_title: "IA y automatización",
    ai_text: "Uso de IA para análisis de código y vulnerabilidades, aceleración de tareas pentest/appsec y automatización de procesos rutinarios.",
    projects_title: "Proyectos",
    contact_title: "Contacto",
    contact_subtitle: "Contactos rápidos",
    stats_item_1: "<strong>1</strong> año en ciberseguridad",
    stats_item_2: "<strong>2 años</strong> de práctica en pentest y auditoría de seguridad antes del empleo oficial",
    stats_item_3: "<strong>De forma no oficial</strong> realicé tareas de administración de redes en proyectos",
    stats_item_4: "<strong>200+</strong> proyectos completados en diferentes áreas",
    stats_item_5: "<strong>24/7</strong> enfoque en fiabilidad y seguridad",
    edu_college_level: "Completado",
    edu_uni_level: "En curso",
    level_middle: "Medio",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Lenguajes y desarrollo",
    skills_os_title: "Sistemas operativos y administración",
    skills_os_text: "Administración Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Redes",
    skills_networks_text: "TCP/IP, Modelo OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, reglas de firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Seguridad de código",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps y herramientas",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Panel de monitoreo de incidentes con priorización de riesgos y visualización de vulnerabilidades por sistemas.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Interfaz de resultados del escáner: CVE, severidad, pasos de remediación y exportación de reportes.",
    project_3_title: "SOC Landing",
    project_3_text: "Landing para servicio SOC con foco en confianza, SLA y comunicación rápida.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Laboratorio práctico de segmentación de red, reglas de firewall, VPN y monitoreo de anomalías.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "Integración de escaneo SAST/SCA/contenedores en CI con reportes y automatización de triage.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "Conjunto de escenarios IR y plantillas de respuesta SOC desde alerta hasta informe post-incidente.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Centro de monitoreo de incidentes: agregación de logs, puntuación de riesgo, línea de tiempo y prioridades de respuesta.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Interfaz de análisis de vulnerabilidades con triage por CVSS, deduplicación y asignación de remediación.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Landing del servicio con foco en SLA, onboarding y comunicación transparente de incidentes.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Laboratorio de hardening: segmentación VLAN, túneles VPN, políticas firewall y validación de resiliencia.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "Pipeline DevSecOps con análisis de código/dependencias, quality gates e informes automáticos.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Playbooks SOC estandarizados: clasificación, contención, erradicación y post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    hero_kicker: "Spécialiste Cybersécurité",
    hero_title: "Bonjour, je suis <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "Je travaille en cybersécurité : protection de l'infrastructure, analyse des vulnérabilités et amélioration de la résilience des systèmes.",
    hero_projects_btn: "Voir les projets",
    hero_contact_btn: "Me contacter",
    stats_title: "En bref",
    about_title: "À propos",
    about_text: "Je suis spécialiste en cybersécurité : audits, tests d'intrusion et mise en place de processus de défense. Avant l'emploi officiel, j'ai eu deux ans de pratique en pentest et audit de sécurité. J'ai aussi une expérience non officielle en administration réseau sur des projets.",
    edu_title: "Formation",
    edu_college: "Collège",
    edu_college_text: "Formation de programmeur (enseignement professionnel secondaire).",
    edu_uni: "Institut",
    edu_uni_text: "Dernière année d'études, progression continue en cybersécurité et développement.",
    skills_title: "Compétences",
    ai_title: "IA et automatisation",
    ai_text: "Utilisation de l'IA pour l'analyse de code et de vulnérabilités, accélération des tâches pentest/appsec et automatisation des workflows.",
    projects_title: "Projets",
    contact_title: "Contact",
    contact_subtitle: "Contacts rapides",
    stats_item_1: "<strong>1</strong> an en cybersécurité",
    stats_item_2: "<strong>2 ans</strong> de pratique pentest et audit sécurité avant l'emploi officiel",
    stats_item_3: "<strong>De manière non officielle</strong> gestion réseau sur des projets",
    stats_item_4: "<strong>200+</strong> projets réalisés dans différents domaines",
    stats_item_5: "<strong>24/7</strong> focus sur la fiabilité et la sécurité",
    edu_college_level: "Terminé",
    edu_uni_level: "En cours",
    level_middle: "Intermédiaire",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Langages et développement",
    skills_os_title: "Systèmes et administration",
    skills_os_text: "Administration Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Réseaux",
    skills_networks_text: "TCP/IP, modèle OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, règles firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Sécurité du code",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps et outils",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Tableau de bord de surveillance des incidents avec priorisation des risques et visualisation des vulnérabilités.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Interface des résultats de scan : CVE, gravité, étapes de remédiation et export de rapports.",
    project_3_title: "SOC Landing",
    project_3_text: "Landing page SOC orientée confiance, SLA et communication rapide.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Lab pratique de segmentation réseau, règles firewall, VPN et monitoring d'anomalies.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "Intégration SAST/SCA/container scanning dans CI avec reporting et triage automatisé.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "Jeu de scénarios IR et modèles de réponse SOC de l'alerte au rapport post-incident.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Centre de surveillance des incidents : agrégation des logs, scoring du risque, timeline et priorités de réponse.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Interface d'analyse des vulnérabilités avec triage CVSS, déduplication et assignation de remédiation.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Landing service axé SLA, onboarding et communication transparente en cas d'incident.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Lab de hardening : segmentation VLAN, tunnels VPN, politiques firewall et validation de résilience.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "Pipeline DevSecOps avec scans code/dépendances, quality gates et reporting automatisé.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Playbooks SOC standardisés : classification, containment, eradication et post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  it: {
    nav_about: "Chi sono",
    nav_skills: "Competenze",
    nav_projects: "Progetti",
    nav_contact: "Contatti",
    hero_kicker: "Specialista in Cybersecurity",
    hero_title: "Ciao, sono <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "Lavoro nella cybersecurity: proteggo infrastrutture, analizzo vulnerabilità e aumento la resilienza dei sistemi.",
    hero_projects_btn: "Vedi progetti",
    hero_contact_btn: "Contattami",
    stats_title: "In breve",
    about_title: "Chi sono",
    about_text: "Sono uno specialista in cybersecurity: audit di sicurezza, penetration test e processi di difesa. Prima del lavoro ufficiale ho avuto due anni di pratica in pentest e audit. Ho anche esperienza non ufficiale di amministrazione di rete in progetti.",
    edu_title: "Formazione",
    edu_college: "College",
    edu_college_text: "Programmatore di formazione (istruzione professionale secondaria).",
    edu_uni: "Istituto",
    edu_uni_text: "Attualmente all'ultimo anno, continuo a crescere in cybersecurity e sviluppo.",
    skills_title: "Competenze",
    ai_title: "IA e automazione",
    ai_text: "Uso dell'IA per analisi di codice e vulnerabilità, accelerazione di task pentest/appsec e automazione dei processi ripetitivi.",
    projects_title: "Progetti",
    contact_title: "Contatti",
    contact_subtitle: "Contatti rapidi",
    stats_item_1: "<strong>1</strong> anno in cybersecurity",
    stats_item_2: "<strong>2 anni</strong> di pratica pentest e audit sicurezza prima del lavoro ufficiale",
    stats_item_3: "<strong>In modo non ufficiale</strong> ho gestito attività di amministrazione di rete in progetti",
    stats_item_4: "<strong>200+</strong> progetti completati in diverse aree",
    stats_item_5: "<strong>24/7</strong> focus su affidabilità e sicurezza",
    edu_college_level: "Completato",
    edu_uni_level: "In corso",
    level_middle: "Intermedio",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Linguaggi e sviluppo",
    skills_os_title: "Sistemi operativi e amministrazione",
    skills_os_text: "Amministrazione Linux, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Reti",
    skills_networks_text: "TCP/IP, modello OSI, DNS/DHCP, Routing & Switching, VLAN/VPN, regole firewall, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Sicurezza del codice",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps e strumenti",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Dashboard di monitoraggio incidenti con priorità dei rischi e visualizzazione vulnerabilità per sistemi.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Interfaccia risultati scanner: CVE, severità, passaggi di remediation ed export report.",
    project_3_title: "SOC Landing",
    project_3_text: "Landing del servizio SOC con focus su fiducia, SLA e comunicazione rapida.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Laboratorio pratico per segmentazione rete, regole firewall, VPN e monitoraggio anomalie.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "Integrazione SAST/SCA/container scanning in CI con reportistica e automazione triage.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "Set di scenari IR e template di risposta SOC dall'alert al report post-incidente.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Centro monitoraggio incidenti: aggregazione log, risk scoring, timeline eventi e priorità di risposta.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "Interfaccia di analisi vulnerabilità con triage CVSS, deduplicazione e assegnazione remediation.",
    modal_3_title: "SOC Landing",
    modal_3_text: "Landing del servizio con focus su SLA, onboarding e comunicazione trasparente degli incidenti.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Lab di hardening: segmentazione VLAN, tunnel VPN, policy firewall e validazione resilienza.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "Pipeline DevSecOps con scan codice/dipendenze, quality gates e report automatici.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Playbook SOC standardizzati: classificazione, contenimento, eradicazione e post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  tr: {
    nav_about: "Hakkımda",
    nav_skills: "Yetenekler",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_kicker: "Siber Güvenlik Uzmanı",
    hero_title: "Merhaba, ben <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "Siber güvenlikte çalışıyorum: altyapıyı koruyor, zafiyetleri analiz ediyor ve sistem dayanıklılığını artırıyorum.",
    hero_projects_btn: "Projeleri Gör",
    hero_contact_btn: "İletişime Geç",
    stats_title: "Kısa Bilgi",
    about_title: "Hakkımda",
    about_text: "Siber güvenlik uzmanıyım: güvenlik denetimleri, penetration test ve savunma süreçleri kuruyorum. Resmi işten önce iki yıl pentest ve güvenlik denetimi pratiğim oldu. Ayrıca proje bazlı gayriresmi ağ yönetimi deneyimim var.",
    edu_title: "Eğitim",
    edu_college: "Kolej",
    edu_college_text: "Programcı eğitimi (orta mesleki eğitim).",
    edu_uni: "Enstitü",
    edu_uni_text: "Son sınıftayım, siber güvenlik ve geliştirme alanında ilerlemeye devam ediyorum.",
    skills_title: "Yetenekler",
    ai_title: "Yapay Zeka ve Otomasyon",
    ai_text: "Kod ve zafiyet analizi için AI kullanımı, pentest/appsec işlerini hızlandırma ve rutin süreçlerin otomasyonu.",
    projects_title: "Projeler",
    contact_title: "İletişim",
    contact_subtitle: "Hızlı İletişim",
    stats_item_1: "<strong>1</strong> yıl siber güvenlik deneyimi",
    stats_item_2: "<strong>2 yıl</strong> resmi iş öncesi pentest ve güvenlik denetimi pratiği",
    stats_item_3: "<strong>Gayriresmi olarak</strong> proje bazlı ağ yönetimi görevleri",
    stats_item_4: "<strong>200+</strong> farklı alanda tamamlanan proje",
    stats_item_5: "<strong>7/24</strong> güvenilirlik ve güvenlik odağı",
    edu_college_level: "Tamamlandı",
    edu_uni_level: "Devam ediyor",
    level_middle: "Orta",
    level_senior: "Senior",
    level_junior: "Junior+",
    skills_langdev_title: "Diller ve geliştirme",
    skills_os_title: "İşletim sistemleri ve yönetim",
    skills_os_text: "Linux Administration, Windows Server, Active Directory, Kali Linux, OSQuery, Velociraptor",
    skills_networks_title: "Ağlar",
    skills_networks_text: "TCP/IP, OSI Model, DNS/DHCP, Routing & Switching, VLAN/VPN, Firewall Rules, NAT/PAT, Wireshark, Suricata, Zeek",
    skills_pentest_title: "Pentest",
    skills_pentest_text: "Nmap, Metasploit, Burp Suite, OWASP ZAP, Nikto, Gobuster, SQLMap, Hydra, John the Ripper, Hashcat",
    skills_appsec_title: "AppSec / Kod Güvenliği",
    skills_appsec_text: "Semgrep, Snyk, SonarQube, Trivy, Dependency-Check, Checkmarx, GitHub Advanced Security, DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk, Wazuh, ELK Stack, Graylog, TheHive, Cortex, MISP, CrowdSec",
    skills_devops_title: "DevOps ve araçlar",
    skills_devops_text: "Docker, VMware/VirtualBox, Git/GitHub/GitLab, CI/CD, Vite, Figma",
    project_1_title: "Security Dashboard",
    project_1_text: "Sistem bazlı zafiyet görselleştirme ve risk önceliklendirme ile olay izleme paneli.",
    project_2_title: "Vulnerability Scanner UI",
    project_2_text: "Tarama sonuçları arayüzü: CVE, şiddet, remediation adımları ve rapor dışa aktarma.",
    project_3_title: "SOC Landing",
    project_3_text: "Güven, SLA ve hızlı iletişim odaklı SOC hizmet landing sayfası.",
    project_4_title: "Network Hardening Lab",
    project_4_text: "Ağ segmentasyonu, firewall kuralları, VPN ve anomali izlemesi için uygulamalı lab.",
    project_5_title: "AppSec CI Pipeline",
    project_5_text: "SAST/SCA/container taramalarının CI'a entegre edilmesi; raporlama ve triage otomasyonu.",
    project_6_title: "Incident Response Playbooks",
    project_6_text: "SOC için uyarıdan post-incident raporuna kadar IR senaryoları ve yanıt şablonları.",
    modal_1_title: "Security Dashboard",
    modal_1_text: "Olay izleme merkezi: log toplama, risk puanlama, olay zaman çizelgesi ve müdahale öncelikleri.",
    modal_2_title: "Vulnerability Scanner UI",
    modal_2_text: "CVSS triage, deduplikasyon ve remediation ataması içeren zafiyet analiz arayüzü.",
    modal_3_title: "SOC Landing",
    modal_3_text: "SLA, onboarding süreci ve şeffaf olay iletişimine odaklanan hizmet landing sayfası.",
    modal_4_title: "Network Hardening Lab",
    modal_4_text: "Hardening laboratuvarı: VLAN segmentasyonu, VPN tünelleri, firewall politikası ve dayanıklılık doğrulaması.",
    modal_5_title: "AppSec CI Pipeline",
    modal_5_text: "Kod/bağımlılık taramaları, quality gate'ler ve otomatik raporlama içeren DevSecOps pipeline.",
    modal_6_title: "Incident Response Playbooks",
    modal_6_text: "Standart SOC playbook'ları: sınıflandırma, containment, eradication ve post-mortem.",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
  zh: {
    nav_about: "关于我",
    nav_skills: "技能",
    nav_projects: "项目",
    nav_contact: "联系",
    hero_kicker: "网络安全专家",
    hero_title: "你好，我是 <span class=\"accent\">Marsel Mukhamedzhanov Ildarovich</span>",
    hero_text: "我从事网络安全工作：保护基础设施、分析漏洞并提升系统韧性。",
    hero_projects_btn: "查看项目",
    hero_contact_btn: "联系我",
    stats_title: "简介",
    about_title: "关于我",
    about_text: "我是网络安全专家，负责安全审计、渗透测试和防护流程建设。在正式工作前，我有两年的渗透测试与安全审计实践经验。同时也有项目型的非正式网络管理经验。",
    edu_title: "教育背景",
    edu_college: "学院",
    edu_college_text: "程序员专业（中等职业教育）。",
    edu_uni: "大学",
    edu_uni_text: "目前在读最后一年，持续深耕网络安全与开发。",
    skills_title: "技能",
    ai_title: "AI 与自动化",
    ai_text: "使用 AI 进行代码与漏洞分析，加速 pentest/appsec 任务，并自动化日常流程。",
    projects_title: "项目",
    contact_title: "联系",
    contact_subtitle: "快捷联系方式",
    stats_item_1: "<strong>1</strong> 年网络安全经验",
    stats_item_2: "<strong>2 年</strong> 在正式工作前从事渗透测试与安全审计实践",
    stats_item_3: "<strong>非正式</strong> 参与过项目型网络管理工作",
    stats_item_4: "<strong>200+</strong> 个跨领域项目经验",
    stats_item_5: "<strong>7x24</strong> 关注可靠性与安全性",
    edu_college_level: "已完成",
    edu_uni_level: "进行中",
    level_middle: "中级",
    level_senior: "高级",
    level_junior: "初级+",
    skills_langdev_title: "语言与开发",
    skills_os_title: "操作系统与管理",
    skills_os_text: "Linux 管理、Windows Server、Active Directory、Kali Linux、OSQuery、Velociraptor",
    skills_networks_title: "网络",
    skills_networks_text: "TCP/IP、OSI 模型、DNS/DHCP、Routing & Switching、VLAN/VPN、防火墙规则、NAT/PAT、Wireshark、Suricata、Zeek",
    skills_pentest_title: "渗透测试",
    skills_pentest_text: "Nmap、Metasploit、Burp Suite、OWASP ZAP、Nikto、Gobuster、SQLMap、Hydra、John the Ripper、Hashcat",
    skills_appsec_title: "AppSec / 代码安全",
    skills_appsec_text: "Semgrep、Snyk、SonarQube、Trivy、Dependency-Check、Checkmarx、GitHub Advanced Security、DefectDojo",
    skills_soc_title: "SOC / SIEM / IR",
    skills_soc_text: "Splunk、Wazuh、ELK Stack、Graylog、TheHive、Cortex、MISP、CrowdSec",
    skills_devops_title: "DevOps 与工具",
    skills_devops_text: "Docker、VMware/VirtualBox、Git/GitHub、Vite、Figma",
    project_1_title: "安全看板",
    project_1_text: "按系统展示漏洞并进行风险优先级排序的事件监控看板。",
    project_2_title: "漏洞扫描 UI",
    project_2_text: "扫描结果界面：CVE、严重级别、修复步骤与报告导出。",
    project_3_title: "SOC 落地页",
    project_3_text: "面向 SOC 服务的落地页，强调信任、SLA 与快速沟通。",
    project_4_title: "网络加固实验室",
    project_4_text: "用于网络分段、防火墙规则、VPN 与异常监控的实战实验室。",
    project_5_title: "AppSec CI 流水线",
    project_5_text: "将 SAST/SCA/容器扫描集成到 CI，并实现报告与分诊自动化。",
    project_6_title: "事件响应手册",
    project_6_text: "SOC 场景化 IR 手册：从告警到事后复盘报告。",
    modal_1_title: "安全看板",
    modal_1_text: "事件监控中心：日志聚合、风险评分、事件时间线与响应优先级。",
    modal_2_title: "漏洞扫描 UI",
    modal_2_text: "漏洞分析界面，支持 CVSS 分诊、去重与修复任务分配。",
    modal_3_title: "SOC 落地页",
    modal_3_text: "服务落地页，突出 SLA、上手流程与透明的事件沟通。",
    modal_4_title: "网络加固实验室",
    modal_4_text: "加固实验室：VLAN 分段、VPN 隧道、防火墙策略与韧性验证。",
    modal_5_title: "AppSec CI 流水线",
    modal_5_text: "DevSecOps 流水线：代码/依赖扫描、质量门禁与自动报告。",
    modal_6_title: "事件响应手册",
    modal_6_text: "标准化 SOC 手册：分类、遏制、清除与复盘。",
    contact_phone: "📞 +7 (909) 295-11-15",
    contact_email: "✉️ marselmuhamedzanoa@gmail.com",
    contact_telegram: "💬 Telegram: @llfatell",
    contact_github: "🐙 GitHub: HARLEQU1IN",
  },
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
  localStorage.setItem("language", lang);
};

if (langSelect) {
  const savedLang = localStorage.getItem("language") || "ru";
  langSelect.value = translations[savedLang] ? savedLang : "ru";
  applyLanguage(langSelect.value);
  langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
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

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach((el) => observer.observe(el));

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const floatingCard = document.querySelector(".floating-card");
const modalOpenButtons = document.querySelectorAll(".open-modal-btn");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modals = document.querySelectorAll(".modal");
const faqButtons = document.querySelectorAll(".faq-btn");
const roadmapButtons = document.querySelectorAll(".roadmap-btn");
const roadmapPanels = document.querySelectorAll(".roadmap-panel");
const projectsStrip = document.getElementById("projectsStrip");
const openPhonePanelBtn = document.getElementById("openPhonePanelBtn");
const openPhonePanelNav = document.getElementById("openPhonePanelNav");
const closePhonePanel = document.getElementById("closePhonePanel");
const phonePanel = document.getElementById("phonePanel");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Заполните все поля.";
      return;
    }

    formStatus.textContent = "Спасибо! Сообщение отправлено.";
    form.reset();
  });
}

const openPhoneContacts = (event) => {
  if (event) {
    event.preventDefault();
  }
  if (!phonePanel) {
    return;
  }
  phonePanel.classList.add("open");
  phonePanel.setAttribute("aria-hidden", "false");
};

if (openPhonePanelBtn) {
  openPhonePanelBtn.addEventListener("click", openPhoneContacts);
}

if (openPhonePanelNav) {
  openPhonePanelNav.addEventListener("click", openPhoneContacts);
}

if (closePhonePanel && phonePanel) {
  closePhonePanel.addEventListener("click", () => {
    phonePanel.classList.remove("open");
    phonePanel.setAttribute("aria-hidden", "true");
  });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

if (floatingCard) {
  floatingCard.addEventListener("mousemove", (event) => {
    const rect = floatingCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    floatingCard.style.transform = `rotateX(${-y * 6}deg) rotateY(${x * 8}deg)`;
  });

  floatingCard.addEventListener("mouseleave", () => {
    floatingCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
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
    }
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
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

if (projectsStrip) {
  let autoScrollPaused = false;
  let rafId = 0;

  const step = () => {
    if (!autoScrollPaused) {
      projectsStrip.scrollLeft += 0.45;
      if (projectsStrip.scrollLeft >= projectsStrip.scrollWidth - projectsStrip.clientWidth - 1) {
        projectsStrip.scrollLeft = 0;
      }
    }
    rafId = window.requestAnimationFrame(step);
  };

  projectsStrip.addEventListener("mouseenter", () => {
    autoScrollPaused = true;
  });
  projectsStrip.addEventListener("mouseleave", () => {
    autoScrollPaused = false;
  });
  projectsStrip.addEventListener("touchstart", () => {
    autoScrollPaused = true;
  }, { passive: true });
  projectsStrip.addEventListener("touchend", () => {
    autoScrollPaused = false;
  }, { passive: true });

  rafId = window.requestAnimationFrame(step);
  window.addEventListener("beforeunload", () => window.cancelAnimationFrame(rafId), { once: true });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Service worker is optional for local static development.
    });
  });
}
