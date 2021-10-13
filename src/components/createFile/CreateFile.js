import { useState } from "react";
import NoteAdd from "@material-ui/icons/NoteAdd";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const CreateFileWrap = styled.div`
    width: 20%;
    display: flex;
    margin-left: 40%;
    margin-top: 50px;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const CreateFile = () => {
    const [nameFile, setNameFile] = useState('');
    const onChangeNameFile = (e) => {
        setNameFile(e.target.value)
        e.preventDefault()
    }
    return (
        <CreateFileWrap>
            <NoteAdd />
            <form>
                <label>
                    <TextField onChange={(e) => onChangeNameFile(e)} value={nameFile} id="filled-basic" label="New File" variant="filled" />
                </label>
            </form>
        </CreateFileWrap>
    )
}

export default CreateFile;