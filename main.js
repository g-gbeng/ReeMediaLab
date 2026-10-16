/* ==================================================
   REEMEDIALAB
   MAIN JAVASCRIPT
================================================== */


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
   One passive listener, at most once per frame.
================================================== */

let headerScrolled = null;
let scrollTicking = false;

function updateHeader() {

    scrollTicking = false;

    const isScrolled = window.scrollY > 80;

    if (isScrolled !== headerScrolled) {
        header.classList.toggle("scrolled", isScrolled);
        headerScrolled = isScrolled;
    }

}

window.addEventListener("scroll", () => {

    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(updateHeader);
    }

}, { passive: true });

updateHeader();


/* ==================================================
   MOBILE MENU
================================================== */

function setMenu(open) {

    navLinks.classList.toggle("active", open);

    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.innerHTML = open ? "&times;" : "☰";

}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        setMenu(!navLinks.classList.contains("active"));
    });

    /* close when a link is chosen */
    navItems.forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    /* close when tapping anywhere outside the header */
    document.addEventListener("click", event => {
        if (navLinks.classList.contains("active") && !header.contains(event.target)) {
            setMenu(false);
        }
    });

}


/* ==================================================
   ACTIVE NAVIGATION LINK
   Watches which section crosses the area just
   below the header, instead of measuring every
   section on every scroll.
================================================== */

const sections = document.querySelectorAll("main section[id]");

const linkFor = new Map(
    Array.from(navItems, link => [link.getAttribute("href"), link])
);

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        navItems.forEach(link => link.classList.remove("active"));

        linkFor.get(`#${entry.target.id}`)?.classList.add("active");

    });

}, {
    /* a band from 180px below the top of the screen downwards */
    rootMargin: "-180px 0px -55% 0px"
});

sections.forEach(section => sectionObserver.observe(section));


/* ==================================================
   SCROLL REVEAL
   The .reveal class is in the HTML; elements are
   only hidden while the "js" class is on <html>.
================================================== */

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
        }

    });

}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
});


/* ==================================================
   BRAND DATA
   Each "View More" button has a data-brand value
   that matches a key below. A brand's pop-up shows
   whichever sections it has: objective,
   roleDescription, strategy, contribution,
   bulletPoints and results.
================================================== */

const brandData = [

    {
        key: "jeun",

        name: "JęUN FOODS",

        logo: "assets/logos/jeunlogo.webp",

        type: "Event Catering Brand",

        location: "Toronto, Canada",

        role: "Social Media Manager",

        duration: "January 2026 - August 2026",

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
        key: "pearls",

        name: "PEARLS LEARNING ZONE",

        logo: "assets/logos/plzlogo.webp",

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
        key: "obinrin",

        name: "OBINRIN.NG",

        logo: "assets/logos/obinrinlogo.webp",

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
        key: "brandon",

        name: "BRANDON",

        logo: "assets/logos/brandonlogo.webp",

        type: "Marketing Agency",

        location: "Toronto, Canada",

        role: "Social Media Manager",

        duration: "December 2025 - October 2026",

        objective:
            "Develop and execute platform-specific strategies for multiple client accounts while strengthening brand consistency and content performance.",

        contribution: [
            "Developed strategies and monthly content calendars across Instagram, LinkedIn, and X.",
            "Translated different client objectives into tailored content and campaign directions.",
            "Collaborated with internal teams on positioning, creative execution, and client deliverables."
        ]
    },


    {
        key: "2702",

        name: "2702 Cakes",

        logo: "assets/logos/2702logo.webp",

        type: "Cake and Celebration Brand",

        location: "Lagos, Nigeria",

        role: "Social Media Manager",

        duration: "October 2024 - October 2025",

        bulletPoints: [
            "Supported the brand's Instagram rebranding, strengthening its visual identity, profile structure, and overall content presentation.",
            "Built and optimised the brand's TikTok presence from account setup, including keyword research, profile optimization, content planning, and short-form video development.",
            "Grew the TikTok account from launch to more than 500 followers, with multiple organic videos generating over 30,000 views.",
            "Planned and executed paid campaigns across TikTok and Instagram for seasonal occasions, including Valentine’s Day and Girlfriends’ Day, generating direct online orders."

        ]
    },


    {
        key: "sns",

        name: "SNSbyKanyin",

        logo: "assets/logos/snslogo.webp",

        type: "Wig Revamping and Hairstyling Brand",

        location: "Lagos, Nigeria",

        role: "Social Media Manager",

        duration: "February 2025 - September 2025",

        bulletPoints: [
            "Developed the brand’s social media strategy around service visibility, customer transformations, audience engagement, and appointment bookings.",
            "Built its TikTok presence from account setup, using relevant keywords, trends, and service-focused content to improve discoverability.",
            "Produced a transition video that generated more than 26,000 organic views, strengthening awareness of the brand’s hairstyling expertise.",
            "Supported direct appointment bookings through strategic Instagram content, community engagement, and promotional messaging."

        ]
    }

];

const brandsByKey = new Map(brandData.map(brand => [brand.key, brand]));


/* ==================================================
   MODAL ELEMENTS
================================================== */

const modalBrandName = document.querySelector("#modalBrandName");
const modalType = document.querySelector("#modalType");
const modalLocation = document.querySelector("#modalLocation");
const modalRole = document.querySelector("#modalRole");
const modalDuration = document.querySelector("#modalDuration");
const modalBrandLogo = document.querySelector("#modalBrandLogo");

const objectiveBlock = document.querySelector("#objectiveBlock");
const modalObjective = document.querySelector("#modalObjective");

const roleBlock = document.querySelector("#roleBlock");
const modalRoleDescription = document.querySelector("#modalRoleDescription");

const strategyBlock = document.querySelector("#strategyBlock");
const strategyHeading = strategyBlock.querySelector("h3");
const strategyList = document.querySelector("#modalStrategy");

const resultsBlock = document.querySelector("#resultsBlock");
const resultsList = document.querySelector("#modalResults");


/* ==================================================
   FILL THE MODAL
================================================== */

function fillList(list, items) {

    list.replaceChildren(
        ...items.map(item => {
            const li = document.createElement("li");
            li.textContent = item;
            return li;
        })
    );

}

function showBrand(brand) {

    modalBrandName.textContent = brand.name;

    modalBrandLogo.src = brand.logo;
    modalBrandLogo.alt = `${brand.name} logo`;

    modalType.textContent = brand.type || "—";
    modalLocation.textContent = brand.location || "—";
    modalRole.textContent = brand.role || "—";
    modalDuration.textContent = brand.duration || "—";

    /* Objective */
    objectiveBlock.hidden = !brand.objective;
    modalObjective.textContent = brand.objective || "";

    /* My Role */
    roleBlock.hidden = !brand.roleDescription;
    modalRoleDescription.textContent = brand.roleDescription || "";

    /* Strategic Approach / My Contribution / Key Contributions */
    const list =
        (brand.strategy && { title: "Strategic Approach", items: brand.strategy }) ||
        (brand.contribution && { title: "My Contribution", items: brand.contribution }) ||
        (brand.bulletPoints && { title: "Key Contributions", items: brand.bulletPoints });

    strategyBlock.hidden = !list;

    if (list) {
        strategyHeading.textContent = list.title;
        fillList(strategyList, list.items);
    }

    /* Results & Impact */
    resultsBlock.hidden = !brand.results;
    fillList(resultsList, brand.results || []);

}


/* ==================================================
   OPEN / CLOSE
================================================== */

let lastFocused = null;

function openBrandModal(key) {

    const brand = brandsByKey.get(key);

    if (!brand) return;

    lastFocused = document.activeElement;

    showBrand(brand);

    brandModal.querySelector(".modal-content").scrollTop = 0;

    brandModal.classList.add("active");
    document.body.style.overflow = "hidden";

    /* the modal is still visibility:hidden until the next frame */
    requestAnimationFrame(() => modalClose.focus());

}

function closeBrandModal() {

    if (!brandModal.classList.contains("active")) return;

    brandModal.classList.remove("active");
    document.body.style.overflow = "";

    if (lastFocused) lastFocused.focus();

}

viewBrandButtons.forEach(button => {

    button.addEventListener("click", () => {
        openBrandModal(button.dataset.brand);
    });

});

modalClose.addEventListener("click", closeBrandModal);

/* click on the dark backdrop closes it */
brandModal.addEventListener("click", event => {
    if (event.target === brandModal) closeBrandModal();
});


/* ==================================================
   KEYBOARD
   Esc closes the modal or the mobile menu.
   Tab stays inside the modal while it's open.
================================================== */

document.addEventListener("keydown", event => {

    const modalOpen = brandModal.classList.contains("active");

    if (event.key === "Escape") {

        if (modalOpen) {
            closeBrandModal();
        } else if (navLinks.classList.contains("active")) {
            setMenu(false);
            menuToggle.focus();
        }

    }

    /* the close button is the only focusable element in the modal */
    if (event.key === "Tab" && modalOpen) {
        event.preventDefault();
        modalClose.focus();
    }

});
