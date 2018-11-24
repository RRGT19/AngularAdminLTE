# AngularAdminLTE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.7.

## First steps

Run `npm install` inside your project folder.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Adding content to a new component (page)

After you run `ng g c components/example` to create a new component, open the `example.component.html` file and paste this lines:
```html
<!-- Content Header (Page header) -->
<section class="content-header">

  <h1 *ngIf="title">{{title}}
    <small *ngIf="subTitle">{{subTitle}}</small>
  </h1>

</section>
<!-- content-header -->

<!-- Main content -->
<section class="content">

  <!-- PUT YOUR CONTENT BELOW THIS LINE ================================================== -->

  Hello world

  <!-- END OF YOUR CONTENT ================================================== -->

</section>
<!-- /.content -->
```

Open your `example.component.ts` and paste this lines **inside of the class**:
```typescript
title = 'Example';
subTitle = 'Version 2.0';
```

Finally, don't forget to include a new menu (a link) inside of `sidebar.component.html`.


## Structure of this repository
```bash
├───components
│   ├───control-sidebar
│   ├───dashboard
│   ├───footer
│   ├───header
│   ├───login
│   ├───page-not-found
│   ├───register
│   ├───sidebar
│   └───user-profile
├───guards
└───services
```
