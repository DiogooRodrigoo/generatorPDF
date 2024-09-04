import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2rem;
  width: 470px;
  background: linear-gradient(
    180deg,
    rgba(105, 105, 105, 1) 11%,
    rgba(121, 121, 121, 1) 35%,
    rgba(160, 160, 160, 1) 69%
  );

  border-radius: 8px;
  padding: 25px 30px;
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 30px;
  margin: 5px 0 15px 0;
  font-size: 1rem;
  font-weight: 320;
  padding: 15px;
  border-radius: 5px;
  border-color: #434141;

  outline: none;
  resize: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 59px;
  font-weight: 320;
  font-size: 1rem;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
  border-color: #434141;
  outline: none;
  resize: none;
`;

export const LabelInputs = styled.h2`
  font-size: 1rem;
  color: #fff;
  font-weight: 300;
`;

export const InputImage = styled.input`
  margin-top: 10px;
  background-color: #434141;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ViewPDF = styled.div`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const LabelViewPDF = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
`;

export const ButtonPDF = styled.button`
  margin-top: 15px;
  margin-left: 25%;
  width: 50%;
  background-color: #434141;
  padding: 10px 45px;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const LabelButtonPDF = styled.p`
  color: #fff;
  font-weight: 500;
`;
