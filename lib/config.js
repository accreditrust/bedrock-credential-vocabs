/*
 * Bedrock Credential Vocabs Module Configuration
 *
 * Copyright (c) 2015 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;
var path = require('path');

// dependencies
require('bedrock-express');
require('bedrock-views');

config['credential-vocabs'] = {};

// serve contexts and vocabs
config.express.static.push(path.join(__dirname, '..', 'static'));

// setup to load vocabs
var vars = config.views.vars['bedrock-angular-credential'] =
  config.views.vars['bedrock-angular-credential'] || {};
var libs = vars.libraries = vars.libraries || {};
var def = libs.default = libs.default || {};
var vocabs = def.vocabs = def.vocabs || [];
vocabs.push(
  config.server.baseUri + '/vocabs/bedrock-credentials-v1.jsonld'
);
