// components/CustomDropdown.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";

type DropdownItem = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  items: DropdownItem[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
};

const CustomDropdown = ({
  items,
  selectedValue,
  onSelect,
  placeholder = "Select...",
}: CustomDropdownProps) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(!visible)}
      >
        <Text style={styles.text}>{selectedValue || placeholder}</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.dropdownList}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    marginBottom: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  dropdownList: {
    backgroundColor: "#fff",
    margin: 32,
    borderRadius: 6,
    maxHeight: 300,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default CustomDropdown;
