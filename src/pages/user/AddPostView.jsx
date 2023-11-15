import React, { useState } from 'react';
import styles from './AddPostView.module.css';
import styled from 'styled-components';

// const DropdownContainer = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const div = styled.button`
//   font-family: Pretendard;
//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: -0.5px;
//   text-align: left;
//   padding: 0.5rem 0.8rem;
//   border: 1px solid #eeeeee;
//   border-radius: 10px 10px 0 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   min-width: 80px;
// `;

const DropdownContent = styled.ul`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
`;
const DropdownItem = styled.li`
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  font-family: Pretendard;

  letter-spacing: -0.5px;
  text-align: left;
  padding: 0.5rem 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 80px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export default function AddPostView() {
  const categories = ['자연재해', '시위', '축제'];
  const [selectedCategory, setSelectedCategory] = useState('카테고리');
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className={styles.container}>
      <input className={styles.title} type="text" placeholder="제목" />
      <input type="text" placeholder="위치설정" />
      <textarea
        className={styles.content}
        placeholder="내용 작성"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className={styles.etcContainer}>
        <p className={styles.tag}>필수 태그</p>
        <div className={styles.category}>
          <div onClick={handleDropdownToggle}>{selectedCategory} ⌃</div>
          <DropdownContent isOpen={isOpen}>
            {categories.map((category) => (
              <DropdownItem
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownContent>
        </div>
        <label className={styles.camera} for="input-file">
          사진 / 동영상 📷
        </label>
        <input type="file" id="input-file" accept="image/*;capture=camera" />
      </div>
      <button type="submit">올리기</button>
    </form>
  );
}
