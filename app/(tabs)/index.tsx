import Searchbar from "@/components/Searchbar";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchMovies } from "@/services/api/fetchMovies";
import { useEffect, useState } from "react";
export default function Index() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <View className="flex-1 bg-background">
      <Image
        source={require("../../assets/images/BG.png")}
        className="absolute w-full z-0"
      />
      <View className="px-5 ">
        <Searchbar />
        <Text className="text-3xl text-white font-semi-bold mt-4">
          Latest Movies
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-5">
        <View className="flex-1 pb-16 ">
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <TouchableOpacity className="mt-4 w-[30%]">
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  className="w-full h-32 rounded-lg"
                />
                <View className="flex-1">
                  <Text
                    className="text-white font-bold text-lg"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-[#a8b5db] mt-1">
                    {item.release_date}
                  </Text>
                </View>
                {/* <Image
              source={require("../../assets/images/heart.png")}
              className="w-8 h-8"
            /> */}
              </TouchableOpacity>
            )}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "center",
              gap: 20,
              marginBottom: 10,
              paddingRight: 5,
            }}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
