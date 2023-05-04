import { useEffect, useState } from 'react'

const useFetchData = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

export default useFetchData
