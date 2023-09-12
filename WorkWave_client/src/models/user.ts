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
