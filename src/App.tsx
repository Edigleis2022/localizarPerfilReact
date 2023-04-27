import { Avatar, Box, Button, Card, CardActions, CardContent, CssBaseline, TextField, TextFieldProps, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { BaseLayout } from "./Layout/BaseLayout"
import { Theme } from "./theme/ThemeProvider"
import { UserProps } from "./Types/users"
import CardAction from "./components/CardActions/card"

function App() {

  const userData: UserProps = {
    avatar_url: '',
    login: '',
    location: '',
    followers: 0,
    following: 0
  };

  const [user, setUser] = useState<UserProps>(userData);
  

  useEffect(() => {
    const loadUser = async (userName: String) => {
      const res = await fetch(`http://api.github.com/users/edigleis2022`)

      const data = await res.json();

      const { avatar_url, login, location, followers, following } = data

      setUser(userData);
    }

  }, [])

  return (

    <>

      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Buscador de Perfil">
         
        </BaseLayout>
      </Theme>
      <Box sx={{
            justifyContent: "center", alignItems: "center"
          }} >
            <Card sx={{ maxWidth: 345 }}>
              <Avatar src={user.avatar_url} />
              <CardContent>
                <Typography gutterBottom >
                  Git Hub
                </Typography>
                <Typography >
                    
                </Typography>
              </CardContent>
      </Box>
          
    </>
  )
}

export default App




