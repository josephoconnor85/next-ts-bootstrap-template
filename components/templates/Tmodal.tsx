import Modal from 'react-bootstrap/Modal'

interface Props {
    show: boolean
    handleClose: () => void
    title: string
}

const Tmodal = ({ show, handleClose, title }: Props) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    )
}

export default Tmodal
