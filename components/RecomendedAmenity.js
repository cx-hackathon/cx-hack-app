import { Image, Pressable, Text, View } from "react-native"
import { CXColor, CXFont } from "./common/cx-constants";

const RecommendedAmenity = (props) => {
    const typeStr = 
        props.type === "cx" ? "Cathay" :
        props.type === "wash" ? "Washroom" :
        props.type === "rest" ? "Restaurant" :
        "Other";
    
    return (
        <Pressable
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 6,
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
                <View
                    style={{
                        width: 18,
                        height: 18,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: CXColor.GOLD,
                        borderRadius: 18,
                        marginRight: 8,
                    }}
                >
                    <Text
                        style={[CXFont.S, {
                            color: CXColor.WHITE,
                        }]}
                    >
                        {props.rank}
                    </Text>
                </View>
                <View>
                    <Image
                        source={require("../assets/placeholder-amenity.jpg")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            marginRight: 8,
                        }}
                    />
                </View>

                <Text
                    style={[CXFont.M, {
                        fontWeight: "bold",
                    }

                    ]}
                >
                    {props.name}
                </Text>
            </View>


            <Text
                style={[CXFont.M, {
                    color: CXColor.DARK_GREY,
                }]}
            >
                {typeStr}
            </Text>
        </Pressable>
    )
}

export default RecommendedAmenity;