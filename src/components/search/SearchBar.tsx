'use client'

import { motion } from 'framer-motion'
import styles from './Search.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'


type SearchBarProps = {
  result: number,
  onValueChanged: (value: string) => void
}

export default function SearchBar(
  { result = 0, onValueChanged }: SearchBarProps,
) {
  const [value, setValue ] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('');

  /**
   * wait typing stop to request the data
   */
  useEffect(() => {
    let handler = setTimeout(() => {
      setDebouncedValue(value)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  },[value])

  useEffect(() => {
    onValueChanged(value)
  }, [debouncedValue])

  return (
    <motion.div
      className={styles.searchContainer}
    >
      <div className={styles.searchInputContainer}>
        <input
        className={styles.searchInput}
        type='text'
        name='input-name'
        value={value}
        placeholder='Search...'
        onChange={ (e) => setValue(e.target.value) }
        />
        { (value != '') && (
          <motion.div
            className={styles.clearInput}
            onClick={(e) => setValue('')}
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