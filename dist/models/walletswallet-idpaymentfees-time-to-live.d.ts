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
/**
 * The TTL (time to live) is the time period in which the transaction will be accepted into node mempools.  After the TTL has lapsed, the transaction is considered expired. At this point, nodes will give up on broadcasting the transaction, and the wallet will release the funds allocated to the transaction so they can be used for other payments.  The TTL should be long enough that the transaction has time to be propagated through the network and confirmed, but short enough so that - in the event of failures - UTxO are returned to the wallet in a timely manner.  The TTL value is given in seconds. It will be converted to a slot number internally.  If the TTL is not provided for a payment, a reasonable default value will be used.
 * @export
 * @interface WalletswalletIdpaymentfeesTimeToLive
 */
export interface WalletswalletIdpaymentfeesTimeToLive {
    /**
     *
     * @type {number}
     * @memberof WalletswalletIdpaymentfeesTimeToLive
     */
    quantity: any;
    /**
     *
     * @type {string}
     * @memberof WalletswalletIdpaymentfeesTimeToLive
     */
    unit: WalletswalletIdpaymentfeesTimeToLiveUnitEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum WalletswalletIdpaymentfeesTimeToLiveUnitEnum {
    Second = "second"
}