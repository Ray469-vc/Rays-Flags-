function buyNow(item) {
  const msg = `Hi Ray (@rattyray1), I want to buy: ${item}`;
  navigator.clipboard.writeText(msg);
  alert(`Copied order:\n${msg}\n\nNow DM @rattyray1 or join the server.`);
  window.open("https://discord.gg/W8w94pUtgt", "_blank");
}