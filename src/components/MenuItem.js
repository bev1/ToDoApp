import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    button: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        textTransform: 'none',
        fontSize: "25px",
        fontFamily: 'Acme',
    },
    buttonActive: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        textTransform: 'none',
        fontSize: "25px",
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fontFamily: 'Acme',
    },
    icon: {
        display: 'inline-block',
        marginLeft: '10px',
        transform: 'translateY(-3px)',
        '&:first-letter': {
            textTransform: 'uppercase'
        }
    }
})

const MenuItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.menuItem}>
            {
                props.activeFolder.activeFolderId === props.id ?
                <Button color="primary" className={classes.buttonActive} onClick={() => props.chooseFolder(props.id)} >
                <FormatListBulletedIcon /><span className={classes.icon}>{props.folder}</span>
                </Button> :            
                <Button color="primary" className={classes.button} onClick={() => props.chooseFolder(props.id)} >
                <FormatListBulletedIcon /><span className={classes.icon}>{props.folder}</span>
                </Button>
            }
            <Divider />
        </div>
    )
}

export default MenuItem;