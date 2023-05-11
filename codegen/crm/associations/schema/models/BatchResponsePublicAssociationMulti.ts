/**
 * Associations
 * Associations define the relationships between objects in HubSpot. These endpoints allow you to create, read, and remove associations.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicAssociationMulti } from '../models/PublicAssociationMulti';

export class BatchResponsePublicAssociationMulti {
    'status': BatchResponsePublicAssociationMultiStatusEnum;
    'results': Array<PublicAssociationMulti>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponsePublicAssociationMultiStatusEnum",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicAssociationMulti>",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponsePublicAssociationMulti.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BatchResponsePublicAssociationMultiStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;
