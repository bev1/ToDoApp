import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bg from '../assets/nav_background.jpg';
import ListItem from './ListItem';
import { css } from 'glamor';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    buttonRename: {
        fontSize: "15px",
        padding: '5px',
        marginRight: '10px',
        lineHeight: '1',
        textTransform: 'none',
    },
    buttonDelete: {
        fontSize: "15px",
        padding: '5px',
        lineHeight: '1',
        textTransform: 'none',
    },
    title: {
        fontFamily: 'Acme',
        color: 'white',
        '&:first-letter': {
            textTransform: 'uppercase'}
    },
    header: {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        padding: '20px 10px 10px 20px'
    },
    btton: {
        textTransform: 'none',
        fontSize: "20px",
    },
    addNew: {
        textAlign: 'right'
    }
})

const Main = (props) => {
    const classes = useStyles();
    const currentFolder = props.folders[props.activeFolder.activeFolderId]
    
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    function handleCloseDone() {
        setOpen(false);
        props.renameFolder(props.activeFolder.activeFolderId, props.updateFolderName.newFolderName)
    }
    return (
        <div className={`${sideBar}`}>
            {props.folders.length > 0 && currentFolder !== undefined ? <div>
            <div className={classes.header}>
                <Typography noWrap className={classes.title} variant="h4">
                    {currentFolder[0]}
                </Typography>
                <Button variant="contained" className={classes.buttonRename} onClick={handleClickOpen}>
                    Rename
                </Button>
                <Button color="secondary" variant="contained" className={classes.buttonDelete} onClick={() => props.deleteFolder(props.activeFolder.activeFolderId)}>
                    Delete
                </Button>
            </div>
            <div className={classes.checkList}>
            {
                currentFolder.map((list, i) => {
                    return (
                        <ListItem key={i} listItem={list} itemId={i} editItem={props.editItem} folderId={props.activeFolder.activeFolderId} checkItem={props.checkItem} />
                    )
                })
            }
            <div className={classes.addNew}>
                <Button color="secondary" className={classes.button} onClick={() => props.addListItem(props.activeFolder.activeFolderId)}>
                    <AddIcon/> Add new
                </Button>
            </div>
                
            </div></div> :
            <div className={classes.header}>
                <Typography noWrap className={classes.title} variant="h5">
                    Please, choose list
                </Typography>
            </div>}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Rename your list</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    onChange={(e)=>props.getFolderName(e)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                {props.updateFolderName.newFolderName.length > 1 ?
                <Button onClick={handleCloseDone} color="primary">
                    Done
                </Button> :
                <Button color="primary">
                    Done
                </Button>}
                </DialogActions>
            </Dialog>

        </div>
    )
}

let sideBar = css({
    border: '1px solid rgba(63, 81, 181, 0.1)',
    borderTopRightRadius: '20px',
    overflow: 'hidden',
    '@media(max-width: 992px)': {      
        borderTopLeftRadius: '20px',
    }
  })

export default Main;