import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/react";

const VoxelScene = dynamic(() => import("@/app/ui/voxcel/scene"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center pb-8">
      <Spinner size="lg" />
    </div>
  ),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VoxelScene></VoxelScene>
      {children}
    </>
  );
}
