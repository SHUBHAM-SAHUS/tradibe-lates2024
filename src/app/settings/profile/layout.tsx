import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'
import { childrenPropsTypes } from 'interfaces'

export const metadata: Metadata = {
  title: 'Profile page',
  description: 'Profile Data',
}

const ProfileLayout: React.FC<childrenPropsTypes> = ({ children }) => {
  return (
    <Suspense fallback={<Spinner className="m-auto h-10 w-10 stroke-neutral-100 dark:stroke-neutral-800" />}>
      {children}
    </Suspense>
  )
}

export default ProfileLayout