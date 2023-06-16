import { useEffect, useState } from 'react'

export default function useApiSearch<S>(
  cb: (e: string) => Promise<{ data: () => S }>,
  value = ''
) {
  const [data, setData] = useState<S>([] as S)

  useEffect(() => {
    cb(value).then(({ data }) => setData(data))
  }, [value])

  return data
}
