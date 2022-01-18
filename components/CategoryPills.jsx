import styled from 'styled-components'
import PillButton from './PillButton'

const colors = {
  vegetarian: {
    text: '#0b4727',
    bg: '#d0ecdd',
  },
  quick: {
    text: '#154677',
    bg: '#c6dff9',
  },
  beef: {
    text: '#8f027c',
    bg: '#fee7fe',
  },
  baking: {
    text: '#432f7e',
    bg: '#dad1f5',
  },
  healthy: {
    text: '#a03800',
    bg: '#f9e1cd',
  },
  seafood: {
    text: '#015153',
    bg: '#c5f1f3',
  },
  spicy: {
    text: '#711617',
    bg: '#fae0e0',
  },
  chicken: {
    text: '#5a4a02',
    bg: '#fef3bc',
  },
  egg: {
    text: '#4f400c',
    bg: '#e8e5da',
  },
  rice: {
    text: '#01156d',
    bg: '#d5ddfe',
  },
  sweet: {
    text: '#9f1957',
    bg: '#feebf3',
  },
}

export default function CategoryPills() {
  return (
    <Wrapper>
      <Tagline>Top Categories</Tagline>
      <Categories>
        <PillButton src="/quick" color={colors.quick}>
          quick & easy
        </PillButton>
        <PillButton src="/vegetarian" color={colors.vegetarian}>
          vegetarian
        </PillButton>

        <PillButton src="/beef" color={colors.beef}>
          beef
        </PillButton>

        <PillButton src="/baking" color={colors.baking}>
          baking
        </PillButton>

        <PillButton src="/healthy" color={colors.healthy}>
          healthy
        </PillButton>

        <PillButton src="/seafood" color={colors.seafood}>
          seafood
        </PillButton>

        <PillButton src="/spicy" color={colors.spicy}>
          spicy
        </PillButton>

        <PillButton src="/chicken" color={colors.chicken}>
          chicken
        </PillButton>

        <PillButton src="/egg" color={colors.egg}>
          egg
        </PillButton>

        <PillButton src="/riceAndNoodles" color={colors.rice}>
          rice & noodles
        </PillButton>

        <PillButton src="/sweet" color={colors.sweet}>
          sweety sweet things
        </PillButton>
      </Categories>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 200px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 1rem;
  margin: 50px 0 10px 0;
  letter-spacing: 0.5px;
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  gap: 10px;
`
