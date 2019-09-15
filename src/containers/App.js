import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import SlideMenu from '../components/SlideMenu'
import { css } from 'glamor';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { toDoList } from '../actions/toDoList';
import { folderName } from '../actions/FolderName';
import { chooseFolder } from '../actions/chooseFolder';
import { deleteFolder } from '../actions/deleteFolder';
import { addListItem } from '../actions/addListItem';
import { editItem } from '../actions/editItem';
import { checkItem } from '../actions/checkItem';
import { renameFolder } from '../actions/renameFolder';
import { newFolderName } from '../actions/newFolderName';
import { getSearchValue } from '../actions/getSearchValue';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { slide as MenuSlide } from 'react-burger-menu';


class App extends React.Component{

  render() {
    return (
      <div className='App'>
        <MenuSlide styles={menuSlide} burgerButtonClassName={`${menuMobile}`} isOpen={false} >
          <SlideMenu activeFolder={this.props.activeFolder} chooseFolder={this.props.chooseFolder} folders={this.props.folders} searchTerm={this.props.searchTerm} toDoList={this.props.toDoList} folderName={this.props.folderName} newFolderName={this.props.newFolderName} getSearchValue={this.props.getSearchValue} />          
        </MenuSlide>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Hidden smDown>
              <Grid item md={4}>
                <SideBar activeFolder={this.props.activeFolder} chooseFolder={this.props.chooseFolder} folders={this.props.folders} searchTerm={this.props.searchTerm} toDoList={this.props.toDoList} folderName={this.props.folderName} newFolderName={this.props.newFolderName} getSearchValue={this.props.getSearchValue} />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={8}>
              <Main updateFolderName={this.props.updateFolderName} getFolderName={this.props.getFolderName} renameFolder={this.props.renameFolder} checkItem={this.props.checkItem} editItem={this.props.editItem} addListItem={this.props.addListItem} deleteFolder={this.props.deleteFolder} folders={this.props.folders} activeFolder={this.props.activeFolder} />
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    folders: state.toDoList.list,
    searchTerm: state.searchTerm.searchTerm,
    folderName: state.folderName.folderName,
    activeFolder: state.chooseFolder,
    updateFolderName: state.newFolderName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    toDoList: (newItem => {
      dispatch(toDoList(newItem))
    }),
    newFolderName: (e => {
      dispatch(folderName(e.target.value))
    }),
    chooseFolder: (folderId => {
      dispatch(chooseFolder(folderId))
    }),
    deleteFolder: (folderId => {
      dispatch(deleteFolder(folderId))
    }),
    addListItem: (id => {
      dispatch(addListItem(id))
    }),
    editItem: ((val, itemId, folderId) => {
      dispatch(editItem(val, itemId, folderId))
    }),
    checkItem: ((e, itemId, folderId) => {
      dispatch(checkItem(e.target.checked, itemId, folderId))
    }),
    renameFolder: ((id, value) => {
      dispatch(renameFolder(id, value))
    }),
    getFolderName: (e => {
      dispatch(newFolderName(e.target.value))
    }),
    getSearchValue: (e => {
      dispatch(getSearchValue(e.target.value.toLowerCase()))
    })
  }
}

let menuMobile = css({
  '@media(min-width: 992px)': {
    display: 'none'
  }
})

const menuSlide = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '35px',
    top: '25px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App);