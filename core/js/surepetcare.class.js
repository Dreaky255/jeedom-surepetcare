/* This file is part of Jeedom.
*
* Jeedom is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* Jeedom is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
*/


jeedom.surepetcare = function() {};
jeedom.surepetcare.node = function() {};

jeedom.surepetcare.config = function(_params){
  var paramsRequired = ['gateway'];
  var paramsSpecifics = {};
  try {
    jeedom.private.checkParamsRequired(_params || {}, paramsRequired);
  } catch (e) {
    (_params.error || paramsSpecifics.error || jeedom.private.default_params.error)(e);
    return;
  }
  var params = $.extend({}, jeedom.private.default_params, paramsSpecifics, _params || {});
  var paramsAJAX = jeedom.private.getParamsAJAX(params);
  paramsAJAX.url = 'plugins/surepetcare/core/php/jeeSurepetcareProxy.php';
  paramsAJAX.data = {
    gateway : _params.gateway,
    request: '/config',
    data : json_encode(_params.data) || '{}',
    type : _params.type || 'POST',
  };
  $.ajax(paramsAJAX);
}

jeedom.surepetcare.config.reset = function(_params){
  var paramsRequired = ['gateway'];
  var paramsSpecifics = {};
  try {
    jeedom.private.checkParamsRequired(_params || {}, paramsRequired);
  } catch (e) {
    (_params.error || paramsSpecifics.error || jeedom.private.default_params.error)(e);
    return;
  }
  var params = $.extend({}, jeedom.private.default_params, paramsSpecifics, _params || {});
  var paramsAJAX = jeedom.private.getParamsAJAX(params);
  paramsAJAX.url = 'plugins/surepetcare/core/php/jeeSurepetcareProxy.php';
  paramsAJAX.data = {
    gateway : _params.gateway,
    request: '/config/reset',
    data : json_encode({deleteDB : true,resetGW : true}),
    type : 'POST',
  };
  $.ajax(paramsAJAX);
}


