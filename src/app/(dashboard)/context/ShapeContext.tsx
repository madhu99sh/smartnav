import { createContext, useContext } from "react";


type ShapeContextType = {
  shapeData: any;
  setShapeData: (data: any) => void;
};

export const ShapeContext = createContext<ShapeContextType>({
  shapeData: null,
  setShapeData: () => {},
});

export const useShape = () => useContext(ShapeContext);