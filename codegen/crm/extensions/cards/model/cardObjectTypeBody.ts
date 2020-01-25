/**
 * LinkedSalesObjectsPublicService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class CardObjectTypeBody {
    'name': CardObjectTypeBody.NameEnum;
    'propertiesToSend': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "CardObjectTypeBody.NameEnum"
        },
        {
            "name": "propertiesToSend",
            "baseName": "propertiesToSend",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CardObjectTypeBody.attributeTypeMap;
    }
}

export namespace CardObjectTypeBody {
    export enum NameEnum {
        Contacts = <any> 'contacts',
        Deals = <any> 'deals',
        Companies = <any> 'companies',
        Tickets = <any> 'tickets'
    }
}