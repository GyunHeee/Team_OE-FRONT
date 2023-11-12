import React, { useState } from 'react';
import styles from './PostListView.module.css';

export default function PostListView() {
  const [isHot, setIsHot] = useState(false);
  const [isRecommend, setIsRecommend] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.banner__container}>
        <p className={styles.banner__hot}>🔥 HOT</p>
        <p className={styles.banner__title}>광화문 우크라이나 시위</p>
      </div>
      <div className={styles.filter__box}>
        <button
          className={`${styles.unChecked} ${!isHot ? styles.checked : ''}`}
          onClick={() => setIsHot(false)}
        >
          전체
        </button>
        <button
          className={`${styles.unChecked} ${isHot ? styles.checked : ''}`}
          onClick={() => setIsHot(true)}
        >
          HOT
        </button>
      </div>
      <div className={styles.timeSort__box}>
        <div>
          <button
            className={`${styles.unRecommended} ${
              isRecommend ? styles.recommended : ''
            }`}
            onClick={() => setIsRecommend(true)}
          >
            추천순
          </button>
          <button
            className={`${styles.unRecommended} ${
              !isRecommend ? styles.recommended : ''
            }`}
            onClick={() => setIsRecommend(false)}
          >
            최신순
          </button>
        </div>
        <div className="selectContainer">
          <select name="" id="">
            <option value="전체" disabled selected>
              전체
            </option>
            <option value="자연재해">자연재해</option>
            <option value="시위">시위</option>
            <option value="축제">축제</option>
          </select>
        </div>
      </div>
      <div className={styles.post__container}>
        <div>
          <p className={styles.post__title}>광화문 우크라이나 시위</p>
          <p className={styles.postInfo}>3시간전 조회수 732910회</p>
          <div className={styles.postInfo__container}>
            <div className={styles.like__container}>
              <div className={styles.postLike}></div>
              <p className={styles.likeCnt}>7,221개</p>
            </div>
            <div className={styles.comment__container}>
              <div className={styles.commentIcon}></div>
              <p className={styles.commentCnt}>4,413개</p>
            </div>
          </div>
        </div>
        <div className={styles.postImg}></div>
      </div>
    </div>
  );
}
