import { createContext } from "react";

interface TokenContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const TokenContext = createContext<TokenContextProps>({
  token: null,
  setToken: () => {},
});
