import React from 'react'
import { Grid } from 'danni-s-design-system'
import { Header } from './Header'

export const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Grid>{children}</Grid>
    {/* <Footer /> */}
  </>
)
