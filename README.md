# Smart Browser

Smart Browser is component based on angularjs framework. 

DEMO http://abaksheiev.github.io/CRUDAngularjsApp/index.html#

1. Example of using MENU component via html 

<!-- Navigation -->
        <app-nav>
            <app-nav-item text="Users" method="showUsers"></app-nav-item>
            <app-nav-item text="Companies" method="showCompanies"></app-nav-item>
            <app-nav-item text="Countries" method="showCountries"></app-nav-item>
        </app-nav>
<!-- /Navigation -->

2. In order to use Browser component, will be enough just put following structure and engine will do everything by itself:

<!-- Table -->
<app-browser
        dataUrl="mockJsonData/data.json">
    <app-browser-field
            title="#"
            field="id"
            type="label"
            ></app-browser-field>
    <app-browser-field
            title="Name"
            field="name"
            type="text"
            required="true"
            ></app-browser-field>
    <app-browser-field
            title="Code"
            field="code"
            type="text"
            ></app-browser-field>
</app-browser>
<!-- /Table -->
