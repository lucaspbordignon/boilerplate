const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
  <div style={{ background: "blue", padding: "1rem" }}>
    <h1>Home Layout</h1>

    {children}
  </div>
  )
}

export default Layout;
