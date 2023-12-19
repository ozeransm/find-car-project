import { ModalCard } from "./ModalCard"
import { ModalEdit } from "./ModalEdit"

export const ModalWin = ({onClose, valueModal, isEdit}) => {
    return (
        <>
            {!isEdit && <ModalCard onClose={onClose} valueModal={valueModal} isEdit={isEdit} />}
            {isEdit && <ModalEdit onClose={onClose} valueModal={valueModal} isEdit={isEdit} />}
            
        </>
    )
}