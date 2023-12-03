import { Card, CardBody, Spacer } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Spacer y={2} />
      <div className="flex justify-center">
        <Card className="w-max">
          <CardBody>
            <p className="font-thin text-sm sm:mx-8 mx-0">
              Hello, I am a Brazillian Software Engineer living in the
              Netherlands!
            </p>
          </CardBody>
        </Card>
      </div>
      <Spacer y={4} />
      <h1>Breno Silva</h1>
    </div>
  );
}
