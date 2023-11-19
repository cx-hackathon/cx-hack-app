import { useEffect, useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import Canvas from "react-native-canvas";
//import { gql, request } from 'graphql-request';
import { useMutation, useQuery, useLazyQuery , gql} from '@apollo/client';
import { CXColor, CXFont } from "../../components/common/cx-constants";
import CurrAirportHeader from "../../components/CurrAirportHeader";
import useCanvas from "../../utils/useCanvas";
import { useFocusEffect } from "@react-navigation/native";
import WebView from "react-native-webview";
import { ScrollView } from "react-native";
import ToIcon from "../../assets/svg/ToIcon";

const FPS = 20;

const MainNavPage =  ({ navigation, route }) => {
  const [health, setHealth] = useState();
    const healthcheckQuery = gql`
      query {
        healthcheck
      }
    `;
    const [path, setPath] = useState();
    const pathQuery = gql`
      query {
        shortestPath(input: { startNode: "g2", endNode: "r0" }) {
          id
          name
          level
        }
      }
    `;
  const [queryhealth, { data, error, loading }] = useLazyQuery(healthcheckQuery, {
    onCompleted: (data) => {
      console.log(data)
      setHealth(data.healthcheck);
    },
    fetchPolicy: 'network-only',
  })
  const [querypath] = useLazyQuery(pathQuery, {
    onCompleted: (data) => {
      console.log(data);
      setPath(data.shortestPath);
    },
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    queryhealth();
  }, []);

  useEffect(() => {
      querypath();
  }, []);

  //
    // **** Touch Control Utils **** //
    
    // const lastPinchDistance = useRef(null);
    // const lastPinchAngle = useRef(null);
    // const distanceDelta = useRef(0);
    // const angleDelta = useRef(0);
    // const totalScale = useRef(1);

    // const [touch, setTouch] = useState([])
    
    // const onTouchStart = (evt) => {
    //     const touches = evt.nativeEvent.changedTouches;
    // }

    // const handleSingleTouch = (nativeEvt) => {

    // }

    // const handleDoubleTouch = (nativeEvt) => {
    //     const finger0 = nativeEvt.changedTouches[0];
    //     const finger1 = nativeEvt.changedTouches[1];
        
    //     const deltaX = finger1.locationX - finger0.locationX;
    //     const deltaY = finger1.locationY - finger0.locationY;
    //     const currPinchDistance = Math.sqrt(deltaX**2 + deltaY**2);
    //     const currPinchAngle = Math.tan(deltaY / deltaX);

        
    //     if (!lastPinchAngle.current || !lastPinchDistance.current) {
    //         lastPinchAngle.current = currPinchAngle;
    //         lastPinchDistance.current = currPinchDistance;
    //         return
    //     }
    //     // console.log(lastPinchAngle.current, ", ", lastPinchDistance.current)

    //     distanceDelta.current = 1 + (currPinchDistance - lastPinchDistance.current) / lastPinchDistance.current;
    //     angleDelta.current = currPinchAngle - lastPinchAngle.current;
    //     totalScale.current *= distanceDelta.current;
    //     console.log(totalScale.current)

    //     lastPinchDistance.current = currPinchDistance;
    //     lastPinchAngle.current = currPinchAngle;
    // }

    // const onTouchMove = (evt) => {
    //     const moves = evt.nativeEvent.changedTouches;
    //     if (moves.length === 1) {
    //         handleSingleTouch(evt.nativeEvent)
    //     }
    //     else if (moves.length === 2) {
    //         handleDoubleTouch(evt.nativeEvent)
    //     }
    // }

    // const onTouchEnd = (evt) => {
    //     lastPinchAngle.current = null;
    //     lastPinchDistance.current = null;
    //     distanceDelta.current = 1;
    //     angleDelta.current = 1;
    // }
    
    // // **** Canvas Utils **** //
    
    // const promiseQueue = useRef([]);
    
    // const preDraw = (ctx) => {
    //     ctx.rotate(angleDelta.current);
    //     ctx.scale(distanceDelta.current, distanceDelta.current);
    //     angleDelta.current = 0;
    //     distanceDelta.current = 1;
    // }
    
    // const mapDraw = (ctx, frameCount) => {
    //     ctx.fillRect(0, 0, 100, 100);
    //     if (imgLoaded) ctx.drawImage(mapImg.current, 0,0);
    // }
    
    // const promiseResolve = () => {
    //     const corePromises = promiseQueue.current.map(value => value.promise);
    //     const callbacks = promiseQueue.current.map(value => value.callback);
    //     Promise.all(corePromises)
    //     .then(Promise.all(callbacks))
    //     .then(promiseQueue.current = [])
    //     .catch(err => console.error(err))
    // }
    
    // const wrapperRef = useRef();
    // const canvasRef = useCanvas(mapDraw, preDraw, promiseResolve, FPS);
    
    // // **** Logic **** //
    // const [currAirport, setCurrAirport] = useState("HKG");
    // const [imgLoaded, setImgLoaded] = useState(false)

    // const mapImg = useRef();

    // const onMapStart = () => {
    //     //TODO: on init, fetch map image and/or essential amenities
    //     mapImg.current = new Image(canvasRef.current, 100, 300);
    //     mapImg.current.addEventListener("load", () => {
    //         console.log("fired")
    //         setImgLoaded(true)
    //     })
    //     mapImg.current.src = "../../assets/map.png";
    //     console.log("start loading")
    // }

    const blankMap = require("../../assets/map.png");
    const genMap = require("../../assets/gen-map.png")

    const [pathGen, setPathGen] = useState();

    useFocusEffect(() => {
        if (route.params) {
            console.log(route.params);

            setPathGen("...")
            //TODO: call path gen using route.params.destination (location ID)
        }
    })

    // useEffect(() => {
    //     onMapStart();
    // }, [])

    // useEffect(() => {
    //     if (imgLoaded) console.log("image loaded")
    //     else console.log("not loaded")
    // }, [imgLoaded])

    
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    width: "100%",
                    backgroundColor: CXColor.WHITE,
                    padding: 16,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: CXColor.LIGHT_GREY,
                }}
            >
                <Text style={[CXFont.L]}>Gate 69</Text>
                <ToIcon />
                <Text style={[CXFont.L]}>Maccie's</Text>
            </View>
            {/* <Text>{touch}</Text> */}
            <View
                // ref={wrapperRef}
                // onStartShouldSetResponder={evt => true}
                // onMoveShouldSetResponder={evt => true}
                // onResponderGrant={onTouchStart}
                // onResponderMove={onTouchMove}
                // onResponderRelease={onTouchEnd}
                style={{
                    width: "100%",
                    // height: "100%",
                    // height: 300,
                    flex: 1,
                    backgroundColor: CXColor.WHITE,
                }}
            >
                {/* <Canvas
                    ref={canvasRef}
                    style={{
                        width: "100%",
                        height: "100%",
                        height: 300,
                        flex: 1,
                        backgroundColor: CXColor.WHITE,
                    }}
                /> */}
                {/* <WebView 
                    source={"10.129.10.118:3000"}
                    style={{
                        flex: 1,
                    }}
                /> */}
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                >
                    <ScrollView
                        horizontal
                    >
                        <Image 
                            source={pathGen ? genMap : blankMap}
                        />
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    )
}

export default MainNavPage;
