import React from 'react';
import styles from './SearchView.module.css';

export default function SearchView() {
  return (
    <section>
      <header>
        <img src="/icons/back.png" alt="뒤로가기버튼" />
        <div className={styles.search__container}>
          <input className={styles.search__input} type="text" />
          <img
            className={styles.search__btn}
            src="/icons/Search.png"
            alt="돋보기버튼"
          />
        </div>
      </header>

      <div className={styles.search__box}>
        <h2>최근검색</h2>
        <p className={styles.deleteAll}>전체 삭제</p>
      </div>
      <div className={styles.history}>
        <p className={styles.noSearch}>최근 검색 기록이 없습니다.</p>
      </div>
      <div className={styles.ranking__container}>
        <h2>인기태그</h2>
        <ul>
          <li>1. 러시아시위</li>
          <li>2. 집중 호우</li>
          <li>3. 아이스링크 개장</li>
          <li>4. 코로나</li>
          <li>5. 촛불집회</li>
        </ul>
      </div>
    </section>
  );
}
