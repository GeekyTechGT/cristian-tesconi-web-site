import axios from 'axios';
import type { Like, CreateLike } from '../types';

const BLOG_API_URL = 'http://localhost:8001';

const likeApi = axios.create({
  baseURL: BLOG_API_URL,
  headers: { 'Content-Type': 'application/json' },
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
