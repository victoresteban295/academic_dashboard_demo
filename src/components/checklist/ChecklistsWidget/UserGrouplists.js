import { Stack, Box, Button } from "@mui/material";
import GrouplistOption from "./Options/GrouplistOption";
import { AddCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import NewGroupBackdrop from "./Backdrops/NewGroupBackdrop";
import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { reorderGroups } from "@/lib/utils/checklist/frontend/modifyGrouplist";

const UserGrouplists = ({ 
    username, 
    groups,
    allChecklists,
    changeGroups,
    activeList, 
    handleActiveList, 
    handleOpenAlert }) => {

    /* Clone Each Checklists & Groups Object */
    const userGroups = [];
    for(const group of groups) {
        const grp = structuredClone(group);
        userGroups.push(grp);
    }

    /* Backdrop Menu State Value & Function */
    /* Create New Group */
    const [openNewGroup, setOpenNewGroup] = useState(false);
    const handleOpenNewGroup = () => {
        setOpenNewGroup(true);
    }
    const handleCloseNewGroup = () => {
        setOpenNewGroup(false);
    }

    /* Dnd-Kit: Draggable Functionality */
    const mouseSensor = useSensor(MouseSensor, {
        //For Mouse: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const touchSensor = useSensor(TouchSensor, {
        //For Touch Screen: Press and Hold for 1s to Drag
        activationConstraint: {
            delay: 1000,
            tolerance: 0,
        }
    });
    const sensors = useSensors(mouseSensor, touchSensor);
    const [activeGroup, setActiveGroup] = useState('');
    const handleDragStart = (event) => {
        const { active } = event;
        setActiveGroup(active.id);
    }
    const handleDragEnd = (event) => {
        setActiveGroup('');
        const outdatedGroups = [...userGroups];
        //active = component getting dragged
        //over = component where the draggable component was passed over & placed
        const {active, over} = event;
        if(active.id !== over.id) {
            try {
                //Re-order Groups
                const updatedGroups = reorderGroups(groups, active.id, over.id);
                
                //Update State Value
                changeGroups(updatedGroups);

            } catch(error) {
                handleOpenAlert(error.message);

                //Undo Changes Made
                changeGroups(outdatedGroups);
            }
        }
    }

    //Does User Have an Groups
    const hasGroups = groups.length > 0;

    return (
        <>
            {hasGroups ? (
                <DndContext
                    collisionDetection={closestCenter} 
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                    sensors={sensors}
                    modifiers={[restrictToVerticalAxis, restrictToParentElement]}
                >
                    <Stack
                        className='user-grouplists-section'
                    >
                        <SortableContext
                            items={groups.map(group => group.groupId)}
                            strategy={verticalListSortingStrategy}
                        >
                            {groups.map((group) => {
                                const { title, groupId, checklists } = group;
                                return(
                                    <GrouplistOption 
                                        key={groupId}
                                        activeGroup={activeGroup}
                                        username={username}
                                        activeList={activeList}
                                        handleActiveList={handleActiveList}
                                        allChecklists={allChecklists}
                                        groups={groups}
                                        changeGroups={changeGroups}
                                        title={title}
                                        groupId={groupId}
                                        checklists={checklists}
                                        handleOpenAlert={handleOpenAlert}
                                    />
                                )
                            })}
                        </SortableContext>
                    </Stack>
                </DndContext>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        borderWidth: '2px',
                        borderStyle: 'dashed',
                    }}
                >
                    <NewGroupBackdrop
                        username={username}
                        open={openNewGroup} 
                        handleClose={handleCloseNewGroup}
                        groups={groups}
                        changeGroups={changeGroups}
                        handleOpenAlert={handleOpenAlert}
                    />
                    <Button
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={handleOpenNewGroup}
                        sx={{
                            width: '100%',
                            color: '#000',
                        }}
                    >
                        Create New Group 
                    </Button>
                </Box>
            )}
        </>
    )
}

export default UserGrouplists;
