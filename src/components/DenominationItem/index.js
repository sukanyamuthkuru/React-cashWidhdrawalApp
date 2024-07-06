import './index.css'

const DenominationItem = props => {
  const {numbers, onSub} = props
  const {number} = numbers
  const onSubstraction = () => {
    onSub(number)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onSubstraction}>
        {number}
      </button>
    </li>
  )
}

export default DenominationItem
