import { Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { CXColor, CXFont } from "./common/cx-constants";
import CountdownClock from "./CountdownClock";
import { useNavigation } from "@react-navigation/native";

const CurrAirportHeader = (props) => {
    const navigation = useNavigation();
    
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: CXColor.PRIMARY,
                padding: 16,
            }}
        >
            <View 
                style={{
                    height: Constants.statusBarHeight
                }}

            />

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <View>
                    <Text
                        style={[CXFont.S, {
                            color: CXColor.WHITE,
                            paddingBottom: 10,
                        }]}
                    >
                        Current Airport
                    </Text>
                    <Text
                        style={[CXFont.M, {
                            color: CXColor.WHITE,
                            fontWeight: "bold",
                        }]}
                    >
                        {props.airport}
                    </Text>
                </View>

                <View
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={[CXFont.S, {
                            color: CXColor.WHITE,
                            paddingBottom: 10,
                        }]}
                    >
                        Terminal
                    </Text>
                    <Text
                        style={[CXFont.M, {
                            color: CXColor.WHITE,
                            fontWeight: "bold",
                        }]}
                    >
                        {props.terminal}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 12,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <CountdownClock 
                        deadline={new Date("2023-11-19T11:00:00")}
                    />
                    <Text style={[CXFont.S, {
                        color: CXColor.WHITE,
                        marginLeft: 6,
                    }]}>
                        before boarding
                    </Text>
                </View>

                <Pressable
                    style={{
                        backgroundColor: CXColor.RED_SECONDARY,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderRadius: 24,
                    }}
                    onPress={() => {
                        navigation.navigate({
                            name: "Navigation",
                            params: { destination: "TO_GATE" },
                            merge: true,
                        })
                    }}
                >
                    <Text
                        style={[CXFont.M, {
                            color: CXColor.WHITE,
                            fontWeight: "bold",
                        }]}
                    >
                        Go {`>>>`}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CurrAirportHeader;