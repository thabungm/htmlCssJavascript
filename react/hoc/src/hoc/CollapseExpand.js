// import { useState } from 'react';

import WithToggle from './WithToggle';

const CollapseExpand = ({ toggleStatus, setToggleStatus }) => {
  const list = ['Eggs', 'Bread'];
  // const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div>
      {toggleStatus && list.map((item) => <div>{item}</div>)}
      <button onClick={() => setToggleStatus(!toggleStatus)}>
        Collapse/Expand
      </button>
    </div>
  );
};
const DecoratedCollapseExpand = WithToggle(CollapseExpand);
export default DecoratedCollapseExpand;
// export default CollapseExpand;
