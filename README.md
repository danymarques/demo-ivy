# REX AngularConnect NGDevTools

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-rc.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## How to play with it
1. Start the development server and click few times one the button. This will show some angular material chips elements on the page. This operation only demonstrate the behavior of the button.
2. Select the `app-compteur` in the Chrome DevTools. This will asign the component itself to a variable named `$0`.
3. Execute the following command : `let monComposant = ng.getComponent($0)` in the Chrome console. This will get the Angular Component and store it in the variable.
4. Execute the following command : `monComposant.addItem("toto")`. This will call the `addItem` function on the component.
5. Execute the following command to tell Angular to refresh the component : `ng.markDirty(monComposant)`.