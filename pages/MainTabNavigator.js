import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavPage from "./MainNavPage";
import AmenitiesPage from "./AmenitiesPage/AmenitiesPage";
import CurrAirportHeader from "../components/CurrAirportHeader";
import MapIcon from "../assets/svg/MapIcon";
import { CXColor } from "../components/common/cx-constants";
import AmenityIcon from "../assets/svg/AmenityIcon";
import { useState, useEffect } from "react";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const [deadline, setDeadline] = useState(Date("2023-11-19T15:00:00"))
  
    useEffect(() => {
    fetch("https://dtoi798bnqwwr.cloudfront.net/v1/customer/510892B0000153AC")
      .then((res) => res.json())
      .then((res) => {
        const upcomingFlight = Object.values(res.data.flights)[0];
        const timeObj = upcomingFlight.from.at;
        const deadlineDateTime = new Date(`${timeObj.date}T${timeObj.time}`);
        setDeadline(deadlineDateTime);
      })
      .catch((err) => console.error(err))

  }, [])

    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                header: () => <CurrAirportHeader 
                    airport="HKG"
                    terminal={69}
                    deadline={deadline}
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