import type { ChatAction } from "advanced-chat-kai";

export const roomActions: ChatAction<string>[] = [
  {
    label: "Delete",
    value: "delete-room",
  },
];

export const myMessageActions: ChatAction<string>[] = [
  {
    label: "Edit",
    value: "edit-message",
  },
  {
    label: "Delete",
    value: "delete-message",
  },
];

export const theirMessageActions: ChatAction<string>[] = [];
