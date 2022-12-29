function getClaims(jwtToken) {
  const parts = jwtToken.split(".");
  return JSON.parse(window.atob(parts[1]));
}

export { getClaims };
