const Layout = ({
  info,
  list
}: {
  info: React.ReactNode;
  list: React.ReactNode;
}) => {
  return (
  <div style={{ background: "blue", padding: "1rem" }}>
    <h1>Users Layout</h1>

    {info}
    {list}
  </div>
  )
}

export default Layout;

