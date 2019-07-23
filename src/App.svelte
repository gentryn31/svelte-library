<script>
  import Draggable from "./components/draggable/draggable.svelte";
</script>

<Draggable
  vertical
  on:drag={e => {
    console.log(e.detail.x + ', ' + e.detail.y);
  }}>
  <input type="text" />
</Draggable>
