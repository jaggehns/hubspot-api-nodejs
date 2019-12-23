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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { CollectionResponseProperty } from '../model/collectionResponseProperty';
import { Property } from '../model/property';
import { PropertyCreate } from '../model/propertyCreate';
import { PropertyUpdate } from '../model/propertyUpdate';

import { ObjectSerializer, Authentication, HttpBasicAuth, ApiKeyAuth, OAuth, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.hubapi.com/crm/v3/properties';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CoreApiApiKeys {
    hapikey,
}

export class CoreApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'hapikey': new ApiKeyAuth('query', 'hapikey'),
        'oauth2': new OAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CoreApiApiKeys, value: string) {
        (this.authentications as any)[CoreApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    /**
     * Move a property identified by {propertyName} to the recycling bin.
     * @summary Archive a property
     * @param objectType 
     * @param propertyName 
     */
    public deletecrmv3propertiesobjectTypepropertyName (objectType: string, propertyName: string) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/{objectType}/{propertyName}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling deletecrmv3propertiesobjectTypepropertyName.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling deletecrmv3propertiesobjectTypepropertyName.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Read all existing properties for the specified object type and HubSpot account.
     * @summary Read all properties
     * @param objectType 
     * @param archived Whether to return only results that have been archived.
     */
    public getcrmv3propertiesobjectType (objectType: string, archived?: boolean) : Promise<{ response: http.IncomingMessage; body: CollectionResponseProperty;  }> {
        const localVarPath = this.basePath + '/{objectType}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling getcrmv3propertiesobjectType.');
        }

        if (archived !== undefined) {
            localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: CollectionResponseProperty;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "CollectionResponseProperty");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Read a property identified by {propertyName}.
     * @summary Read a property
     * @param objectType 
     * @param propertyName 
     * @param archived Whether to return only results that have been archived.
     */
    public getcrmv3propertiesobjectTypepropertyName (objectType: string, propertyName: string, archived?: boolean) : Promise<{ response: http.IncomingMessage; body: Property;  }> {
        const localVarPath = this.basePath + '/{objectType}/{propertyName}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling getcrmv3propertiesobjectTypepropertyName.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling getcrmv3propertiesobjectTypepropertyName.');
        }

        if (archived !== undefined) {
            localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, "boolean");
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Property;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Property");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Perform a partial update of a property identified by {propertyName}. Provided fields will be overwritten.
     * @summary Update a property
     * @param objectType 
     * @param propertyName 
     * @param propertyUpdate 
     */
    public patchcrmv3propertiesobjectTypepropertyName (objectType: string, propertyName: string, propertyUpdate?: PropertyUpdate) : Promise<{ response: http.IncomingMessage; body: Property;  }> {
        const localVarPath = this.basePath + '/{objectType}/{propertyName}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)))
            .replace('{' + 'propertyName' + '}', encodeURIComponent(String(propertyName)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling patchcrmv3propertiesobjectTypepropertyName.');
        }

        // verify required parameter 'propertyName' is not null or undefined
        if (propertyName === null || propertyName === undefined) {
            throw new Error('Required parameter propertyName was null or undefined when calling patchcrmv3propertiesobjectTypepropertyName.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(propertyUpdate, "PropertyUpdate")
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Property;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Property");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Create and return a copy of a new property for the specified object type.
     * @summary Create a property
     * @param objectType 
     * @param propertyCreate 
     */
    public postcrmv3propertiesobjectType (objectType: string, propertyCreate?: PropertyCreate) : Promise<{ response: http.IncomingMessage; body: Property;  }> {
        const localVarPath = this.basePath + '/{objectType}'
            .replace('{' + 'objectType' + '}', encodeURIComponent(String(objectType)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'objectType' is not null or undefined
        if (objectType === null || objectType === undefined) {
            throw new Error('Required parameter objectType was null or undefined when calling postcrmv3propertiesobjectType.');
        }


        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(propertyCreate, "PropertyCreate")
        };

        this.authentications.hapikey.applyToRequest(localVarRequestOptions);

        this.authentications.oauth2.applyToRequest(localVarRequestOptions);

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Property;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Property");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
