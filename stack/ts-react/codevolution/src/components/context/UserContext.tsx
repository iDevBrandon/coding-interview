import { createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext(null);
