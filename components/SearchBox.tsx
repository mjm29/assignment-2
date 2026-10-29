/**
 * Author: Alexandru Josu
 * Date: 10-28-2026
 * Description:
 * - This component is a text box that lets the user search the student list by name.
 * - Inputs: The current search text (value) and a callback (onChange) that receives the new text.
 * - Processing: Every keystroke passes the new text up to StudentPortal. This component holds
 *               no state of its own, so the input is controlled by the parent's state.
 * - Output: A labelled text input. StudentPortal does the actual filtering.
 */
"use client";

interface SearchBoxProps {
  value: string;
  onChange: (text: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      <label htmlFor="search" className="text-white font-medium">
        Search students
      </label>
      {/* Controlled input: value comes from the parent, typing sends the new text back up */}
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a name..."
        className="w-full rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400 border border-zinc-600 px-4 py-2 focus:outline-none focus:border-blue-300"
      />
    </div>
  );
};

export default SearchBox;
