As a software developer and enthusiast of the Elixir programming language, I found myself in a common predicament while coding—needing a more efficient way to interact with Mix, Elixir's build tool. This led to the birth of mix.nvim, a plugin designed specifically to integrate Mix commands directly into the Neovim editor. The goal was simple: streamline the development workflow by allowing commands to be executed without leaving the editor.

## What is mix.nvim?

![ezgif-1-ca42871cbc](https://user-images.githubusercontent.com/10671410/181785935-dee6da82-f1d2-4ced-a214-dcc202caba45.gif)

mix.nvim serves as a Mix wrapper for Neovim, enabling developers to perform Mix commands within the editor itself. This integration includes features like autocompletion for available Mix commands within the current repository, asynchronous command execution, and potentially, support for navigating Elixir's documentation through Neovim's Telescope integration.

It's vaguely akin to `:!mix` but with some improvements:

- Autocompletion for available Mix commands inside the current repository.
- Choose the type of window you want to show the output (WiP).
- Support Telescope integration to navigate through package's documentation (WiP).
- Run async commands inside Neovim (WiP).

## Key learnings

Developing mix.nvim was not just about solving a personal itch but also an opportunity for significant professional growth. Working on this project allowed me to deepen my knowledge in several key areas:

- Lua Programming: The primary development language for Neovim plugins is Lua. Developing mix.nvim allowed me to enhance my Lua programming skills, giving me a stronger understanding of its syntax and functionalities.
- Neovim’s Architecture: Through this project, I gained a profound understanding of Neovim's internal workings, such as registering user auto commands and managing buffers. These insights were crucial in making the plugin both efficient and effective.

One of the most rewarding aspects of creating mix.nvim was seeing it evolve from a mere idea to a tool that other developers could use and benefit from. It underscored the importance of open-source contributions to the programming community.
