import styled from "styled-components";
import { GetProductsList } from "./../Services/RequestProducts";
import ProductBox from "./ProductBox";
import TotalPrice from "./TotalPrice";
const Header = styled.header`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid #d6d6d6;
`;

const ProductBoxList = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  flex-direction: column;
  gap: 16px;
  padding-top: 14px;
`;

const SendButton = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  cursor: pointer;
  outline: inherit;

  background-color: #5d82ef;
  font-weight: bolder;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  padding: 12px 20px;
`;

const SendButtonBox = styled.div`
  padding: 20px;
  margin: auto;
`;

export default function Board() {
  const { data, isLoading, isError } = GetProductsList(
    "https://ermsharo.github.io/market-api/abaixo.json?utm_source=pocket_mylist"
  );

  if (data) {
    console.log("Data", data);
    return (
      <div>
        <Header>Meu carrinho</Header>
        <ProductBoxList>
          <ProductBox
            coverImage="https://www.produitsdubresil.com/media/catalog/product/cache/e1541152f832dbe3ea6071dfdacdd812/8/0/807.jpg"
            title="Trufa de morango"
            oldPrice="R$ 1,23"
            newPrice="R$ 1,11"
          />
          <ProductBox
            coverImage="https://www.produitsdubresil.com/media/catalog/product/cache/e1541152f832dbe3ea6071dfdacdd812/8/0/807.jpg"
            title="Trufa de morango"
            oldPrice="R$ 1,23"
            newPrice="R$ 1,11"
          />
          <ProductBox
            coverImage="https://www.produitsdubresil.com/media/catalog/product/cache/e1541152f832dbe3ea6071dfdacdd812/8/0/807.jpg"
            title="Trufa de morango"
            oldPrice="R$ 1,23"
            newPrice="R$ 1,11"
          />
        </ProductBoxList>

        <TotalPrice totalPrice="10,20" />
        <SendButtonBox>
          <SendButton>Finalizar compra</SendButton>
        </SendButtonBox>
      </div>
    );
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }
}
