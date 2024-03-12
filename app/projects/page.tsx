"use client"

export default function Page({ children }: {
  children: React.ReactNode
}) {
  return <div className="container-md">{children}</div>;
}