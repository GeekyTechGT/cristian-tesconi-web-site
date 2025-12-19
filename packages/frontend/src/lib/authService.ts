import axios from 'axios';
import type { LoginCredentials, RegisterData, AuthResponse, User } from '../types';

const AUTH_API_URL = 'http://localhost:8002';

const authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' },
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
