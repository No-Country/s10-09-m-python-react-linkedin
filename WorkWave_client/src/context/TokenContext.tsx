import { createContext } from "react";
import { User } from "../models/user";

interface TokenContextProps {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
}

export const TokenContext = createContext<TokenContextProps>({
  token: null,
  user: null,
  setToken: () => {},
  setUser: () => {},
});
