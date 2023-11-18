import { Pressable } from "react-native"
import { CXColor } from "./cx-constants"

const CXButton = (props) => {
    const fillColor = props.type === "primary" ? CXColor.PRIMARY : CXColor.TRANSPARENT;
    const strokeColor = props.type === "secondary-flip" ? CXColor.WHITE : CXColor.PRIMARY;
    const borderWidth = props.type === "primary" ? 0 : 2;
    const borderStyle = `${borderWidth}px solid ${strokeColor}`
    
    return (
        <Pressable
            onPress={props.onPress}
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: props.type === "primary" ? CXColor.PRIMARY : CXColor.TRANSPARENT,
                border: borderStyle,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 20,
            }}
        >
            <Text>{props.name}</Text>
            {props.icon}
        </Pressable>
    )
}

export default CXButton;