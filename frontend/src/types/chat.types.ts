import { InterfaceUser } from './user.types';

export interface InterfaceMessage {
  id: number;
  text: string;
  createdAt: string;
  sender: InterfaceUser;
}

export interface InterfaceChat {
  id: number;
  messages: InterfaceMessage[];
  participants: InterfaceUser[];
}
