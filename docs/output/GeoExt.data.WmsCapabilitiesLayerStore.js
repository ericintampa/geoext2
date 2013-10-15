Ext.data.JsonP.GeoExt_data_WmsCapabilitiesLayerStore({"tagname":"class","name":"GeoExt.data.WmsCapabilitiesLayerStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"WmsCapabilitiesLayerStore.js","href":"WmsCapabilitiesLayerStore.html#GeoExt-data-WmsCapabilitiesLayerStore"}],"aliases":{},"alternateClassNames":["GeoExt.data.WMSCapabilitiesStore","GeoExt.data.WmsCapabilitiesStore"],"extends":"GeoExt.data.OwsStore","mixins":[],"requires":["GeoExt.data.reader.WmsCapabilities"],"uses":[],"members":[{"name":"format","tagname":"cfg","owner":"GeoExt.data.OwsStore","id":"cfg-format","meta":{}},{"name":"url","tagname":"cfg","owner":"GeoExt.data.OwsStore","id":"cfg-url","meta":{}},{"name":"model","tagname":"property","owner":"GeoExt.data.WmsCapabilitiesLayerStore","id":"property-model","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-constructor","meta":{"private":true}},{"name":"applyFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-applyFormat","meta":{"private":true}},{"name":"applyUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-applyUrl","meta":{"private":true}},{"name":"getFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-getFormat","meta":{}},{"name":"getUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-getUrl","meta":{}},{"name":"setFormat","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-setFormat","meta":{}},{"name":"setUrl","tagname":"method","owner":"GeoExt.data.OwsStore","id":"method-setUrl","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.WmsCapabilitiesLayerStore","short_doc":"Small helper class to make creating stores for remote WMS layer data\neasier. ...","component":false,"superclasses":["Ext.data.Store","GeoExt.data.OwsStore"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.data.WMSCapabilitiesStore</div><div class='alternate-class-name'>GeoExt.data.WmsCapabilitiesStore</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='docClass'>GeoExt.data.OwsStore</a><div class='subclass '><strong>GeoExt.data.WmsCapabilitiesLayerStore</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.reader.WmsCapabilities' rel='GeoExt.data.reader.WmsCapabilities' class='docClass'>GeoExt.data.reader.WmsCapabilities</a></div><h4>Files</h4><div class='dependency'><a href='source/WmsCapabilitiesLayerStore.html#GeoExt-data-WmsCapabilitiesLayerStore' target='_blank'>WmsCapabilitiesLayerStore.js</a></div></pre><div class='doc-contents'><p>Small helper class to make creating stores for remote WMS layer data\neasier. The store is pre-configured with a built-in\n{Ext.data.proxy.Ajax} and <a href=\"#!/api/GeoExt.data.reader.WmsCapabilities\" rel=\"GeoExt.data.reader.WmsCapabilities\" class=\"docClass\">GeoExt.data.reader.WmsCapabilities</a>.\nThe proxy is configured to allow caching and issues requests via GET.\nIf you require some other proxy/reader combination then you'll have to\nconfigure this with your own proxy.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-format' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-format' class='name expandable'>format</a> : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. ...</div><div class='long'><p>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. Defaults to an {OpenLayers.Format.WMSDescribeLayer}\nparser.</p>\n</div></div></div><div id='cfg-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The URL from which to retrieve the WMS DescribeLayer document.</p>\n</div><div class='long'><p>The URL from which to retrieve the WMS DescribeLayer document.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-model' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.WmsCapabilitiesLayerStore'>GeoExt.data.WmsCapabilitiesLayerStore</span><br/><a href='source/WmsCapabilitiesLayerStore.html#GeoExt-data-WmsCapabilitiesLayerStore-property-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.WmsCapabilitiesLayerStore-property-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'GeoExt.data.WmsCapabilitiesLayerModel'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.OwsStore-method-constructor' class='name expandable'>GeoExt.data.WmsCapabilitiesLayerStore</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.data.OwsStore\" rel=\"GeoExt.data.OwsStore\" class=\"docClass\">GeoExt.data.OwsStore</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.OwsStore\" rel=\"GeoExt.data.OwsStore\" class=\"docClass\">GeoExt.data.OwsStore</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyFormat' class='name expandable'>applyFormat</a>( <span class='pre'>newFormat</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newFormat</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-applyUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-method-applyUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-applyUrl' class='name expandable'>applyUrl</a>( <span class='pre'>newValue</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newValue</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-getFormat' class='name expandable'>getFormat</a>( <span class='pre'></span> ) : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of format. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-format\" rel=\"GeoExt.data.OwsStore-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Format</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of url. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-url\" rel=\"GeoExt.data.OwsStore-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFormat' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-setFormat' class='name expandable'>setFormat</a>( <span class='pre'>format</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of format. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-format\" rel=\"GeoExt.data.OwsStore-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : OpenLayers.Format<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setUrl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.OwsStore' rel='GeoExt.data.OwsStore' class='defined-in docClass'>GeoExt.data.OwsStore</a><br/><a href='source/OwsStore.html#GeoExt-data-OwsStore-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.OwsStore-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of url. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.OwsStore-cfg-url\" rel=\"GeoExt.data.OwsStore-cfg-url\" class=\"docClass\">url</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});