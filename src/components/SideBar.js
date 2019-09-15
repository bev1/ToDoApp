import React from 'react';
import SearchArea from './SearchArea';
import MenuItem from './MenuItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles({
    sideBar: {
        border: '1px solid rgba(63, 81, 181, 0.2)',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        overflow: 'hidden',
    },
    button: {
        display: 'block',
        textTransform: 'none',
        fontSize: "20px",
        width: '100%',
        textAlign: 'left',
    }
})

const SideBar = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen() {
      setOpen(true);
    }
    function handleClose(e) {
      setOpen(false);
    }
    function handleCloseDone() {
      setOpen(false);
      props.toDoList(props.folderName)
    }

    return (
        <div className={classes.sideBar}>
            <SearchArea searchTerm={props.searchTerm} folders={props.folders} chooseFolder={props.chooseFolder} getSearchValue={props.getSearchValue} />
            {
                props.folders.map((folder, i) => {
                    return (
                        <MenuItem key={i} folder={folder[0]} chooseFolder={props.chooseFolder} id={i} activeFolder={props.activeFolder} />
                    )
                })
            }
            <Button color="secondary" className={classes.button} onClick={handleClickOpen}>
            <AddIcon/> Add new
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Please, enter list name</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    onChange={(e)=>props.newFolderName(e)}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                {props.folderName.length > 1 ?
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

export default SideBar;