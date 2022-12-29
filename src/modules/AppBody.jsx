import AccountManagement from "./AccountManagement";

function AppBody({ selectedItem }) {
  const items = [
    {
      id: 1,
      body: AccountManagement,
    },
  ];

  return (
    <div className="m-4 grow">
      {items
        .filter((e) => e.id === selectedItem)
        .map((e) => (
          <e.body key={e.id} />
        ))}
    </div>
  );
}
export default AppBody;
