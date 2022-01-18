import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function DessertRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Dessert Recipes"
        intro="Stressed is dessert spelled backwards! Let's enjoy some sweetness in
          life here!"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/cornMuffin.jpg"
          name="super healthy corn muffins"
        />
      </RecipeGrid>
    </>
  )
}
