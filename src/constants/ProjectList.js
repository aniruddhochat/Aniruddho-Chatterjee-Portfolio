import verbosevista from "../assets/projects/verbose-vista.png";
import textshield from "../assets/projects/text-shield.png";
import stuserve from "../assets/projects/stuserve.png";
import gcpfuse from "../assets/projects/gcp-fuse.png";
import gcpmemcached from "../assets/projects/gcp-memcached.png";
import bloodlink from "../assets/projects/blood-link.png";

export const ProjectList = [
    {
        id: 1,
        name: "Verbose Vista Document Search Engine",
        description:
            "A robust search engine utilizing Map-Reduce and Google Cloud Functions, processing a diverse corpus of text files from the Gutenberg website, and achieving parallelism for efficient indexing.Empowered users to search through indexed documents spanning over 100,000 unique words and upload new files.",
        img: verbosevista,
        //max 6 tech stack
        tech: ["Python", "Google Cloud Platform", "Map-Reduce", "Javascript","Flask"],
        source: "https://github.com/aniruddhochat/Verbose-Vista",
        demo: "https://verbose-vista-etlijojsoa-uc.a.run.app/",
    },
    {
        id: 2,
        name: "Text Shield",
        description:
            "Scraped and processed extensive hate speech datasets from various web sources and social media platforms, using advanced web scraping techniques to ensure high-quality data acquisition. Created an NLP-based hate speech detection system with LSTM, Distil BERT, and RoBERTa models, achieving remarkable accuracies: 89.93%, 90.04%, and 90.70%, respectively.",
        img: textshield,
        //max 6 tech stack
        tech: [
            "React.js",
            "Flask",
            "PyTorch",
            "Python",
            "Tailwind CSS",
        ],
        source: "https://github.com/aniruddhochat/Text-Shield-Offensive-Text-Detection",
        demo: "https://drive.google.com/file/d/1VtYSgTrZRQ6oIh6U8qSmJVmf64MMQILP/view?usp=sharing",
    },
    {
        id: 3,
        name: "Stuserve",
        description:
            "Deployed a budget-friendly rental service web app for university students, resulting in a 20% rental cost reduction. Achieved advanced functionality with Payment Integration, User Authentication, and Google Maps API for search, all managed using Agile methodologies and JIRA for effective team collaboration.",
        img: stuserve,
        //max 6 tech stack
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
        ],
        source: "https://github.com/aniruddhochat/Stuserve",
        demo: "https://github.com/aniruddhochat/Stuserve",
    },
    {
        id: 4,
        name: "FUSE - File System in User Space",
        description:
            "Deployed a high-performance FUSE-based distributed file system, achieving an average throughput of 5000 KiB/s for write and 4000 KiB/s for read operation using Google Cloud Storage Buckets.",
        img: gcpfuse,
        //max 6 tech stack
        tech: ["Python", "Google Cloud Platform", "Docker","FIO","Google Cloud Storage"],
        source: "https://github.com/aniruddhochat/FUSE-File-System-Using-Google-Cloud",
        demo: "https://github.com/aniruddhochat/FUSE-File-System-Using-Google-Cloud",
    },
    {
        id: 5,
        name: "Memcached Lite",
        description:
            "Designed and implemented a Python-based key-value store utilizing Google Cloud Storage Buckets and Redis,achieving a 25% performance enhancement compared to VM disk storage. Conducted a rigorous performance analysis, establishing Redis as the superior choice for data storage and retrieval and containerized the solution in Docker for streamlined deployment.",
        img: gcpmemcached,
        //max 6 tech stack
        tech: ["Google Cloud Platform", "Python", "Redis", "Google Cloud Storage", "Docker"],
        source: "https://github.com/aniruddhochat/Memcached-Lite",
        demo: "https://github.com/aniruddhochat/Memcached-Lite",
    },
    {
        id: 6,
        name: "Blood Bank Management System",
        description:
            "Successfully deployed a scalable and user-friendly web app using the Flask framework, revolutionizing blood bank operations to enhance access to vital blood resources.Established a real-time inventory management system including user registration, and appointment scheduling, resulting in a 20% reduction in blood retrieval response time while optimizing storage and distribution.",
        img: bloodlink,
        //max 6 tech stack
        tech: ["HTML", "CSS", "JavaScript","Python","Flask"],
        source: "https://github.com/aniruddhochat/BloodLink-Blood-Bank-Management-System",
        demo: "http://bbms.pythonanywhere.com/",
    },
];
