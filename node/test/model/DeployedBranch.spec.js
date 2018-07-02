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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetlifysApiDefinition);
  }
}(this, function(expect, NetlifysApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetlifysApiDefinition.DeployedBranch();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeployedBranch', function() {
    it('should create an instance of DeployedBranch', function() {
      // uncomment below and update the code to test DeployedBranch
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be.a(NetlifysApiDefinition.DeployedBranch);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

    it('should have the property deployId (base name: "deploy_id")', function() {
      // uncomment below and update the code to test the property deployId
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

    it('should have the property sslUrl (base name: "ssl_url")', function() {
      // uncomment below and update the code to test the property sslUrl
      //var instane = new NetlifysApiDefinition.DeployedBranch();
      //expect(instance).to.be();
    });

  });

}));