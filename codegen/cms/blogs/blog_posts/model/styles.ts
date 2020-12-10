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
import { BackgroundImage } from './backgroundImage';
import { Gradient } from './gradient';
import { RGBAColor } from './rGBAColor';

export class Styles {
    'verticalAlignment': Styles.VerticalAlignmentEnum;
    'backgroundColor': RGBAColor;
    'backgroundImage': BackgroundImage;
    'backgroundGradient': Gradient;
    'maxWidthSectionCentering': number;
    'forceFullWidthSection': boolean;
    'flexboxPositioning': Styles.FlexboxPositioningEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "verticalAlignment",
            "baseName": "verticalAlignment",
            "type": "Styles.VerticalAlignmentEnum"
        },
        {
            "name": "backgroundColor",
            "baseName": "backgroundColor",
            "type": "RGBAColor"
        },
        {
            "name": "backgroundImage",
            "baseName": "backgroundImage",
            "type": "BackgroundImage"
        },
        {
            "name": "backgroundGradient",
            "baseName": "backgroundGradient",
            "type": "Gradient"
        },
        {
            "name": "maxWidthSectionCentering",
            "baseName": "maxWidthSectionCentering",
            "type": "number"
        },
        {
            "name": "forceFullWidthSection",
            "baseName": "forceFullWidthSection",
            "type": "boolean"
        },
        {
            "name": "flexboxPositioning",
            "baseName": "flexboxPositioning",
            "type": "Styles.FlexboxPositioningEnum"
        }    ];

    static getAttributeTypeMap() {
        return Styles.attributeTypeMap;
    }
}

export namespace Styles {
    export enum VerticalAlignmentEnum {
        TOP = <any> 'TOP',
        MIDDLE = <any> 'MIDDLE',
        BOTTOM = <any> 'BOTTOM'
    }
    export enum FlexboxPositioningEnum {
        TOPLEFT = <any> 'TOP_LEFT',
        TOPCENTER = <any> 'TOP_CENTER',
        TOPRIGHT = <any> 'TOP_RIGHT',
        MIDDLELEFT = <any> 'MIDDLE_LEFT',
        MIDDLECENTER = <any> 'MIDDLE_CENTER',
        MIDDLERIGHT = <any> 'MIDDLE_RIGHT',
        BOTTOMLEFT = <any> 'BOTTOM_LEFT',
        BOTTOMCENTER = <any> 'BOTTOM_CENTER',
        BOTTOMRIGHT = <any> 'BOTTOM_RIGHT'
    }
}
