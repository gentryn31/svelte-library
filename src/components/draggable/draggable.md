# Draggable

_Created July 23, 2019_

## Description

Draggable is a wrapper component that provides draggable functionality to its children.

## Component Dependencies

Draggable has no dependencies on other components

## Props

| Name         | Type    | Default | Required | Description                                                                 |
| ------------ | ------- | ------- | -------- | --------------------------------------------------------------------------- |
| `disable`    | Boolean | `false` | N        | When true, the children of the component cannot be dragged.                 |
| `vertical`   | Boolean | `false` | N        | When true, the children of the component can only be dragged in the y-axis. |
| `horizontal` | Boolean | `false` | N        | When true, the children of the component can only be dragged in the x-axis. |

## Events

| Name   | `e.detail` | Description                                                                                          |
| ------ | ---------- | ---------------------------------------------------------------------------------------------------- |
| `grab` | `{ x, y }` | Dispatched on `mousedown`; Returns an `e.detail` that contains the x and y coordinates of the mouse. |
| `drag` | `{ x, y }` | Dispatched on `mousemove`; Returns an `e.detail` that contains the x and y coordinates of the mouse. |
| `drop` | `{ x, y }` | Dispatched on `mouseup`; Returns an `e.detail` that contains the x and y coordinates of the mouse.   |

## Methods

| Name              | Parameters | Return | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleMousedown` | `e`        | N      | Handles event when mouse presses down over the component. Takes an event `e` as a parameter. Updates the values of the `mouse`, `offset`, and `bounds` objects with appropriate data. Dispatches the `grab` event and adds event listeners to the window for `mousemove` and `mouseup` events that call `handleMousemove` and `handleMouseup`, respectively.                       |
| `handleMousemove` | `e`        | N      | Handles event when mouse moves in the window. Takes an event `e` as a parameter. Updates the values of the `mouse` and `bounds` objects with appropriate data while accounting for any directional restrictions (e.g., the `vertical` or `horizontal` props). Dispatches the `drag` event. Updates the `top` and `left` attributes of the component's styling with the new bounds. |
| `handleMouseup`   | `e`        | N      | Handles event when mouse releases. Takes an event `e` as a parameter. Updates the value of the `mouse` object with appropriate data. Dispatches the drop event. Removes the event listeners from teh window for `mousemove` and `mouseup` events.                                                                                                                                  |

## Variables

| Name        | Type     | Init Value                | Description                                                                                                   |
| ----------- | -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `dispatch`  | function | `createEventDispatcher()` | Dispatches events (see above) when called on.                                                                 |
| `container` | `<div>`  | `null`                    | Reference of the component. Given value through a `bind:this` attribute.                                      |
| `mouse`     | Object   | `{}`                      | Contains the x and y coordinates of the mouse.                                                                |
| `offset`    | Object   | `{}`                      | Contains the difference of the top, right, bottom, and left edges of the component and the mouse coordinates. |
| `bounds`    | Object   | `{}`                      | Contains the bounding rectangle for the component.                                                            |
