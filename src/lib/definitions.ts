export type Lesson = {
  id: string;
  title: string;
  description: string;
  youtubeVideoId: string;
  orderIndex: number;
  createdAt: Date;
};

export type User = {
  id: string;
  email: string;
  isAuthorized: boolean;
};

export type SessionPayload = User;
