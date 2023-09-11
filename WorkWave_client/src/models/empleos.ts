export interface Empleos {
  id: number;
  job_position: string;
  company_name: string;
  description: string;
  ubication: string;
  salary: number;
  users_customuser: UsersCustomuser;
  types_of_ubication: TypesOf;
  types_of_employment: TypesOf;
}

export interface TypesOf {
  id: number;
  name: string;
}

export interface UsersCustomuser {
  id: number;
  password: string;
  last_login: Date;
  is_superuser: boolean;
  is_staff: boolean;
  date_joined: Date;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  country: string;
  is_active: boolean;
}
