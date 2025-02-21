# Tic Tac Toe Game with React Native and Expo ⚛️🕹️

Welcome to the Tic Tac Toe Game project! This project is built using React Native and Expo, providing a simple and fun Tic Tac Toe game experience. The project is designed to work on both mobile 📱 and TV 📺 platforms, including iOS, Android, Web, Apple TV (tvOS), and Android TV. Additionally, the project supports Light and Dark themes.

🔗 Here is a live web demo: https://tic-tac-toe-game-expo.vercel.app/

## Table of Contents
- [How to use](#how-to-use)
- [Screen Recordings](#screen-recordings)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## How to use

To get started with this project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/markshenouda/tic-tac-toe-game.git
cd tic-tac-toe-game
```
2. Install the dependencies:
```
yarn
```

## Screen Recordings

Here are some screen recordings of the project running on different platforms:

- tvOS (Apple TV):


https://github.com/user-attachments/assets/a2d0eb16-bc32-4054-adcb-c5f5490bc522



- Android TV:


https://github.com/user-attachments/assets/1cecdf22-ec50-4e04-b9f2-2fe2c56ce814

- iOS (iPhone 16 Pro Max - Dark Theme):


https://github.com/user-attachments/assets/38e14b31-35d6-4ddc-bf90-31b936eb8a4e



- iOS (iPhone 16 Pro Max - Light Theme):


https://github.com/user-attachments/assets/9edb4b67-06d9-4b18-aac9-e55006281d9b



- Android (Pixel 3a - Dark Theme):


https://github.com/user-attachments/assets/620d518d-e31b-46c5-8c86-f513d44832be



- Android (Pixel 3a - Light Theme):


https://github.com/user-attachments/assets/d3cfbc99-aa11-4190-87ac-edfbe97ae1b9



## Running the Project

To run the project, use the following command:

- Run the prebuild script:
```
yarn prebuild:mobile
```
- Start the development preview:
```
yarn ios // or
yarn android // or
yarn web
```

- Or if you want to start the app for TV:
```
yarn prebuild:tv // you have to run this command before running the tv app
yarn tvos // for Apple TV
yarn android:tv // for Android TV
```

This will start the Expo development server. You can then use the Expo Go app on your mobile device or an emulator to view the app.

> **Note:** You have to run `yarn prebuild:*` when you switch between mobile and TV apps.

## Project Structure

Here is an overview of the project's structure:

- `app/`: Contains the main application code, including screens and layouts.
- `assets/`: Contains images, lottie files, fonts, and other static assets.
- `components/`: Contains reusable UI components.
- `constants/`: Contains constant values used throughout the app.
- `hooks/`: Contains custom React hooks.
- `scripts/`: Contains utility scripts for project maintenance.
- `android/` and `ios/`: Platform-specific auto generated code for Android and iOS.

## Scripts

The project includes several npm scripts for common tasks:
- `yarn start`: Starts the Expo development server.
- `yarn prebuild:mobile`: Prebuilds the project for mobile platforms.
- `yarn prebuild:tv`: Prebuilds the project for TV platforms.
- `yarn ios`: Starts the iOS development server.
- `yarn android`: Starts the Android development server.
- `yarn web`: Starts the web development server.
- `yarn tvos`: Starts the Apple TV development server.
- `yarn android:tv`: Starts the Android TV development server.
- `yarn lint`: Runs ESLint to check for code quality issues.
- `yarn test`: Runs the test suite.
- `yarn format`: Formats the code using Prettier.
- `yarn format:check`: Checks the code formatting using Prettier.
- `yarn build:web`: Builds the project for web.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.e
Welcome to the Tic Tac Toe Game project! This project is built using React Native and Expo, providing a simple and fun Tic Tac Toe game experience.

