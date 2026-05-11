export const siteConfig = {
  name: "Treelang",
  title: "Senior Software Engineer",
  description: "Personal Portfolio and Technical Blog, Practical Applications in Simulation, Android Development, Personal Servers, Cloudflare, and Automation",
  accentColor: "#1d4ed8",
  social: {
    email: "treelang.dev@gmail.com",
    github: "https://github.com/treelang-dev",
    telegram: "https://t.me/treelang_dev",
  },
  aboutMe:
    "I focus on engineering simulation, software development, and personal server setup, and I enjoy transforming ideas sparked during my learning process into practical projects that are runnable, presentable, and maintainable. My current primary areas of practice include battery simulation, Android development, system deployment, Cloudflare service configuration, and the creation of automation workflows. This website serves as a repository for my projects, technical notes, and access points to my personal web services",
  skills: [
    "Abaqus",
    "FEM-DEM / SPH",
    "Battery Simulation",
    "Android Development",
    "Java",
    "XML",
    "GitHub Actions",
    "Linux / Debian",
    "Cloudflare",
    "Docker",
    "Qinglong",
    "System Deployment",
    "Server Maintenance",
    "Automation",
  ],


  projects: [
    {
      name: "Battery Electrode Simulation",
      description:
        "Focused on the structural evolution of all-solid-state battery electrodes during the compaction and sintering processes. Conducted modeling and analysis combining FEM, DEM, and SPH methods to study particle contact, pore variation, and material deformation patterns.",
      link: "#",
      skills: ["Abaqus", "FEM-DEM", "SPH", "Battery Simulation"],
    },
    {
      name: "Mean - System Privilege & App Management",
      description:
        "Developed an advanced system utility application that combines Shizuku-style privilege elevation with comprehensive application management features. Interacts with low-level Android APIs to manage package states, control background processes, and provide users with fine-grained control over their device's application ecosystem.",
      link: "https://github.com/treelang-dev/mean",
      skills: ["Android", "Java", "System APIs", "Privilege Management", "CI/CD"],
    },
    {
      name: "Films - Automated Web Scraping Tool",
      description:
        "Engineered an automated Android utility to scrape and aggregate nationwide cinema coupon data. Implemented a hidden WebView with JavaScript injection to simulate real user behavior and bypass anti-scraping mechanisms. Utilized a state machine for reliable, cross-city data extraction and integrated Apache POI to export the compiled datasets directly into Excel (.xlsx) files.",
      link: "https://github.com/treelang-dev/films",
      skills: ["Android", "Java", "WebView", "JS Injection", "Apache POI"],
    },
    {
      name: "Personal Server & Network Deployment",
      description:
        "Deployed Debian 12 OS on low-power devices and built a personal network environment utilizing services like Cloudflare Tunnel and Cloudflare Access, achieving secure access and centralized management of intranet services.",
      link: "#",
      skills: ["Debian", "Cloudflare", "Tunnel", "Access"],
    },
    {
      name: "Qinglong Automation Center",
      description:
        "Managed scheduled tasks, scripts, environment variables, and push notifications based on the Qinglong panel. Combined with a personal server and Cloudflare services to realize daily task automation and remote secure access.",
      link: "https://ql.treelang.me",
      skills: ["Qinglong", "Docker", "Automation", "Server"],
    },
    {
      name: "Treelang Portfolio & Tech Blog",
      description:
        "Built a personal portfolio and tech blog using Astro and Tailwind CSS to showcase personal projects, technical directions, learning logs, and web service portals, deployed via Cloudflare Pages.",
      link: "https://blog.treelang.me",
      skills: ["Astro", "Tailwind CSS", "Cloudflare Pages"],
    },
  ],

  experience: [
    {
      company: "Dongguan Automotive Technology School",
      title: "Intern Teacher & Assistant Homeroom Teacher",
      dateRange: "Sep 2025 - Nov 2025",
      bullets: [
        "Assisted in teaching courses related to new energy vehicles, integrating professional theoretical knowledge with the teaching needs of secondary vocational education.",
        "Assisted in managing the daily affairs of Class 2, Marketing Major (Grade 2024), paying attention to students' learning progress, classroom performance, and psychological well-being.",
        "Participated in organizing class practical activities and daily management, accumulating practical experience in vocational education teaching and student management.",
      ],
    },
  ],

  education: [
    {
      school: "Guangdong Polytechnic Normal University",
      degree: "Bachelor's in New Energy Vehicle Engineering (Outstanding Vocational Teachers Program)",
      dateRange: "2022 - 2026",
      achievements: [
        "GPA: 3.78",
        "Certifications: CET-6, National Computer Rank Examination (NCRE) Grade 2 (MS Office), Mandarin Proficiency Test Grade 2 Level A, and Motor Vehicle Driver's License.",
        "Participated in research projects related to all-solid-state battery simulation, primarily responsible for modeling, analysis, and paper organization.",
      ],
    },
  ],
};
