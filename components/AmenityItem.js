import { Pressable, View, Text, Image } from "react-native";
import { CXColor, CXFont } from "./common/cx-constants";
import ArrowRightIcon from "../assets/svg/ArrowRightIcon";

const AmenityItem = (props) => {
    return (
        <Pressable
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                backgroundColor: CXColor.WHITE,
                borderRadius: 8,
                marginBottom: 12,
                padding: 16,
                
                shadowOffset: {
                    width: 0,
                    height: -2,
                },
                shadowRadius: 2,
                shadowOpacity: 0.5,
                shadowColor: "black",
                elevation: 2,
            }}
            onPress={() => {
                props.navigation.navigate({
                    name: "Navigation",
                    params: { destination: props.id },
                    merge: true,
                })
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View>
                    <Image 
                        source={require("../assets/placeholder-amenity.jpg")}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: "cover",
                            borderRadius: 8,
                            marginRight: 10,
                        }}
                    />
                </View>

                <View>
                    <Text style={{
                        fontWeight: "bold",
                        color: CXColor.PRIMARY,
                    }}>
                        Test
                    </Text>
                    <Text
                        style={[CXFont.L, {

                        }]}
                    >
                        {props.name}
                    </Text>
                    <Text>
                        Loc des
                    </Text>
                </View>
            </View>

            <View>
                <ArrowRightIcon />
            </View>
        </Pressable>
    )
}

export default AmenityItem;