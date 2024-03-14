<!-- markdownlint-disable MD024 MD033 MD041 -->

<p align="center" dir="auto">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/dino3616/hayabusa/assets/85730998/0deb3075-54e4-4e29-83d2-fef1aa6827dc">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/dino3616/hayabusa/assets/85730998/46313388-a8ae-4fff-bc46-5c2ff4fd5781">
    <img src="https://github.com/dino3616/hayabusa/assets/85730998/0deb3075-54e4-4e29-83d2-fef1aa6827dc" alt="Hayabusa" width="80%" height="auto" />
  </picture>
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,bun,nextjs,react,nestjs,apollo,postgres,selenium,graphql,supabase,docker,vscode,githubactions,figma" alt="skill set: ts, bun, nextjs, react, nestjs, apollo, postgres, selenium, graphql, supabase, docker, vscode, github actions, figma" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-orange" alt="license MIT" />
  <img src="https://img.shields.io/badge/codespaces-available-brightgreen" alt="codespaces available" />
  <img src="https://img.shields.io/badge/storybook-available-brightgreen" alt="storybook available" />
</p>

# Hayabusa 🛰️

Hayabusa is a system that elevates any Web GUI to NLUI (Natural Language User Interface).

## Setup with Dev Containers 📦

You can easily launch the development environment of Hayabusa with Dev Containers.  
Here is the step-by-step guide.

### Attention

- You need to install [Docker](https://docs.docker.com/get-docker) and [VSCode](https://code.visualstudio.com) before.

### 1. clone git repository

```bash
git clone "https://github.com/dino3616/hayabusa" && cd "./hayabusa"
```

### 2. set environment variables

See `.env.example` or contact the [repository owner](https://github.com/dino3616) for more details.

### 3. launch dev containers

Launch containers using the VSCode extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

### 4. start supabase development environment

```bash
bun supabase start
```

## Setup locally 🖥️

If you need to build the [Supabase development environment locally](https://supabase.com/docs/guides/cli/local-development), please follow the steps below.

### Attention

- You need to install [Docker](https://docs.docker.com/get-docker), and [proto](https://moonrepo.dev/docs/proto/install) (optional) before.
- You need to install [bun](https://bun.sh) that specified in [`.prototools`](./.prototools) before. (With proto, you can easily install a specified version of the tool. Recommendation.)
- [Optional] You should install project recommended VSCode extensions that specified in [`.devcontainer/devcontainer.json`](./.devcontainer/devcontainer.json#L11C6-L19C7) before.

### 1. clone git repository

```bash
git clone "https://github.com/dino3616/hayabusa" && cd "./hayabusa"
```

### 2. set environment variables

See `.env.example` or contact the [repository owner](https://github.com/dino3616) for more details.

### 3. install dependencies

```bash
bun install
```

### 5. start supabase development environment

```bash
bun supabase start
```

## Project Useful Links 📚

Here are some useful links for this project.

## Design

- [Figma](https://www.figma.com/file/luTS1mnDZa3q6i0E0gNEiu/website?type=design&node-id=0%3A1&mode=design&t=7IUIV604EUGOQz7J-1)

## Component Catalog

- [Storybook](https://main--65f2fd1896e8df7b159c8528.chromatic.com)
- [Chromatic](https://www.chromatic.com/library?appId=65f2fd1896e8df7b159c8528&branch=main)
