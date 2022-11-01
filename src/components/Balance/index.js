import { MotiView } from "moti";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { currencyFormat } from "../../utils/utils";

export function Balance({ balance, expenses }) {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>

        <View style={styles.itemContent}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{currencyFormat(balance)}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>

        <View style={styles.itemContent}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{currencyFormat(expenses)}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
    paddingVertical: 22,
    zIndex: 99,
  },
  item: {},
  divider: {
    backgroundColor: "#B2B2B2",
    width: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B2B2B2",
    textTransform: "uppercase",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#4B4B4B",
    marginRight: 6,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 24,
    color: "#2ecc71",
    fontWeight: "800",
  },
  expenses: {
    fontSize: 24,
    color: "#e74c3c",
    fontWeight: "800",
  },
});
