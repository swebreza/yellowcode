import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Main = () => {
  const [datas, setData] = useState({
    success: '',
    id: {
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      registration_status: '',
      force_refresh_at: '',
      locale: '',
      country_code: '',
      date_format: '',
      default_currency: '',
      default_group_id: '',
      notifications_read: '',
      notifications_count: '',
      notifications: {
        added_as_friend: '',
        added_to_group: '',
        expense_added: '',
        expense_updated: '',
        bills: '',
        payments: '',
        monthly_summary: '',
        announcements: '',
      },
    },
  })

  var config = {
    url: 'http://localhost:3000/getCurrentUser',
  }

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data))
        console.log(response.data)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const onClickHandle = () => {
    console.log('click')
  }

  return (
    <div className='p-10 '>
      Apple
      {datas.id.first_name}
      <div className='p-4 '>
        <span>
          {' '}
          <Link
            to='/qr'
            className='p-4 rounded shadow bg-sky-600 hover:bg-pink-900 hover:text-white'
            onClick={onClickHandle}
          >
            get QR Code
          </Link>
        </span>
        <span> </span>
      </div>
    </div>
  )
}

export default Main
