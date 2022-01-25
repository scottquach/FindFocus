import { useState } from 'react';

export default function usePopover(): [boolean, any, (event: any) => void, () => void] {
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return [open, anchorEl, handlePopoverOpen, handlePopoverClose];
}
