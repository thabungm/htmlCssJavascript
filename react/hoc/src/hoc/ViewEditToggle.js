import { useState } from 'react';
import WithToggle from './WithToggle';

const ViewEditToggle = ({ toggleStatus, setToggleStatus }) => {
  // const [toggleStatus, setToggleStatus] = useState(false);

  const title = 'Toggle demo';
  return (
    <div>
      <div>
        {toggleStatus ? <input value={title} /> : <label>{title}</label>}
      </div>
      <button onClick={() => setToggleStatus(!toggleStatus)}>Click</button>
    </div>
  );
};

export default WithToggle(ViewEditToggle);
