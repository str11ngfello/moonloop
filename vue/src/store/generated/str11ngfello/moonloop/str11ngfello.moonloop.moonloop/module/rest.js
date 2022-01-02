/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title moonloop/class.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryClassAll
         * @summary Queries a list of class items.
         * @request GET:/str11ngfello/moonloop/moonloop/class
         */
        this.queryClassAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/class`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryClass
         * @summary Queries a class by index.
         * @request GET:/str11ngfello/moonloop/moonloop/class/{collectionIndex}/{classTemplateIndex}/{instanceIndex}
         */
        this.queryClass = (collectionIndex, classTemplateIndex, instanceIndex, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/class/${collectionIndex}/${classTemplateIndex}/${instanceIndex}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryClassTemplateAll
         * @summary Queries a list of classTemplate items.
         * @request GET:/str11ngfello/moonloop/moonloop/classTemplate
         */
        this.queryClassTemplateAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/classTemplate`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryClassTemplate
         * @summary Queries a classTemplate by index.
         * @request GET:/str11ngfello/moonloop/moonloop/classTemplate/{collectionIndex}/{classTemplateIndex}
         */
        this.queryClassTemplate = (collectionIndex, classTemplateIndex, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/classTemplate/${collectionIndex}/${classTemplateIndex}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCollectionAll
         * @summary Queries a list of collection items.
         * @request GET:/str11ngfello/moonloop/moonloop/collection
         */
        this.queryCollectionAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/collection`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCollection
         * @summary Queries a collection by index.
         * @request GET:/str11ngfello/moonloop/moonloop/collection/{index}
         */
        this.queryCollection = (index, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/collection/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCollectionOwnerAll
         * @summary Queries a list of collectionOwner items.
         * @request GET:/str11ngfello/moonloop/moonloop/collectionOwner
         */
        this.queryCollectionOwnerAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/collectionOwner`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCollectionOwner
         * @summary Queries a collectionOwner by index.
         * @request GET:/str11ngfello/moonloop/moonloop/collectionOwner/{index}
         */
        this.queryCollectionOwner = (index, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/collectionOwner/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryContributionAll
         * @summary Queries a list of contribution items.
         * @request GET:/str11ngfello/moonloop/moonloop/contribution
         */
        this.queryContributionAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/contribution`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryContribution
         * @summary Queries a contribution by index.
         * @request GET:/str11ngfello/moonloop/moonloop/contribution/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}/{instanceIndex}
         */
        this.queryContribution = (collectionIndex, classTemplateIndex, powerupTemplateIndex, instanceIndex, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/contribution/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}/${instanceIndex}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryGetInstance
         * @summary Queries a list of getInstance items.
         * @request GET:/str11ngfello/moonloop/moonloop/getInstance
         */
        this.queryGetInstance = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/getInstance`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryInstanceOwnerAll
         * @summary Queries a list of instanceOwner items.
         * @request GET:/str11ngfello/moonloop/moonloop/instanceOwner
         */
        this.queryInstanceOwnerAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/instanceOwner`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryInstanceOwner
         * @summary Queries a instanceOwner by index.
         * @request GET:/str11ngfello/moonloop/moonloop/instanceOwner/{index}
         */
        this.queryInstanceOwner = (index, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/instanceOwner/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryMintStrategyAll
         * @summary Queries a list of mintStrategy items.
         * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy
         */
        this.queryMintStrategyAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/mintStrategy`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryMintStrategy
         * @summary Queries a mintStrategy by index.
         * @request GET:/str11ngfello/moonloop/moonloop/mintStrategy/{index}
         */
        this.queryMintStrategy = (index, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/mintStrategy/${index}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPowerupAll
         * @summary Queries a list of powerup items.
         * @request GET:/str11ngfello/moonloop/moonloop/powerup
         */
        this.queryPowerupAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/powerup`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPowerup
         * @summary Queries a powerup by index.
         * @request GET:/str11ngfello/moonloop/moonloop/powerup/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}/{instanceIndex}
         */
        this.queryPowerup = (collectionIndex, classTemplateIndex, powerupTemplateIndex, instanceIndex, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/powerup/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}/${instanceIndex}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPowerupTemplateAll
         * @summary Queries a list of powerupTemplate items.
         * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate
         */
        this.queryPowerupTemplateAll = (query, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/powerupTemplate`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPowerupTemplate
         * @summary Queries a powerupTemplate by index.
         * @request GET:/str11ngfello/moonloop/moonloop/powerupTemplate/{collectionIndex}/{classTemplateIndex}/{powerupTemplateIndex}
         */
        this.queryPowerupTemplate = (collectionIndex, classTemplateIndex, powerupTemplateIndex, params = {}) => this.request({
            path: `/str11ngfello/moonloop/moonloop/powerupTemplate/${collectionIndex}/${classTemplateIndex}/${powerupTemplateIndex}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
