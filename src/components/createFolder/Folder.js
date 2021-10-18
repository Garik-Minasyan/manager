import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import FolderIcon from '@material-ui/icons/Folder';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteFolder, renameFolder } from './../../store/toolkitReducers';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router';

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
const Folder = () => {
    // const { folderId } = useParams();
    const [openRenameSection, setOpenReanmeSection] = useState(false);
    const location = useLocation();
    console.log(location.pathname, 'dddddddddddddddddddd')

    const [renameFolderName, setRenameNameFolderName] = useState('');
    const folders = useSelector(state => state.toolkit.folders);
    const dispatch = useDispatch();
    // console.log(folders, 'ddd')
    // console.log(folderId, 'dddddddddddd')
    // const currentFolders = folders.filter(i => i.directon === (folderId ?? '/'))
    // console.log(currentFolders, 'eeeeeeeeeee')



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

    return (
        <FolderWrap>
            {
                folders.map((list, index) => {
                    return (
                        <AddFoldereWrap key={index}>
                            <IconFolderWrap>
                                <FolderIcon />
                                <Link to={`${location.pathname}/${list.name}`}>{list.name}</Link>
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