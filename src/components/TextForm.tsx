import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskState } from "../atoms/atom";

const TextForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const setTasks = useSetRecoilState(taskState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAdd = () => {
    setNumber(number + 1);
    setTasks((t) => [...t, { id: number, title, completed: false }]);
    setTitle("");
  };

  return (
    <div>
      <input type="text" value={title} onChange={onChange} />
      <button onClick={onAdd}>登録</button>
    </div>
  );
};

export default TextForm;
