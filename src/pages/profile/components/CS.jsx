import styled from 'styled-components';

const Hr = styled.div`
  width: 450px;
  height: 0;
  border: 1px solid #eeeeee;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  margin-left: 15px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 16px;
`;

export default function CS() {
  return (
    <>
      <Hr />

      <ItemContainer>
        <div>공지사항</div>
        <button>
          <img src="/icons/btn_enter.svg" alt="들어가기" />
        </button>
      </ItemContainer>
      <ItemContainer>
        <div>문의하기</div>
        <button>
          <img src="/icons/btn_enter.svg" alt="들어가기" />
        </button>
      </ItemContainer>
      <ItemContainer>
        <div>이용약관</div>
        <button>
          <img src="/icons/btn_enter.svg" alt="들어가기" />
        </button>
      </ItemContainer>
      <ItemContainer>
        <div>버전정보</div>
        <button>
          <img src="/icons/btn_enter.svg" alt="들어가기" />
        </button>
      </ItemContainer>
    </>
  );
}
