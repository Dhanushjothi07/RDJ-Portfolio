import { smoothScrollTo } from '../utils/smoothScroll';

export const projects = [
    {
        title: "Student Analytics Dashboard",
        category: "powerbi",
        description: "Comprehensive Educational Data Analysis",
        summary: "The dashboard enables administrators and institutions to monitor student demographics, geographic spread, and document compliance across multiple regions in real-time.",
        problemStatements: [
            "School administrators struggled to track student distribution across multiple cities and states manually.",
            "Comparing gender ratios and age demographics across different regions was slow and error-prone.",
            "Monitoring birth certificate compliance was difficult, leading to administrative hurdles during record verification.",
            "Lack of centralized data made long-term educational policy planning nearly impossible."
        ],
        impacts: [
            "Instant visibility into student demographics for better resource allocation and planning.",
            "Streamlined document compliance tracking, reducing administrative overhead by 40%.",
            "Data-driven decision making for regional educational policies and funding.",
            "Improved reporting accuracy for government and accreditation bodies."
        ],
        resolutions: [
            "Regional student enrollment tracking",
            "Gender & Age demographic comparison",
            "Document compliance monitoring system",
            "Interactive geographic data mapping"
        ],
        images: ["/projects/student.png"],
        layout: "1",
        cta: {
            label: "Book Now",
            to: "contact"
        }
    },
    {
        title: "HR Analytics Dashboard",
        category: "powerbi",
        description: "Strategic Workforce & Compensation Intelligence",
        summary: "Transforming raw HR data into actionable business intelligence, enabling leadership to monitor performance, pay equity, and hiring trends in real time.",
        problemStatements: [
            "HR teams found it challenging to visualize pay equity across departments and seniority levels.",
            "Identifying diversity gaps in hiring trends required manual analysis of large spreadsheets.",
            "Leadership lacked a clear overview of the correlation between bonuses and performance across genders.",
            "Tracing turnover rates and salary trends over time was inconsistent and disconnected."
        ],
        impacts: [
            "Enabled transparent salary and bonus distribution, fostering a culture of fairness.",
            "Reduced time-to-insight for diversity metrics, allowing for more inclusive hiring strategies.",
            "Provided actionable data for compensation adjustments based on real-time department trends.",
            "Strategic workforce planning is now based on historical and current personnel data."
        ],
        resolutions: [
            "Gender pay equity evaluation",
            "Department-wise salary trends",
            "Leadership vs staff bonus distribution",
            "Workforce age distribution analysis"
        ],
        images: ["/projects/emp 1.png", "/projects/emp2.png", "/projects/emp3.png"],
        color: "secondary",
        layout: "2x2",
        cta: {
            label: "Book Now",
            to: "contact"
        }
    },
    {
        title: "NDS Fitness",
        category: "figma",
        description: "Professional & Business-Focused",
        summary: "Created high-fidelity wireframes and interactive prototypes in Figma to validate user journeys before development.",
        problemStatements: [
            "Many individuals struggled to maintain a consistent fitness routine due to lack of guidance, unclear pricing, and limited access to professional trainers.",
            "Traditional gym sign-up processes were offline, time-consuming, and confusing, leading to low membership conversions.",
            "Users found it difficult to compare plans, book personal trainers, or track available services digitally.",
            "The gym also lacked an online presence, reducing visibility and potential lead generation."
        ],
        impacts: [
            "Members can easily explore trainers, select suitable plans, and enroll within minutes online.",
            "Personalized training improves motivation, consistency, and overall fitness outcomes.",
            "Transparent pricing builds trust and increases membership conversions.",
            "The gym benefits from higher online visibility, automated inquiries, and steady monthly registrations.",
            "The platform transforms the gym from an offline business into a digitally accessible fitness service."
        ],
        resolutions: [
            "One-to-one trainer booking modules",
            "Structured monthly/yearly membership packages",
            "Clear pricing architecture",
            "High-fidelity Figma prototypes"
        ],
        images: ["/projects/NDS mockup.png", "/projects/NDS mockup_mobile.png", "/projects/NDS iPhone 15.png", "/projects/NDS last.png"],
        color: "white",
        layout: "2x2",
        cta: {
            label: "Book Now",
            to: "contact"
        }
    },
    {
        title: "Chat Application",
        category: "figma",
        description: "Real-time Communication & Team Coordination",
        summary: "A lightweight, user-friendly chat application prototype in Figma focused on fast communication and simplified workflows.",
        problemStatements: [
            "Many small teams and local businesses rely on scattered communication channels like calls and emails, leading to missed messages.",
            "Delayed responses and poor coordination due to multiple messaging apps.",
            "Customers struggle to get timely support, while internal teams lack a centralized platform to manage conversations.",
            "Lack of coordination and follow-up tracking for customer queries."
        ],
        impacts: [
            "Fast communication and simplified workflows with a lightweight prototype.",
            "Real-time one-to-one and group messaging with clean conversation threads.",
            "Enhanced efficiency with message tagging, priority labels, and assignment features.",
            "Improved usability with intuitive UI components like quick replies and file sharing."
        ],
        resolutions: [
            "Real-time messaging system",
            "Group and 1:1 chat threads",
            "Query tagging and priority labels",
            "Centralized communication prototype"
        ],
        images: [
            "/projects/chat app MacBook Pro 14_ - 1.png",
            "/projects/chat app_MacBook Air (15 inch).png",
            "/projects/chat app_iPhone 16 Pro.png"
        ],
        color: "secondary",
        layout: "2x2",
        cta: {
            label: "Book Now",
            to: "contact"
        }
    },
    {
        title: "BrewNest",
        category: "figma",
        description: "Designed in Figma, the application emphasizes clean UI, fast navigation, and emotionally warm design aesthetics that reflect the comfort of coffee culture.",
        summary: "A modern coffee ordering application that transforms the daily caffeine ritual into a seamless and enjoyable experience.",
        problemStatements: [
            "Many people rely on coffee as part of their daily routine, yet the process of getting it is often frustrating.",
            "Morning rush hours lead to long queues, delayed orders, and inconsistent preparation.",
            "Customers frequently struggle with unclear menus, limited customization options, and lack of loyalty rewards. Small local cafés also face challenges in managing peak-time orders and retaining regular customers.",
            "The experience becomes transactional rather than enjoyable — removing the comfort and ritual associated with coffee."
        ],
        impacts: [
            "BrewNest introduces a seamless pre-order system that allows users to customize drinks and schedule pickup times to avoid queues.",
            "The app provides clear menu visualization with ingredient-level customization for sugar, milk type, strength, and add-ons.",
            "The result is a smoother, warmer, and more predictable coffee experience for both customers and businesses."
        ],
        resolutions: [
            "Seamless pre-order and pickup system",
            "Ingredient-level drink customization",
            "Menu visualization and loyalty integration",
            "Emotionally warm and clean UI design"
        ],
        images: [
            "/projects/coffee_login.png",
            "/projects/coffee_home.png",
            "/projects/coffee_details.png"
        ],
        color: "white",
        layout: "2x2",
        cta: {
            label: "Book Now",
            to: "contact"
        }
    }
];
