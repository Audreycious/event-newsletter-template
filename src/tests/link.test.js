import React from 'react'
import { LinkComp } from '../components/link';
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'


describe('LinkComp', () => {
  const path = '/home-page'
  const style = {
    width: '10px'
  }

  it('should render child component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
          <LinkComp
          linkStyle={style}
          linkPath={path}
        >
          <h4 data-testid="child">
            LinkComp works
          </h4>
        </LinkComp>
      </MemoryRouter>
    )
    const result = getByTestId('child');
    expect(result.innerHTML).toEqual('LinkComp works')
  })

  it('should pass style as props',() => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LinkComp 
            data-testid="link-width" 
            linkStyle={style}
            to={path}
          >
            LinkComp works
          </LinkComp>
      </MemoryRouter>
    )
    const result = getByTestId('link-width');
    expect(result.getAttribute('style')).toEqual('width: 10px;')
  })

  it('should have the correct path', () => {
    const wrapper = shallow(<LinkComp linkPath={path} linkStyle={style} >Hello</LinkComp>)
    
    expect(wrapper.props().to).toEqual('/home-page')
  });
  
})
