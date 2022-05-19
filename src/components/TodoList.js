import React from "react";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItems text="극락 프로젝트" done={true} />
      <TodoItems text="컴포넌트 스타일링" done={true} />
      <TodoItems text="Context 만들기" done={false} />
      <TodoItems text="기능 구현" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
