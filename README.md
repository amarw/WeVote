# WeVote
React Native project that uses single codebase to build a mobile app and website. 

## Tools 
- [React Native](https://github.com/facebook/react-native) 
- [React Native Web](https://github.com/necolas/react-native-web) 
- Starter project generated using [Expo CLI](https://docs.expo.io/versions/latest/)

## Prerequisites
- MacOS machine
- Install expo-cli using command `npm i -g expo-cli`
- For running mobile app on iOS simulator, please setup Xcode, command line tools, cocoapods. [(Setup instructions)](https://docs.expo.io/versions/v35.0.0/workflow/ios-simulator/)
- For running mobile app on android emulator, please setup Android Studio and create a virtual device [(Setup instructions)](https://docs.expo.io/versions/v35.0.0/workflow/android-studio-emulator/)
- For running mobile app on real iPhone and/or Android device you will need to install the Expo mobile app. Follow [these instructions](https://docs.expo.io/versions/v35.0.0/workflow/android-studio-emulator/).

## Run
- Clone this repository on your machine.
- `cd WeVote`
- `yarn install`
- `cd ios && pod install`

To run your project, navigate to your project directory and run one of the following yarn commands.

- `cd WeVote`
- `yarn android`
- `yarn ios`
- `yarn web`
