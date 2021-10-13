import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CreateNewFolder from "@material-ui/icons/CreateNewFolder";
import NoteAdd from "@material-ui/icons/NoteAdd";

const Header = ({ setOpenCreateFolder }) => {
    return (
        <div>
            <Tooltip title="Create New Folder">
                <IconButton onClick={() => setOpenCreateFolder(true)} aria-label="createNewFolder" color="primary" size="medium">
                    <CreateNewFolder />
                </IconButton>
            </Tooltip>
            <Tooltip title="Create New File">
                <IconButton onClick={() => setOpenCreateFolder(false)} aria-label="noteAdd" color="primary" size="medium">
                    <NoteAdd />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default Header;
