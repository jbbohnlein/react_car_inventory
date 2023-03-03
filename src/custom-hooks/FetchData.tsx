import { useEffect, useState } from 'react'
import { server_calls } from '../api/server'

export const useGetData = () => {
    const [ carData, setData ] = useState<[]>([])
    // the last array in the parentheses means that the initial state will
    // just be set to an empty array

    // data processing:
    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { carData, getData: handleDataFetch }
}