import axios from 'axios';
import type { Comment, CreateComment } from '../types';

const BLOG_API_URL = 'http://localhost:8001';

const commentApi = axios.create({
  baseURL: BLOG_API_URL,
  headers: { 'Content-Type': 'application/json' },
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
