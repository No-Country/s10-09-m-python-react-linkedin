export interface User {
  token: string;
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string | null;
  avatar: string | null;
}

export interface Usuario {
  password: string;
  last_login: string;
  is_superuser: boolean;
  is_staff: boolean;
  date_joined: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string;
  is_active: boolean;
  headline: string;
  about: string;
  avatar_url: string;
  banner_url: string;
}
