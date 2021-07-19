import { useState } from 'react'

const useShowModal = () => {
    const [visible, setVisible] = useState(false)

    const onHide = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return [visible, onHide]
}

export default useShowModal
