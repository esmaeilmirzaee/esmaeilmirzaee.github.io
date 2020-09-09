---
title: How to install _Rust_ on _fish_
author: Esmaeil MIRZAEE
date: Sep 9, 2020
readtime: 2
image: 19.png
point: Fish is an interactive shell environment. Installation of tools or programming languages on it is somehow tricky due to its way of working.
---

> In this post, I explain the process of running the **lovely programming language** `Rust` on `Fish`. To learn more about `Rust` please refer to [newrustacean](https://newrustacean.com/)---it's a great podcast to learn.

# Introduction

## What is Fish?

Fish or **friendly interactive shell** is another `Unix shell` environment that attempts to be more interactive and and user-friendly than those with a long history.

## What is Rust?

`Rust` a blazingly fast programming language. It is a system programming language and statically typed which is supported by community and Mozilla. `Rust` is memory safe and not object oriented. It's more like [`ML`, `F#` and `OCamel`](https://newrustacean.com/show_notes/e000/index.html).

# How to install Rust?

## `Rust` installation

Simply put, run

```Bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

> if you use `bash`, `zsh` or anything like these just open a new terminal or just run

```bash
source $HOME/.cargo/env
```

## Setting up `Fish`

The above command won't work on `Fish`. So, please run the following command

```bash
set -xU fish_user_paths $HOME/.cargo/bin $fish_user_paths
```

# Conclusion

That's it. The installation of `Rust` is as blazingly as running your program.

# Resouce

1. [Rust](https://www.rust-lang.org/)
1. [Rust installer](https://rustup.rs/)
1. [Fish](https://fishshell.com/)
