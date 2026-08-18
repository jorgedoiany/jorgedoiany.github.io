export const studies = [
  {
    title: "MSc in Artificial Intelligence",
    institution: "Universidad Internacional de La Rioja (UNIR)",
    description:
      "Graduate program focused on applied AI systems, machine learning, deep learning and natural language processing. Thesis: Hybrid NLP-Based Recommendation System evaluating 5 competing architectures and achieving 6.3x improvement over TF-IDF baseline.",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Neural Networks",
      "Automated Reasoning",
      "PDDL",
      "Heuristic Search",
      "Reinforcement Learning",
      "Computer Vision",
      "LLMs",
      "Feature Engineering",
    ],
  },
  {
    title: "B.Sc. in Accounting and Auditing",
    institution: "Universidad Adventista Dominicana",
    description:
      "Foundation in financial analysis, regulatory compliance and auditing methodologies. Directly informs my work analyzing large-scale financial datasets, validating fiscal compliance and building data tools for regulated industries.",
    tags: [
      "Financial Analysis",
      "Regulatory Compliance",
      "Auditing",
      "Data Analysis",
      "Data Validation",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

