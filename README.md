# App-DTox
App usage tracker and Digital wellbeing app with more numerical and statistical approch. 
Author: Ash.
Digital Wellbeing Dashboard - A React Native App for Android
1. Project Vision & Goal
This project is a mobile "Digital Wellbeing" dashboard for Android, built with React Native. Its goal is to provide users with a clear and intuitive way to visualize and understand their application usage over time. In a world filled with digital distractions, this tool empowers users to build healthier digital habits by tracking monthly usage for various applications.

The core feature is a series of line graphs—one for each tracked app—that elegantly display daily usage in hours throughout a 30-day period. This project serves as a powerful portfolio piece, demonstrating key skills in mobile development, data visualization, and modern React Native practices.

Note on Data: This version of the app uses realistic mock data to focus on UI/UX development. A detailed guide for integrating real device data is included in the "Next Steps & Future Enhancements" section.

2. Key Features
Individual App Tracking: View detailed usage statistics for multiple application categories (e.g., Social, Productivity, Entertainment).

Monthly Usage Visualization: A clear line graph for each app shows the number of hours used per day over the last 30 days.

Native Look and Feel: A responsive and modern user interface built with React Native, providing a smooth experience on Android.

Insightful Summaries: See key metrics like total monthly usage and average daily usage for each application at a glance.

Built for Mobile: The entire interface is designed with a mobile-first approach.

3. Technologies & Libraries Used
React Native: For building the cross-platform mobile application from a single JavaScript codebase.

React Native Chart Kit: A popular library for creating beautiful and responsive charts and graphs in React Native.

React Native SVG: A required dependency for React Native Chart Kit to render the graphs.

4. Step-by-Step Setup and Installation
Follow these instructions to get the project running on an Android emulator or a physical device.

Step 4.1: Prerequisites
Ensure you have Node.js (LTS version recommended) and Watchman installed.

Set up your machine for React Native development by following the official guide for the "React Native CLI Quickstart". This will involve installing the Android SDK, an Android emulator, and other necessary tools. You can find the guide here: React Native Development Environment Setup

Step 4.2: Create a New React Native Project
Open your terminal and create a new React Native application.

npx react-native@latest init DigitalWellbeingApp
cd DigitalWellbeingApp


Step 4.3: Install Dependencies
Install the necessary libraries for the charts.

npm install react-native-chart-kit react-native-svg


Step 4.4: Replace the Code
Replace the entire content of App.jsx (or App.tsx) with the code provided in the App.jsx file from this project.

Step 4.5: Run the Application
Make sure you have an Android emulator running or a physical device connected and configured. Then, run the application from your terminal.

npx react-native run-android


This command will build the app and install it on your emulator or device. You should now see the Digital Wellbeing Dashboard running!

5. Next Steps & Future Enhancements
This project provides a solid foundation that can be extended with more advanced features.

5.1 Accessing Real Usage Data with a Native Module
To make this a fully functional utility, the next step is to replace the mock data with real data from the device. This is an advanced task that requires creating a Native Module.

Here is the high-level roadmap:

Write Native Android Code (Java/Kotlin):

You will need to work inside the android folder of your React Native project.

The core of the logic will use Android's UsageStatsManager API to query the system for app usage statistics over a specific time range.

Create a React Native "Bridge":

You will create a special Java/Kotlin class that "bridges" your native code to the JavaScript environment of React Native.

This involves creating a method (e.g., getUsageStats) that can be called from your App.jsx file.

Handle Android Permissions:

Accessing usage stats requires a special permission: PACKAGE_USAGE_STATS.

You must declare this in your AndroidManifest.xml file.

Unlike normal permissions, you cannot ask for this with a simple pop-up. You must guide the user to their phone's settings screen to manually grant the permission.

Update the React Native App:

In your App.jsx file, you would import your new Native Module.

You would then use a useEffect hook to call your getUsageStats method, which would return the real data and update the app's state, causing the graphs to re-render with the live data.

5.2 Other Potential Enhancements
User Authentication: Allow users to sign up and save their own usage data using a service like Firebase.

Custom Date Ranges: Add a date picker to allow users to view their usage over different time periods (e.g., weekly, yearly).

Goal Setting: Implement a feature for users to set usage goals and receive notifications.
