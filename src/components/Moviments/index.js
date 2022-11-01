import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";
import { currencyFormat } from "../../utils/utils";

export function Moviments({ data }) {
  const [showValues, setShowValues] = useState(false);
  const styleBasedOnMovimentType =
    data.type === 1 ? styles.expenses : styles.value;
  const isExpenses = data.type === 1;

  const handleShowValues = () => setShowValues(!showValues);

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowValues}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValues ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={styleBasedOnMovimentType}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "timing",
                duration: 500,
              }}
            >
              {isExpenses ? "-" : null}
              R${currencyFormat(data.value)}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <View style={styles.skeleton} />
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#b2b2b2",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#b2b2b2",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  skeleton: {
    width: 80,
    height: 15,
    backgroundColor: "#d2d2d2",
    borderRadius: 8,
  },
});
