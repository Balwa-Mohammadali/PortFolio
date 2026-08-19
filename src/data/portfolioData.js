import profileImage from '../assets/profile/profile.jpeg';

export const portfolioData = {
  name: "Balwa Mohammadali",
  role: "Machine Learning Engineer • Developer • AI Enthusiast",
  profileImage: profileImage,
  availability: "AVAILABLE FOR OPPORTUNITIES",
  heroHeading: [
    "Building Intelligent Systems.",
    "Creating Digital Experiences."
  ],
  introduction: "Computer Engineering student focused on building intelligent applications, machine learning systems, and modern web experiences.",
  socialLinks: {
    github: "https://github.com/Balwa-Mohammadali",
    linkedin: "https://www.linkedin.com/in/gj-cp-gecpl-2027-002-balwa-mohammadali",
    kaggle: "https://www.kaggle.com/balwa1",
    email: "balwaaa.777@gmail.com",
    phone: "+91 93276 62439"
  },
  resumeUrl: "/resume.pdf",
  about: {
    heading: "Beyond the Code",
    education: {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Gujarat Technological University",
      cgpa: "9.26 / 10",
      period: "2023 – Present"
    }
  },
  skills: {
    programming: ["Python", "Java", "JavaScript"],
    machineLearning: ["Scikit-Learn", "TensorFlow", "Keras", "NLP", "ANN", "CNN", "RNN", "LSTM"],
    data: ["NumPy", "Pandas", "Matplotlib", "MySQL", "Excel"],
    backend: ["Django", "FastAPI", "Pydantic"],
    frontend: ["JavaScript", "HTML", "CSS"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "n8n"]
  },
  experience: [
    {
      role: "Generative AI Intern",
      company: "SmartBridge",
      location: "Remote",
      date: "July 2026",
      description: [
        "Generative AI",
        "LLMs",
        "Prompt Engineering",
        "AI Agents",
        "AI-assisted development",
        "Built a Generative AI web application"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Edunet Foundation",
      location: "Remote",
      date: "May 2025 – June 2025",
      description: [
        "Machine Learning",
        "Healthcare prediction",
        "Data preprocessing",
        "Feature engineering",
        "Model training",
        "Evaluation",
        "EDA"
      ]
    }
  ],
  projects: [
    {
      id: "plant-disease",
      title: "Plant Disease Detection System",
      category: "Deep Learning",
      technologies: ["EfficientNetB0", "TensorFlow/Keras", "FastAPI", "Grad-CAM"],
      description: "Built an EfficientNetB0 transfer-learning pipeline for 39 plant health and disease categories, with preprocessing, augmentation, fine-tuning, Grad-CAM explainability, and a FastAPI inference endpoint. Achieved 99.15% model accuracy.",
      highlights: [
        "Transfer Learning",
        "Image Classification",
        "Data Augmentation",
        "Fine-Tuning",
        "Grad-CAM Explainability",
        "FastAPI inference API"
      ],
      featured: true,
      github: "https://github.com/Balwa-Mohammadali/PLANT-DISEASE-DETECTION-SYSTEM"
    },
    {
      id: "cattle-breed",
      title: "Image-Based Cattle & Buffalo Breed Recognition",
      category: "Computer Vision",
      technologies: ["MobileNet", "TensorFlow/Keras", "Django"],
      description: "Developed a MobileNet transfer-learning classifier for cattle and buffalo breed recognition, then integrated it into a Django app with image upload, real-time prediction, and Top-3 breed results for the Smart India Hackathon.",
      highlights: [
        "Image classification",
        "Transfer learning",
        "Data augmentation",
        "Django integration",
        "Top-3 predictions",
        "Smart India Hackathon 2025"
      ],
      github: "https://github.com/Balwa-Mohammadali/PashuPehchaan"
    },
    {
      id: "movie-recommendation",
      title: "Movie Recommendation System",
      category: "NLP",
      technologies: ["NLP", "Scikit-Learn", "FastAPI"],
      description: "Created a content-based recommender by combining genres, keywords, cast, crew, and overviews, transforming the text with CountVectorizer and ranking results with cosine similarity. TMDB API powers the interactive poster experience.",
      highlights: [
        "NLP",
        "CountVectorizer",
        "Cosine Similarity",
        "Feature Engineering",
        "TMDB API",
        "FastAPI"
      ],
      github: "https://github.com/Balwa-Mohammadali/Movie_recommender"
    },
    {
      id: "ipl-win",
      title: "IPL Win Probability Prediction",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-Learn", "FastAPI"],
      description: "Built a real-time IPL win-probability pipeline from historical match and ball-by-ball data using runs left, balls left, wickets left, CRR, and RRR. Logistic Regression with GridSearchCV reached approximately 93% accuracy.",
      highlights: [
        "Feature Engineering",
        "Logistic Regression",
        "GridSearchCV",
        "Real-time prediction",
        "Approximately 93% accuracy"
      ],
      github: "https://github.com/Balwa-Mohammadali/IPL_Prediction_ML_Project"
    },
    {
      id: "kitabkhana",
      title: "KitabKhana — Online Book Store",
      category: "Web Development",
      technologies: ["React", "PHP", "MySQL"],
      description: "Designed and built a responsive React, PHP, and MySQL marketplace for buying, renting, and donating books, with authentication, inventory, wishlist, reviews, order tracking, and REST APIs.",
      highlights: [
        "React",
        "REST APIs",
        "Authentication",
        "Inventory",
        "Wishlist",
        "Reviews",
        "Order tracking",
        "Responsive UI"
      ],
      github: "https://github.com/Balwa-Mohammadali/KitabKhana-Online-Book-Store-"
    },
    {
      id: "rag-agent",
      title: "RAG-Based AI Agent for PYQ Analysis",
      category: "AI",
      technologies: ["RAG", "Google Gemini", "Pinecone", "AI Agents", "n8n"],
      description: "Built an exam-focused RAG assistant that ingests Google Drive documents, chunks academic content, creates Gemini embeddings in Pinecone, and uses an AI Agent to return structured answers grounded in relevant PYQ context.",
      github: "https://github.com/Balwa-Mohammadali?tab=repositories"
    },
    {
      id: "diwali-sales",
      title: "Diwali Sales Data Analysis & Visualization",
      category: "Data Analysis",
      date: "July 2025",
      technologies: ["Python", "Pandas", "Matplotlib"],
      description: "Cleaned and explored Diwali sales data with Pandas and Matplotlib to surface customer, gender, age, occupation, and regional purchasing patterns and translate them into business insights.",
      highlights: [
        "Data Cleaning",
        "EDA",
        "Customer demographics",
        "Occupation",
        "Gender",
        "Age groups",
        "Regional sales distribution",
        "Business insights"
      ],
      kaggle: "https://www.kaggle.com/balwa1",
      github: "https://github.com/Balwa-Mohammadali/Diwali_Sales_Matplotlib"
    }
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2025",
      description: "CNN-based cattle and buffalo breed recognition using computer vision."
    },
    {
      title: "Odoo Hackathon 2025",
      description: "Sustainable clothing exchange platform with point-based redemption and inventory management workflows."
    },
    {
      title: "UNESCO Global Youth Hackathon 2025",
      description: "NLP and machine learning-based fake news detection system."
    },
    {
      title: "SSIP VikaSaptah Hackathon",
      description: "Consumer complaint tracking system with complaint management, live status tracking, and field operation workflows."
    }
  ],
  certifications: [
    {
      title: "Python",
      issuer: "HackerRank"
    },
    {
      title: "Machine Learning",
      issuer: "IBM SkillsBuild"
    },
    {
      title: "Java Programming",
      issuer: "Great Learning"
    }
  ]
};
