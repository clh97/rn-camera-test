import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './native';


AppRegistry.registerComponent(appName, () => App);