import dynamic from "next/dynamic";
import { Link, Spacer } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

const VoxelScene = dynamic(() => import("@/app/ui/voxcel/scene"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center lg:mt-12 h-[200px] lg:w-[400px] lg:h-[400px]">
      <Spinner size="lg" />
    </div>
  ),
});

export default function Page() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center lg:items-start">
      <div className="max-w-xl lg:mt-8 lg:mr-14 xl:mr-[100px]">
        <Spacer y={6} />

        <div>
          <p className="font-bold text-4xl">Welcome!</p>
          <p className="font-light leading-7 text-md mt-6">
            Hi there, my name is Breno and I&apos;m a seasoned and product
            oriented software engineer. Over the past 10 years I worked in
            different roles, like Web Fullstack, Mobile, DevOps, Machine
            Learning, and Security.
          </p>
          <p className="font-light leading-7 text-md mt-3">
            I love working with legacy and ugly codebases. Something about
            navigating that spaghethi code, trying to understand why it came to
            be that way makes me feel like going down from USS Entreprise to
            explore a unknown planet.
          </p>
          <p className="font-light leading-7 text-md mt-3">
            I&apos;m interested about{" "}
            <Link href="/posts" color="secondary">
              technology
            </Link>
            ,{" "}
            <Link href="/recipes" color="secondary">
              cooking
            </Link>
            ,{" "}
            <Link href="/arts" color="secondary">
              drawing
            </Link>
            , music, football (Flamengo), calisthenics and{" "}
            <Link
              href="https://www.strava.com/athletes/50714620"
              isExternal
              color="secondary"
            >
              running
            </Link>
            . Here I intend to share a bit of everything, from software that
            I&apos;m working on, to posts about technology, goals and whatever
            else I feel like to.
          </p>
        </div>
      </div>
      <VoxelScene></VoxelScene>
    </div>
  );
}
