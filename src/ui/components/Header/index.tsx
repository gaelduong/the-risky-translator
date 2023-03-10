import { useSelector, useDispatch } from 'react-redux'

// Assets
import { coinImage, energyImage } from '@Asset/images'

// Redux
import {
  resetEnergy,
  resetMoney,
  updateEnergy,
  updateMoney
} from '@Redux/slices/resourceSlice'

// Functions
import { formatNumberWithCommas } from '@Function/generalUtils'

const Header = () => {
  const { money, energy } = useSelector((state: any) => state.resource)
  const dispatch = useDispatch()

  const displayMoney = money < 0 ? `-${money * -1}` : `${money}`

  return (
    <div style={{ marginTop: '1rem' }}>
      <div
        style={{
          color: 'white',
          width: 200,
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          margin: '0 auto',
          padding: '20px 0',
          gap: 10
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 5,
            alignItems: 'center'
          }}
          onClick={() => dispatch(resetMoney())}
        >
          <img
            style={{
              width: 'auto',
              height: 20
            }}
            src={coinImage}
            alt="money"
          />
          <span style={{ fontSize: 15 }}>
            <b>{formatNumberWithCommas(displayMoney)}</b>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 5,
            alignItems: 'center'
          }}
          onClick={() => dispatch(resetEnergy())}
        >
          <img
            style={{
              width: 'auto',
              height: 20,
              transform: 'rotate(0deg)'
            }}
            src={energyImage}
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

        <div>
          {/* <button
            onClick={() => dispatch(updateMoney({ amount: 1 }))}
            className="button2"
          >
            +1
          </button> */}
          <button
            onClick={() => dispatch(updateMoney({ amount: 1000 }))}
            className="button2"
          >
            +1000
          </button>
          {/* <button
            onClick={() => dispatch(updateMoney({ amount: -5 }))}
            className="button2"
          >
            -5
          </button> */}

          <button
            onClick={() => dispatch(updateEnergy({ amount: 100 }))}
            className="button2"
            style={{ background: 'lightblue' }}
          >
            +100
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
