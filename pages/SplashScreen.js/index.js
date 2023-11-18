import { View, Image, Text } from "react-native";

const SplashScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image 
                source={require("../../assets/splash-logo.png")}
                style={{
                    width: 300,
                    height: 100,
                    resizeMode: 'cover',
                }}
            />
        </View>
    )
}

export default SplashScreen;