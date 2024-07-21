# Tooltip Helper

A JavaScript package for adding a tooltip to any HTML element.

### Installation

You can install the package using npm by running the following command.

```bash
npm install tooltip-helper
```

### Usage

You can initialise the tooltip-helper by importing and running the init function.

```JavaScript
import { initTooltip } from "tooltip-helper";

initTooltip();
```

Add the class `hoverable` to all the html elements on which you would like to have a tooltip. The tooltip content is defined by the data-attribute tooltip-title.

```HTML
<button
    class="hoverable"
    data-tooltip-title="This is a button">
    Sample Button
</button>
```

### Customisation

The tooltip can have either a `light` or a `dark` theme. You can pass in the theme as an argument when initialising the tooltip helper.

```JavaScript
import { initTooltip } from "tooltip-helper";

initTooltip("dark");
```

### License

This project is licensed under the MIT License.
