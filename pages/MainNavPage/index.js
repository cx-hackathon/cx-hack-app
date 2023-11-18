import { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import Canvas from "react-native-canvas";
import { CXColor } from "../../components/common/cx-constants";
import CurrAirportHeader from "../../components/CurrAirportHeader";
import useCanvas from "../../utils/useCanvas";
import { useFocusEffect } from "@react-navigation/native";

const FPS = 20;

const MainNavPage = ({ navigation, route }) => {
    // **** Touch Control Utils **** //
    
    const lastPinchDistance = useRef(null);
    const lastPinchAngle = useRef(null);

    const [touch, setTouch] = useState([])
    
    const onTouchStart = (evt) => {
        const touches = evt.nativeEvent.changedTouches;
        console.log(touches)
        setTouch([...touch, 1])
    }
    
    // **** Canvas Utils **** //
    
    const promiseQueue = useRef([]);
    
    const preDraw = () => {
        
    }
    
    const mapDraw = (ctx, frameCount) => {
        ctx.fillRect(0, 0, 100, 100);
    }
    
    const promiseResolve = () => {
        const corePromises = promiseQueue.current.map(value => value.promise);
        const callbacks = promiseQueue.current.map(value => value.callback);
        Promise.all(corePromises)
        .then(Promise.all(callbacks))
        .then(promiseQueue.current = [])
        .catch(err => console.error(err))
    }
    
    const wrapperRef = useRef();
    const canvasRef = useCanvas(mapDraw, preDraw, promiseResolve, FPS);
    
    // **** Logic **** //
    const [currAirport, setCurrAirport] = useState("HKG");

    const onMapStart = () => {
        //TODO: on init, fetch map image and/or essential amenities
    }

    useFocusEffect(() => {
        if (route.params) {
            console.log(route.params);

            //TODO: call path gen using route.params.destination (location ID)
        }
    })

    useEffect(() => {
        onMapStart();
    }, [])
    
    return (
        <View>
            <Text>{touch}</Text>
            <View
                ref={wrapperRef}
                onTouchStart={onTouchStart}
                style={{
                    width: "100%",
                    // height: "100%",
                    height: 300,
                    // flex: 1,
                    backgroundColor: CXColor.WHITE,
                }}
            >
                <Canvas
                    ref={canvasRef}
                    style={{
                        width: "100%",
                        // height: "100%",
                        height: 300,
                        // flex: 1,
                        backgroundColor: CXColor.WHITE,
                    }}
                />
            </View>
        </View>
    )
}

export default MainNavPage;