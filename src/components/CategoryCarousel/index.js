import React, { useEffect, useState } from "react";
import { Container, Carousels } from "./styles";
import api from "../../services/api";
import Carousel from "react-elastic-carousel"

function CategoryCarousel() {

  const [categories, setCategories] = useState([])
  useEffect(() => {

    async function loadCategories() {
      const { data } = await api.get("/categories")

      setCategories(data)
    }

    loadCategories()
  }, [])


  return (
    <Container>
      <h1>CATEGORIAS</h1>
      <Carousels>
        <Carousel itemsToShow={4}>
          {
            categories && categories.map(category => (
              <div key={category.id}>
                <img src={category.url} alt="foto da categoria"/>
                <h1>{category.name}</h1>
              </div>
            ))
          }
        </Carousel>
      </Carousels>
    </Container>
  )
}

export default CategoryCarousel