import { useState } from 'react';
// import { marked } from 'marked';
import Markdown from "marked-react";



export default function Form() {
  const [form, setForm] = useState("");

  // const MarkdownComponent = () => {
  //   return <Markdown>{form}</Markdown>;
  // }

  return (
    <div>
      <label>
        text:
        <textarea
          value={form}
          onChange={e => {
            setForm((e.target.value));
          }} 
        />
      </label>
      <p>
      <Markdown>{form}</Markdown>
      </p>
    </div>
  );
}
