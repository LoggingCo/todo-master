import { flexAlignCenter, flexCenter, ModalBackground } from 'styles/common';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import useInput from 'hooks/useInput';

function TodoFormModal({ onCloseFormModal, onAddTodo }) {
  const [title, onChnageTitle] = useInput('');
  const [content, onChangeContent] = useInput('');

  const showToastMessage = (e) => {
    e.preventDefault();
    toast.promise(onAddTodo(title, content), {
      pending: 'TODO LOADING',
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    });
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={showToastMessage}>
        <S.Title>
          <span>ADD TODO LIST</span>
          <button type="button" onClick={onCloseFormModal}>
            X
          </button>
        </S.Title>
        <S.Content>
          <input placeholder="제목을 입력해주세요" value={title} onChange={onChnageTitle} />
          <textarea
            placeholder="할 일 내용을 입력해주세요"
            value={content}
            onChange={onChangeContent}
          ></textarea>
        </S.Content>
        <S.Button>ADD</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
export default TodoFormModal;

const Wrapper = styled.div`
  ${ModalBackground};
  z-index: 1000;
`;

const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

const Title = styled.div`
  font-size: 24px;
  ${flexAlignCenter};
  justify-content: space-between;

  & > button {
    border: none;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  ${flexCenter};
  margin-top: 16px;
  flex-direction: column;

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    width: 100%;
    height: 200px;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;

const Button = styled.button`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontColor};
  margin: 0 auto;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.primary[300]};
  }
`;

const S = {
  Wrapper,
  Form,
  Content,
  Title,
  Button,
};
