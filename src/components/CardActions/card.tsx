import { Box, TextField, Button, CardActions } from "@mui/material";




function ActionsCard() {

    return (
        <>
            <CardActions>
                <form>
                    <Box sx={{ justifyContent: "center", }}  >
                        <TextField
                            label="Nome do Perfil" fullWidth
                            name='userName' onSubmit={handleSubmit} />
                        <Button
                            variant="contained"
                            type="submit" >Buscar Perfil</Button>
                    </Box>
                </form>
            </CardActions>

        </>
    )
}

export default ActionsCard