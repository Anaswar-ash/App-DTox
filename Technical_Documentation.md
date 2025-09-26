Technical Documentation: Digital Wellbeing Dashboard (React Native)
1. Application Architecture
This project is a mobile application for Android, built entirely with React Native. It follows a component-based architecture, where the entire user interface is encapsulated within a single main file, App.jsx. This approach is chosen for its simplicity and maintainability, making it easy to understand the application's structure and data flow, especially for a portfolio project.

Framework: React Native (using the React Native CLI).

Styling: Core React Native StyleSheet API. This provides a performant, JavaScript-based way to define styles that are converted to native UI elements.

Data Visualization: The react-native-chart-kit library is used to render the line graphs. It was chosen for its ease of use, good performance on mobile, and dependency on react-native-svg for high-quality rendering.

Data Source: All application data is currently mocked and stored locally as a constant within the App.jsx file. This simulates the data that would typically be fetched from a native module or a backend API. A detailed guide for replacing this with real data is in the README.md.

2. Component Structure
The application is built from a series of nested functional components, all residing within App.jsx. This monolithic structure is intentional for simplicity in this project version.

App (Main Component):

Responsibility: The root component that manages the application's state and renders the overall layout, including the scrollable list of app cards.

State: Holds the mock appUsageData array.

Renders: A SafeAreaView for respecting device notches, a ScrollView to allow users to scroll through all the app cards, and iterates over the appUsageData to render an AppUsageCard for each application.

AppUsageCard (Child Component):

Responsibility: To display all the information for a single application, including its name, summary statistics, and the line graph.

Props: Receives a single app object as a prop from the App component, containing all the data for that application.

Renders: The card layout, the UsageLineChart component, and the summary stats (total and average usage).

UsageLineChart (Grandchild Component):

Responsibility: To render the line chart visualization using the react-native-chart-kit library.

Props: Receives the data (the time-series data) and lineColor as props from AppUsageCard.

Logic: Contains the LineChart component and configures its appearance, dimensions, and behavior, including styling for the labels, grid, and the line itself.

3. Data Flow and State Management
The application follows a standard unidirectional data flow, which is a core principle of React and React Native.

Data Origin: The state, appUsageData, is initialized and "owned" by the top-level App component. This mock data is structured as an array of objects, where each object represents an application and contains its metadata and a nested array of its daily usage data.

Data Propagation (Props): The App component maps over the appUsageData array. For each app object in the array, it renders an AppUsageCard component and passes that app object down as a prop.

Component Rendering: The AppUsageCard receives the app prop and uses its data to render the title and summary stats. It then prepares the data in the format required by react-native-chart-kit and passes it down to the UsageLineChart component.

Visualization: The UsageLineChart receives the formatted data and renders the line graph.

This top-down data flow makes the application easy to debug and reason about. There is a single source of truth for the data. To integrate real data, one would replace the static appUsageData constant with a state variable (e.g., useState) that is populated by a call to a custom Native Module inside a useEffect hook.

4. The Mock Data Structure
The appUsageData array is the heart of the application. It is structured to be easily consumable by the components.

// Example structure of the mock data
const appUsageData = [
  {
    id: 1,
    name: "Social Sphere",
    color: (opacity = 1) => `rgba(29, 78, 216, ${opacity})`, // Blue
    data: [2.5, 3.1, 2.8, /* ...30 days of usage in hours... */]
  },
  // ... more apps
];

Each object has a unique id, a name, and a color function. The color function is required by react-native-chart-kit to allow for gradients.

The data key contains a simple array of numbers, where each number represents the hours of usage for a corresponding day. This is the exact format expected by the chart library for the line graph's dataset, making it highly efficient to render.
