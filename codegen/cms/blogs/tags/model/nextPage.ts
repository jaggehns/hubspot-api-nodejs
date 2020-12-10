/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class NextPage {
    'after': string;
    'link'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "after",
            "baseName": "after",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NextPage.attributeTypeMap;
    }
}

