// CustomButton.js

import React from 'react';

// CustomButton 컴포넌트
function CustomButton(props) {
  return <button className="custom-button" onClick={props.onClick}>{props.children}</button>;
}


export default CustomButton;
