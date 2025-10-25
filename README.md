# App-DTox

App-DTox is a digital wellbeing app that helps you track your app usage and build healthier digital habits. It provides a numerical and statistical approach to understanding your digital life.

## Project Vision & Goal

This project is a mobile "Digital Wellbeing" dashboard for Android, built with React Native. Its goal is to provide users with a clear and intuitive way to visualize and understand their application usage over time. In a world filled with digital distractions, this tool empowers users to build healthier digital habits by tracking monthly usage for various applications.

The core feature is a series of line graphs—one for each tracked app—that elegantly display daily usage in hours throughout a 30-day period. This project serves as a powerful portfolio piece, demonstrating key skills in mobile development, data visualization, and modern React Native practices.

**Note on Data:** This version of the app uses realistic mock data to focus on UI/UX development. A detailed guide for integrating real device data is included in the "Next Steps & Future Enhancements" section.

## Key Features

-   **Individual App Tracking:** View detailed usage statistics for multiple application categories (e.g., Social, Productivity, Entertainment).
-   **Monthly Usage Visualization:** A clear line graph for each app shows the number of hours used per day over the last 30 days.
-   **Native Look and Feel:** A responsive and modern user interface built with React Native, providing a smooth experience on Android.
-   **Insightful Summaries:** See key metrics like total monthly usage and average daily usage for each application at a glance.
-   **Built for Mobile:** The entire interface is designed with a mobile-first approach.

## Technologies & Libraries Used

-   **React Native:** For building the cross-platform mobile application from a single JavaScript codebase.
-   **React Native Chart Kit:** A popular library for creating beautiful and responsive charts and graphs in React Native.
-   **React Native SVG:** A required dependency for React Native Chart Kit to render the graphs.

## Getting Started

To get started with the project, please refer to the [Getting Started Guide](docs/test.md) for detailed instructions on how to run the project.

## Documentation

For more detailed information about the project, please refer to the following documents:

-   [Prerequisites](docs/Prerequisites.md)
-   [Technical Documentation](docs/Technical_Documentation.md)
-   [How I Built This Project](docs/howdidibuild.md)
-   [Change Map](docs/map.md)

## Next Steps & Future Enhancements

This project provides a solid foundation that can be extended with more advanced features.

### Accessing Real Usage Data with a Native Module

To make this a fully functional utility, the next step is to replace the mock data with real data from the device. This is an advanced task that requires creating a Native Module.
Here is the high-level roadmap:

-   **Write Native Android Code (Java/Kotlin):**
    -   Work inside the `android` folder of your React Native project.
    -   Use Android's `UsageStatsManager` API to query the system for app usage statistics over a specific time range.
-   **Create a React Native "Bridge":**
    -   Create a special Java/Kotlin class that "bridges" your native code to the JavaScript environment of React Native.
    -   This involves creating a method (e.g., `getUsageStats`) that can be called from your `App.jsx` file.
-   **Handle Android Permissions:**
    -   Accessing usage stats requires a special permission: `PACKAGE_USAGE_STATS`.
    -   Declare this in your `AndroidManifest.xml` file.
    -   Guide the user to their phone's settings screen to manually grant the permission, as it cannot be requested with a simple pop-up.
-   **Update the React Native App:**
    -   In `App.jsx`, import your new Native Module.
    -   Use a `useEffect` hook to call your `getUsageStats` method, which would return the real data and update the app's state, causing the graphs to re-render with the live data.

### Other Potential Enhancements

-   **Efficient Background Data Syncing:** To optimize performance and battery life, implement a background task that runs once a day (e.g., at midnight). This task would call the native module to get the day's usage stats and save them to a local on-device database (like SQLite). The app would then read from this fast local database instead of querying the entire system history every time it opens.
-   **User Authentication:** Allow users to sign up and save their own usage data using a service like Firebase.
-   **Custom Date Ranges:** Add a date picker to allow users to view their usage over different time periods (e.g., weekly, yearly).
-   **Goal Setting:** Implement a feature for users to set usage goals and receive notifications.

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Troubleshooting

### Termux Build Issues

When attempting to build and run this project in a Termux environment on Android, several issues were encountered. These issues are related to the Java environment and system library dependencies.

The following steps were taken in an attempt to resolve the build errors:

1.  **Installed OpenJDK:** A Java Development Kit is required for the Android build process. `openjdk-21` was installed.
2.  **Set `JAVA_HOME`:** The `JAVA_HOME` environment variable was set to the location of the OpenJDK installation.
3.  **`libiconv` Dependency:** The build failed with an error indicating that the `libiconv` library could not be found by the Java VM.
4.  **Installed `libiconv`:** The `libiconv` package was installed.
5.  **Library Path Adjustments:** Several attempts were made to help the Java VM find the `libiconv` library, including:
    *   Setting the `LD_LIBRARY_PATH` environment variable.
    *   Creating a symbolic link to `libiconv.so` in the Java VM's library directory.
6.  **Upgraded Gradle:** The project's Gradle version was upgraded from 9.0.0 to 9.1.0.

Despite these efforts, the build continues to fail with the same `libiconv` error. This suggests a deep incompatibility between the Java version, Gradle, and the Termux environment.

**Conclusion:** At this time, the project cannot be successfully built in the Termux environment. It is recommended to use a standard Linux distribution on a computer for development.