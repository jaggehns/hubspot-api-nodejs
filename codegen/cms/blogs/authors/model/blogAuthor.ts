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

/**
* Model definition for a Blog Author.
*/
export class BlogAuthor {
    /**
    * The unique ID of the Blog Author.
    */
    'id': string;
    /**
    * Email address of the Blog Author.
    */
    'email': string;
    /**
    * A short biography of the blog author.
    */
    'bio': string;
    /**
    * URL to the website of the Blog Author.
    */
    'website': string;
    /**
    * URL or username of the Twitter account associated with the Blog Author. This will be normalized into the Twitter url for said user.
    */
    'twitter': string;
    /**
    * URL to the Blog Author\'s Facebook page.
    */
    'facebook': string;
    /**
    * URL to the blog author\'s LinkedIn page.
    */
    'linkedin': string;
    /**
    * URL to the blog author\'s avatar, if supplying a custom one.
    */
    'avatar': string;
    /**
    * The full name of the Blog Author to be displayed.
    */
    'displayName': string;
    /**
    * The timestamp (ISO8601 format) when this Blog Author was deleted.
    */
    'deletedAt': Date;
    /**
    * The timestamp (ISO8601 format) when this Blog Author was created.
    */
    'createdAt': Date;
    /**
    * The timestamp (ISO8601 format) when this Blog Author was last updated.
    */
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "bio",
            "baseName": "bio",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "twitter",
            "baseName": "twitter",
            "type": "string"
        },
        {
            "name": "facebook",
            "baseName": "facebook",
            "type": "string"
        },
        {
            "name": "linkedin",
            "baseName": "linkedin",
            "type": "string"
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BlogAuthor.attributeTypeMap;
    }
}

