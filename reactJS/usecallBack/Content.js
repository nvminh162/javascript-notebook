import { memo } from "react";

function Content({ onIncrease }) {
    console.log('re-render');
    
    return (
        <div>
            <h1>Hello, world</h1>
            <button onClick={onIncrease}>Push</button>
        </div>
    )
}

export default memo(Content)