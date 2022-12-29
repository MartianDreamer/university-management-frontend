function getClaims(jwtToken) {
  const parts = jwtToken.split(".");
  return JSON.parse(window.atob(parts[1]));
}

function getRoles(jwtToken) {
  return getClaims(jwtToken).authority;
}

export { getClaims, getRoles };
