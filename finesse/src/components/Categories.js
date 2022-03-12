import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";


const Container3 = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-between;
    position:relative;
`;

const Categories = () => {
    return (
        <Container3>
        {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))} 
        </Container3>
    );
};

export default Categories;