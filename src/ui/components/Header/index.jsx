import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import moneyImg from '../../../assets/images/money.png'
import flashImg from '../../../assets/images/flash.png'

const Header = () => {
  const { state } = useContext(AppContext)

  const displayMoney =
    state.money < 0 ? `-${state.money * -1}` : `${state.money}`

  return (
    <div
      style={{
        width: 200,
        display: 'flex',
        // justifyContent: 'center'
        // alignItems: 'center',
        margin: '0 auto',
        gap: 10
      }}
    >
      <div
        style={{
          background: '#e6f0e7',
          width: 95,
          paddingTop: 'env(safe-area-inset-top)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 7px',
          margin: '0 auto',
          borderRadius: '10px',
          border: '0.5px solid rgba(0, 0, 0, 0.35)',
          boxShadow:
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
        }}
      >
        <img
          style={{
            width: 'auto',
            height: 20,
            transform: 'rotate(-5deg)'
          }}
          src={moneyImg}
          alt="money"
        />
        <span style={{ fontSize: 15 }}>
          <b>{displayMoney}</b>
        </span>
      </div>
      <div
        style={{
          background: '#e6f0e7',
          width: 95,
          paddingTop: 'env(safe-area-inset-top)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 7px',
          margin: '0 auto',
          borderRadius: '10px',
          border: '0.5px solid rgba(0, 0, 0, 0.35)',
          boxShadow:
            'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
        }}
      >
        <img
          style={{
            width: 'auto',
            height: 20,
            transform: 'rotate(0deg)'
          }}
          src={flashImg}
          alt="money"
        />
        <span style={{ fontSize: 15 }}>
          <b>{10}</b>
        </span>
      </div>
    </div>
  )
}

export default Header
