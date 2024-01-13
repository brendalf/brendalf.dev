import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Divider, Link, Spacer } from "@nextui-org/react";
import { History } from "./ui/history";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto">
      {/* Profile */}
      <div className="flex flex-row pb-6">
        <Avatar
          isBordered
          className="w-24 h-24 text-large"
          alt="Profile Picture"
          src="/brendalf.png"
        />
        <div className="ml-6 mt-2">
          <h1 className="text-4xl font-bold">Breno Silva</h1>
          <p className="font-thin mt-2">Senior Software Engineer</p>
        </div>
      </div>

      <Spacer y={6} />

      {/* Work */}
      <div>
        <p className="font-bold text-lg">Work</p>
        <Divider className="my-2" />
        <p className="text-gray-300 font-light text-sm">
          Hello! I'm Breno, a Software Engineer specializing in Web Development
          and Machine Learning. Currently residing in Utrecht, the Netherlands,
          my roots are in Alegre, Brazil. I'm proud to have launched
          'InfrAÇÕES', a mobile app that garnered over 100k users. My diverse
          experiences also include serving as a police officer for five years. A
          lifelong learner, my journey in coding began at the age of 11 and
          continues passionately to this day.
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

      {/* Bio */}
      <div>
        <p className="font-bold text-lg">Bio</p>
        <Divider className="my-2" />
        <History year="1995" desc="Born in Alegre, ES. Brazil." />
        <History year="2006" desc="Wrote my first C++ program." />
        <History
          year="2012"
          desc="Started a Bachelor's in Computer Science at UFES (Completed in 2021)."
        />
        <History year="2014" desc="Become a Police Officer (Left on 2019)." />
        <History
          year="2015"
          desc="Launched InfrAÇÕES, reaching 100k users in a couple of months."
        />
        <History
          year="2015"
          desc="Started my own consultant company (NerdES) with focus on early-stage startups."
        />
        <History year="2019" desc="Worked as a Software Engineer at IBM." />
        <History
          year="2020"
          desc="Worked as a Data Scientist at Itaú Unibanco."
        />
        <History
          year="2021"
          desc="Worked as a Machine Learning Engineer at Wildlife Studios."
        />
        <History
          year="2022"
          desc="Moved to the Netherlands and started working as a Software Engineer at Bol.com"
        />
      </div>

      <Spacer y={6} />

      {/* I love */}
      <div>
        <p className="font-bold text-lg">I love</p>
        <Divider className="my-2" />
        <p className="text-gray-300 font-light text-sm">
          Family, Coding, Sci-Fi, Music, Drawing, Games, Politcs, and Machine
          Learning.
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
