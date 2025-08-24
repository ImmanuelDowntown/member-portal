export type ForumPost = {
  id: string;
  author: string;
  content: string;
};

export type ForumThread = {
  id: string;
  title: string;
  posts: ForumPost[];
};

export const sampleThreads: ForumThread[] = [
  {
    id: "welcome",
    title: "Welcome to the Forum",
    posts: [
      {
        id: "p1",
        author: "Admin",
        content: "Introduce yourself!",
      },
    ],
  },
];
