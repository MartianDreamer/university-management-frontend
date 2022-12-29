import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getRoles } from "../utils/jwtutils";
import Button from "./submodules/Button";
import DetailModificationDialog from "./submodules/DetailModificationDialog";
import AccountScheme from "../datascheme/AccountScheme";

function AccountManagement() {
  const token = useSelector((state) => state.authenticate.tokenDto);
  const roles = getRoles(token.token);
  const [openDialog, setOpenDialog] = useState(false);
  const isEditable =
    !roles.includes("ADMINISTRATOR") && !roles.includes("MODERATOR");

  return (
    <div>
      <div className="flex justify-end">
        <Button
          color="green"
          isDisable={isEditable}
          handleOnClick={() => {
            setOpenDialog(true);
          }}
        >
          Create Account
        </Button>
        <Button color="red" isDisable={isEditable}>
          Delete Accounts
        </Button>
        {openDialog && (
          <DetailModificationDialog
            handleCancel={() => {
              setOpenDialog(false);
            }}
            scheme={AccountScheme}
            data={null}
          />
        )}
      </div>
    </div>
  );
}

export default AccountManagement;
