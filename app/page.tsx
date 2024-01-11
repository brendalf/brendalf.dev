import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Divider, Link, Spacer } from "@nextui-org/react";

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

      <Spacer y={4} />

      {/* Work */}
      <div>
        <h2>Work</h2>
        <Divider className="my-2" />
        <p className="font-thin text-small">
          Borned in the country side of Brazil (Alegre, ES)...
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
        <h2>Bio</h2>
        <Divider className="my-2" />
        <p className="font-thin text-small">
          <span className="font-bold">1995</span> - Born in Alegre, ES. Brazil.
        </p>
      </div>
    </div>
  );
}
