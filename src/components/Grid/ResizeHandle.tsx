import { faArrowsAlt, faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const test = {
	fontSize: '.5rem',
	// margin: '.1rem'

}

export function ResizeHandle() {
	return (
		<div className="text-white " style={test}>
			<FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
		</div>
	)
}