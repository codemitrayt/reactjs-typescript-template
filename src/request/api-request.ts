import axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  AxiosError,
} from 'axios';

import { errorToast } from '@/lib';
import store, { logout } from '@/store';
import { appEnv, ERROR_MESSAGE } from '@/constants';
import type { APIRequestMethodType } from '@/types';

export const performLogout = (): void => {
  store.dispatch(logout());
  window.location.href = '/';
};

export const axiosInstance = axios.create({
  baseURL: appEnv.BACKEND_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (!error.response) {
      errorToast({
        message: ERROR_MESSAGE.NETWORK_ERROR,
      });
    } else if (error.response.status === 401) {
      performLogout();
      errorToast({ message: ERROR_MESSAGE.JWT_EXPIRED });
    } else {
      const message =
        (error.response.data as { message?: string })?.message ||
        ERROR_MESSAGE.INTERNAL_SERVER_ERROR;
      errorToast({ message });
    }
    return Promise.reject(error);
  }
);

interface RequestConfig extends Omit<AxiosRequestConfig, 'url' | 'method'> {
  url: string;
  method: APIRequestMethodType;
  data?: Record<string, unknown> | FormData;
  params?: Record<string, unknown>;
  isFormData?: boolean;
}

export const apiRequest = <T = unknown>({
  url,
  data = {},
  params = {},
  isFormData,
  method,
  ...rest
}: RequestConfig): Promise<AxiosResponse<T>> => {
  return axiosInstance({
    url,
    method,
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    },
    params,
    data,
    ...rest,
  });
};
