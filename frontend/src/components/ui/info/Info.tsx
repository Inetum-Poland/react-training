import { InfoIcon } from "lucide-react";

interface InfoProps {
  label: string;
}

export default function Info({ label }: InfoProps) {
  return (
    <div className="bg-red-500 p-2 rounded-md text-white flex">
      <InfoIcon className="mr-2"/>
      {label}
    </div>
  );
}
