import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import {auth} from '../../firebase/firebase.utils'
import {selectCartHidden} from '../../redux/cart/cartSelectors'
import {selectCurrentUser} from '../../redux/user/user.selector'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles'
import './header.styles.scss'

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink as='div' to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink as='div' to='/shop'>
        CONTACT
      </OptionLink>

      {currentUser ? (
        <OptionLink onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
