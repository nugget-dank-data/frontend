import React from 'react'
import Sidepane from '@/components/Sidepane'

export default function Home() {
  return (
    <div className='flex'>
<div className='flex flex-col'>
      <a href="admin/login">admin login</a>
      <a href="compare">compare</a>
      <a href="competitive_sets">competitive sets</a>
      <a href="docs/terms_of_service">terms of service</a>
      <a href="docs/privacy_policy">privacy_policy</a>
      <a href="settings/reset_password">reseet password</a>
      <a href="settings">settings</a>
      <a href="login"></a>
      </div>
    </div>
  )
}
