import { useContext, useEffect, useState, useRef  } from 'react';
import { StoreContext } from '../../utils/context';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FlexBox, Container } from '../styles/layouts';
import AppBar from '@mui/material/AppBar';
import { Typography, styled } from '@mui/material';
import CustomerMenu from '../customer/CustomerMenu';

import SearchIcon from '@mui/icons-material/Search';
import {
  Paper,
  InputBase,
  IconButton,
  Tooltip
} from '@mui/material';

const AppTitle = styled(Typography)`
  font-family: monospace;
  font-size: 2.2rem;
  font-weight: 600;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({theme}) => theme.breakpoints.down("sm")} {
    padding-right: 0.25rem;
    padding-left: 0.25rem;
  }
`

const SearchBar = styled(Paper)`
  width: 400px;
  height: 5vh;
  border-radius: 20px;
  display: flex;
  margin: auto 0 auto 0;
`

const TastyTreatsAppBar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const searchTitle = useRef('')

  const context = useContext(StoreContext);  
  const [address, setAddress] = context.address;
  const [storesList, setStoresList] = context.storesList;
  const [allStoresList, setAllStoresList] = context.allStoresList;
  const [customer, setCustomer] = context.customer;
  const [loggedIn, setLoggedIn] = context.login;
  const [open, setOpen] = context.logInModal;
  const [loginOrSignup, setLoginOrSignup] = context.loginOrSignup;
  const [fromCheckout, setFromCheckout] = context.fromCheckout;

  let toSearch = null

  const openLoginModal = () => {
    setLoginOrSignup(false);
    setOpen(true);
    setFromCheckout(false)
  }

  const toFirstPage = () => {    
    navigate('/'); 
  }

  const checkForTypes = (store) => {
    for (let i=0; i<store.types.length; i++)
      for (let j=0; j<toSearch.length; j++)
        if (store.types[i].toLowerCase().includes(toSearch[j])) {
          return true
        }      
    return false
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //console.log(searchTitle?.current?.value)
    toSearch = searchTitle.current.value
    toSearch = toSearch.trim().toLowerCase()
    while (toSearch.includes('  ')) {
      toSearch = toSearch.replaceAll('  ', ' ')
    }
    //toSearch = toSearch.replaceAll('  ', ' ')
    toSearch = toSearch.split(' ')
    console.log(toSearch)

    let currentStores = allStoresList
    currentStores = currentStores.filter(checkForTypes)
    console.log(currentStores)
    setStoresList(currentStores)
    searchTitle.current.value = ''
  }

  const toHomePage = () => {    
    address?.addr1.length > 0 ? navigate('/home') : navigate('/');
  }

  return (
    <AppBar id='appbar' position="static" sx={{ backgroundColor: 'tastytreats.mediumBlue', minHeight: '7vh', pl:0 }}>

      <FlexBox justify='space-between' sx={{ mt:'auto', mb:'auto'}}>
        <FlexBox>
          <AppTitle variant="h4"  sx={{ mt:'auto', mb:'auto', ml:'20px', p:'0', cursor: 'pointer'}}
          onClick={toHomePage}
          >
            TastyTreats
          </AppTitle>
          {address &&
          <FlexBox sx={{ m:'auto 1rem auto 1rem', p:'0.4rem 1.5rem 0.4rem 1.5rem',
            backgroundColor: 'white', color: 'black', maxWidth:'30vw',
            borderRadius: '30px', cursor: 'pointer', '&:hover': {backgroundColor: '#C8C8C8'} }}
            id='userAddress' onClick={toFirstPage} >       
            {address.addr1.split(',')[0]}
          </FlexBox>
          }
        </FlexBox>

        {location.pathname === '/home' &&
        <SearchBar component="form" onSubmit={handleSubmit}>
          <InputBase
            inputRef={searchTitle}
            autoComplete='off'
            id='SearchBar'
            sx={{ ml: 1.5, flex: 1 }}
            placeholder="Search for Restaurants"
          />
          <Tooltip title="Search restaurant" enterDelay={10}>
            <IconButton type="submit" aria-label="search" >
              <SearchIcon
                id='searchIcon'
                aria-label="search-submit"
                aria-describedby="submits search query when clicked"
              />
            </IconButton>
          </Tooltip>
        </SearchBar>
        }
        
        <FlexBox>
          {!loggedIn &&
          <FlexBox sx={{ mt:'auto', mb:'auto', ml:'1rem', mr:'1rem', pl:'1rem', pr:'1rem',
            borderRadius: '30px', cursor: 'pointer', '&:hover': {backgroundColor: '#2486DB'} }}
            onClick={openLoginModal} >
            <Typography variant='h6'>
              Login
            </Typography>
          </FlexBox>
          }
          {loggedIn &&
          <FlexBox>
            <Typography variant='h6' sx={{ mt:'auto', mb:'auto', mr:'1rem' }}>
             { customer.first_name? customer.first_name : '' }
            </Typography>
          </FlexBox>          
          }
          {loggedIn && <CustomerMenu/> }
        </FlexBox>          
      </FlexBox>
    </AppBar>
  );
};

export default TastyTreatsAppBar;