import { FlatList, TouchableWithoutFeedback, View, Text } from "react-native"
import CurrAirportHeader from "../../components/CurrAirportHeader";
import { useEffect, useState } from "react";
import AmenityItem from "../../components/AmenityItem";
import CXTabMenu from "../../components/common/CXTabMenu";
import { CXColor, CXFont } from "../../components/common/cx-constants";
import CXTextInput from "../../components/common/CXTextInput";
import RecommendedAmenity from "../../components/RecomendedAmenity";

const AmenitiesPage = ({ route, navigation }) => {
    const menuOptions = [
        {
            id: "all",
            name: "All",
        },
        {
            id: "cx",
            name: "Cathay",
        },
        {
            id: "wash",
            name: "Washrooms",
        },
        {
            id: "rest",
            name: "Restaurants",
        },
        {
            id: "other",
            name: "Others"
        }
    ]
    
    const [amenities, setAmenities] = useState([
        // {
        //     id: "fcsdur",
        //     name: "Maccie's",
        //     type: "rest",
        // },
        // {
        //     id: "pcvisdc",
        //     name: "Washroom",
        //     type: "wash",
        // },
    ]);
    const [textFilter, setTextFilter] = useState("");
    const [selectedTab, setSelectedTab] = useState("all");
    const [recommended, setRecommended] = useState([
        {
            id: "abscc",
            name: "Maccie's",
            type: "rest",
        },
        {
            id: "csdcs",
            name: "1/F Prayer Room",
            type: "other",
        },
        {
            id: "hfgbbt",
            name: "1/F Washroom",
            type: "wash",
        },
    ])
    const [recommendVisible, setRecommendVisible] = useState(true);

    const textOnFocus = () => {
        setRecommendVisible(false);
    }

    const textOnBlur = () => {
        setRecommendVisible(true);
    }

    const dataFilter = (data) => 
        data.filter(value => 
            value.name ? value.name.includes(textFilter) : false
        ).filter(value => 
            selectedTab === "all" ? true :
            selectedTab === value.type
        )

    const amenityRenderer = ({ item }) => (
        <AmenityItem 
            id={item.id}
            name={item.name}
            type={item.type}
            navigation={navigation}
        />
    )

    useEffect(() => {
        //TODO: fetch regular amenities and set to amenities state
        //TODO: call recommender system and set recommendedAmenities

        var tmpAmenitiesArr = [];

        fetch("https://dtoi798bnqwwr.cloudfront.net/v1/facilities/HKG?type=restaurant")
            .then((res) => res.json())
            .then((res) => {
                var tmp = res.data;
                tmp.forEach(value => {
                    value.id = value.facility_id,
                    value.type = "rest"
                });
                console.log(tmp)
                tmpAmenitiesArr = tmpAmenitiesArr.concat(tmp)
                console.log("fetched rest, ", tmpAmenitiesArr)
            })
            .then(() => {
                fetch("https://dtoi798bnqwwr.cloudfront.net/v1/facilities/HKG?type=toilet")
                    .then((res) => res.json())
                    .then((res) => {
                        var tmp = res.data;
                        tmp.forEach(value => {
                            value.id = value.facility_id,
                            value.type = "wash"
                        });
                        console.log(tmp)
                        tmpAmenitiesArr = tmpAmenitiesArr.concat(tmp)
                        console.log("fetched toilet, ", tmpAmenitiesArr)
                    })
                    .then(() => {
                        fetch("https://dtoi798bnqwwr.cloudfront.net/v1/facilities/HKG?type=gate")
                        .then((res) => res.json())
                        .then((res) => {
                            var tmp = res.data;
                            tmp.forEach(value => {
                                value.id = value.facility_id,
                                value.type = "gate"
                            });
                            console.log(tmp)
                            tmpAmenitiesArr = tmpAmenitiesArr.concat(tmp)
                            console.log("fetched gatw, ", tmpAmenitiesArr)
                        })
                        
                        .then(() => setAmenities(tmpAmenitiesArr))
                        .catch((err) => console.log(err))
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        

        
    }, [])
    
    return (
        <TouchableWithoutFeedback>
            <View>
                <View
                    style={{
                        width: "100%",
                        backgroundColor: CXColor.WHITE,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        elevation: 4,
                    }}
                >
                    <CXTextInput 
                        placeholder="Search for Amenities..."
                        value={textFilter}
                        onChange={setTextFilter}
                        onFocus={textOnFocus}
                        onBlur={textOnBlur}
                    />
                </View>

                {
                    recommendVisible && (
                        <View
                            style={{
                                backgroundColor: CXColor.WHITE,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                borderTopWidth: 1,
                                borderBottomWidth: 1,
                                borderColor: CXColor.LIGHT_GREY,
                            }}
                        >
                            <Text
                                style={[CXFont.L, {
                                    marginBottom: 6,
                                }]}
                            >
                                Recommended for you
                            </Text>

                            {
                                recommended.map((value, index) => (
                                    <RecommendedAmenity 
                                        key={value.id}
                                        id={value.id}
                                        name={value.name}
                                        type={value.type}
                                        rank={index + 1}
                                        navigation={navigation}
                                    />
                                ))
                            }
                        </View>
                    )
                }


                <CXTabMenu 
                    menuOptions={menuOptions}
                    selected={selectedTab}
                    setSelected={setSelectedTab}
                />

                
                        <FlatList 
                            data={amenities.length > 0 ? dataFilter(amenities) : []}
                            renderItem={amenityRenderer}
                            style={{
                                paddingHorizontal: 24,
                                paddingVertical: 16,
                                maxHeight: 250,
                            }}
                            contentContainerStyle={{
                                paddingBottom: 30,
                            }}
                        />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AmenitiesPage;