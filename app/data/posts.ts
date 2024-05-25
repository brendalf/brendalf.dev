import { PostLabel } from "@/app/lib/enum";

const posts: Post[] = [
  {
    id: "refactoring-a-application-from-python-to-golang",
    title:
      "Refactoring a application from python to golang with a real example",
    description: "How ...",
    thumbnail: "/cookie.jpg",
    labels: [PostLabel.PYTHON, PostLabel.GOLANG],
  },
];

export default posts;
