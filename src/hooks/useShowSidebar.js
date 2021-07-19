import { useState } from 'react'

const useShowSidebar = () => {
    const [visible, setVisible] = useState(false);

    const showSidebar = () => {
        if (!visible) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return [visible, showSidebar]
}

export default useShowSidebar;