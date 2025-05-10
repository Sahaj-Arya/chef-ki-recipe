import { useGetData } from "@/api/axiosInstance";
import createHomeStyles from "@/app/styles/homeStyle";
import { router } from "expo-router";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

const useHomeHook = () => {
  const [category, setCategory] = useState<string>("Breakfast");
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createHomeStyles(colorScheme), [colorScheme]);

  const { data, refetch, isFetching } = useGetData(
    "meals-" + category,
    "https://www.themealdb.com/api/json/v1/1/filter.php",
    { c: category },
    {
      enabled: !!category,
      queryKey: ["meals-" + category],
    }
  );

  const goToProfile = () => {
    router.push("/Profile");
  };
  const goToCategory = (item: any) => {
    console.log(item, "item");
    setCategory(item?.value);
  };

  useLayoutEffect(() => {
    refetch();
  }, [category, refetch]);
  return {
    styles,
    goToProfile,
    goToCategory,
    data,
    isFetching,
  };
};

export default useHomeHook;
