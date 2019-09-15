import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EdiText from 'react-editext';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    listItem: {
        borderBottom: '1px solid rgba(63, 81, 181, 0.1)'
    },
    check: {
        marginTop: '-3px',
        marginRight: '10px'
    },
    grid: {
        margin: '10px 0'
    }
})

const ListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.listItem}>            
        {props.itemId !== 0 ? <div>
          <Grid container spacing={0} className={classes.grid}>              
            <Grid item xs={2} sm={1}>
                <Checkbox
                checked={props.listItem[1]}
                className={classes.check}
                color="primary"
                onChange={(e)=>props.checkItem(e, props.itemId, props.folderId)}
                />
            </Grid>
            <Grid item xs={10} sm={11}>
                <EdiText
                type="text"
                value={props.listItem[0]}
                onSave={(val)=>props.editItem(val, props.itemId, props.folderId)}
                editButtonContent="Edit"
                buttonsAlign='before'
                editOnViewClick={true}
                />
            </Grid>
          </Grid></div> : ''}
        </div>
    )
}

export default ListItem;