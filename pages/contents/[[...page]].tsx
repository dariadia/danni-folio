import React from 'react'
import { NextApiRequest } from 'next'

import { motion } from 'framer-motion'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useUserAgent } from 'next-useragent'
import { isDeviceDesktop } from 'utils/device'

import Link from 'next/link'
import { baseTheme } from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
// import { GoToMainButton, SelfAvatar } from '@/components'

import type { Page, Locale, ContentsPage as ContentsPageProps } from 'types'

const ContentsPage: Page<ContentsPageProps> = ({ userAgentString }) => {
  const userAgent = useUserAgent(userAgentString || window.navigator.userAgent)
  const isDesktop = isDeviceDesktop(userAgent)

  const moveSelfAvatarX = -baseTheme.space.elephant - baseTheme.space.xl
  const moveSelfAvatarY = -baseTheme.space.elephant * 2 + baseTheme.space.l

  const moveButtonX = baseTheme.space.elephant
  const moveButtonY = -baseTheme.space.xxl

  return isDesktop ? (
    <>
      <Link href="/" passHref>
        <motion.div
          className="selfAvatar"
          layoutId="selfAvatar"
          style={{ cursor: 'pointer' }}
          initial={{
            scale: 0.4,
            x: moveSelfAvatarX,
            y: moveSelfAvatarY,
          }}
        >
          {/* <SelfAvatar /> */}
        </motion.div>
      </Link>
      <Link href="/" passHref>
        <motion.a
          style={{ textDecoration: 'none', height: 'fit-content' }}
          layoutId="navButton"
          initial={{ scale: 0.47, x: moveButtonX, y: moveButtonY }}
          whileHover={{ scale: 0.5 }}
          whileTap={{ scale: 0.5 }}
        >
          {/* <GoToMainButton /> */}
        </motion.a>
      </Link>
    </>
  ) : (
    <Link href="/" passHref>
      <motion.a
        style={{ textDecoration: 'none', height: 'fit-content' }}
        layoutId="navButton"
      >
        {/* <GoToMainButton /> */}
      </motion.a>
    </Link>
  )
}

ContentsPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getServerSideProps({
  locale,
  req,
}: {
  locale: Locale
  req: NextApiRequest
}): Promise<{ props: ContentsPageProps }> {
  return {
    props: {
      userAgentString: req.headers['user-agent'],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default ContentsPage
