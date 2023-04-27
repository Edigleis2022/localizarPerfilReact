import { Box, TextField, Button, CardActions } from "@mui/material";
import { useState } from "react";
import { UserProps } from "../../Types/users";


const userData: UserProps = {
    avatar_url: '',
    login: '',
    location: '',
    followers: 0,
    following: 0
  };

    const [user, setUser] = useState<UserProps>(userData);

    const [isLoading, setLoading] = useState(false)
    
    const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const inputUserName: HTMLInputElement = form.userName;
    setLoading(true)
    setUser(await Data(inputUserName.value))
    setLoading(false)
  }



function CartaoAcoes() {

    return (
        <>
            <CardActions>
                <form  onSubmit={handleSubmit} >
                    <Box sx={{ justifyContent: "center", }}  >
                        <TextField
                            label="Nome do Perfil" fullWidth
                            name='userName' />
                        <Button
                            variant="contained"
                            type="submit" >Buscar Perfil</Button>
                    </Box>
                </form>
            </CardActions>

        </>
    )
}

export default CartaoAcoes

