import React from "react";
import {Box,Paper,Button} from "@material-ui/core";
import './home.css';

function Home(){
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>titulo</h1>
                    </Box>
                    <img src="https://i.imgur.com/73g7p3D.png" alt="" style={{width: "120%", height: "75%"}} />
                    <Box  display="flex" justifyContent="center" p={2}>
                    <Button variant="contained" color="primary">Texto 1</Button>
                       <Button variant="contained" color="secondary">Texto 2</Button>
                    </Box>
               </Box>
           </Paper>
        </>
    );
}

export default Home;