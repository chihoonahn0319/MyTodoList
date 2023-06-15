import React, { useState } from 'react';
import './App.css';
import CustomButton from './CustomButton';
import Card from './Card';


// App 컴포넌트
const App = () => {
  // 상태 변수들
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'React 입문주차 살아남기 ',
      content: '도망친곳에 낙원은없다.',
      isComplete: false,
    },
    {
      id: 2,
      title: '늦었지만 개발자로 취업하기',
      content: '치타는 웃고있다.',
      isComplete: true,
    },
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 새로운 카드 추가하는 이벤트 핸들러
  const addCardHandler = () => {
    // 제목과 내용이 비어있는지 확인합니다.
    if (title.trim() === '' || content.trim() === '') {
      alert('빈칸이 있다롱!!');
      return;
    }
  
    const newCard = {
      id: Date.now(),
      title: title,
      content: content,
      isComplete: false,
    };
  
    setCards([newCard, ...cards]);
    setTitle('');
    setContent('');
  }

  // 카드 삭제하는 이벤트 핸들러
  const deleteCardHandler = (id) => {
    // 주어진 id를 가진 카드를 cards 배열에서 필터링하여 제외
    const newCardList = cards.filter((card) => card.id !== id);
    setCards(newCardList);
  };

  // 카드의 완료 여부를 토글하는 이벤트 핸들러
  const toggleCompleteHandler = (id) => {
    // 주어진 id를 가진 카드 찾기
    const completedCard = cards.find((card) => card.id === id);

    if (completedCard) {
      // 카드의 완료 상태를 토글
      completedCard.isComplete = !completedCard.isComplete;

      // cards 배열에서 해당 카드를 제거하고 업데이트된 카드를 다시 추가
      const updatedCards = cards.filter((card) => card.id !== id);
      setCards([...updatedCards, completedCard]);
    }
  };

  // workingCards와 doneCards로 카드를 필터링하여 나눔
  const workingCards = cards.filter((card) => !card.isComplete);
  const doneCards = cards.filter((card) => card.isComplete);

  return (
    <div className="app-container">
      <div className="header">
        <div>MY Todo List</div>
        <div>React</div>
      </div>
      <div className="box">
        {/* 제목 입력 */}
        <label className="title-label">제목</label>
        <input
          placeholder=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* 내용 입력 */}
        <label className="content-label">내용</label>
        <input
          placeholder=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {/* 카드 추가하기 버튼 */}
        <CustomButton onClick={addCardHandler}>추가하기</CustomButton>
      </div>
      <div className="working-title">Working🔥</div>
      <div className="card-container">
        {workingCards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleDelete={deleteCardHandler}
            toggleComplete={toggleCompleteHandler}
          />
        ))}
      </div>
      <div className="done-title">Done🎉</div>
      <div className="card-container">
        {doneCards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleDelete={deleteCardHandler}
            toggleComplete={toggleCompleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
