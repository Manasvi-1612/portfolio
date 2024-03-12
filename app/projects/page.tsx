"use client"

export default function Page({ children }: {
  children: JSX.Element | JSX.Element[];
}) {
  return <div className="container-md">{children}</div>;
}