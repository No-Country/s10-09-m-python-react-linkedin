import { createContext } from "react";
import { User } from "../models/user";
import { FavoriteJobs } from "../models/favoriteJobs";

interface TokenContextProps {
  token: string | null;
  user: User | null;
  favoriteJobs: FavoriteJobs[];
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setFavoriteJobs: React.Dispatch<React.SetStateAction<FavoriteJobs[]>>;
}

export const TokenContext = createContext<TokenContextProps>({
  token: null,
  user: null,
  favoriteJobs: [],
  setToken: () => {},
  setUser: () => {},
  setFavoriteJobs: () => {},
});
