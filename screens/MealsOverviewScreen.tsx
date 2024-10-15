import { Text, View, StyleSheet } from "react-native";

export default function MealsOverviewScreen({ route }: any) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
