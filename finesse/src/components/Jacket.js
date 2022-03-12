
import { jackets } from "./data"
import CategoryItem from "./CategoryItem"


export default function Jacket (data) {
    return (
        <div>
              <h1>Jackets</h1>
        <Container>
        {jackets.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))} 
        </Container>
        </div>
  )
    }
  
