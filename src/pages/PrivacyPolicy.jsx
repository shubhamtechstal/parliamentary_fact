import { privacyPolicy } from 'components/data'
import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer data={privacyPolicy} heading={"Privacy Policy"}/>
  )
}
