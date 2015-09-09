# Quick 'grid-wth-data'

Smart Browser is component based on angularjs framework. 

```html
Installation steps:

npm install
grunt

```

DEMO http://abaksheiev.github.io/angularjs-example-directives/index.html#


1. Example of using MENU component via html 
```html
<!-- Navigation -->
        <app-nav>
            <app-nav-item text="Users" method="showUsers"></app-nav-item>
            <app-nav-item text="Companies" method="showCompanies"></app-nav-item>
            <app-nav-item text="Countries" method="showCountries"></app-nav-item>
        </app-nav>
<!-- /Navigation -->
```
2. In order to use Browser component, will be enough just put following structure and engine will do everything by itself.
So Just 5 rows and you will have everything what you need :)
```html
<!-- Browser -->
<app-browser dataUrl="mockJsonData/countries.json">

    <app-browser-field title="#" field="id" type="label"></app-browser-field>
    <app-browser-field title="Name" field="name" type="text" required="true"></app-browser-field>
    <app-browser-field title="Code" field="code" type="text"></app-browser-field>

</app-browser>
<!-- /Browser -->
```
