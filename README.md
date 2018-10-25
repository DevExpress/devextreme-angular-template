# devextreme-angular-template

The DevExtreme Angular Template is an application with several views and a hierarchical menu (see the [live preview](https://devexpress.github.io/devextreme-angular-template)). You can modify, add, and delete views, configure the menu, and change themes.

The DevExtreme Angular Template is based on [DevExtreme Angular components](https://github.com/devexpress/DevExtreme-angular) and generated with [Angular CLI](https://github.com/angular/angular-cli).

## Getting Started

Clone the following repository to get started with DevExtreme Angular Template:

```bash
git clone https://github.com/DevExpress/devextreme-angular-template/
cd devextreme-angular-template
npm install
npm run start
```

You can also use the [Angular or DevExtreme CLI](https://github.com/devexpress/DevExtreme-angular#quick-start) to generate a DevExtreme Angular application.

## Add a View

Use the following command to add a view to a DevExtreme Angular application based on the current template.

```bash
npx devextreme add view view-name [--icon=IconName]
```

You can choose the icon name from the [icon library](https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/).

This command also supports the `module`, `project`, `spec`, `inlineStyle`, and `prefix` options described in the [ng generate component](https://github.com/angular/angular-cli/wiki/generate-component) description.

## Customize Themes

### Use a Predefined Theme

The DevExtreme Angular Template uses different themes for its content and menu. Pass the theme's name to the base-theme option in the *metadata.base.json* and *metadata.additional.json* files in the *src\themes* folder to modify the content and menu themes respectively. See [Predefined Themes](https://js.devexpress.com/Documentation/Guide/Themes/Predefined_Themes/) for more information.

```json
{
    // ...,
    "baseTheme": "material.blue.light",
    // ...
}
```

Run `npx devextreme build` to rebuild themes.

### Create a Custom Theme

You can use the DevExtreme Theme Builder to create a custom theme based on predefined themes. For this, import *src\themes\metadata.base.json* or *src\themes\metadata.additional.json* to the [Theme Builder](https://js.devexpress.com/Documentation/Guide/Themes/Theme_Builder/), modify the theme and export the result to the initial file.

Run `npx devextreme build` to rebuild themes.

### Apply the Additional Theme to a Custom Element

Add the `dx-swatch-additional` class to a DOM node to apply the additional theme to this node.

```html
<div class="dx-swatch-additional">
    <!-- Your content here -->
</div>
```

### Apply Theme Colors to Custom Elements

You can use SCSS variables defined in *variables.base.scss* and *variables.additional.scss* to apply a theme color to custom elements.

```scss
// Your scss file
@import "../../../themes/variables.base.scss";

.my-element {
    background-color: $base-accent;
}
```

## Switch Layout

The DevExtreme Angular Template uses a layout with a side navigation menu and outer toolbar. You can use a similar layout with an inner toolbar. For this, substitute the `app-side-nav-outer-toolbar` tag with `app-side-nav-inner-toolbar` in the *app.component.html* file.

```html
<app-side-nav-inner-toolbar title="DevExtreme Angular Template">
    <!-- Layout content here -->
</app-side-nav-inner-toolbar>
```