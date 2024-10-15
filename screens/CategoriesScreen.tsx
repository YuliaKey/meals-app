import { FlatList } from "react-native";

import CategoryGridTile from "@/components/CategoryGridTile";
import { CATEGORIES, CategoryType } from "@/data/dummy-data";

export default function CategoriesScreen({ navigation }: any) {
  const renderCategoryItem = ({ item }: { item: CategoryType }) => {
    const handlePress = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        id={item.id}
        onPress={handlePress}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      horizontal={false}
    />
  );
}
