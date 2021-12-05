import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../src/Home';
import MainScreen from './MainScreen';
const Drawer = createDrawerNavigator();

export default function CustomDrawer(navigation) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Home} />
      <Drawer.Screen name="Feed" component={MainScreen} />
    </Drawer.Navigator>
  );
}