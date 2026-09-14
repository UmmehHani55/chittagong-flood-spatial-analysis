# Geospatial Analysis of Chittagong Flood (August 2024)

## Project Overview
This project presents a spatial analysis of the severe flood event in Chittagong, Bangladesh, in August 2024. Using Sentinel-2 satellite imagery via Google Earth Engine (GEE) and cartographic layout design in QGIS, this study highlights vegetation health (NDVI) and water inundation (NDWI).

---

## Maps & Visualizations

### 1. Water Inundation Mapping (NDWI)
Mapped using Sentinel-2 Green (B3) and NIR (B8) bands to extract water bodies and flooded regions.

![NDWI Map](outputs/Chittagong_NDWI_August_2024.png)

### 2. Vegetation Health Index (NDVI)
Mapped using Sentinel-2 Red (B4) and NIR (B8) bands to assess agricultural and forest coverage during the flood period.

![NDVI Map](outputs/Chittagong_NDVI_August_2024.png)

---

## Methodology & Tools Used
- **Google Earth Engine (GEE):** Satellite data filtering, cloud masking, median composite creation, and index calculations.
- **QGIS 3.x:** Symbology customization, spatial visualization, transparent background processing, and Print Layout creation.
- **Satellite Data:** Sentinel-2 Surface Reflectance (COPERNICUS/S2_SR_HARMONIZED).

---

## Repository Structure
- `scripts/`: Contains GEE JavaScript files for NDVI and NDWI processing.
- `outputs/`: High-resolution (300 DPI) final map exports.
- `data/`: Exported spatial GeoTIFF datasets.
