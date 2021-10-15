import { useState } from "react";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from "react-redux";
import { deleteFile, renameFile } from './../../store/toolkitReducers';
import styled from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';


const AddFileWrap = styled.div`
    width: 15%;
    padding: 5px;
    display: flex;
    margin-top: 50px;
    justify-content:space-between;
    border-radius: 5px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const FileWrap = styled.div`
    margin-left: 10px;
`
const IconFileWrap = styled.div`
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

const File = () => {
    const [openRenameSection, setOpenReanmeSection] = useState(false);
    const [renameFileName, setRenameNameFileName] = useState('');
    const dispatch = useDispatch();
    const files = useSelector(state => state.toolkit.files);

    const deleteFileList = (id) => {
        dispatch(deleteFile(id))
    }

    const openRename = () => {
        setOpenReanmeSection(prevSate => !prevSate)
    }

    const onChangeName = (e) => {
        setRenameNameFileName(e.target.value)
    }
    const chekedName = () => {
        dispatch(renameFile(renameFileName))
        setRenameNameFileName('')
        setOpenReanmeSection(false)
    }

    return (
        <FileWrap>
            {
                files && files.map((list, index) => {
                    return (
                        <AddFileWrap key={index}>
                            <IconFileWrap>
                                <DescriptionIcon />
                                <Link to={list.id}>{list.name}</Link>
                            </IconFileWrap>
                            <Tooltip title="Reanme">
                                <IconButton onClick={openRename} aria-label="driveFileRenameOutlineIcon" color="primary" size="medium">
                                    <EditIcon />
                                </IconButton>
                            </Tooltip>
                            {
                                openRenameSection &&
                                <RenameWrap>
                                    <input onChange={(e) => onChangeName(e)} type='text' placeholder="rename" value={renameFileName} />
                                    <IconButton onClick={chekedName} aria-label="checked" color="primary" size="medium">
                                        <CheckIcon />
                                    </IconButton>
                                </RenameWrap>
                            }
                            <Tooltip title="Delete File">
                                <IconButton onClick={() => deleteFileList(list.id)} aria-label="delete" color="primary" size="medium">
                                    <Delete color="error" />
                                </IconButton>
                            </Tooltip>
                        </AddFileWrap>
                    )
                })
            }
        </FileWrap>
    )
}

export default File;