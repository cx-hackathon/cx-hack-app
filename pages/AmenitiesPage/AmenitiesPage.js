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
        {
            id: "fcsdur",
            name: "Maccie's",
            type: "rest",
        },
        {
            id: "pcvisdc",
            name: "Washroom",
            type: "wash",
        },
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

    const dataFilter = (data) => 
        data.filter(value => 
            value.name.includes(textFilter)
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
                    />
                </View>

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
                                id={value.id}
                                name={value.name}
                                type={value.type}
                                rank={index}
                                navigation={navigation}
                            />
                        ))
                    }
                </View>

                <CXTabMenu 
                    menuOptions={menuOptions}
                    selected={selectedTab}
                    setSelected={setSelectedTab}
                />
                <FlatList 
                    data={dataFilter(amenities)}
                    renderItem={amenityRenderer}
                    style={{
                        paddingHorizontal: 24,
                        paddingVertical: 16,
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AmenitiesPage;