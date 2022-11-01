export const currencyFormat = (value) => {
  const [_, result] = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(value)
    .split("R$");

  return result;
};
