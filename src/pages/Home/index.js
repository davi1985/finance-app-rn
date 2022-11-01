import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Actions } from "../../components/Actions";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Moviments } from "../../components/Moviments";

const DESPENSES_TYPE = {
  income: 0,
  despenses: 1,
};

const list = [
  {
    id: 1,
    label: "Conta de Luz",
    value: "102.90",
    date: "17/09/2022",
    type: DESPENSES_TYPE.despenses,
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "500.00",
    date: "18/09/2022",
    type: DESPENSES_TYPE.income,
  },
  {
    id: 3,
    label: "Salário",
    value: "3500.00",
    date: "18/09/2022",
    type: DESPENSES_TYPE.income,
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Header name={"Davi Silva"} />

      <Balance balance="7500" expenses="2500" />

      <Actions />

      <Text style={styles.lastOperations}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  lastOperations: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    color: "#3C4048",
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
