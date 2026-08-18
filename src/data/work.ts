import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import calendarIconRaw from '../assets/icons/calendar-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
  calendar: sanitizeToOutline(calendarIconRaw, 15),
};

export const work = [
  {
    title: "Artificial Intelligence Intern",
    company: "Transgenia",
    region: "Mexico City",
    dates: "09/2025 - 01/2026",
    description:
      "Architected and shipped an LLM-powered contract analysis system end-to-end, from prompt design and API integration to a Blade-based frontend, cutting review time by 65% across 20+ contracts for a 7-member engineering and legal team. Reduced token usage by 85–90% through prompt compression and context window control, improving cost-efficiency and response consistency at scale.",
    highlights: [
      "Engineered a PDF-to-structured-feedback pipeline automating classification and extraction of document inconsistencies, achieving consistent 6s response latency.",
      "Implemented structured audit logging ensuring full traceability and explainability of every AI decision.",
      "Integrated AI components into application flows using PHP, Laravel and Blade templates."
  ],
    technologies: [
      "Python",
      "OpenAI API",
      "Mistral",
      "Prompt Engineering",
      "LLM Pipelines",
      "PHP",
      "Laravel",
      "Blade",
      "Bootstrap",
      "Applied NLP",
      "AI Traceability",
    ],
  },
  {
    title: "Data Analyst",
    company: "Dominican Film Commission",
    region: "Dominican Republic",
    dates: "05/2021 - Present",
    description: `Analyzing large-scale datasets from the Dominican film industry to support compliance validation and data-driven decision-making. Over 5 years, processed data from 1,200+ productions, identified thousands of anomalous records, and automated reconciliation workflows that reduced analysis time from 1 day to 2 hours.

  Built two open-source tools to systematize and scale this work: an ETL pipeline extracting structured data from 2,510 official documents using web scraping, OCR and Azure OpenAI GPT-4o Vision, and an interactive Streamlit dashboard visualizing 14 years of industry metrics connected to PostgreSQL via Supabase.`,
    highlights: [
      "Designed and implemented a document processing pipeline combining Tesseract OCR with Azure OpenAI GPT-4o Vision as intelligent fallback for low-quality documents.",
      "Built Power BI dashboards to surface operational trends and support internal decision-making.",
      "Automated data reconciliation workflows reducing manual processing time by 95%."
    ],
    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Supabase",
      "Azure OpenAI",
      "OCR",
      "ETL",
      "Web Scraping",
      "Power BI",
      "Streamlit",
      "pandas",
      "pdfplumber",
      "pytesseract",
    ],
  },
];

export type WorkItem = (typeof work)[number];

