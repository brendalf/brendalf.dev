import React from "react";

export default function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-2xl">{children}</div>;
}
