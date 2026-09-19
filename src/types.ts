export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  category: string;
  overview: string;
  subcategories: string[];
  features: string[];
  deliverables: string[];
  technologies: string[];
  typicalTimeline: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}
