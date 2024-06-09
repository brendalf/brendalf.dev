import { Label } from "@/app/lib/enums";
import { Work } from "@/app/lib/interfaces";

const works: Work[] = [
  {
    id: "mix-nvim",
    title: "Mix.nvim",
    description: "A Elixir Mix wrapper for Neovim",
    labels: [Label.OPENSOURCE, Label.NEOVIM, Label.ELIXIR],
    ghRepo: "brendalf/mix.nvim",
    thumbnail: "mix-nvim.png",
  },
];

export default works;
