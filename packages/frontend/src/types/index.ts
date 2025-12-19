// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  role?: 'admin' | 'user';
  is_superuser?: boolean;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  excerpt?: string;
  author: string;
  author_id?: string;
  published_at: string;
  created_at: string;
  updated_at?: string;
  tags?: string[];
  category?: string;
  cover_image?: string;
  is_published: boolean;
  like_count: number;
  comment_count: number;
  reading_time?: number;
}

export interface CreateBlogPost {
  title: string;
  content: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
  category?: string;
  cover_image?: string;
  is_published: boolean;
}

export interface UpdateBlogPost extends Partial<CreateBlogPost> {
  id: string;
}

// Comment Types
export interface Comment {
  id: string;
  post_id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
  updated_at?: string;
  parent_id?: string;
  replies?: Comment[];
}

export interface CreateComment {
  post_id: string;
  author_name: string;
  author_email: string;
  content: string;
  parent_id?: string;
}

// Like Types
export interface Like {
  id: string;
  post_id: string;
  user_identifier: string;
  created_at: string;
}

export interface CreateLike {
  post_id: string;
  user_identifier: string;
}

// Portfolio Types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 0-100
  icon?: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  amazon_link?: string;
  published_date?: string;
  language: string;
}

// API Types
export interface ApiError {
  message: string;
  statusCode: number;
  details?: unknown;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// UI Types
export type ThemeMode = 'light' | 'dark';
export type Language = 'en' | 'it';

export interface AppConfig {
  appName: string;
  theme: {
    default: ThemeMode;
    colors: {
      primary: string;
      darkBg: string;
      secondary: string;
      lightBg: string;
      lightText: string;
    };
  };
  seo: {
    keywords: string[];
    description: {
      it: string;
      en: string;
    };
  };
  languages: Language[];
  defaultLanguage: Language;
}
