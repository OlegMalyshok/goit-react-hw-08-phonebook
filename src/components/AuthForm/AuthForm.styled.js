import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Form = styled.form`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #ccc;
  border-radius: 10px;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  color: #3b3b3b;
`;

export const Input = styled.input`
  width: 90%;
  padding: 16px 16px;
  border: 1px solid silver;
  border-radius: 10px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-top: 8px;

  &:focus-within {
    border: 2px solid #198f27a3;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db; /* Змініть колір фону на потрібний вам */
  color: #fff; /* Змініть колір тексту на потрібний вам */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9; /* Колір фону при наведенні курсора */
  }

  /* Додаткові стилі, якщо потрібно */
  &.large {
    padding: 15px 30px;
    font-size: 18px;
  }

  &.small {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  margin-top: 24px;
  color: #008b8b;
`;

export const Link = styled(NavLink)`
  color: #0043ff;
  &:hover {
    color: #008b8b;
  }
`;
