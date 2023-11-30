import React, { useState } from 'react';
import styles from './AddPostView.module.css';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

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

  background-color: white;
  border-bottom: 1px solid #eeeeee;

  &:hover {
    background-color: #eeeeee;
  }
`;

export default function AddPostView() {
  const categories = ['자연재해', '시위', '축제'];
  const [selectedCategory, setSelectedCategory] = useState('카테고리');
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');

  const [showPostcode, setShowPostcode] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePostcode = (e) => {
    e.preventDefault();
    setShowPostcode(!showPostcode);
  };

  const handleCompletePost = (data) => {
    console.log(data);
    setAddress(data.zonecode + '_' + data.address);
    console.log(address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO 게시글 작성 api 처리
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input className={styles.title} type="text" placeholder="제목" />

      <div className={styles.postCode__container}>
        <input
          className={styles.position}
          type="text"
          placeholder="주소찾기를 눌러주세요."
          value={address}
        />
        <button
          type="button"
          onClick={handlePostcode}
          className={styles.address__btn}
        >
          주소찾기
        </button>
      </div>
      {showPostcode && (
        <DaumPostcode
          className={styles.postCode}
          onComplete={handleCompletePost}
        ></DaumPostcode>
      )}
      <textarea
        className={styles.content}
        placeholder="내용 작성"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className={styles.etcContainer}>
        <input className={styles.tag} type="text" placeholder="필수 태그" />
        <div className={styles.category}>
          <div className={styles.curCategory} onClick={handleDropdownToggle}>
            {selectedCategory} ⌃
          </div>
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
      <button className={styles.submitBtn} type="submit">
        올리기
      </button>
    </form>
  );
}
