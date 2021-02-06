import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
  padding: 20px;
`;

const Comment = ({ creator, content, timestamp }) => {

  return (
    <Container className="card">
      <div className="card-content">
        <p className="title is-4">{creator}</p>
        <p className="subtitle is-6">{relativeTime}</p>
        <p className="content">{content}</p>
      </div>
    </Container>
  );
};

export default Comment;