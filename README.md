# devextreme-angular-template

This project contains a template of an Angular application based on DevExtreme widgets.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.4.

## Get Started

Clon this repository to get started with DevExtreme Angular Template:

        git clone https://github.com/DevExpress/devextreme-angular-template/
        cd devextreme-angular-template
        npm install
        npm run start

You can also generate a DevExtreme Angular application using the [DevExtreme CLI]().

## Add a View

Use following command to add a view to a DevExtreme Angular application based on the current template.

    npx devextreme add view ViewName [--icon=IconName]

You can choose the icon name from the [icon library](https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/).

This command also supports the `module`, `project`, `spec`, `inlineStyle`, and `prefix` options described in the [ng generate component](https://github.com/angular/angular-cli/wiki/generate-component) description.

## Customize Themes

### Use a Predefined Theme

The DevExtreme Angular Template uses different themes for menu and content. Pass the required theme name to the base-theme option in the metadata.base.json and metadata.additional.json files located in the src\themes folder to modify content and menu themes respectively. You can find the available predefined themes in the node_modules\devextreme\dist\css\ folder (after you run `npm install`).

    {
        // ...,
        "baseTheme": "carmine",
        // ...
    }

Run `npx devextreme build` to rebuild themes.

### Create a Custom Theme

Use DevExtreme Theme Builder to create a custom theme based on predefined themes. For this, import src\themes\metadata.base.json or src\themes\metadata.additional.json to Theme Builder, modify the theme and export the result to the initial file.

Run `npx devextreme build` to rebuild themes.

### Apply the Additional Theme to A Custom Element

Add the `dx-swatch-additional` class to a DOM node to apply the additional theme to this node.

    <div class="dx-swatch-additional">
        <!-- Your content here -->
    </div>

### Apply Theme Colors to Custom Elements

You can use SASS variables defined in variables.base.scss and variables.additional.scss to apply theme color to custom elements.

    // Your scss file
    @import "../../../themes/variables.base.scss";

    .my-element {
        background-color: $base-accent;
    }