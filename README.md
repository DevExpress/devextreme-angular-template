# devextreme-angular-template

With the DevExtreme Angular Template you can quickly create an application with several views and a hierarchical menu (see the [live preview](https://devexpress.github.io/devextreme-angular-template)).

![](/images/DevExtreme-Angular-Template.png)

You can use [DevExtreme CLI](https://github.com/DevExpress/devextreme-cli) commands to modify, add, and delete views, configure the menu, and change themes.

The DevExtreme Angular Template is based on [DevExtreme Angular components](https://github.com/devexpress/DevExtreme-angular) and generated with [Angular CLI](https://github.com/angular/angular-cli).

* [Getting started](#getting-started)
* [Add DevExtreme Angular Template to an Existing Application](#add-template-to-existing-app)
* [Switch the Layout](#switch-layout)
* [Add a View](#add-view)
* [Configure Navigation Items](#configure-nav-items)
* [Customize Application Appearance](#customize-application-appearance)
  * [Change Theme](#change-theme)
  * [Create a Custom Theme](#create-custom-theme)
  * [Apply the Additional Theme to a Custom Element](#apply-additional-theme-to-custom-element)
  * [Apply Theme Variables to Custom Elements](#apply-theme-variables)
* [License](#license)

## <a name="getting-started"></a>Getting Started

Use the DevExtreme CLI's `new angular-app` command to create a DevExtreme Angular application that includes several sample views and a navigation menu:

```bash
npx devextreme-cli new angular-app app-name
cd app-name
npm run start
```

The application includes a side navigation menu and an outer toolbar. You can set the `--layout` option to `app-side-nav-inner-toolbar` to use the layout with an inner toolbar.

```bash
npx devextreme-cli new angular-app app-name --layout=app-side-nav-inner-toolbar
```

Use the `--empty` flag to generate an application without views and navigation items.

```bash
npx devextreme-cli new angular-app app-name --empty
```

You can also clone the current repository to play around with DevExtreme Angular Template. 

```bash
git clone https://github.com/DevExpress/devextreme-angular-template/
cd devextreme-angular-template
npm install
npm run start
```

## <a name="add-template-to-existing-app"></a>Add DevExtreme Angular Template to an Existing Application

If you have an existing angular application, use the `add-app-template` command to add a DevExtreme Angular Template to this application.

```bash
npx devextreme-cli add-app-template
```

This command does not override existing files. It creates new files with another name. For example, *app1.component*. You should manually embed the new content in the existing files, or modify *app.module.ts* to bootstrap the created component.

```TypeScript
// ...
import { AppComponent } from './app1.component';
// ...
```

You can also use the `--resolve-conflicts=override` option to override the existing files.

**Note: In this case, changes you previously applied to the application files can be lost.**

```bash
npx devextreme-cli add angular-template --resolve-conflicts=override
```

This command also supports the `--layout` and `--empty` options that are described in the [Getting Started](#getting-started) section.

For more information, see [DevExtreme CLI README](https://github.com/devexpress/DevExtreme-cli#add-devextreme-to-an-existing-application).

## <a name="switch-layout"></a>Switch the Layout

You can change the layout in an existing application. For this, substitute the `app-side-nav-outer-toolbar` tag with `app-side-nav-inner-toolbar` in the *app.component.html* file.

```html
<app-side-nav-inner-toolbar title="DevExtreme Angular Template">
    <!-- Layout content here -->
</app-side-nav-inner-toolbar>
```

## <a name="add-view"></a>Add a View

Use the following command to add a view to a DevExtreme Angular application based on the current template.

```bash
npx devextreme add view view-name [--icon=IconName]
```

You can choose the icon name from the [icon library](https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/).

This command also supports the `module`, `project`, `spec`, `inlineStyle`, and `prefix` options described in the [ng generate component](https://github.com/angular/angular-cli/wiki/generate-component) description.

The `add view` command also creates a root navigation item for the view.

## <a name="configure-nav-items"></a>Configure Navigation Items

Use the *src\app\app-navigation.ts* file to configure navigation items. Each configuration item can have the following fields:

- **text** - an item text
- **icon** - an item icon
- **path** - a navigation path associated with an item
- **items** - child items

```TypeScript
{
    text: 'Category',
    icon: 'folder',
    items: [{
        text: 'About',
        path: '/about'
    }]
}
```

## <a name="customize-application-appearance"></a>Customize Application Appearance

### <a name="change-theme"></a>Change Theme

The DevExtreme Angular Template uses different themes for its content and menu. Pass the theme's name to the base-theme option in the *metadata.base.json* and *metadata.additional.json* files in the *src\themes* folder to modify the content and menu themes respectively. See [Predefined Themes](https://js.devexpress.com/Documentation/Guide/Themes/Predefined_Themes/) for more information.

```javascript
{
    // ...,
    "baseTheme": "material.blue.light",
    // ...
}
```

Run `npm run build` to rebuild themes.

### <a name="create-custom-theme"></a>Create a Custom Theme

You can use the DevExtreme Theme Builder to create a custom theme based on predefined themes. For this, import *src\themes\metadata.base.json* or *src\themes\metadata.additional.json* to the [Theme Builder](https://js.devexpress.com/Documentation/Guide/Themes/Theme_Builder/), modify the theme and export the result to the initial file.

Run `npm run build` to rebuild themes.

### <a name="apply-additional-theme-to-custom-element"></a>Apply the Additional Theme to a Custom Element

Add the `dx-swatch-additional` class to a DOM node to apply the additional (menu) theme to this node.

```html
<div class="dx-swatch-additional">
    <!-- Your content here -->
</div>
```

### <a name="apply-theme-variables"></a>Apply Theme Variables to Custom Elements

You can apply the SCSS variables defined in *variables.base.scss* and *variables.additional.scss* to custom elements.

```scss
// Your scss file
@import "../../../themes/generated/variables.base.scss";

.my-element {
    background-color: $base-accent;
}
```

## <a name="license"></a>License

Familiarize yourself with the
[DevExtreme License](https://js.devexpress.com/Licensing/).
[Free trial is available!](http://js.devexpress.com/Buy/)

**DevExtreme Angular Template is released as a MIT-licensed (free and open-source) add-on to DevExtreme.**
