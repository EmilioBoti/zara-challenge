'use client'

import { motion } from 'framer-motion'
import styles from './Search.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'


type SearchBarProps = {
  result: number,
  onValueChanged: (value: string) => void
}

type SearchType = {
  result: string,
  isFromSearch: boolean
}

export default function SearchBar(
  { result = 0, onValueChanged }: SearchBarProps,
) {
  const [value, setValue ] = useState<SearchType>({ result: '',isFromSearch: false })
  const [debouncedValue, setDebouncedValue] = useState('')

  /**
   * wait typing stop to request the data
   */
  useEffect(() => {
    let handler = setTimeout(() => {
      setDebouncedValue(value.result)
    }, 200)

    return () => {
      clearTimeout(handler)
    }
  },[value])

  useEffect(() => {
    if(value.isFromSearch) {
      onValueChanged(value.result)
    }
  }, [debouncedValue])
  
  const updateValue = (isFromSearch: boolean, value: string) => {
    setValue({ result: value, isFromSearch: isFromSearch })
  }

  return (
    <motion.div
      className={styles.searchContainer}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.searchInputContainer}>
        <input
          className={styles.searchInput}
          type='text'
          name='input-name'
          value={value.result}
          placeholder='Search...'
          onChange={ (e) => updateValue(true, e.target.value) }
        />
        { (value.result !== '') && (
          <motion.div
            className={styles.clearInput}
            onClick={(e) => updateValue(true, '')}
          >
            <Image
              src='/ic_cross.svg'
              alt='clear Search'
              width={24}
              height={24}
            />
          </motion.div>
          )
        }
      </div>
      <div className={styles.resultContainer}>
        { result > 0 && (
          <span>{result} RESULTS</span>
        )}
      </div>
    </motion.div>
  )
}