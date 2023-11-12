import React from 'react';
import styles from './PostView.module.css';

export default function PostView() {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <h1 className={styles.title}>광화문 우크라이나 시위</h1>
        <div>
          <p className={styles.post_info}>3시간전 조회수 732,910회</p>
        </div>
        <div className={styles.user__container}>
          <div className={styles.user__box}>
            <div className={styles.userImg}></div>
            <p className={styles.userName}>나라사랑</p>
          </div>
          <button className={styles.user__btn}>작성글 더보기 ></button>
        </div>
      </div>

      <img src="/mock/post.png" alt="" />
      <div className={styles.content__box}>
        <p>
          이날 일찍가야되는데 엄청 늦게생겼네요.. <br /> 늦어도 봐줬으면
          좋겠다..ㅠㅠㅠ
        </p>
        <div className={styles.like__container}>
          <div className={styles.likeBtn}></div>
          <div className={styles.like__box}>
            <p className={styles.likeText}>좋아요</p>
            <p className={styles.likeCnt}>7,211개</p>
          </div>
        </div>
      </div>
      <div className={styles.comment__container}>
        <div className={styles.comment__box}>
          <p className={styles.comment}>댓글</p>
          <p className={styles.commentCnt}>4,413개</p>
        </div>
        <div>
          <div className={styles.user__comment}>
            <div className={styles.userInfo}>
              <div className={styles.comment__img}></div>
              <div className={styles.userInfo__box}>
                <p className={styles.comment__name}>팩트폭행</p>
                <p className={styles.comment__content}>
                  이럴수가.. 출근길인데ㅠㅠ
                </p>
              </div>
            </div>
            <div className={styles.deleteBtn}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
