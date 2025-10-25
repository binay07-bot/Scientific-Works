import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Bhubaneswar office coordinates - 3rd Floor, LP-110, Prasanti Vihar, KIIT Post
    const coords: [number, number] = [85.8245, 20.3545];

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'lfmaps-raster': {
            type: 'raster',
            tiles: ['https://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'lfmaps-layer',
            type: 'raster',
            source: 'lfmaps-raster',
            minzoom: 0,
            maxzoom: 22
          }
        ],
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf'
      },
      center: coords,
      zoom: 15,
    });

    // Add marker for office location
    new maplibregl.Marker({ color: '#00ffbf' })
      .setLngLat(coords)
      .setPopup(
        new maplibregl.Popup().setHTML(
          '<strong>SCIENTIFIC WORK</strong><br />3rd Floor, LP-110, Prasanti Vihar<br />KIIT Post, Bhubaneswar'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-96 rounded-lg" />;
};

export default Map;
