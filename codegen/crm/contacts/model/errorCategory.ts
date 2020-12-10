/**
 * Contacts
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class ErrorCategory {
    'httpStatus': ErrorCategory.HttpStatusEnum;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "httpStatus",
            "baseName": "httpStatus",
            "type": "ErrorCategory.HttpStatusEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorCategory.attributeTypeMap;
    }
}

export namespace ErrorCategory {
    export enum HttpStatusEnum {
        CONTINUE = <any> 'CONTINUE',
        SWITCHINGPROTOCOLS = <any> 'SWITCHING_PROTOCOLS',
        PROCESSING = <any> 'PROCESSING',
        OK = <any> 'OK',
        CREATED = <any> 'CREATED',
        ACCEPTED = <any> 'ACCEPTED',
        NONAUTHORITATIVEINFORMATION = <any> 'NON_AUTHORITATIVE_INFORMATION',
        NOCONTENT = <any> 'NO_CONTENT',
        RESETCONTENT = <any> 'RESET_CONTENT',
        PARTIALCONTENT = <any> 'PARTIAL_CONTENT',
        MULTISTATUS = <any> 'MULTI_STATUS',
        ALREADYREPORTED = <any> 'ALREADY_REPORTED',
        IMUSED = <any> 'IM_USED',
        MULTIPLECHOICES = <any> 'MULTIPLE_CHOICES',
        MOVEDPERMANENTLY = <any> 'MOVED_PERMANENTLY',
        FOUND = <any> 'FOUND',
        SEEOTHER = <any> 'SEE_OTHER',
        NOTMODIFIED = <any> 'NOT_MODIFIED',
        USEPROXY = <any> 'USE_PROXY',
        TEMPORARYREDIRECT = <any> 'TEMPORARY_REDIRECT',
        PERMANENTREDIRECT = <any> 'PERMANENT_REDIRECT',
        BADREQUEST = <any> 'BAD_REQUEST',
        UNAUTHORIZED = <any> 'UNAUTHORIZED',
        PAYMENTREQUIRED = <any> 'PAYMENT_REQUIRED',
        FORBIDDEN = <any> 'FORBIDDEN',
        NOTFOUND = <any> 'NOT_FOUND',
        METHODNOTALLOWED = <any> 'METHOD_NOT_ALLOWED',
        NOTACCEPTABLE = <any> 'NOT_ACCEPTABLE',
        PROXYAUTHENTICATIONREQUIRED = <any> 'PROXY_AUTHENTICATION_REQUIRED',
        REQUESTTIMEOUT = <any> 'REQUEST_TIMEOUT',
        CONFLICT = <any> 'CONFLICT',
        GONE = <any> 'GONE',
        LENGTHREQUIRED = <any> 'LENGTH_REQUIRED',
        PRECONDITIONFAILED = <any> 'PRECONDITION_FAILED',
        REQUESTENTITYTOOLARGE = <any> 'REQUEST_ENTITY_TOO_LARGE',
        REQUESTURITOOLONG = <any> 'REQUEST_URI_TOO_LONG',
        UNSUPPORTEDMEDIATYPE = <any> 'UNSUPPORTED_MEDIA_TYPE',
        REQUESTEDRANGENOTSATISFIABLE = <any> 'REQUESTED_RANGE_NOT_SATISFIABLE',
        EXPECTATIONFAILED = <any> 'EXPECTATION_FAILED',
        IMATEAPOT = <any> 'IM_A_TEAPOT',
        MISDIRECTEDREQUEST = <any> 'MISDIRECTED_REQUEST',
        UNPROCESSABLEENTITY = <any> 'UNPROCESSABLE_ENTITY',
        LOCKED = <any> 'LOCKED',
        FAILEDDEPENDENCY = <any> 'FAILED_DEPENDENCY',
        UPGRADEREQUIRED = <any> 'UPGRADE_REQUIRED',
        PRECONDITIONREQUIRED = <any> 'PRECONDITION_REQUIRED',
        TOOMANYREQUESTS = <any> 'TOO_MANY_REQUESTS',
        REQUESTHEADERSFIELDSTOOLARGE = <any> 'REQUEST_HEADERS_FIELDS_TOO_LARGE',
        INTERNALSTALESERVICEDISCOVERY = <any> 'INTERNAL_STALE_SERVICE_DISCOVERY',
        UNAVAILABLEFORLEGALREASONS = <any> 'UNAVAILABLE_FOR_LEGAL_REASONS',
        INTERNALSERVERERROR = <any> 'INTERNAL_SERVER_ERROR',
        NOTIMPLEMENTED = <any> 'NOT_IMPLEMENTED',
        BADGATEWAY = <any> 'BAD_GATEWAY',
        SERVICEUNAVAILABLE = <any> 'SERVICE_UNAVAILABLE',
        GATEWAYTIMEOUT = <any> 'GATEWAY_TIMEOUT',
        HTTPVERSIONNOTSUPPORTED = <any> 'HTTP_VERSION_NOT_SUPPORTED',
        VARIANTALSONEGOTIATES = <any> 'VARIANT_ALSO_NEGOTIATES',
        INSUFFICIENTSTORAGE = <any> 'INSUFFICIENT_STORAGE',
        LOOPDETECTED = <any> 'LOOP_DETECTED',
        NOTEXTENDED = <any> 'NOT_EXTENDED',
        NETWORKAUTHENTICATIONREQUIRED = <any> 'NETWORK_AUTHENTICATION_REQUIRED'
    }
}
