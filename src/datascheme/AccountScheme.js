const AccountScheme = {
  type: "object",
  children: {
    username: {
      label: "Username",
      type: "text",
    },
    metadata: {
      type: "object",
      children: {
        modifiedAt: {
          label: "Last modified",
          type: "text",
        },
      },
    },
    roles: {
      label: "Roles",
      type: "array",
      childType: "checkbox",
      values: ["ADMINISTRATOR", "MODERATOR", "STUDENT", "USER"],
    },
    isEnable: {
      label: "Active",
      type: "checkbox",
    },
  },
};

export default AccountScheme;
