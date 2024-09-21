import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site";
import { CheckboxGroup, Checkbox, Link, Spacer } from "@nextui-org/react";
import { SectionTitle } from "@/app/ui/sectionTitle";

export const metadata: Metadata = {
  title: `${siteConfig.title} - Year Goals`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl">
      <SectionTitle
        title="Yearly Goals"
        path={["Home"]}
        subtitle="I like to make yearly goals."
      />
      {/* TODO: convert years into posts. */}
      <p className="font-bold text-xl">2024</p>
      <Spacer y={4} />
      <div className="text-gray-300 font-light text-sm">
        <CheckboxGroup
          label="Read"
          color="secondary"
          isReadOnly
          defaultValue={["potty-training", "democracies", "lotr-2", "lotr-3"]}
        >
          <Checkbox value="potty-training">
            <Link
              href="https://www.bol.com/nl/nl/f/the-gentle-potty-training-book/9200000074700299/"
              color="secondary"
              isExternal
            >
              The Gentle Potty Training Book
            </Link>
            <p className="text-sm text-gray-500">And train my daughter :)</p>
          </Checkbox>
          <Checkbox value="gentle-sleep">The Gentle Sleep Book</Checkbox>
          <Checkbox value="interpreter">
            <Link
              href="https://interpreterbook.com/"
              color="secondary"
              isExternal
            >
              Writing An Interpreter In Go
            </Link>
            <p className="text-sm text-gray-500">
              Code available here:{" "}
              <Link
                href="github.com/brendalf/gomonkey"
                color="danger"
                className="text-sm"
              >
                brendalf/gomonkey
              </Link>
            </p>
          </Checkbox>
          <Checkbox value="noise">Noise and signal</Checkbox>
          <Checkbox value="arch">Computer architectures</Checkbox>
          <Checkbox value="narnia">Narnia Chronicles</Checkbox>
          <Checkbox value="foundation-1">Foundation 1</Checkbox>
          <Checkbox value="foundation-2">Foundation 2</Checkbox>
          <Checkbox value="democracies">How democracies die</Checkbox>
          <Checkbox value="lotr-2">Lord of the Rings: The Two Towers</Checkbox>
          <Checkbox value="lotr-3">
            Lord of the Rings: The Return of the King
          </Checkbox>
        </CheckboxGroup>
        <Spacer y={4} />
        <CheckboxGroup
          label="Side Projects"
          color="secondary"
          isReadOnly
          defaultValue={[""]}
        >
          <Checkbox value="mushrooms">
            <Link href="/arts/mushroom-2024" color="secondary">
              Mushroom 2024 Challenge
            </Link>
          </Checkbox>
          <Checkbox value="website">Finish this website</Checkbox>
          <Checkbox value="poetry">Poetry.nvim</Checkbox>
        </CheckboxGroup>
        <Spacer y={4} />
        <CheckboxGroup
          label="Personal Development"
          color="secondary"
          isReadOnly
          defaultValue={["dutch-a1"]}
        >
          <Checkbox value="writing">
            Write 3 posts for my personal website.
          </Checkbox>
          <Checkbox value="dutch-a1">Complete Dutch Beginner Course</Checkbox>
          <Checkbox value="poetry">
            Complete Section 2 of Duolingo Dutch Course
          </Checkbox>
        </CheckboxGroup>
        <Spacer y={4} />
        <CheckboxGroup label="Fitness" isReadOnly defaultValue={[""]}>
          <Checkbox value="body-fat">
            Achieve 15% Body Fat
            <p className="text-sm text-gray-500">
              Start of the year: 19.2%. Current: 17.2%.
            </p>
          </Checkbox>
          <Checkbox value="half-marathon">
            Run Half Marathon
            <p className="text-sm text-gray-500">
              Registered for the Eindhoven Half Marathon in October.
            </p>
          </Checkbox>
          <Checkbox value="3km">
            Run 3km under 15 minutes
            <p className="text-sm text-gray-500">
              Start of the year: 16:40. Current best: 15:16.
            </p>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
}
