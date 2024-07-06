import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const numbersList = [
  {number: 50, id: 1},
  {number: 100, id: 2},
  {number: 200, id: 3},
  {number: 500, id: 4},
]

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onSub = countNum => {
    this.setState(pre => ({count: pre.count - countNum}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="profile-container">
            <p className="profile-icon">S</p>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="your-balance-conatainer">
            <p className="your-balace-text">Your Balance</p>
            <p className="balace">{count}</p>
          </div>
          <p className="in-rupess">In Rupees</p>
          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="list-container">
            {numbersList.map(each => (
              <DenominationItem
                key={each.id}
                numbers={each}
                onSub={this.onSub}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
