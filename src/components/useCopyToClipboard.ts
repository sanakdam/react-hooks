import { useCallback, useEffect, useState } from 'react'

const useCopyToClipboard = (): [boolean, (text: string) => void] => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, 2000)

      return () => clearTimeout(timeoutId)
    }

    return
  }, [isCopied])

  return [isCopied, copyToClipboard]
}

export default useCopyToClipboard
