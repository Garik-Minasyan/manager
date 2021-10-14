import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { useSelector } from "react-redux";
import styled from "styled-components";

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

const File = () => {
    const files = useSelector(state => state.toolkit.files)
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
                            <Tooltip title="Delete File">
                                <IconButton aria-label="delete" color="primary" size="medium">
                                    <Delete />
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