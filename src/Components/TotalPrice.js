import styled from "styled-components";

const TotalPriceBox = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  padding: 24px 20px;
  margin-top: 14px;
`;
export default function TotalPrice({ totalPrice }) {
  return (
    <TotalPriceBox>
      <div>Total</div>
      <div>R$ {totalPrice}</div>
    </TotalPriceBox>
  );
}
