import { useSelector } from "react-redux";
import { getClaims } from "../utils/jwtutils";
import React from "react";

function AccountManagement() {
  const token = useSelector((state) => state.authenticate.tokenDto);
  const claims = getClaims(token.token);
  return (
    <React.Fragment>
      <p>{JSON.stringify(claims)}</p>
    </React.Fragment>
  );
}

export default AccountManagement;
