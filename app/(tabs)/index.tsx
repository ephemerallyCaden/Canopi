import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import BackgroundCircle from "@/components/BackgroundCircle";
const { width, height } = Dimensions.get('window');

const Index = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
      <Image style={styles.title} source={require("../../assets/images/UI/titles/title-your-habits.png")}></Image>
      </View>
      <BackgroundCircle />
    </View>
  );
};


const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: 128,
    justifyContent: "flex-start",
    alignItems: "flex-start",

  },
  title: {
    resizeMode: 'contain',
    height: 200,
    width: 320
  },
  container: {
    flex: 1,
    backgroundColor: "#f7ebd1",
  }
})


export default Index;