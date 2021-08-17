import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import Link from 'next/link'
import { HoverableText, Text } from 'danni-s-design-system'

import { Locale } from 'types'

type ContentsItemProps = {
  locale: Locale
  link: string
  text: string
  isWIP?: boolean
  multilingual?: boolean
  extra?: React.ReactNode | React.ReactNode[]
}

export const ContentsItem: React.FC<ContentsItemProps> = ({
  locale,
  link,
  text,
  isWIP,
  multilingual,
  extra,
}) => {
  const { t } = useTranslation('common')
  const notEnglishLocale = locale !== 'en-GB' && locale !== 'en-US'

  return (
    <>
      <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
        <Link href={`/${link}`} passHref>
          <Text>
            <HoverableText variant="bodyMd" bold>
              {text} {isWIP && '[WIP 🚀]'}
            </HoverableText>
            {!multilingual && notEnglishLocale && t('only_english')}
          </Text>
        </Link>
      </motion.div>
      {extra}
    </>
  )
}
