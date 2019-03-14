
# react-native-carrot-utils

## Getting started

`$ npm install react-native-carrot-utils --save`

### Mostly automatic installation

`$ react-native link react-native-carrot-utils`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-carrot-utils` and add `RNCarrotUtils.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCarrotUtils.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.aero.utils.RNCarrotUtilsPackage;` to the imports at the top of the file
  - Add `new RNCarrotUtilsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-carrot-utils'
  	project(':react-native-carrot-utils').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-carrot-utils/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-carrot-utils')
  	```


## Usage
```javascript
import RNCarrotUtils from 'react-native-carrot-utils';

// TODO: What to do with the module?
RNCarrotUtils;
```
  