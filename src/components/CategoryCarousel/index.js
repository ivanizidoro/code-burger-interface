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
      <Carousel itemsToShow={4}>
        {
          categories && categories.map(category => (
            <Carousels key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </Carousels>
          ))
        }
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel