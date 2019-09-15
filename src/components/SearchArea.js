import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  searchInput: {
    margin: '0',
    background: 'white',
    borderRadius: '4px',
    marginRight: '10px',
  },
  searchForm: {
    textAlign: 'center',
    margin: '10px 0 10px',
  },
  searchButton: {
      padding: '8px',
  },
  sortSelect: {
    minWidth: '120px',
    marginBottom: '20px',
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SearchArea = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleSubmit() {
    const index = props.folders.map(val => val[0])
    props.chooseFolder(index.indexOf(props.searchTerm, 0))
  }

    return(
      <div>
        <Grid container
          justify="center">
          <Grid item xs={12}>
            <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
              <TextField
                required={true}
                className={classes.searchInput}
                id="outlined-dense"
                label="Search"
                margin="dense"
                variant="outlined"
                onChange={(e) => props.getSearchValue(e)}/>
              {props.searchTerm.length > 0 ?
              <Button variant="contained" color="primary" className={classes.searchButton} onClick={handleSubmit}>
                Search
              </Button> :
              <Button variant="contained" color="primary" className={classes.searchButton} onClick={handleClickOpen}>
                Search
              </Button>}
            </form>
            <Divider />
          </Grid>
        </Grid>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          >
          <DialogTitle id="alert-dialog-slide-title">{"Please, enter search value"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    )
}


export default SearchArea