<script>
  import Draggable from "./components/draggable/draggable.svelte";
  import { draggable } from "./actions/draggable.js";

  let coords = {
    x: 0,
    y: 0
  };

  const handleDrag = e => {
    coords = {
      x: coords.x + e.detail.dx,
      y: coords.y + e.detail.dy
    };
  };
</script>

<h1
  use:draggable
  on:drag={handleDrag}
  style="transform: translate({coords.x}px, {coords.y}px)">
  Draggable action
</h1>
