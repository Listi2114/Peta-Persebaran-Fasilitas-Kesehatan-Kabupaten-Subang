var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bentuk_Lahan_1 = new ol.format.GeoJSON();
var features_Bentuk_Lahan_1 = format_Bentuk_Lahan_1.readFeatures(json_Bentuk_Lahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bentuk_Lahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bentuk_Lahan_1.addFeatures(features_Bentuk_Lahan_1);
var lyr_Bentuk_Lahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bentuk_Lahan_1, 
                style: style_Bentuk_Lahan_1,
                popuplayertitle: "Bentuk_Lahan",
                interactive: true,
                title: '<img src="styles/legend/Bentuk_Lahan_1.png" /> Bentuk_Lahan'
            });
var format_Jalan_Lokal_2 = new ol.format.GeoJSON();
var features_Jalan_Lokal_2 = format_Jalan_Lokal_2.readFeatures(json_Jalan_Lokal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Lokal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Lokal_2.addFeatures(features_Jalan_Lokal_2);
var lyr_Jalan_Lokal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Lokal_2, 
                style: style_Jalan_Lokal_2,
                popuplayertitle: "Jalan_Lokal",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Lokal_2.png" /> Jalan_Lokal'
            });
var format_Kesehatan_Lain_3 = new ol.format.GeoJSON();
var features_Kesehatan_Lain_3 = format_Kesehatan_Lain_3.readFeatures(json_Kesehatan_Lain_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_Lain_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_Lain_3.addFeatures(features_Kesehatan_Lain_3);
var lyr_Kesehatan_Lain_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_Lain_3, 
                style: style_Kesehatan_Lain_3,
                popuplayertitle: "Kesehatan_Lain",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_Lain_3.png" /> Kesehatan_Lain'
            });
var format_Rumah_Sakit_4 = new ol.format.GeoJSON();
var features_Rumah_Sakit_4 = format_Rumah_Sakit_4.readFeatures(json_Rumah_Sakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Sakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Sakit_4.addFeatures(features_Rumah_Sakit_4);
var lyr_Rumah_Sakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Sakit_4, 
                style: style_Rumah_Sakit_4,
                popuplayertitle: "Rumah_Sakit",
                interactive: true,
                title: '<img src="styles/legend/Rumah_Sakit_4.png" /> Rumah_Sakit'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bentuk_Lahan_1.setVisible(true);lyr_Jalan_Lokal_2.setVisible(true);lyr_Kesehatan_Lain_3.setVisible(true);lyr_Rumah_Sakit_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bentuk_Lahan_1,lyr_Jalan_Lokal_2,lyr_Kesehatan_Lain_3,lyr_Rumah_Sakit_4];
lyr_Bentuk_Lahan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_Lokal_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Kesehatan_Lain_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_Rumah_Sakit_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Bentuk_Lahan_1.set('fieldImages', {'OBJECTID': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Jalan_Lokal_2.set('fieldImages', {'OBJECTID': '', 'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Le_1': '', 'SHAPE_Length': '', });
lyr_Kesehatan_Lain_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUAS': '', 'REMARK': '', 'TIPSHT': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FSKADD': '', });
lyr_Rumah_Sakit_4.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_Bentuk_Lahan_1.set('fieldLabels', {'OBJECTID': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'inline label - visible with data', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_Lokal_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMRJL': 'inline label - visible with data', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Length': 'no label', });
lyr_Kesehatan_Lain_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_Rumah_Sakit_4.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Rumah_Sakit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});