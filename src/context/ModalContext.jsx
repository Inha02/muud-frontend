import { createContext, useContext, useState } from 'react'
import Modal from '../components/common/Modal';
import { useNavigate } from 'react-router-dom';

const Context = createContext()

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState({ type: '', title: '', content: '', link: '', handle: null })
    const navigateTo = useNavigate();

    const modalOpen = ({ type, title, content, link, handle }) => {
        setContents({ type, title, content, link, handle })
        setIsOpen(true);
    }

    const modalClose = () => {
        if (contents.handle) {
            contents.handle()
        }
        else if (contents.link != '') {
            navigateTo(contents.link)
        }
        setIsOpen(false)
    }

    //여는 순간 타입, 버튼 글자, 타이틀,내용물 ,클릭시 수행 함수를 적용한 모달을 띄워주어야 한다
    return (
        <Context.Provider value={{ isOpen, modalOpen, modalClose }}>
            {children}
            {isOpen && (
                <Modal
                    type={contents.type}
                    handleClose={modalClose}
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
