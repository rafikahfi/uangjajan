export function formatRupiah(amount) {
  const absFormatted = new Intl.NumberFormat("id-ID").format(Math.abs(amount));
  return `Rp${absFormatted}`;
}
