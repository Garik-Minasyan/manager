import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CreateNewFolder from "@material-ui/icons/CreateNewFolder";
import NoteAdd from "@material-ui/icons/NoteAdd";
import { useDispatch } from 'react-redux';
import { openedCreateScope, closedCreateScope } from './../store/toolkitReducers';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Tooltip title="Create New Folder">
                <IconButton onClick={() => dispatch(openedCreateScope())} aria-label="createNewFolder" color="primary" size="medium">
                    <CreateNewFolder />
                </IconButton>
            </Tooltip>
            <Tooltip title="Create New File">
                <IconButton onClick={() => dispatch(closedCreateScope())} aria-label="noteAdd" color="primary" size="medium">
                    <NoteAdd />
                </IconButton>
            </Tooltip>
        </div >
    )
}

export default Header;
