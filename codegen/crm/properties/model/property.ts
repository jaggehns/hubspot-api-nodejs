/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Option } from './option';
import { PropertyMutability } from './propertyMutability';

export class Property {
    'updatedAt'?: string;
    'createdAt'?: string;
    /**
    * When the property was archived.
    */
    'archivedAt'?: string;
    /**
    * The internal property name, which must be used when referencing the property via the API.
    */
    'name': string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The property data type.
    */
    'type': string;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': Property.FieldTypeEnum;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description': string;
    /**
    * The name of the property group the property belongs to.
    */
    'groupName': string;
    /**
    * A list of valid options for the property. This field is required for enumerated properties, but will be empty for other property types.
    */
    'options': Array<Option>;
    /**
    * The internal user ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.
    */
    'createdUserId'?: string;
    /**
    * The internal user ID of the user who updated the property in HubSpot. This field may not exist if the property was updated outside of HubSpot.
    */
    'updatedUserId'?: string;
    /**
    * If this property is related to other object(s), they'll be listed here.
    */
    'referencedObjectType'?: string;
    /**
    * Properties are shown in order, starting with the lowest positive integer value.
    */
    'displayOrder'?: number;
    /**
    * For default properties, true indicates that the property is calculated by a HubSpot process. It has no effect for custom properties.
    */
    'calculated'?: boolean;
    /**
    * For default properties, true indicates that the options are stored externally to the property settings.
    */
    'externalOptions'?: boolean;
    /**
    * Whether or not the property is archived.
    */
    'archived'?: boolean;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    /**
    * Whether or not the property will be hidden from the HubSpot UI. It's recommended this be set to false for custom properties.
    */
    'hidden'?: boolean;
    /**
    * This will be true for default object properties built into HubSpot.
    */
    'hubspotDefined'?: boolean;
    /**
    * Whether or not the property will display the currency symbol set in the account settings.
    */
    'showCurrencySymbol'?: boolean;
    'mutability'?: PropertyMutability;
    /**
    * Whether or not the property can be used in a HubSpot form.
    */
    'formField'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "Property.FieldTypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Option>"
        },
        {
            "name": "createdUserId",
            "baseName": "createdUserId",
            "type": "string"
        },
        {
            "name": "updatedUserId",
            "baseName": "updatedUserId",
            "type": "string"
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "string"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        },
        {
            "name": "calculated",
            "baseName": "calculated",
            "type": "boolean"
        },
        {
            "name": "externalOptions",
            "baseName": "externalOptions",
            "type": "boolean"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "hubspotDefined",
            "baseName": "hubspotDefined",
            "type": "boolean"
        },
        {
            "name": "showCurrencySymbol",
            "baseName": "showCurrencySymbol",
            "type": "boolean"
        },
        {
            "name": "mutability",
            "baseName": "mutability",
            "type": "PropertyMutability"
        },
        {
            "name": "formField",
            "baseName": "formField",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Property.attributeTypeMap;
    }
}

export namespace Property {
    export enum FieldTypeEnum {
        Textarea = <any> 'textarea',
        Text = <any> 'text',
        Date = <any> 'date',
        File = <any> 'file',
        Number = <any> 'number',
        Select = <any> 'select',
        Radio = <any> 'radio',
        Checkbox = <any> 'checkbox',
        Booleancheckbox = <any> 'booleancheckbox'
    }
}
