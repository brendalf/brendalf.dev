import { Label } from "@/app/lib/enums";
import { Post } from "@/app/lib/interfaces";

const posts: Post[] = [
  {
    id: "data-science-for-social-good",
    title:
      "Data Science for Social Good in Practice: Finding Donors for a Charity Company",
    description:
      "Posted on Medium as part of the Udacity Data Science Nanodegree",
    date: "Jun 18, 2020",
    labels: [Label.PYTHON, Label.MACHINE_LEARNING, Label.DATA_SCIENCE],
    isExternal: true,
    externalUrl:
      "https://brendalf.medium.com/data-science-for-social-good-in-practice-93e1783d1f30",
  },
];

export default posts;
