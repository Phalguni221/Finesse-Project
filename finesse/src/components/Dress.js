import styled from "styled-components";
import { dress } from "../data";
import CategoryItem from "./CategoryItem";
import DressAPI from "../API/DressAPI"

const Container = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-between;
    position:relative;
`;

export default function Dress () {
    return (
        <Container>
        {dress.map((item) => (
            <DressAPI item={item} key={item.id} />
          ))} 
        </Container>
    );
};

