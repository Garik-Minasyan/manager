import CreateNewFolder from "@material-ui/icons/CreateNewFolder";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addFolderList } from './../../store/toolkitReducers';
import { useParams, useLocation } from "react-router";

const CreateFolderWrap = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-left: 40%;
    margin-top: 50px;
    border-radius: 5px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const CreateFolder = () => {
    const dispatch = useDispatch();
    const { folderId } = useParams();
    const location = useLocation();
    const locationPatname = location.pathname
    const [nameFolder, setNameFolder] = useState('');
    const onChangeNameFolder = (e) => {
        setNameFolder(e.target.value)
    }
    const createAndAddFolder = (e) => {
        e.preventDefault()
        if (nameFolder.length) {
            dispatch(addFolderList({ nameFolder, locationPatname }))
            setNameFolder('')
        }
    }

    return (
        <CreateFolderWrap>
            <CreateNewFolder />
            <form onSubmit={createAndAddFolder}>
                <label>
                    <TextField
                        onChange={(e) => onChangeNameFolder(e)}
                        value={nameFolder}
                        id="filled-basic"
                        label="New Folder"
                        variant="filled"
                    />
                </label>
            </form>
        </CreateFolderWrap>
    )
}

export default CreateFolder;
