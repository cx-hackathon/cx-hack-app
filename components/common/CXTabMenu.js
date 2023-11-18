import { Pressable, ScrollView, Text, View } from "react-native"
import { CXColor } from "./cx-constants";

const CXTabItem = (props) => {
    const selected = props.selected === props.id;
    
    return (
        <Pressable
            style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: selected ? CXColor.PRIMARY : CXColor.WHITE,
                borderColor: CXColor.PRIMARY,
                borderWidth: selected ? 0 : 1,
                marginRight: 4,
            }}
            onPress={() => {
                props.setSelected(props.id);
            }}
        >
            <Text
                style={{
                    color: selected ? CXColor.WHITE : CXColor.PRIMARY,
                }}
            >
                {props.name}
            </Text>
        </Pressable>
    )
}

const CXTabMenu = (props) => {
    return (
        <ScrollView
            horizontal
            style={{
                // width: "100%",
                backgroundColor: CXColor.WHITE,
                paddingVertical: 12,
            }}
            contentContainerStyle={{
                paddingLeft: 16,
                paddingRight: 12,
            }}
            showsHorizontalScrollIndicator={false}
        >
            {
                props.menuOptions.map((value, index) => (
                    <CXTabItem 
                        id={value.id}
                        name={value.name}
                        selected={props.selected}
                        setSelected={props.setSelected}
                    />
                ))
            }
            
        </ScrollView>
    )
}

export default CXTabMenu;