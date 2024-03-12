export const metadata = {
  title: `Projects`
};

export default function Page({ children }: {
  children: React.ReactNode
}) {
  return <div className="container-md">{children}</div>;
}