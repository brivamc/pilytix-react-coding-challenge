/* converts amount to dollar format */
export function formatAmount(amount) {
  return "$" + amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function parseOppDetails(oppDetails) {
  return oppDetails.split(" - ");
}
