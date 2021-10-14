import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";
import FolderIcon from '@material-ui/icons/Folder';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from "react-redux";
import styled from "styled-components";

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
const Folder = () => {
    const folders = useSelector(state => state.toolkit.folders)
    return (
        <FolderWrap>
            {
                folders && folders.map((list, index) => {
                    return (
                        <AddFoldereWrap key={index}>
                            <IconFolderWrap>
                                <FolderIcon />
                                <Link to={list.id}>{list.name}</Link>
                            </IconFolderWrap>
                            <Tooltip title="Delete Folder">
                                <IconButton aria-label="delete" color="primary" size="medium">
                                    <Delete />
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