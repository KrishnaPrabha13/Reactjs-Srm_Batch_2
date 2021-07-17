import{ AppBar, Toolbar,  makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:'#72a0c1',
        height:'50px'
    },
    tabs: {
        // background:'#FFFFFF',
        color:'white',
        textDecoration:'none',
        margin:15,
        fontSize: 15
        
    }
})
const NavBar =() =>{
    const classes = useStyle();
return(
    <AppBar className={classes.header}position="static" >
        <Toolbar>
            <NavLink className={classes.tabs} to="./home" exact >Home</NavLink>
            <NavLink className={classes.tabs} to="./login" exact >Login</NavLink>
            <NavLink className={classes.tabs} to="./loan" exact >Loan</NavLink>
            <NavLink className={classes.tabs} to="./logout" exact >Logout</NavLink>

        </Toolbar>
    </AppBar>
)
}
export default NavBar;