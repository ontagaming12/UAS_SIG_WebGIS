ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11872461.064492, -718013.492556, 11930003.931274, -670660.508433]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_DKIJakartabatas_dki_jakarta_1 = new ol.format.GeoJSON();
var features_Batas_DKIJakartabatas_dki_jakarta_1 = format_Batas_DKIJakartabatas_dki_jakarta_1.readFeatures(json_Batas_DKIJakartabatas_dki_jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_DKIJakartabatas_dki_jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_DKIJakartabatas_dki_jakarta_1.addFeatures(features_Batas_DKIJakartabatas_dki_jakarta_1);
var lyr_Batas_DKIJakartabatas_dki_jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_DKIJakartabatas_dki_jakarta_1, 
                style: style_Batas_DKIJakartabatas_dki_jakarta_1,
                popuplayertitle: 'Batas_DKI Jakarta — batas_dki_jakarta',
                interactive: true,
                title: '<img src="styles/legend/Batas_DKIJakartabatas_dki_jakarta_1.png" /> Batas_DKI Jakarta — batas_dki_jakarta'
            });
var format_Buffered_TMUbuffered_tmu_2 = new ol.format.GeoJSON();
var features_Buffered_TMUbuffered_tmu_2 = format_Buffered_TMUbuffered_tmu_2.readFeatures(json_Buffered_TMUbuffered_tmu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_TMUbuffered_tmu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_TMUbuffered_tmu_2.addFeatures(features_Buffered_TMUbuffered_tmu_2);
var lyr_Buffered_TMUbuffered_tmu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_TMUbuffered_tmu_2, 
                style: style_Buffered_TMUbuffered_tmu_2,
                popuplayertitle: 'Buffered_TMU — buffered_tmu',
                interactive: true,
                title: '<img src="styles/legend/Buffered_TMUbuffered_tmu_2.png" /> Buffered_TMU — buffered_tmu'
            });
var format_Lokasi_TMUlokasi_tmu_3 = new ol.format.GeoJSON();
var features_Lokasi_TMUlokasi_tmu_3 = format_Lokasi_TMUlokasi_tmu_3.readFeatures(json_Lokasi_TMUlokasi_tmu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_TMUlokasi_tmu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_TMUlokasi_tmu_3.addFeatures(features_Lokasi_TMUlokasi_tmu_3);
var lyr_Lokasi_TMUlokasi_tmu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_TMUlokasi_tmu_3, 
                style: style_Lokasi_TMUlokasi_tmu_3,
                popuplayertitle: 'Lokasi_TMU — lokasi_tmu',
                interactive: true,
    title: 'Lokasi_TMU — lokasi_tmu<br />\
    <img src="styles/legend/Lokasi_TMUlokasi_tmu_3_0.png" /> Tersedia<br />\
    <img src="styles/legend/Lokasi_TMUlokasi_tmu_3_1.png" /> Waspada<br />\
    <img src="styles/legend/Lokasi_TMUlokasi_tmu_3_2.png" /> Kritis<br />' });
var format_RPTRArptra_4 = new ol.format.GeoJSON();
var features_RPTRArptra_4 = format_RPTRArptra_4.readFeatures(json_RPTRArptra_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPTRArptra_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPTRArptra_4.addFeatures(features_RPTRArptra_4);
var lyr_RPTRArptra_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPTRArptra_4, 
                style: style_RPTRArptra_4,
                popuplayertitle: 'RPTRA — rptra',
                interactive: true,
                title: '<img src="styles/legend/RPTRArptra_4.png" /> RPTRA — rptra'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_DKIJakartabatas_dki_jakarta_1.setVisible(true);lyr_Buffered_TMUbuffered_tmu_2.setVisible(true);lyr_Lokasi_TMUlokasi_tmu_3.setVisible(true);lyr_RPTRArptra_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_DKIJakartabatas_dki_jakarta_1,lyr_Buffered_TMUbuffered_tmu_2,lyr_Lokasi_TMUlokasi_tmu_3,lyr_RPTRArptra_4];
lyr_Batas_DKIJakartabatas_dki_jakarta_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'access': 'access', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'type': 'type', 'short_name': 'short_name', 'official_name': 'official_name', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:en': 'name:en', 'name:bew': 'name:bew', 'name:ar': 'name:ar', 'name': 'name', 'boundary': 'boundary', 'alt_name': 'alt_name', 'admin_level': 'admin_level', });
lyr_Buffered_TMUbuffered_tmu_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name:id': 'name:id', 'name:en': 'name:en', 'addr:postcode': 'addr:postcode', 'animal': 'animal', 'addr:full': 'addr:full', 'email': 'email', 'amenity': 'amenity', 'alt_name': 'alt_name', 'religion': 'religion', 'phone': 'phone', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:block': 'addr:block', 'start_date': 'start_date', 'short_name': 'short_name', 'official_name': 'official_name', 'flood_prone': 'flood_prone', 'evacuation_center': 'evacuation_center', 'addr:city': 'addr:city', 'wikipedia:en': 'wikipedia:en', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'website': 'website', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:nl': 'name:nl', 'name': 'name', 'int_name': 'int_name', 'nama_tmu': 'nama_tmu', 'kapasitas': 'kapasitas', 'status': 'status', 'tahun': 'tahun', 'luas_m2': 'luas_m2', });
lyr_Lokasi_TMUlokasi_tmu_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name:id': 'name:id', 'name:en': 'name:en', 'addr:postcode': 'addr:postcode', 'animal': 'animal', 'addr:full': 'addr:full', 'email': 'email', 'amenity': 'amenity', 'alt_name': 'alt_name', 'religion': 'religion', 'phone': 'phone', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:block': 'addr:block', 'start_date': 'start_date', 'short_name': 'short_name', 'official_name': 'official_name', 'flood_prone': 'flood_prone', 'evacuation_center': 'evacuation_center', 'addr:city': 'addr:city', 'wikipedia:en': 'wikipedia:en', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'website': 'website', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:nl': 'name:nl', 'name': 'name', 'int_name': 'int_name', 'nama_tmu': 'nama_tmu', 'kapasitas': 'kapasitas', 'status': 'status', 'tahun': 'tahun', 'luas_m2': 'luas_m2', });
lyr_RPTRArptra_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'opening_hours': 'opening_hours', 'addr:housenumber': 'addr:housenumber', 'playground:theme': 'playground:theme', 'addr:full': 'addr:full', 'surface': 'surface', 'operator': 'operator', 'name': 'name', 'min_age': 'min_age', 'max_age': 'max_age', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'access': 'access', 'Fasilitas': 'Fasilitas', });
lyr_Batas_DKIJakartabatas_dki_jakarta_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'access': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'type': 'TextEdit', 'short_name': 'TextEdit', 'official_name': 'TextEdit', 'name:ko': 'TextEdit', 'name:ja': 'TextEdit', 'name:en': 'TextEdit', 'name:bew': 'TextEdit', 'name:ar': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'alt_name': 'TextEdit', 'admin_level': 'TextEdit', });
lyr_Buffered_TMUbuffered_tmu_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'name:id': 'TextEdit', 'name:en': 'TextEdit', 'addr:postcode': 'TextEdit', 'animal': 'TextEdit', 'addr:full': 'TextEdit', 'email': 'TextEdit', 'amenity': 'TextEdit', 'alt_name': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:block': 'TextEdit', 'start_date': 'TextEdit', 'short_name': 'TextEdit', 'official_name': 'TextEdit', 'flood_prone': 'TextEdit', 'evacuation_center': 'TextEdit', 'addr:city': 'TextEdit', 'wikipedia:en': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'name:nl': 'TextEdit', 'name': 'TextEdit', 'int_name': 'TextEdit', 'nama_tmu': 'TextEdit', 'kapasitas': 'Range', 'status': 'TextEdit', 'tahun': 'Range', 'luas_m2': 'TextEdit', });
lyr_Lokasi_TMUlokasi_tmu_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'name:id': 'TextEdit', 'name:en': 'TextEdit', 'addr:postcode': 'TextEdit', 'animal': 'TextEdit', 'addr:full': 'TextEdit', 'email': 'TextEdit', 'amenity': 'TextEdit', 'alt_name': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:block': 'TextEdit', 'start_date': 'TextEdit', 'short_name': 'TextEdit', 'official_name': 'TextEdit', 'flood_prone': 'TextEdit', 'evacuation_center': 'TextEdit', 'addr:city': 'TextEdit', 'wikipedia:en': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'name:nl': 'TextEdit', 'name': 'TextEdit', 'int_name': 'TextEdit', 'nama_tmu': 'TextEdit', 'kapasitas': 'Range', 'status': 'TextEdit', 'tahun': 'Range', 'luas_m2': 'TextEdit', });
lyr_RPTRArptra_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'opening_hours': 'TextEdit', 'addr:housenumber': 'TextEdit', 'playground:theme': 'TextEdit', 'addr:full': 'TextEdit', 'surface': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'min_age': 'TextEdit', 'max_age': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'access': 'TextEdit', 'Fasilitas': 'TextEdit', });
lyr_Batas_DKIJakartabatas_dki_jakarta_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'place': 'no label', 'access': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'website': 'no label', 'type': 'no label', 'short_name': 'no label', 'official_name': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:en': 'no label', 'name:bew': 'no label', 'name:ar': 'no label', 'name': 'no label', 'boundary': 'no label', 'alt_name': 'no label', 'admin_level': 'no label', });
lyr_Buffered_TMUbuffered_tmu_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'name:id': 'no label', 'name:en': 'no label', 'addr:postcode': 'no label', 'animal': 'no label', 'addr:full': 'no label', 'email': 'no label', 'amenity': 'no label', 'alt_name': 'no label', 'religion': 'no label', 'phone': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:block': 'no label', 'start_date': 'no label', 'short_name': 'no label', 'official_name': 'no label', 'flood_prone': 'no label', 'evacuation_center': 'no label', 'addr:city': 'no label', 'wikipedia:en': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'website': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:nl': 'no label', 'name': 'no label', 'int_name': 'no label', 'nama_tmu': 'no label', 'kapasitas': 'no label', 'status': 'no label', 'tahun': 'no label', 'luas_m2': 'no label', });
lyr_Lokasi_TMUlokasi_tmu_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'name:id': 'no label', 'name:en': 'no label', 'addr:postcode': 'no label', 'animal': 'no label', 'addr:full': 'no label', 'email': 'no label', 'amenity': 'no label', 'alt_name': 'no label', 'religion': 'no label', 'phone': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:block': 'no label', 'start_date': 'no label', 'short_name': 'no label', 'official_name': 'no label', 'flood_prone': 'no label', 'evacuation_center': 'no label', 'addr:city': 'no label', 'wikipedia:en': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'website': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:nl': 'no label', 'name': 'no label', 'int_name': 'no label', 'nama_tmu': 'no label', 'kapasitas': 'no label', 'status': 'no label', 'tahun': 'no label', 'luas_m2': 'no label', });
lyr_RPTRArptra_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'opening_hours': 'no label', 'addr:housenumber': 'no label', 'playground:theme': 'no label', 'addr:full': 'no label', 'surface': 'no label', 'operator': 'no label', 'name': 'no label', 'min_age': 'no label', 'max_age': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'access': 'no label', 'Fasilitas': 'no label', });
lyr_RPTRArptra_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});