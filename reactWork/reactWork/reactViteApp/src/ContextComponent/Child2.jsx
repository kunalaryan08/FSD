import React, { useContext } from 'react'
import { mycontext } from '../AppContext';

function Child2() {
  const child2context=useContext(mycontext);
  return (
    <div>Child2
      <div>
     branch:{child2context.branch}
      </div>
    </div>
  )
}

export default Child2