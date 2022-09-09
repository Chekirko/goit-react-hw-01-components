import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 240px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendsImg = styled.img`
  display: block;
  margin-right: 15px;
`;

export const FriendName = styled.p`
  font-size: 25px;
`;
