import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function EmojiInput({ onChange }) {
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    const updated = text + emojiData.emoji;
    setText(updated);
    onChange(updated);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => {
        setText(e.target.value);
        onChange(e.target.value);
      }} />
      <button onClick={() => setShowPicker(!showPicker)}>😊</button>
      {showPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
}
