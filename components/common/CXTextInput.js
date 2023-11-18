import { useState } from "react";
import { TextInput, View } from "react-native";
import { CXColor } from "./cx-constants";

const CXTextInput = (props) => {
    const [focused, setFocused] = useState(false);
    
    return (
        <View
            style={{
                backgroundColor: focused ? CXColor.WHITE : CXColor.LIGHT_GREY,
                borderColor: focused ? CXColor.PRIMARY : CXColor.LIGHT_GREY,
                borderWidth: 2,
                borderRadius: 8,
                paddingVertical: 4,
                paddingHorizontal: 8,
            }}
        >
            <TextInput 
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{

                }}
            />
        </View>
    )
}

export default CXTextInput;