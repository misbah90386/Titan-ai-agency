export interface ServiceItem {
  id: string;
  title: string;
  heading?: string;
  shortDescription: string;
  iconName: string;
  category: string;
  overview: string;
  subcategories: string[];
  features: string[];
  deliverables: string[];
  technologies: string[];
  typicalTimeline: string;
  processNote?: string;
  termsNote?: string;
  disclaimerNote?: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}
