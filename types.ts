
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  label: string;
  icon: string;
}
