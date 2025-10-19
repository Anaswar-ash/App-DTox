# How to Run the Project

This document provides instructions on how to run the App-DTox project.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version)
- Watchman (for macOS/Linux users)
- Java Development Kit (JDK)
- Android Studio
- Android SDK
- Android Virtual Device (AVD) or a physical Android device

For detailed instructions on how to install these prerequisites, please refer to the [Prerequisites.md](Prerequisites.md) file.

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Anaswar-ash/App-DTox.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd App-DTox/apps
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

## Running the App

1.  Start the Metro bundler:

    ```bash
    npm start
    ```

2.  In a separate terminal, run the app on Android:

    ```bash
    npm run android
    ```

    Or on iOS:

    ```bash
    npm run ios
    ```

## Testing

To run the tests, use the following command:

```bash
npm test
```
