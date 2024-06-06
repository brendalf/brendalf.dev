import { PostLabel } from "@/app/lib/enums";
import { Post } from "@/app/lib/interfaces";

const posts: Post[] = [
  {
    id: "example-post",
    title: "Example post",
    description: "Blog is currently a working in progress",
    thumbnail: "/cookie.jpg",
    labels: [PostLabel.PYTHON, PostLabel.GOLANG],
  },
];

export default posts;
