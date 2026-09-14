// ১. চট্টগ্রামের স্টাডি সীমানা
var chittagong = ee.Geometry.Rectangle([91.50, 22.00, 92.00, 22.80]);

// ২. আগস্ট ২০২৪-এর Sentinel-2 ইমেজ ফিল্টার
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(chittagong)
  .filterDate('2024-08-01', '2024-08-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .median()
  .clip(chittagong);

// ৩. NDWI হিসাব (Sentinel-2 এর B3=Green, B8=NIR)
var ndwi = s2.normalizedDifference(['B3', 'B8']).rename('NDWI');

// ৪. ম্যাপে দেখানো
Map.centerObject(chittagong, 10);
Map.addLayer(ndwi, {min: -0.3, max: 0.5, palette: ['brown', 'white', 'cyan', 'blue']}, 'Chittagong NDWI');

// ৫. গুগল ড্রাইভে Export
Export.image.toDrive({
  image: ndwi,
  description: 'Chittagong_NDWI_August_2024',
  scale: 10,
  region: chittagong,
  maxPixels: 1e13
});// ১. চট্টগ্রামের স্টাডি সীমানা
var chittagong = ee.Geometry.Rectangle([91.50, 22.00, 92.00, 22.80]);

// ২. আগস্ট ২০২৪-এর Sentinel-2 ইমেজ ফিল্টার
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(chittagong)
  .filterDate('2024-08-01', '2024-08-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
  .median()
  .clip(chittagong);

// ৩. NDWI হিসাব (Sentinel-2 এর B3=Green, B8=NIR)
var ndwi = s2.normalizedDifference(['B3', 'B8']).rename('NDWI');

// ৪. ম্যাপে দেখানো
Map.centerObject(chittagong, 10);
Map.addLayer(ndwi, {min: -0.3, max: 0.5, palette: ['brown', 'white', 'cyan', 'blue']}, 'Chittagong NDWI');

// ৫. গুগল ড্রাইভে Export
Export.image.toDrive({
  image: ndwi,
  description: 'Chittagong_NDWI_August_2024',
  scale: 10,
  region: chittagong,
  maxPixels: 1e13
});