import React from 'react';
import styled from 'styled-components';

const DisplayedTask = (props: { task: string }) => {
  const { task } = props;

  const DisplayedTaskWrapper = styled.div`
    margin-bottom: 2rem;
    .text {
      text-align: center;
      margin: 0;
    }
    .header {
      font-size: 1.8rem;
    }
    .task {
      font-size: 2.6rem;
    }
  `;

  return (
    <DisplayedTaskWrapper>
      <p className="text header">Next task will be</p>
      <p className="text task">{task}</p>
    </DisplayedTaskWrapper>
  );
};

export default DisplayedTask;
