import { Avatar, Card, CardBody, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="justify-center items-center">
      <Spacer y={2} />
      <div className="flex flex-col items-stretch justify-center sm:flex-row">
        <div className="flex flex-col mx-6">
          <Avatar
            isBordered
            className="w-32 h-32 text-large"
            alt="Profile Picture"
            src="/brendalf.png"
          />
          <h1 className="my-4 text-center">Breno Silva</h1>
        </div>
        <Card className="w-max">
          <CardBody>
            <p className="font-thin leading-7 text-center text-sm sm:mx-8 mx-0">
              Chillin&apos; in the Netherlands, Brazilian I am,
              <br />
              On a coding odyssey, with no written plan.
              <br />
              From policing the streets with brave untold.
              <br />
              Scripting new futures, bugs unfold.
              <br />
              <br />
              Workflow&apos;s my rhythm, quest&apos;s in my stride,
              <br />
              A software engineer, crafting worldwide.
              <br />
              Linux&apos;s command, terminal&apos;s swift dance,
              <br />
              Neovim and tmux, in symphonic trance.
              <br />
              <br />
              Distributed realms, where systems align,
              <br />
              Machine learning&apos;s secrets, forever enshrine.
              <br />
              Languages varied, my toolkit is prime,
              <br />
              Python, TypeScript, Rust, Go, all in rhyme.
              <br />
              <br />
              Tutorials unfurled on a personal domain,
              <br />
              Consolidating wisdom, knowledge to gain.
              <br />
              A GitHub story where my journey I pen,
              <br />
              Coding cool projects, free from restrain.
              <br />
              <br />
              Like the wizard who&apos;s punctual in tales of yore,
              <br />
              I arrive right on time, coding&apos;s secrets to explore.
              <br />
              So join me, dear wanderers, on this coding ride,
              <br />
              All of us united, no challenge denied.
            </p>
          </CardBody>
        </Card>
      </div>
      <Spacer y={4} />
    </div>
  );
}
