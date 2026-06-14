import FIELD_STATUS from '@salesforce/schema/Harvest_Field__c.Status__c';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';

const fields = [FIELD_STATUS];

export default class Alert extends LightningElement {
    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields
    })
    record;

    get isAlert() {
        return getFieldValue(this.record.data, FIELD_STATUS) === 'Alert';
    }

    get isWarning() {
        return getFieldValue(this.record.data, FIELD_STATUS) === 'Warning';
    }
    //
}
