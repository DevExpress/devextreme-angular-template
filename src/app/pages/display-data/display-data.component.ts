import { Component } from '@angular/core';
import 'devextreme/data/odata/store';

@Component({
    templateUrl: 'display-data.template.html'
})

export class DisplayDataComponent {
    dataSource: any;

    constructor() {
        this.dataSource = {
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
            },
            select: [
                'Product_ID',
                'Product_Name',
                'Product_Cost',
                'Product_Sale_Price',
                'Product_Retail_Price',
                'Product_Current_Inventory'
            ],
            filter: ['Product_Current_Inventory', '>', 0]
        };
    }
}
