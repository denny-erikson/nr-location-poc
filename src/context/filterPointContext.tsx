import { createContext, useState } from "react";
import {PointType}  from "../commons/pointEnum";

interface FilterPointContextProps {
    point: PointType | null
    setPoint: (point: PointType) => void
}

export const FilterPointContext = createContext<FilterPointContextProps>({
    point: null,
    setPoint: (point: PointType) => {}
})

interface FilterPointProviderProps {
    children: React.ReactNode
}

export const FilterPointContextProvider = ({children}: FilterPointProviderProps) => {
    const [point, setPoint] = useState<PointType | null>(null)

    const provider = {
        point: point,
        setPoint: (point: PointType) => setPoint(point)
    }
    
    return (
        <FilterPointContext.Provider value={provider}>
            {children}
        </FilterPointContext.Provider>
    )
}