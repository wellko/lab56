import './ToppingsBtn.css'
import {PropsForBtn} from "../../types";

interface ToppingProps {
	btn: PropsForBtn[],
}

const ToppingsBtn:React.FC<ToppingProps> = (props) => {
	const buttons = props.btn;
	const btns = buttons.map((item) => (<div>
			<button className='ToppingsBtn' type='button' onClick={item.add}> <img alt='some pic' src={item.image}/> {item.name}</button>
			<span> x{item.count} </span>
			<button type='button' className='DeleteBtn' onClick={item.delete}> X </button>
	</div> )
		)

	return(
		<div>
			{btns}
		</div>
	)
}

export default ToppingsBtn