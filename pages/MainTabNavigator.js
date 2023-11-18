import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavPage from "./MainNavPage";
import AmenitiesPage from "./AmenitiesPage/AmenitiesPage";
import CurrAirportHeader from "../components/CurrAirportHeader";
import MapIcon from "../assets/svg/MapIcon";
import { CXColor } from "../components/common/cx-constants";
import AmenityIcon from "../assets/svg/AmenityIcon";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                header: () => <CurrAirportHeader 
                    airport="HKG"
                    terminal={69}
                />,
                tabBarActiveTintColor: CXColor.PRIMARY,
                tabBarInactiveTintColor: CXColor.GREY,
            }}
        >
            <Tab.Screen 
                name="Navigation" 
                component={MainNavPage} 
                options={{
                    tabBarIcon: (props) => (
                        <MapIcon 
                            color={props.focused ? CXColor.PRIMARY : CXColor.GREY}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Amenities" 
                component={AmenitiesPage} 
                options={{
                    tabBarIcon: (props) => (
                        <AmenityIcon
                            color={props.focused ? CXColor.PRIMARY : CXColor.GREY}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;