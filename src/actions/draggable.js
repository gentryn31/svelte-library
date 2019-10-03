export const draggable = (node, params = { horizontal: true, vertical: true }) => {
    // define position variables
    let x;
    let y;
    const updateX = params.horizontal;
    const updateY = params.vertical;

    const handleMousedown = (e) => {
        // update position with current mouse x & y
        x = e.clientX;
        y = e.clientY;

        // tell window to listen for mouse movement and mouse up
        window.addEventListener('mousemove', handleMousemove);
        window.addEventListener('mouseup', handleMouseup);
    };

    const handleMousemove = (e) => {
        // calculate the change in x & y
        const dx = updateX && e.clientX - x;
        const dy = updateY && e.clientY - y;

        // update position with current mouse x & y
        x = e.clientX;
        y = e.clientY;

        // alert the node that the element is being dragged
        node.dispatchEvent(new CustomEvent('drag', {
            detail: { dx, dy }
        }));
    };

    const handleMouseup = (e) => {
        // update position with current mouse x & y
        x = e.clientX;
        y = e.clientY;

        // tell window to stop listening for mouse movement and mouse up
        window.removeEventListener('mousemove', handleMousemove);
        window.removeEventListener('mouseup', handleMouseup);
    };

    // start by listening to mousedown events on the node
    node.addEventListener('mousedown', handleMousedown);

    return {
        destroy() {
            // stop listening to mousedown events when node is destroyed
            node.removeEventListener('mousedown', handleMousedown);
        }
    }
};