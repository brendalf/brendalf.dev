import { faChevronRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Divider, Link, Spacer } from "@nextui-org/react";
import { History } from "@/app/ui/history";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/app/config/site";

export default function Home() {
  return (
    <div>
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
          Hello! I&apos;m Breno, a Software Engineer seasoned in Web
          Development, DevOps, Python, and Machine Learning Engineering.
          Constantly trying to improve my developer skills by learning how
          things work in the background. I use Neovim with TMUX and I like typed
          languages like Golang and Rust.
        </p>
        <p className="font-light leading-6 mt-2 text-sm text-justify">
          Currently residing in the Netherlands, my roots are in Brazil. My
          diverse experiences also include serving as a police officer for five
          years, where I launched &quot;InfrAÇÕES&quot;, a mobile application
          with over 100k active users that aims to make traffic law accessible
          to everyone.
        </p>
        <p className="font-light leading-6 mt-2 text-sm text-justify">
          My nickname comes from a college joke combining Breno + Gandalf.
          I&apos;m a lifelong learner, my journey in coding began at the age of
          11 and continues passionately to this day.
        </p>
        <Spacer y={4} />
        <div className="flex justify-center">
          <Link href="/cv-breno-silva.pdf" isExternal>
            <Button variant="ghost" color="secondary">
              Download CV <FontAwesomeIcon icon={faDownload} />
            </Button>
          </Link>
          <Spacer />
          {/* <Link href="/works"> */}
          {/*   <Button color="secondary"> */}
          {/*     Portifolio <FontAwesomeIcon icon={faChevronRight} /> */}
          {/*   </Button> */}
          {/* </Link> */}
        </div>
      </div>

      <Spacer y={4} />

      {/* Bio */}
      <div>
        <p className="font-bold text-lg">Bio</p>
        <Divider className="my-2" />
        {siteConfig.home.bio.map((bioItem, idx) => (
          <History
            key={`home-bio-${idx}`}
            year={bioItem.year}
            desc={bioItem.description}
          />
        ))}
      </div>

      <Spacer y={6} />

      {/* I love */}
      <div>
        <p className="font-bold text-lg">I love</p>
        <Divider className="my-2" />
        <p className="text-gray-300 font-light text-sm">
          {siteConfig.home.love}
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
