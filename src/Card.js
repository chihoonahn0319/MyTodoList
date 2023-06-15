// Card.js

import React from 'react';
import CustomButton from './CustomButton';

function Card(props) {
  const { card, handleDelete, toggleComplete } = props;
  const { id, title, content, isComplete } = card;
  return (
    <div className={`user-card ${isComplete ? 'complete' : ''}`}>
      <div className="card-title">{title}</div>
      <div>{content}</div>
      <div className="card-buttons">
        <CustomButton onClick={() => handleDelete(id)}>삭제</CustomButton>
        <CustomButton onClick={() => toggleComplete(id)}>
          {isComplete ? '앗 생각해보니까 아닌거같다롱' : '완료'}
        </CustomButton>
      </div>
    </div>
  );
}

export default Card;
