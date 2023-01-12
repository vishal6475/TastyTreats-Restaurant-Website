import { useContext, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { StoreContext } from '../utils/context';
import { Grid, Card, CardMedia, CardContent, Typography, styled } from '@mui/material'
import StoresAPI from "../utils/StoresAPIHelper";
import Box from '@mui/material/Box';
import { FlexBox, Container } from '../components/styles/layouts';
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const storeAPI = new StoresAPI();

export const StyledCard = styled(Card)`
  width: 60vw;
  margin: 20px auto 0 auto;
  border: none;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled('h1')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  margin-bottom: -10px;
  margin-left: 1rem;
`

export const CardSummary = styled(Typography)`
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  `


const StoreMenuPage = () => {
  const { s_id } = useParams();
  const context = useContext(StoreContext);
  const [customer] = context.customer;
  const [store, setStore] = useState([]);
  const [storeTags, setStoreTags] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchStoreMenu()
  }, [])

  const fetchStoreMenu = async (event) => { 
    const storeMenuRes = await storeAPI.getStoreById(s_id)
    console.log(storeMenuRes.data)
    setStore(storeMenuRes.data)
    setStoreTags(storeMenuRes.data.types.join(', '))
  }


  return (
    <FlexBox >

      <FlexBox style={{ width:'70vw' }}>
        <StyledCard >
          <CardMedia
            component="img"
            height="250"
            image={store.photo}
          />
          <div style={{ display:'flex', justifyContent:'center' }}>
            <CardTitle>
              {store.name}
            </CardTitle>

          </div>
          <StyledCardContent>
            <Typography gutterBottom variant="h6" component="div" sx={{ mt: -1 }}>
              <b>{storeTags}</b>
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: -1, mt: -0.5  }}>
              {store.addr_1}
            </Typography>

            <Typography variant="subtitle2" color="text.primary" sx={{ mb: -1, mt: 4  }}>
              Opening hours: <b>{store.open} - {store.close}</b>
            </Typography>

            <Typography variant="subtitle2" color="text.primary" sx={{ mb: -1, mt: 1  }}>
              Delivery Fee: <b>${store.delivery_fee}</b> - 
              {store.min_order === 0 && ' No minimum order'}
              {store.min_order !== 0 && ' Min Order: '}<b>{'$'+store.min_order}</b>
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </FlexBox>

      <Divider orientation="vertical" flexItem />

      <FlexBox direction='column' sx={{ width:'30vw',  alignItems:'center' }}>
        {cartItems.length === 0 &&
        <FlexBox direction='column' sx={{ alignItems:'center' }}>    
          <ShoppingCartOutlinedIcon sx={{width:'200px', height:'200px', mt: 5}} />
          <Typography variant="h5" sx={{ mt: 5}} >
            Your cart is empty. 
          </Typography>
          <Typography variant="h5" sx={{ mt: 1}} >
            Add some items.
          </Typography>
        </FlexBox>
        }
      </FlexBox>

    </FlexBox>
  )

}

export default StoreMenuPage