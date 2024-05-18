import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Divider, Link, Spacer } from "@nextui-org/react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="max-w-xl lg:mt-8 lg:mr-10">
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
          DevOps, and Machine Learning. I enjoy delivering value to the company,
          getting things done, contributing to the team work happiness,
          refactoring old codebases (when needed), defining strategic visions
          and managing tech debt.
        </p>
        <p className="font-light leading-6 mt-2 text-sm text-justify">
          I&apos;m committed to ongoing development. My current side projects
          include a programming language interpreter in Golang, Neovim plugins,
          and a Rust application to generate statistics from git repositories.
        </p>
        <p className="font-light leading-6 mt-2 text-sm text-justify">
          Fun facts: (a) I worked five years as a police officer back in Brazil,
          during which I developed InfrAÇÕES, a traffic law application with
          over 100,000 users; (b) Brendalf comes from a college joke combining
          Breno + Gandalf.
        </p>
        <Spacer y={4} />
        <div className="flex justify-center">
          <Link href="/works">
            <Button color="secondary">
              Portifolio <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Link>
        </div>
      </div>

      <Spacer y={4} />

      {/* I love */}
      <div>
        <p className="font-bold text-lg">I love</p>
        <Divider className="my-2" />
        <p className="text-gray-300 font-light text-sm">
          Family, Coding, Reading,{" "}
          <Link href="/recipes" color="secondary">
            Cooking
          </Link>
          , Music,{" "}
          <Link href="/arts" color="secondary">
            Drawing
          </Link>
          , Games, and Machine Learning.
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
            target="_blank"
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
            target="_blank"
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
            target="_blank"
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
  );
}
