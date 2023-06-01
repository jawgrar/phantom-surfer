# Phantom Surfer

This application takes screenshots of a webpage and emails them periodically.

## Prerequisites

You need to have Node.js installed on your machine to run this app.

### Installing Node.js

- **Windows/Mac:** You can download Node.js from the [official website](https://nodejs.org/). Follow the installation prompts and Node.js will be ready to use.

- **Linux:** You can install Node.js using a package manager. For example, on Ubuntu or Debian, you can use `apt`:

    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

    Verify the installation with the following commands:

    ```bash
    node --version
    npm --version
    ```

## Setup and Installation

1. **Clone the Repository:**

    Open a terminal and run the following git command:

    ```bash
    git clone https://github.com/<YourGithubUsername>/phantom-surfer.git
    ```
    Replace `<YourGithubUsername>` with your Github username.

2. **Install the Dependencies:**

    Navigate into the cloned repository directory and install the dependencies using npm:

    ```bash
    cd phantom-surfer
    npm install
    ```

3. **Running Locally:**

    Before generating the executables, you can run the application locally. Make sure you have set the environment variables as instructed in the Usage section. Then, in the terminal run:

    ```bash
    node screenshot.js
    ```

    The application will take screenshots of the specified webpage at the set interval and send them to the given email address.

4. **Generate an Executable:**

    We will use the `pkg` module to generate an executable of our application. Install `pkg` globally if you haven't yet:

    ```bash
    npm install -g pkg
    ```

    Then, generate the executables:

    ```bash
    pkg screenshot.js --targets node14-macos-x64,node14-win-x64
    ```

    This will generate two executable files for MacOS and Windows respectively.

## Usage

Once the environment variables are set, you can run the application with the command:

For MacOS:

```bash
./screenshot-macos EMAIL='example@gmail.com' PASS='password' CCEMAIL='example@gmail.com' CRON_MINUTES=1
```

For Windows:

```bash
screenshot-win.exe EMAIL='example@gmail.com' PASS='password' CCEMAIL='example@gmail.com' CRON_MINUTES=1
```

Replace 'example@gmail.com', 'password', 'example@gmail.com' and '1' with your actual email, password, CC email and desired screenshot interval in minutes.

## Environment Variables

Here is a description of all the environment variables:

- **EMAIL**: The email address that the screenshots will be sent from.
- **PASS**: The password for the email account that the screenshots will be sent from.
- **CCEMAIL**: The email address that the screenshots will be sent to.
- **CRON_MINUTES**: The interval in minutes between screenshots.

Remember not to share these environment variables, as they contain sensitive information.

---