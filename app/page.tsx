import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Divider, Link, Spacer } from "@nextui-org/react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
        {/* Profile */}
        <div className="flex flex-row pb-6">
          <Avatar
            isBordered
            className="w-24 h-24 text-large"
            alt="Profile Picture"
            src="/brendalf.jpg"
          />
          <div className="ml-6 mt-2">
            <h1 className="text-4xl font-bold">Breno Silva</h1>
            <p className="font-thin mt-2">Senior Software Engineer</p>
          </div>
        </div>

        <Spacer y={6} />

        {/* Work */}
        <div>
          <p className="font-bold text-lg">About me</p>
          <Divider className="my-2" />
          <p className="font-light leading-6 text-sm text-justify">
            I&apos;m a product oriented engineer with 10 years of experience in
            areas like FrontEnd (Web and Mobile), Backend (APIs and Databases),
            DevOps, and Machine Learning. I enjoy delivering value, getting
            things done, and refactoring old codebases (when needed).
          </p>
          <p className="font-light leading-6 mt-2 text-sm text-justify">
            I&apos;m a lifelong learner. I love open source and developer UX. My
            current side projects include a programming language interpreter in
            Golang, Neovim plugins to boost my productivity, and a Rust
            application to generate statistics from git repositories.
          </p>
          <p className="font-light leading-6 mt-2 text-sm text-justify">
            Fun facts: (a) I worked five years as a police officer back in
            Brazil, during which I developed InfrAÇÕES, a traffic law
            application with over 100,000 users; (b) Brendalf comes from a
            college joke combining Breno + Gandalf.
          </p>
          <Spacer y={4} />
          <div className="flex justify-center">
            <Button href="/works" as={Link} variant="flat" color="secondary">
              Portifolio <FontAwesomeIcon icon={faChevronRight} />
            </Button>
            <Spacer x={2} />
            <Button href="/goals" as={Link} variant="flat" color="secondary">
              Yearly Goals <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>

        <Spacer y={4} />

        {/* I love */}
        <div>
          <p className="font-bold text-lg">I love</p>
          <Divider className="my-2" />
          <p className="text-gray-300 font-light text-sm">
            Flamengo, Coding, Reading,{" "}
            <Link href="/recipes" color="secondary">
              Cooking
            </Link>
            , Music,{" "}
            <Link href="/arts" color="secondary">
              Drawing
            </Link>
            , Games, and{" "}
            <Link
              href="https://www.strava.com/athletes/50714620"
              isExternal
              color="secondary"
            >
              Running
            </Link>
            .
          </p>
        </div>

        <Spacer y={6} />

        {/* On the web */}
        <div>
          <p className="font-bold text-lg">On the web</p>
          <Divider className="my-2" />
          <div>
            <Link
              href="https://github.com/brendalf"
              color="secondary"
              isExternal
            >
              <div className="flex flex-row">
                <p>
                  <FontAwesomeIcon icon={faGithub} />
                </p>
                <p className="ml-2">brendalf</p>
              </div>
            </Link>
          </div>
          <div className="mt-1">
            <Link
              href="https://instagram.com/obrendalf"
              color="secondary"
              isExternal
            >
              <div className="flex flex-row">
                <p>
                  <FontAwesomeIcon icon={faInstagram} />
                </p>
                <p className="ml-2">obrendalf</p>
              </div>
            </Link>
          </div>
          <div className="mt-1">
            <Link
              href="https://linkedin.com/in/obrendalf"
              color="secondary"
              isExternal
            >
              <div className="flex flex-row">
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
                <p className="ml-2">obrendalf</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <VoxelScene></VoxelScene>
    </div>
  );
}
