import { createNewGroup } from "@/lib/utils/checklist/frontend/modifyGrouplist";
import { Box, Button, FilledInput, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NewGroupBackdrop = ({ 
    open, 
    handleClose, 
    groups,
    changeGroups, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    //Title of New Group to Create
    const [title, setTitle] = useState('');

    //Close Menu & Reset Options
    const handleCloseBackdrop = () => {
        handleClose(); //Close Backdrop
        setTitle('');
    }

    //Create New Group 
    const handleNewGroup = () => {
        const outdatedGroups = [...userGroups];
        try {
            handleCloseBackdrop();
            //Create New Group
            const {updatedGroups } = createNewGroup(groups, title);

            //Update State Value
            changeGroups(updatedGroups);

        } catch(error) {
            handleOpenAlert(error.message);

            //Undo Changes Made
            changeGroups(outdatedGroups);
        }
    }

    return (
        <Popover
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            sx={{ 
                mt: 10,
                zIndex: (theme) => theme.zIndex.drawer + 1 
            }}
            open={open}
            onClose={handleCloseBackdrop}
        >
            <Stack
                spacing={1}
                sx={{
                    display: 'flex',
                    p: 2,
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexGrow: 1,
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            flexGrow: 1,
                            align: 'center',
                            mx: 1,
                            fontWeight: '700',
                        }}
                    >
                        Create New Group
                    </Typography>
                </Box>
                <FilledInput 
                    value={title}
                    autoFocus
                    hiddenLabel
                    disableUnderline
                    placeholder='New Group Title'
                    onChange={(event) => setTitle(event.target.value)}
                    inputProps={{maxLength: 20}}
                />
                <Box>
                    <Button
                        variant="contained"
                        size='small'
                        disabled={title === ''}
                        onClick={handleNewGroup}
                    >
                        <Typography
                            sx={{
                                color: '#000',
                                fontWeight: '700',
                            }}
                        >
                            Create
                        </Typography>
                    </Button>
                </Box>
            </Stack>
        </Popover>
    ) 
}

export default NewGroupBackdrop;
