/* ==================================================
   ELEMENTS
================================================== */

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const brandModal = document.querySelector("#brandModal");
const modalClose = document.querySelector(".modal-close");
const viewBrandButtons = document.querySelectorAll(".view-brand");


/* ==================================================
   STICKY NAVIGATION
================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==================================================
   MOBILE MENU
================================================== */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.innerHTML = isOpen ? "&times;" : "☰";

    });

}


/* ==================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
================================================== */

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if (menuToggle) {

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });

});


/* ==================================================
   ACTIVE NAVIGATION LINK
================================================== */

const sections = document.querySelectorAll("main section[id]");

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

};

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* ==================================================
   INITIAL PAGE FADE-IN
================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".capability-card, " +
    ".brand-card, " +
    ".course-item, " +
    ".degree, " +
    ".contact-content, " +
    ".closing-content"
);


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ==================================================
   BRAND DATA
================================================== */

/*
    We will replace these placeholders with the
    actual 6 brands and their information.

    Brands 1-4:
    Objective
    My Role
    Strategic Approach

    Brands 5-6:
    Bullet-point contributions

*/

const brandData = [

    {
        name: "JęUN FOODS",

        logo: "assets/logos/brand-01.png",

        type: "Event Catering Brand",

        location: "Toronto, Canada",

        role: "Social Media Manager",

        duration: "January 2026 - Present",

        objective:
            "Strengthen Jęun Foods digital presence, improve service visibility, generate qualified enquiries, and support bookings for grazing tables and branded events.",

        roleDescription:
            "I lead social media and content strategy across Instagram and TikTok, managing audience research, content planning, campaign messaging, scriptwriting, video editing, publishing, community engagement, and performance evaluation. I also collaborate with the business owner and graphic designer to maintain cohesive campaign execution.",

        strategy: [
            "Developed service-led content showcasing Jęun Foods’ grazing-table offerings, event experiences, customer reactions, social proof, and behind-the-scenes preparation.",
            "Used location-focused keywords and platform search optimisation to improve discovery among prospective customers searching for grazing-table and event-catering services in Toronto and the GTA.",
            "Analysed content performance, audience engagement, enquiries, and customer responses to identify effective formats and refine campaign direction.",
            "Combined organic content with an $80 paid social campaign to promote Paint & Chop 2.0 and support event ticket sales."
        ],

        results: [
            "Strengthened TikTok search visibility, with Jęun Foods’ content consistently appearing within the first 30 – 50 results for searches such as “grazing tables in Toronto”.",
            "Generated 29,667 views, 9,077 unique viewers, 918 interactions, and 1,048 profile visits within 90 days, including 84 bio-link taps.",
            "Increased the brand’s Instagram follower count by approximately 32%, expanding awareness among potential customers.",
            "Successfully planned and executed an $80 paid campaign that, alongside organic promotion, supported the sale of approximately 15 tickets against a 20-guest target for Paint & Chop 2.0."
        ]
    },


    {
        name: "PEARLS LEARNING ZONE",

        logo: "assets/logos/brand-01.png",

        type: "Early Childhood Brand",

        location: "Lagos, Nigeria",

        role: "Brand & Marketing Lead",

        duration: "May 2026 - Present",

        objective:
            "Strengthen the brand’s positioning as a trusted early-childhood education resource for parents, educators, and school owners while increasing awareness of its expert services.",

        roleDescription:
            "I lead brand, content, and social media strategy; conduct audience and competitor research; develop campaign concepts and content calendars; and coordinate execution with the founder, product manager, and graphic designer.",

        strategy: [
            "Developed audience-focused content around children’s behaviour, learning, development, education, and parental support.",
            "Translated the founder’s early-childhood expertise into clear, relatable content for parents, educators, and school owners.",
            "Used relevant social media trends and tested different formats—including Reels, carousels, static posts, and Stories—to identify what resonated with the audience.",
            "Analysed platform insights and content performance to identify high-performing formats, refine messaging, and adjust content direction across social media.",
            "Coordinated marketing communication for the brand’s educational services and product offerings, ensuring consistency across awareness, educational, and promotional content."
        ],

        results: [
            "Generated 13,676 content views, 4,096 unique viewers, and 982 interactions within 90 days.",
            "Increased Instagram followers by 9.6%, adding 33 net followers.",
            "Attracted 31.2% of content views from non-followers.",
            "Generated approximately 8,300 views through Reels."
        ]
    },


    {
        name: "OBINRIN.NG",

        logo: "assets/logos/brand-01.png",

        type: "E-commerce Brand",

        location: "Lagos, Nigeria",

        role: "Marketing Strategist",

        duration: "May 2026 - July 2026",

        objective:
            "Build awareness and early adoption for a new women-focused marketplace while recruiting vendors and establishing an engaged community before launch.",

        roleDescription:
            "I developed the pre-launch and soft-launch marketing strategy, planned campaign content, supported vendor outreach, coordinated creative execution, managed community engagement, and monitored campaign performance.",

        strategy: [
            "Positioned OBINRIN around vendor visibility, product discovery, community, and trusted commerce.",
            "Developed brand-introduction, vendor-recruitment, marketplace-awareness, and community-focused campaigns.",
            "Combined organic content, paid promotion, direct vendor outreach, and WhatsApp community engagement.",
            "Worked with the product and graphic design teams to maintain consistent messaging and execution."
        ],

        results: [
            "Contributed to achieving OBINRIN.ng’s soft-launch goal of onboarding 30 vendors through vendor-recruitment content, direct outreach, relationship management, and campaign promotion.",
            "Built a WhatsApp community of 100 members, using social media content and campaign calls to action to move interested audiences into the brand’s pre-launch community.",
            "Generated 1,063 organic profile visits and gained 118 new followers, representing approximately 33% audience growth during the soft-launch period.",
            "Managed paid campaigns across launch creatives that collectively generated 1,869 link clicks and 939 landing-page views, directing prospective users and vendors to learn more about the marketplace.",
            "Strengthened early brand awareness through founder-led storytelling, marketplace education, and vendor-focused campaigns, with individual content reaching up to 19,354 accounts."
        ]
    },

    {
        name: "BRANDON",

        logo: "assets/logos/brand-04.png",

        type: "Marketing Agency",

        location: "Toronto, Canada",

        role: "Social Media Manager",

        duration: "December 2025 - April 2026",

        objective:
            "Develop and execute platform-specific strategies for multiple client accounts while strengthening brand consistency and content performance.",

        contribution: [
            "Developed strategies and monthly content calendars across Instagram, LinkedIn, and X.",
            "Translated different client objectives into tailored content and campaign directions.",
            "Collaborated with internal teams on positioning, creative execution, and client deliverables."
        ]
    },


    {
        name: "2702 Cakes",

        logo: "assets/logos/brand-01.png",

        type: "Cake and Celebration Brand",

        location: "Lagos, Nigeria",

        role: "Social Media Manager",

        duration: "",

        bulletPoints: [
            "Supported the brand's Instagram rebranding, strenthening its visual identity, profile structure, and overall content presentation.",
            "Built and optimised the brand's Tiktok presence from account setup, including keyword research, profile optimization, content planning, and short-form video development.",
            "Grew the TikTok account from launch to more than 500 followers, with multiple organic videos generating over 30,000 views.",
            "Planned and executed paid campaigns across TikTok and Instagram for seasonal occasions, including Valentine’s Day and Girlfriends’ Day, generating direct online orders."

        ]
    },


    {
        name: "SNSbyKanyin",

        logo: "assets/logos/brand-01.png",

        type: "Wig Revamping and Hairstyling Brand",

        location: "Lagos, Nigeria",

        role: "Social Media Manager",

        duration: "",

        bulletPoints: [
            "Developed the brand’s social media strategy around service visibility, customer transformations, audience engagement, and appointment bookings.",
            "Built its TikTok presence from account setup, using relevant keywords, trends, and service-focused content to improve discoverability.",
            "Produced a transition video that generated more than 26,000 organic views, strengthening awareness of the brand’s hairstyling expertise.",
            "Supported direct appointment bookings through strategic Instagram content, community engagement, and promotional messaging."

        ]
    }

];


/* ==================================================
   MODAL ELEMENTS
================================================== */

const modalBrandName =
    document.querySelector("#modalBrandName");

const modalType =
    document.querySelector("#modalType");

const modalLocation =
    document.querySelector("#modalLocation");

const modalRole =
    document.querySelector("#modalRole");

const modalDuration =
    document.querySelector("#modalDuration");

const modalObjective =
    document.querySelector("#modalObjective");

const modalRoleDescription =
    document.querySelector("#modalRoleDescription");

const modalStrategy =
    document.querySelector("#modalStrategy");

const modalBrandLogo =
    document.querySelector("#modalBrandLogo");

const resultsBlock =
    document.querySelector("#resultsBlock");

const resultsList =
    document.querySelector("#modalResults");


/* ==================================================
   OPEN BRAND MODAL
================================================== */

viewBrandButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const brand = brandData[index];

        if (!brand) return;


        /* Brand name */

        modalBrandName.textContent = brand.name;


        /* Logo */

        modalBrandLogo.src = brand.logo;
        modalBrandLogo.alt = `${brand.name} logo`;


        /* Brand information */

        modalType.textContent = brand.type;

        modalLocation.textContent = brand.location;

        modalRole.textContent = brand.role;

        modalDuration.textContent = brand.duration;


        /* Case study */

        /* ==================================================
   CASE STUDY CONTENT
================================================== */

        const objectiveBlock =
            document.querySelector("#objectiveBlock");

        const roleBlock =
            document.querySelector("#roleBlock");

        const strategyBlock =
            document.querySelector("#strategyBlock");

        const strategyList =
            document.querySelector("#modalStrategy");


        /* ==================================================
           BRAND POPUP CONTENT
        ================================================== */


        /*
            BRANDS 1-3
            Full case study
        */

        if (index < 3) {

            objectiveBlock.style.display = "block";
            roleBlock.style.display = "block";
            strategyBlock.style.display = "block";
            resultsBlock.style.display = "block";

            modalObjective.textContent =
                brand.objective;

            modalRoleDescription.textContent =
                brand.roleDescription;


            /* Strategic Approach */

            strategyBlock.querySelector("h3").textContent =
                "Strategic Approach";

            strategyList.innerHTML = "";

            brand.strategy.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                strategyList.appendChild(li);

            });


            /* Results & Impact */

            resultsList.innerHTML = "";

            brand.results.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                resultsList.appendChild(li);

            });

        }


        /*
            BRAND 4
            Objective + My Contribution
        */

        else if (index === 3) {

            objectiveBlock.style.display = "block";

            roleBlock.style.display = "none";

            strategyBlock.style.display = "block";

            resultsBlock.style.display = "none";


            /* Objective */

            modalObjective.textContent =
                brand.objective;


            /* My Contribution */

            strategyBlock.querySelector("h3").textContent =
                "My Contribution";

            strategyList.innerHTML = "";

            brand.contribution.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                strategyList.appendChild(li);

            });

        }


        /*
            BRANDS 5-6
            Key Contributions
        */

        else {

            objectiveBlock.style.display = "none";

            roleBlock.style.display = "none";

            strategyBlock.style.display = "block";

            resultsBlock.style.display = "none";


            strategyBlock.querySelector("h3").textContent =
                "Key Contributions";

            strategyList.innerHTML = "";

            brand.bulletPoints.forEach((item) => {

                const li = document.createElement("li");

                li.textContent = item;

                strategyList.appendChild(li);

            });

        }


        /*
            BRANDS 5-6
            Bullet-point format
        */

        /* Open modal */

        brandModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* ==================================================
   CLOSE BRAND MODAL
================================================== */

const closeBrandModal = () => {

    brandModal.classList.remove("active");

    document.body.style.overflow = "";

};


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeBrandModal
    );

}


/* ==================================================
   CLOSE MODAL WHEN CLICKING BACKDROP
================================================== */

brandModal.addEventListener("click", (event) => {

    if (event.target === brandModal) {

        closeBrandModal();

    }

});


/* ==================================================
   CLOSE MODAL WITH ESCAPE KEY
================================================== */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        brandModal.classList.contains("active")
    ) {

        closeBrandModal();

    }

});