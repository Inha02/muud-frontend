import { createContext, useContext, useState } from 'react'
import Modal from '../components/common/Modal';
import { useNavigate } from 'react-router-dom';

const Context = createContext()

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState({ type: '', title: '', content: '', link: '', handle: null })
    const navigateTo = useNavigate();

    /**
     * modalOpen 
     * @param {string} type - 
     * @param {string} title - 모달 제목
     * @param {string} content - 모달 내용
     * @param {string} link - 모달을 닫을 때 이동할 링크
     * @param {function} handle - 모달을 닫을 때 수행할 함수
     */
    const modalOpen = ({ type, title, content, link, handle }) => {
        setContents({ type, title, content, link, handle })
        setIsOpen(true);
    }

    const modalConfirm = () => {
        if (contents.handle) {
            contents.handle()
        }
        else if (contents.link != '') {
            navigateTo(contents.link)
        }
        setIsOpen(false)
    }

    const modalClose = () => {
        setIsOpen(false)
    }

    return (
        <Context.Provider value={{ modalOpen }}>
            {children}
            {isOpen && (
                <Modal
                    type={contents.type}
                    handleClose={modalClose}
                    handleConfirm={modalConfirm}
                >
                    <div>{contents.content}</div>
                </Modal>)}
        </Context.Provider >
    )
}

// 모달 컨텍스트 사용을 위한 훅
export const useModal = () => {
    return useContext(Context);
};
