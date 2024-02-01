export interface InterfaceUser {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  role: string;
  friends: InterfaceUser[];
  avatar: {
    url: string;
  } | null;
}

export type UserJwt = {
  user: InterfaceUser;
  jwt: string;
};
