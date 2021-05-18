
# Sessionize Frontend

Sessionize is the final project for the 1st Academy group of 2021. It is a pair matching app designed to match people looking for people to pair program with.
This repo represents the frontend aspect of that project.

## Overview

Sessionize is a test driven React app, which utilizes TypeScript for type safety.

### Running the app locally

First, clone the repo:

```console
git clone git@github:codurance/sessionize-slackbot.git
```

Then, install the dependencies for the app within the root directory of the project:

```shell
npm install
```

Then, run npm start to fire up the project in development mode:

```shell
npm start
```

### Docker Containerization

This repo utilizes Docker containerization for deployment to the cloud (in this case, Azure). Details for this process can be found in Dockerfile.

The Dockerfile is very simple. The process is essentially as follows here:

1. Create a container (build) from the node image.
2. Using this image, build the project.
3. Create a different container (production) running an Nginx image.
4. Copy the source files and Nginx configuration files from the build container.
5. Expose the port.
6. Run.

### GitHub Actions

This repo utilizes the GitHub Action CI feature, which runs from the following file:

```
.
└──.github
    └──workflows
        └──main.yml
```

Upon pushing to the main branch, or making pull requests, the GitHub Actions service will install dependencies, build and test the project.

Assuming the build and tests were successful, the GitHub Actions process will then log into Azure, and deploy the container to the appropriate space.

