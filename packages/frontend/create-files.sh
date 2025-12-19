#!/bin/bash

cd "D:/GeekyTechRepos/ct-web-site+blog/packages/frontend/src"

# Store: Language Store
cat > "store/languageStore.ts" << 'EOF'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Language } from '../types';
import i18n from '../i18n/config';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'it',
      setLanguage: (language) => {
        set({ language });
        i18n.changeLanguage(language);
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
EOF

# Store: Blog Store
cat > "store/blogStore.ts" << 'EOF'
import { create } from 'zustand';
import type { BlogPost, Comment } from '../types';

interface BlogState {
  posts: BlogPost[];
  currentPost: BlogPost | null;
  comments: Comment[];
  loading: boolean;
  error: string | null;
  setPosts: (posts: BlogPost[]) => void;
  setCurrentPost: (post: BlogPost | null) => void;
  setComments: (comments: Comment[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addPost: (post: BlogPost) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  addComment: (comment: Comment) => void;
  deleteComment: (id: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: [],
  currentPost: null,
  comments: [],
  loading: false,
  error: null,
  setPosts: (posts) => set({ posts }),
  setCurrentPost: (currentPost) => set({ currentPost }),
  setComments: (comments) => set({ comments }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (id, updatedPost) => set((state) => ({
    posts: state.posts.map((post) => post.id === id ? { ...post, ...updatedPost } : post),
  })),
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter((post) => post.id !== id),
  })),
  addComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
  deleteComment: (id) => set((state) => ({
    comments: state.comments.filter((comment) => comment.id !== id),
  })),
}));
EOF

# Update Auth Store
cat > "store/authStore.ts" << 'EOF'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
EOF

echo "Stores created successfully"
