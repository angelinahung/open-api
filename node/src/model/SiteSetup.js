/**
 * Netlify's API definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Deploy', 'model/RepoInfo', 'model/Site', 'model/SiteProcessingSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Deploy'), require('./RepoInfo'), require('./Site'), require('./SiteProcessingSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.NetlifysApiDefinition) {
      root.NetlifysApiDefinition = {};
    }
    root.NetlifysApiDefinition.SiteSetup = factory(root.NetlifysApiDefinition.ApiClient, root.NetlifysApiDefinition.Deploy, root.NetlifysApiDefinition.RepoInfo, root.NetlifysApiDefinition.Site, root.NetlifysApiDefinition.SiteProcessingSettings);
  }
}(this, function(ApiClient, Deploy, RepoInfo, Site, SiteProcessingSettings) {
  'use strict';




  /**
   * The SiteSetup model module.
   * @module model/SiteSetup
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteSetup</code>.
   * @alias module:model/SiteSetup
   * @class
   * @implements module:model/Site
   */
  var exports = function() {
    var _this = this;

    Site.call(_this);

  };

  /**
   * Constructs a <code>SiteSetup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteSetup} obj Optional instance to populate.
   * @return {module:model/SiteSetup} The populated <code>SiteSetup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Site.constructFromObject(data, obj);
      if (data.hasOwnProperty('repo')) {
        obj['repo'] = RepoInfo.constructFromObject(data['repo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RepoInfo} repo
   */
  exports.prototype['repo'] = undefined;

  // Implement Site interface:
  /**
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {String} state
   */
exports.prototype['state'] = undefined;

  /**
   * @member {String} plan
   */
exports.prototype['plan'] = undefined;

  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {String} custom_domain
   */
exports.prototype['custom_domain'] = undefined;

  /**
   * @member {Array.<String>} domain_aliases
   */
exports.prototype['domain_aliases'] = undefined;

  /**
   * @member {String} password
   */
exports.prototype['password'] = undefined;

  /**
   * @member {String} notification_email
   */
exports.prototype['notification_email'] = undefined;

  /**
   * @member {String} url
   */
exports.prototype['url'] = undefined;

  /**
   * @member {String} ssl_url
   */
exports.prototype['ssl_url'] = undefined;

  /**
   * @member {String} admin_url
   */
exports.prototype['admin_url'] = undefined;

  /**
   * @member {String} screenshot_url
   */
exports.prototype['screenshot_url'] = undefined;

  /**
   * @member {String} created_at
   */
exports.prototype['created_at'] = undefined;

  /**
   * @member {String} updated_at
   */
exports.prototype['updated_at'] = undefined;

  /**
   * @member {String} user_id
   */
exports.prototype['user_id'] = undefined;

  /**
   * @member {String} session_id
   */
exports.prototype['session_id'] = undefined;

  /**
   * @member {Boolean} ssl
   */
exports.prototype['ssl'] = undefined;

  /**
   * @member {Boolean} force_ssl
   */
exports.prototype['force_ssl'] = undefined;

  /**
   * @member {Boolean} managed_dns
   */
exports.prototype['managed_dns'] = undefined;

  /**
   * @member {String} deploy_url
   */
exports.prototype['deploy_url'] = undefined;

  /**
   * @member {module:model/Deploy} published_deploy
   */
exports.prototype['published_deploy'] = undefined;

  /**
   * @member {String} account_name
   */
exports.prototype['account_name'] = undefined;

  /**
   * @member {String} account_slug
   */
exports.prototype['account_slug'] = undefined;

  /**
   * @member {String} git_provider
   */
exports.prototype['git_provider'] = undefined;

  /**
   * @member {String} deploy_hook
   */
exports.prototype['deploy_hook'] = undefined;

  /**
   * @member {Object.<String, Object>} capabilities
   */
exports.prototype['capabilities'] = undefined;

  /**
   * @member {module:model/SiteProcessingSettings} processing_settings
   */
exports.prototype['processing_settings'] = undefined;

  /**
   * @member {module:model/RepoInfo} build_settings
   */
exports.prototype['build_settings'] = undefined;



  return exports;
}));

