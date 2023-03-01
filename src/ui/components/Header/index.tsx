import { useSelector, useDispatch } from 'react-redux'
import { moneyImg } from '@Assets/images'
import { flashImg } from '@Assets/images'
import { Link } from 'react-router-dom'
import { formatNumberWithCommas } from '@Functions/itemUtils'
import {
  resetEnergy,
  resetMoney,
  updateEnergy,
  updateMoney
} from '@Redux/slices/resourceSlice'

const Header = () => {
  const { money, energy } = useSelector((state: any) => state.resource)
  const dispatch = useDispatch()

  const displayMoney = money < 0 ? `-${money * -1}` : `${money}`

  return <h2>Header</h2>
  return (
    <>
      <div
        style={{
          width: 200,
          display: 'flex',
          // justifyContent: 'center'
          // alignItems: 'center',
          margin: '0 auto',
          paddingTop: 40,
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
          onClick={() => dispatch(resetMoney())}
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
            <b>{formatNumberWithCommas(displayMoney)}</b>
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
          onClick={() => dispatch(resetEnergy())}
        >
          <img
            style={{
              width: 'auto',
              height: 20,
              transform: 'rotate(0deg)'
            }}
            src={flashImg}
            alt="energy"
          />
          <span style={{ fontSize: 15 }}>
            <b>{energy}</b>
          </span>
        </div>
        {/* <Link to="/map">
        <button>Map</button>
      </Link> */}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* <h2>
          <Link to="/">
            <button>Home</button>
          </Link>
        </h2> */}
        <h2>
          <Link to="/battle">
            <button>Battle</button>
          </Link>
        </h2>
        <h2>
          <Link to="/city0">
            <button>City</button>
          </Link>
        </h2>
        <div>
          <button
            onClick={() => dispatch(updateMoney({ amount: 1 }))}
            className="button2"
          >
            +1
          </button>
          <button
            onClick={() => dispatch(updateMoney({ amount: 1000 }))}
            className="button2"
          >
            +1000
          </button>
          <button
            onClick={() => dispatch(updateMoney({ amount: -5 }))}
            className="button2"
          >
            -5
          </button>

          <button
            onClick={() => dispatch(updateEnergy({ amount: 10 }))}
            className="button2"
            style={{ background: 'orange' }}
          >
            +10
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
