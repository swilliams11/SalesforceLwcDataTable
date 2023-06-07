import { LightningElement, api } from 'lwc';

export default class Datatable extends LightningElement {
    @api recordId
    @api data
    @api columns
    @api editedColumns
    @api editedData

    handleSave(event){
        // Convert datatable draft values into record objects
      const records = event.detail.draftValues.slice().map((draftValue) => {
          //const fields = Object.assign({}, draftValue);
          //return { fields };
          return Object.assign({}, draftValue);
      });
      this.editedData = records;
      console.log(records);
      return this.editedColumns;
    }
}