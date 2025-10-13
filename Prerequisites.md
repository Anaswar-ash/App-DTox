Prerequisites for Digital Wellbeing App Development (Android)
This guide details all the software and tools you must install on your system before you can begin creating the React Native application. Following these steps will ensure your development environment is correctly configured.
1. Core Development Tools
These are the fundamental tools required for any modern JavaScript development.

Node.js (LTS Version)

What it is: A JavaScript runtime environment that lets you run JavaScript code outside of a web browser. It includes npm (Node Package Manager), which is used to install and manage project libraries.

Why you need it: React Native is built on Node.js. npm is essential for installing the React Native CLI and other project dependencies like the charting library.

How to get it: Download the LTS (Long-Term Support) version from the official Node.js website.

Watchman (for macOS/Linux users)

What it is: A file-watching service developed by Facebook.

Why you need it: It's a performance-enhancing tool that watches for changes in your code and helps the React Native bundler update your app more quickly. While not strictly required on Windows, it is highly recommended for macOS and Linux.

How to get it: Follow the installation instructions on the official Watchman website.

2. Java Development Kit (JDK)
What it is: A software development kit for building applications in the Java programming language.

Why you need it: Android's native language is primarily Java/Kotlin. React Native uses the JDK to compile the native code required to build your app into a runnable .apk file.

How to get it: The React Native documentation recommends a specific version of the JDK (often OpenJDK). The easiest way to install it is through a package manager like Chocolatey on Windows or Homebrew on macOS. The official React Native setup guide will have the precise, up-to-date command.

3. Android Development Environment
This is the most critical part of the setup, as it provides all the tools specific to building Android apps.

Android Studio

What it is: The official Integrated Development Environment (IDE) for Android app development.

Why you need it: While you will write most of your code in a text editor like VS Code, you must install Android Studio because it is the easiest way to install and manage the Android SDK, build tools, and virtual devices (emulators).

How to get it: Download it from the official Android Developer website.

Android SDK (Software Development Kit)

What it is: A collection of software development tools and libraries required to build, test, and debug Android applications.

Why you need it: This is the core of the Android build process. It contains the platform tools that turn your code into an app.

How to get it: When you install Android Studio, it will guide you through the process of installing the recommended Android SDK. You must install an SDK for at least one Android version (e.g., Android 13.0 "Tiramisu").

Android Virtual Device (AVD) / Emulator

What it is: A software program that simulates a real Android device on your computer.

Why you need it: It allows you to run and test your application without needing a physical Android phone.

How to get it: You create and manage AVDs through the Virtual Device Manager inside Android Studio.

Environment Variable Configuration

What it is: A system setting that tells your computer's command line where to find the Android development tools.

Why you need it: You must set the ANDROID_HOME (or ANDROID_SDK_ROOT) environment variable so that the React Native CLI knows where to find the Android SDK to build your app.

How to do it: You'll need to edit your system's environment variables (e.g., .bash_profile, .zshrc, or the System Properties in Windows) to point to the location of your Android SDK.

Summary & Next Steps
Once you have installed all of the above, your machine will be fully prepared. The next step would be to follow the "Step-by-Step Setup and Installation" guide in the main README.md file, starting with creating the new React Native project.
