import React, { useRef } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width * 0.9;

const Carousel = ({ children }) => {
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    console.log("Current Index:", index);
  };

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {React.Children.map(children, (child, index) => (
          <View key={index} style={styles.slide} className="border m-3">
            {child}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: width,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Carousel;
