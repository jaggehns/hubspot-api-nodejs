/**
 * CRM Associations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class LabelsBetweenObjectPair1 {
    'fromObjectTypeId': string;
    'toObjectId': number;
    'toObjectTypeId': string;
    'fromObjectId': number;
    'labels': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fromObjectTypeId",
            "baseName": "fromObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "toObjectId",
            "baseName": "toObjectId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "toObjectTypeId",
            "baseName": "toObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromObjectId",
            "baseName": "fromObjectId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LabelsBetweenObjectPair1.attributeTypeMap;
    }

    public constructor() {
    }
}

