import { createContext, useContext } from "react";

// Define the shape of a GeoJSON feature
interface GeoJSONGeometry {
  type: "Polygon" | "Rectangle";
  coordinates: number[][][];
}

interface GeoJSONFeature {
  type: "Feature";
  geometry: GeoJSONGeometry;
  properties?: Record<string, unknown>;
}

// Shape data can be a GeoJSON feature, stringified JSON, or null
export type ShapeData = GeoJSONFeature | string | null;

type ShapeContextType = {
  shapeData: ShapeData;
  setShapeData: (data: ShapeData) => void;
};

export const ShapeContext = createContext<ShapeContextType>({
  shapeData: null,
  setShapeData: () => {},
});

export const useShape = () => useContext(ShapeContext);
