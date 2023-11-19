import { View, Text } from "react-native"
import { CXColor, CXFont } from "./common/cx-constants";

const CountdownDigit = (props) => {
    return (
        <View
            style={{
                width: 20,
                paddingVertical: 8,
                alignItems: "center",
                backgroundColor: CXColor.SECONDARY,
                marginRight: 4,
                borderRadius: 4,
            }}
        >
            <Text
                style={[CXFont.M, {
                    color: CXColor.WHITE,
                    fontWeight: "bold",
                }]}
            >
                {props.digit}
            </Text>
        </View>
    )
}

const CountdownClock = (props) => {
    const timeDelta = new Date(new Date(props.deadline).getTime() - Date.now());

    const hourStr = timeDelta.getHours().toString().padStart(2, '0');
    const minStr = timeDelta.getMinutes().toString().padStart(2, '0');
    
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <CountdownDigit digit={hourStr[0]} />
            <CountdownDigit digit={hourStr[1]} />
            <Text
                style={[CXFont.M, {
                    color: CXColor.WHITE,
                    marginRight: 4,
                }]}
            >
                :
            </Text>
            <CountdownDigit digit={minStr[0]} />
            <CountdownDigit digit={minStr[1]} />
        </View>
    )
}

export default CountdownClock;