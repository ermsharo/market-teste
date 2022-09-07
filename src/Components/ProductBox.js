import styled from "styled-components";

const ProductBoxGrid = styled.div`
  width: 100%;
  display: grid;
  font-family: "Poppins", sans-serif;

  grid-template-columns: 90px 1fr;
`;

const ProductCover = styled.div`
  border: 2px solid #d6d6d6;
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: auto;
  }
`;

const ProductInfo = styled.div`
  padding: 16px 20px;
  width: 100%;
`;

const ProductInfoTitle = styled.div`
  font-size: 13px;
  font-weight: bolder;
  line-height: 22px;
`;

const ProductInfoOldPrice = styled.div`
  font-size: 10px;
  color: #d6d6d6;
  font-weight: bolder;
`;

const ProductInfoNewPrice = styled.div`
  font-size: 12px;
  font-weight: bolder;
`;

export default function ProductBox({ coverImage, title, oldPrice, newPrice }) {
  return (
    <ProductBoxGrid>
      <ProductCover>
        <img src={coverImage} />
      </ProductCover>
      <ProductInfo>
        <ProductInfoTitle>{title}</ProductInfoTitle>
        <ProductInfoOldPrice>{oldPrice}</ProductInfoOldPrice>
        <ProductInfoNewPrice>{newPrice}</ProductInfoNewPrice>
      </ProductInfo>
    </ProductBoxGrid>
  );
}
