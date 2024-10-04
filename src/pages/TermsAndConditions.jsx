import { termsAndConditions } from 'components/data'
import PrivacyPolicyContainer from 'containers/PrivacyPolicyContainer'
import React from 'react'

export default function TermsAndConditions() {
  return (
    <PrivacyPolicyContainer data={termsAndConditions} heading={"Terms & Conditions"}/>
  )
}
