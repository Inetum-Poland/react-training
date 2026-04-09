import { useState } from "react";

interface UserStateWidgetProps {
  state: {
    name: string;
    email: string;
    age: number;
  };
  onUpdateName: (name: string) => void;
  onUpdateEmail: (email: string) => void;
  onUpdateAge: (age: number) => void;
}

export default function UserStateWidget({
  state,
  onUpdateName,
  onUpdateEmail,
  onUpdateAge,
}: UserStateWidgetProps) {
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [age, setAge] = useState(state.age.toString());

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">User State Widget</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            type="number"
            value={age}
            min={0}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between gap-2 mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          onClick={() => onUpdateName(name)}>
          Update Name
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
          onClick={() => onUpdateEmail(email)}>
          Update Email
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition"
          onClick={() => onUpdateAge(Number(age))}>
          Update Age
        </button>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <div className="font-semibold mb-2">Current User State:</div>
        <div>
          <span className="font-medium">Name:</span> {state.name}
        </div>
        <div>
          <span className="font-medium">Email:</span> {state.email}
        </div>
        <div>
          <span className="font-medium">Age:</span> {state.age}
        </div>
      </div>
    </div>
  );
}
