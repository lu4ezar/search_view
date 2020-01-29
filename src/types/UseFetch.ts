import { Query } from '../types';

type Errors = {
  errors: Error;
};

type Response = {
  data: Query | Errors;
};

export type UseFetch = {
  isLoading: boolean;
  data: Response | null;
  error: string | null;
};

export type FetchData = (id: string) => UseFetch | Promise<UseFetch>;
