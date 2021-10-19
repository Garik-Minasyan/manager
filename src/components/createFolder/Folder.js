import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import FolderIcon from '@material-ui/icons/Folder';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteFolder, renameFolder, filterFolder } from './../../store/toolkitReducers';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from "react";
import { useLocation } from 'react-router';

const AddFoldereWrap = styled.div`
    width: 15%;
    padding: 5px;
    display: flex;
    margin-top: 50px;
    justify-content:space-between;
    border-radius: 5px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const FolderWrap = styled.div`
   margin-left: 10px;
`
const IconFolderWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: black;
        font-size: large;
        font-family:Arial, Helvetica, sans-serif;
    }
`
const RenameWrap = styled.div`
    position: absolute;
    top:180px;
    input{
        height: 30px;
        outline: none;
    }
`
let arr = []

const Folder = () => {
    const [openRenameSection, setOpenReanmeSection] = useState(false);
    const location = useLocation();


    const [renameFolderName, setRenameNameFolderName] = useState('');
    const folders = useSelector(state => state.toolkit.folders);
    console.log(folders)
    const dispatch = useDispatch();
    // const currentFolders = folders.finde(i => i.directon === location.pathname);
    // console.log(currentFolders)

    const deleteFolderList = (id) => {
        dispatch(deleteFolder(id))
    }

    const openRename = () => {
        setOpenReanmeSection(prevSate => !prevSate)
    }

    const onChangeName = (e) => {
        setRenameNameFolderName(e.target.value)
    }
    const chekedName = () => {
        dispatch(renameFolder(renameFolderName))
        setRenameNameFolderName('')
        setOpenReanmeSection(false)
    }


    const handleFiltre = (list) => {
        arr = folders.filter(i => i.id !== list.id);
        dispatch(filterFolder(arr))
    }

    return (
        <FolderWrap>
            {

                folders?.map((list, index) => {
                    return (
                        <AddFoldereWrap key={index}>
                            <IconFolderWrap>
                                <FolderIcon />
                                <Link onClick={() => handleFiltre(list)} to={`${location.pathname}/${list.name}`}>{list.name}</Link>
                            </IconFolderWrap>
                            <Tooltip title="Reanme">
                                <IconButton onClick={openRename} aria-label="driveFileRenameOutlineIcon" color="primary" size="medium">
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            {
                                openRenameSection &&
                                <RenameWrap>
                                    <input onChange={(e) => onChangeName(e)} type='text' placeholder="rename" value={renameFolderName} />
                                    <IconButton onClick={chekedName} aria-label="checked" color="primary" size="medium">
                                        <CheckIcon />
                                    </IconButton>
                                </RenameWrap>
                            }
                            <Tooltip title="Delete Folder">
                                <IconButton onClick={() => deleteFolderList(list.id)} aria-label="delete" color="primary" size="medium">
                                    <Delete color="error" />
                                </IconButton>
                            </Tooltip>
                        </AddFoldereWrap>
                    )
                })
            }
        </FolderWrap>
    )
}

export default Folder;