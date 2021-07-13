import styled from 'styled-components'
const colors = {
  vegetarian: {
    text: '#0d5a31',
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
    text: '#9b4b01',
    bg: '#f9e1cd',
  },
  seafood: {
    text: '#015153',
    bg: '#c5f1f3',
  },
  pork: {
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
    text: '#06196e',
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
        <Tag colorScheme={colors.vegetarian}>vegetarian</Tag>
        <Tag colorScheme={colors.quick}>quick & easy</Tag>
        <Tag colorScheme={colors.beef}>beef</Tag>
        <Tag colorScheme={colors.baking}>baking</Tag>
        <Tag colorScheme={colors.healthy}>healthy</Tag>
        <Tag colorScheme={colors.seafood}>seafood</Tag>
        <Tag colorScheme={colors.pork}>pork</Tag>
        <Tag colorScheme={colors.chicken}>chicken</Tag>
        <Tag colorScheme={colors.egg}>egg</Tag>
        <Tag colorScheme={colors.rice}>rice & noodles</Tag>
        <Tag colorScheme={colors.sweet}>sweety sweet things</Tag>
        {/* <h4 class="sidebar-rc-5">healthy</h4>
        <h4 class="sidebar-rc-6">seafood</h4>
        <h4 class="sidebar-rc-7">pork</h4>
        <h4 class="sidebar-rc-8">chicken</h4>
        <h4 class="sidebar-rc-9">egg</h4>
        <h4 class="sidebar-rc-10">rice & noodles</h4>
        <h4 class="sidebar-rc-11">sweety sweet things</h4> */}
      </Categories>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 150px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 0.9rem;
  margin: 40px 0 10px 0;
  letter-spacing: 0.5px;
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`

const Tag = styled.h4`
  font-family: 'Karla', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 6px;
  margin: 5px 5px 5px 0;
  border-radius: 3px;
  text-align: centers;
  color: ${(p) => p.colorScheme.text};
  background-color: ${(p) => p.colorScheme.bg};
`