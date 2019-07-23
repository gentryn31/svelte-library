<script>
  import { createEventDispatcher } from "svelte";

  export let disable = false;
  export let vertical = false;
  export let horizontal = false;

  const dispatch = createEventDispatcher();
  let container;

  let mouse = {};
  let offset = {};
  let bounds = {};

  const handleMouseDown = e => {
    console.log(dispatch);
    console.log(container);
    if (!disable) {
      mouse = {
        x: e.clientX,
        y: e.clientY
      };

      bounds = container.getBoundingClientRect();

      offset = {
        top: bounds.top - mouse.y,
        right: bounds.right - mouse.x,
        bottom: bounds.bottom - mouse.y,
        left: bounds.left - mouse.x
      };

      dispatch("grab", {
        x: mouse.x,
        y: mouse.y
      });

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = e => {
    mouse = {
      x: e.clientX,
      y: e.clientY
    };

    bounds = {
      top: !horizontal && mouse.y + offset.top,
      right: !vertical && mouse.x + offset.right,
      bottom: !horizontal && mouse.y + offset.bottom,
      left: !vertical && mouse.x + offset.left
    };

    dispatch("drag", {
      x: mouse.x,
      y: mouse.y
    });

    container.style.left = `${bounds.left}px`;
    container.style.top = `${bounds.top}px`;
  };

  const handleMouseUp = e => {
    if (!disable) {
      mouse = {
        x: e.clientX,
        y: e.clientY
      };

      dispatch("drop", {
        x: mouse.x,
        y: mouse.y
      });

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  };
</script>

<style>
  .draggable-container {
    position: relative;
    display: inline-block;
    z-index: 5;
  }
  .draggable-container:hover {
    cursor: default;
  }
  .draggable-container:active {
    cursor: grabbing;
    user-select: none;
  }

  .draggable-container.disable:hover,
  .draggable-container.disable:active {
    cursor: auto;
    user-select: auto;
  }
</style>

<div
  bind:this={container}
  class="draggable-container"
  class:disable
  on:mousedown={handleMouseDown}>
  <slot />
</div>
