---
id: doc5
title: Jekyll
sidebar_label: 'Jekyll'
---

> When I first started exploring the CI/CD and the SSGs, the first generator that I learned was Jekyll. I used [Getting started with the Documentation Theme for Jekyll](https://idratherbewriting.com/documentation-theme-jekyll/) by Tom Johnson, the famous guru of technical writing known by his [I'd Rather Be Writing blog](https://idratherbewriting.com/).

So without too many words, let's start building our first documentation portal using Tom's Jekyll theme. I will try to explain even the evident things.

---

## Download or clone the theme from the [GitHub repo](https://github.com/tomjoht/documentation-theme-jekyll)

1. Sign up for GitHub.

![img](../static/img/sign-up-GitHub.png)

2. If you already have the account there, sign in.

![img](../static/img/sign-in-GitHub.png)

3. Now if you follow the [link to Tom's repo](https://github.com/tomjoht/documentation-theme-jekyll), you will see the contents of this repo that has the code and content for his example [documentation site](https://idratherbewriting.com/documentation-theme-jekyll/).

![img](../static/img/tom-repo.png)

4. Click the **Code** button and select **Download ZIP**.

![img](../static/img/download-zip.png)

5. Save the ZIP file to your computer and unzip the contents where you like. Now you have the folder with code and content. Let's proceed with building our documentation site from all this.

---

## Install Ruby on Windows

> Before we install Jekyll that compiles our site, we need to install Ruby. Jekyll is a Ruby-based program and needs Ruby to run.

1. Go to [RubyInstaller for Windows](https://rubyinstaller.org/downloads/).
2. Install the recommended **Ruby+Devkit 2.6.X (x64)** version.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9a41dee-d0c9-4fd1-a2af-c853e8803266/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9a41dee-d0c9-4fd1-a2af-c853e8803266/Untitled.png)

3. Install everything by default.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a58954e2-09c1-42d4-b0e6-b2b8005106a3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a58954e2-09c1-42d4-b0e6-b2b8005106a3/Untitled.png)

3. When the installation completes, you see this command prompt screen. Press `Enter` two times when prompted.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dc3c55a-18df-4fef-9e35-e4468e7939af/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8dc3c55a-18df-4fef-9e35-e4468e7939af/Untitled.png)

4. When the installation in the command prompt exits, let's assume that we have Ruby installed. If you want to make sure, open the command prompt and type `ruby -v` and press `Enter`.