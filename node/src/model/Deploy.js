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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NetlifysApiDefinition) {
      root.NetlifysApiDefinition = {};
    }
    root.NetlifysApiDefinition.Deploy = factory(root.NetlifysApiDefinition.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Deploy model module.
   * @module model/Deploy
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Deploy</code>.
   * @alias module:model/Deploy
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>Deploy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deploy} obj Optional instance to populate.
   * @return {module:model/Deploy} The populated <code>Deploy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('build_id')) {
        obj['build_id'] = ApiClient.convertToType(data['build_id'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('ssl_url')) {
        obj['ssl_url'] = ApiClient.convertToType(data['ssl_url'], 'String');
      }
      if (data.hasOwnProperty('admin_url')) {
        obj['admin_url'] = ApiClient.convertToType(data['admin_url'], 'String');
      }
      if (data.hasOwnProperty('deploy_url')) {
        obj['deploy_url'] = ApiClient.convertToType(data['deploy_url'], 'String');
      }
      if (data.hasOwnProperty('deploy_ssl_url')) {
        obj['deploy_ssl_url'] = ApiClient.convertToType(data['deploy_ssl_url'], 'String');
      }
      if (data.hasOwnProperty('screenshot_url')) {
        obj['screenshot_url'] = ApiClient.convertToType(data['screenshot_url'], 'String');
      }
      if (data.hasOwnProperty('review_id')) {
        obj['review_id'] = ApiClient.convertToType(data['review_id'], 'Number');
      }
      if (data.hasOwnProperty('draft')) {
        obj['draft'] = ApiClient.convertToType(data['draft'], 'Boolean');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], ['String']);
      }
      if (data.hasOwnProperty('required_functions')) {
        obj['required_functions'] = ApiClient.convertToType(data['required_functions'], ['String']);
      }
      if (data.hasOwnProperty('error_message')) {
        obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
      }
      if (data.hasOwnProperty('branch')) {
        obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
      }
      if (data.hasOwnProperty('commit_ref')) {
        obj['commit_ref'] = ApiClient.convertToType(data['commit_ref'], 'String');
      }
      if (data.hasOwnProperty('commit_url')) {
        obj['commit_url'] = ApiClient.convertToType(data['commit_url'], 'String');
      }
      if (data.hasOwnProperty('skipped')) {
        obj['skipped'] = ApiClient.convertToType(data['skipped'], 'Boolean');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
      if (data.hasOwnProperty('published_at')) {
        obj['published_at'] = ApiClient.convertToType(data['published_at'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('review_url')) {
        obj['review_url'] = ApiClient.convertToType(data['review_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} site_id
   */
  exports.prototype['site_id'] = undefined;
  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} build_id
   */
  exports.prototype['build_id'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
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
   * @member {String} deploy_url
   */
  exports.prototype['deploy_url'] = undefined;
  /**
   * @member {String} deploy_ssl_url
   */
  exports.prototype['deploy_ssl_url'] = undefined;
  /**
   * @member {String} screenshot_url
   */
  exports.prototype['screenshot_url'] = undefined;
  /**
   * @member {Number} review_id
   */
  exports.prototype['review_id'] = undefined;
  /**
   * @member {Boolean} draft
   */
  exports.prototype['draft'] = undefined;
  /**
   * @member {Array.<String>} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {Array.<String>} required_functions
   */
  exports.prototype['required_functions'] = undefined;
  /**
   * @member {String} error_message
   */
  exports.prototype['error_message'] = undefined;
  /**
   * @member {String} branch
   */
  exports.prototype['branch'] = undefined;
  /**
   * @member {String} commit_ref
   */
  exports.prototype['commit_ref'] = undefined;
  /**
   * @member {String} commit_url
   */
  exports.prototype['commit_url'] = undefined;
  /**
   * @member {Boolean} skipped
   */
  exports.prototype['skipped'] = undefined;
  /**
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * @member {String} published_at
   */
  exports.prototype['published_at'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * @member {String} review_url
   */
  exports.prototype['review_url'] = undefined;



  return exports;
}));

