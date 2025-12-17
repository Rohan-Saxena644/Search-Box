import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox(){
    return(
        <div>
            <h3>Search for the weather</h3>
            <form className="">
                <TextField id="outlined-basic" label="Pune" variant="outlined" required />
                <br></br>
                <Button variant="contained" type="submit">
                    Send
                </Button>
            </form>    
        </div>
    );
}