import { useContext } from "react"
import { FilterPointContext } from "../context/filterPointContext"




export const useFilterPoint = () =>{
    return useContext(FilterPointContext)
}