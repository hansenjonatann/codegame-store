import Header from "./header"

interface Props {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: Props) {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-14">
        {children}
      </main>
    </>
  )
}
