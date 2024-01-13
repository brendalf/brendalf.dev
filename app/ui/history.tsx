interface HistoryProps {
  year: string;
  desc: string;
}

export const History = (props: HistoryProps) => (
  <div className="flex flex-row font-light text-sm mt-1">
    <p className="text-white font-bold mr-4 w-9">{props.year}</p>
    <p className="text-gray-300">{props.desc}</p>
  </div>
);
