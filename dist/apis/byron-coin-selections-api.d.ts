/**
 * Cardano Wallet Backend API
 * <p align=\"right\"><img style=\"position: relative; top: -10em; margin-bottom: -12em;\" width=\"20%\" src=\"https://cardanodocs.com/img/cardano.png\"></img></p>
 *
 * OpenAPI spec version: 2021.3.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Body19 } from '../models';
import { InlineResponse2008 } from '../models';
/**
 * ByronCoinSelectionsApi - axios parameter creator
 * @export
 */
export declare const ByronCoinSelectionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets.
     * @summary Random
     * @param {Body19} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    byronSelectCoins: (body: Body19, walletId: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ByronCoinSelectionsApi - functional programming interface
 * @export
 */
export declare const ByronCoinSelectionsApiFp: (configuration?: Configuration) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets.
     * @summary Random
     * @param {Body19} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    byronSelectCoins(body: Body19, walletId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2008>>;
};
/**
 * ByronCoinSelectionsApi - factory interface
 * @export
 */
export declare const ByronCoinSelectionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets.
     * @summary Random
     * @param {Body19} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    byronSelectCoins(body: Body19, walletId: string, options?: any): AxiosPromise<InlineResponse2008>;
};
/**
 * ByronCoinSelectionsApi - object-oriented interface
 * @export
 * @class ByronCoinSelectionsApi
 * @extends {BaseAPI}
 */
export declare class ByronCoinSelectionsApi extends BaseAPI {
    /**
     * <p align=\"right\">status: <strong>stable</strong></p>  Select coins to cover the given set of payments.  Uses the <a href=\"https://iohk.io/blog/self-organisation-in-coin-selection/\"> Random-Improve coin selection algorithm</a>.  <b>Note: </b> Not supported for Byron random wallets.
     * @summary Random
     * @param {Body19} body
     * @param {string} walletId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ByronCoinSelectionsApi
     */
    byronSelectCoins(body: Body19, walletId: string, options?: any): Promise<import("axios").AxiosResponse<InlineResponse2008>>;
}