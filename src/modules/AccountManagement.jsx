import { useSelector } from "react-redux";
import { getRoles } from "../utils/jwtutils";
import React from "react";
import Button from "./submodules/Button";
import DetailModificationDialog from "./submodules/DetailModificationDialog";
import AccountScheme from "../datascheme/AccountScheme";

function AccountManagement() {
  const token = useSelector((state) => state.authenticate.tokenDto);
  const roles = getRoles(token.token);
  const isEditable =
    !roles.includes("ADMINISTRATOR") && !roles.includes("MODERATOR");
  const mockData = {
    id: 1,
    username: "admin",
    password: null,
    metadata: {
      modifiedAt: 1672042771773,
      lastModifierId: null,
    },
    roles: ["ADMINISTRATOR"],
    isAccountExpired: false,
    isAccountLock: false,
    isCredentialExpired: false,
    isEnable: true,
  };
  return (
    <React.Fragment>
      <Button color="green" isDisable={isEditable}>
        Create Account
      </Button>
      <Button color="red" isDisable={isEditable}>
        Delete Accounts
      </Button>
      <DetailModificationDialog
        model={mockData}
        scheme={AccountScheme}
      ></DetailModificationDialog>
    </React.Fragment>
  );
}

export default AccountManagement;
