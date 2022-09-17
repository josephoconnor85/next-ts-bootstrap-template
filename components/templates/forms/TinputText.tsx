import Form from 'react-bootstrap/Form';


type Props = {
    type: "text",
    label: string,
    placeholder?: string,
    onChange: () => void


}

const TinputText = ({type, label, placeholder, onChange}: Props) => {
  return (
    <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Form.Group>
  )
}

export default TinputText