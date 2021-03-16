import styled from '@emotion/styled'

const buttonVariants = {
  primary: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#f1f2f7',
    color: '#434449',
  },
}

const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({variant = 'primary'}) => buttonVariants[variant],
)

export {Button}
