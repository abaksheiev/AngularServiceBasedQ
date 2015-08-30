# CRUDAngularjsApp
Example of base architecture of angular project
DEMO http://abaksheiev.github.io/CRUDAngularjsApp/index.html#

All logict was implemeted around directives. 

1. Example of using MENU component via html 

<!-- Navigation -->
        <app-nav>
            <app-nav-item text="Users" method="showUsers"></app-nav-item>
            <app-nav-item text="Companies" method="showCompanies"></app-nav-item>
            <app-nav-item text="Countries" method="showCountries"></app-nav-item>
        </app-nav>
<!-- /Navigation -->

2. Example of using TABLE component via html 


<!-- Table -->
        <app-table source="dataSource">

            <app-table-field title="#" field="id" type="label"></app-table-field>
            <app-table-field title="First Name" field="firstName" type="text"></app-table-field>
            <app-table-field title="Email" field="email" type="text"></app-table-field>


            <app-table-action code="edit" click="edit" title="Edit"></app-table-action>
            <app-table-action code="save" click="save" title="Save"></app-table-action>
            <app-table-action code="delete" click="delete" title="Delete"></app-table-action>

        </app-table>
<!-- /Table -->
