#!/bin/bash
set -e

BASE="D:/GeekyTechRepos/ct-web-site+blog/packages/frontend/src"
cd "$BASE"

echo "Creating API services..."

# API Services - Blog Service
cat > "lib/blogService.ts" << 'EOF'
import axios from 'axios';
import type { BlogPost, CreateBlogPost, UpdateBlogPost, PaginatedResponse } from '../types';

const BLOG_API_URL = 'http://localhost:8001';

const blogApi = axios.create({
  baseURL: BLOG_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogService = {
  getPosts: async (page = 1, pageSize = 10) => {
    const { data } = await blogApi.get<PaginatedResponse<BlogPost>>('/posts', {
      params: { page, page_size: pageSize, is_published: true },
    });
    return data;
  },

  getPost: async (slug: string) => {
    const { data } = await blogApi.get<BlogPost>(`/posts/${slug}`);
    return data;
  },

  createPost: async (post: CreateBlogPost, token: string) => {
    const { data } = await blogApi.post<BlogPost>('/posts', post, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },

  updatePost: async (id: string, post: Partial<CreateBlogPost>, token: string) => {
    const { data} = await blogApi.put<BlogPost>(`/posts/${id}`, post, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },

  deletePost: async (id: string, token: string) => {
    await blogApi.delete(`/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  searchPosts: async (query: string) => {
    const { data } = await blogApi.get<BlogPost[]>('/posts/search', {
      params: { q: query },
    });
    return data;
  },
};
EOF

# API Services - Comment Service
cat > "lib/commentService.ts" << 'EOF'
import axios from 'axios';
import type { Comment, CreateComment } from '../types';

const BLOG_API_URL = 'http://localhost:8001';

const commentApi = axios.create({
  baseURL: BLOG_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const commentService = {
  getComments: async (postId: string) => {
    const { data } = await commentApi.get<Comment[]>(`/posts/${postId}/comments`);
    return data;
  },

  addComment: async (comment: CreateComment) => {
    const { data } = await commentApi.post<Comment>('/comments', comment);
    return data;
  },

  deleteComment: async (id: string, token: string) => {
    await commentApi.delete(`/comments/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
EOF

# API Services - Like Service
cat > "lib/likeService.ts" << 'EOF'
import axios from 'axios';
import type { Like, CreateLike } from '../types';

const BLOG_API_URL = 'http://localhost:8001';

const likeApi = axios.create({
  baseURL: BLOG_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const likeService = {
  getLikes: async (postId: string) => {
    const { data } = await likeApi.get<number>(`/posts/${postId}/likes/count`);
    return data;
  },

  hasLiked: async (postId: string, userIdentifier: string) => {
    const { data } = await likeApi.get<boolean>(`/posts/${postId}/likes/check`, {
      params: { user_identifier: userIdentifier },
    });
    return data;
  },

  addLike: async (like: CreateLike) => {
    const { data } = await likeApi.post<Like>('/likes', like);
    return data;
  },

  removeLike: async (postId: string, userIdentifier: string) => {
    await likeApi.delete(`/posts/${postId}/likes`, {
      params: { user_identifier: userIdentifier },
    });
  },
};
EOF

# API Services - Auth Service
cat > "lib/authService.ts" << 'EOF'
import axios from 'axios';
import type { LoginCredentials, RegisterData, AuthResponse, User } from '../types';

const AUTH_API_URL = 'http://localhost:8002';

const authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const formData = new URLSearchParams();
    formData.append('username', credentials.email);
    formData.append('password', credentials.password);
    
    const { data } = await authApi.post<AuthResponse>('/auth/login', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return data;
  },

  register: async (userData: RegisterData) => {
    const { data } = await authApi.post<User>('/auth/register', userData);
    return data;
  },

  getMe: async (token: string) => {
    const { data } = await authApi.get<User>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },

  verify: async (token: string) => {
    const { data } = await authApi.post<{ valid: boolean }>('/auth/verify', { token });
    return data;
  },
};
EOF

echo "API services created"
echo "Creating portfolio data..."

# Portfolio Data
cat > "data/portfolio.ts" << 'EOF'
import type { Experience, Skill, Book } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Team Leader - Software Tools & Applications',
    company: 'Dumarey Softronix',
    location: 'Turin, Italy',
    startDate: '2024-01',
    current: true,
    description: 'Leading software development team for automotive applications, focusing on intelligent automation and predictive control strategies.',
  },
  {
    id: '2',
    title: 'Modeling and Simulation Engineer',
    company: 'Dumarey Softronix',
    location: 'Turin, Italy',
    startDate: '2023-01',
    endDate: '2024-01',
    current: false,
    description: 'Developed simulation models for automotive systems, implementing advanced control algorithms.',
  },
  {
    id: '3',
    title: 'SIL Engineer',
    company: 'Punch Torino',
    location: 'Turin, Italy',
    startDate: '2021-01',
    endDate: '2023-01',
    current: false,
    description: 'Software-in-the-Loop testing and validation for automotive control systems.',
  },
  {
    id: '4',
    title: 'Embedded Software Engineer',
    company: 'FCA',
    location: 'Turin, Italy',
    startDate: '2019-01',
    endDate: '2021-01',
    current: false,
    description: 'Development of embedded software for automotive ECUs and control systems.',
  },
  {
    id: '5',
    title: 'Control Systems Engineer',
    company: 'University of Pisa / RoboTeam Italia',
    location: 'Pisa, Italy',
    startDate: '2017-01',
    endDate: '2019-01',
    current: false,
    description: 'Research and development of control algorithms for autonomous robotic systems.',
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'Python', category: 'Programming', level: 95 },
  { id: '2', name: 'C/C++', category: 'Programming', level: 90 },
  { id: '3', name: 'Robotics', category: 'Engineering', level: 95 },
  { id: '4', name: 'Automation', category: 'Engineering', level: 90 },
  { id: '5', name: 'Artificial Intelligence', category: 'Engineering', level: 85 },
  { id: '6', name: 'Linux Administration', category: 'Systems', level: 90 },
  { id: '7', name: 'Windows Administration', category: 'Systems', level: 90 },
  { id: '8', name: 'Embedded Systems', category: 'Engineering', level: 85 },
  { id: '9', name: 'Control Systems', category: 
