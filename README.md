# Shopping APP (FRONTEND)

# Get Started

Please Insure is docker is install in your system and running

The objective of this project is to establish a shared set of best practices and a starting point. Once the project is initiated, developers can access information about best practices, reducing the time spent on both starting up and selecting appropriate tools.

## Stack

This section is going to show a curated list of the packages and tools used for this project (to see
the full list of dependencies take a look at `package.json`)

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [next-translate](https://github.com/vinissimus/next-translate)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)


## Start project with docker (recommended)

To begin the project using Docker, simply run the script below, assuming that Docker is already installed and functioning properly on your machine.

```
./bin/start
```

The script assumes that you have a `.env.sample` file that file is going to be copied to a file
with the name `.env` and it's going to be used to start the application

## Start project manually

### Install project dependencies

```
$ yarn install
```

### Start the project

```
$ yarn dev
```

This command will start a dev server and every change that is made to the code is reflected on the
browser, that is running the code.

By default it will start the server port 3000, if you need to start the server on a different port
use the following command instead.

```
$ yarn dev -- -p [PORT]
```

Where [PORT] is the port that you want to use for running the server

## Linter

The linter tool will help you by analyzing source code and fix common errors, or by following the
style conventions defined.

### Run linter with docker (recommended)

To run the linter you just need to open a new terminal inside the container to do that just execute
the following command:

```
$ ./bin/terminal
```

Inside of the container just run the command normally

```
$ yarn lint
```

### Run linter manually

To run the linter on your program you can type the following command on the root of the project

```
$ yarn lint
```

In case you also want to try to fix those linter issues automatically you can run the following
command instead

```
$ yarn lint -- --fix
```