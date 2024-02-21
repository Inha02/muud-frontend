import { createContext, useContext, useState } from 'react'
import Modal from '../components/Modal';

const Context = createContext()

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contents, setContents] = useState({ title: '', type: '' })
    /*
        const showPopup = () => {
            const { type, title, children, onConfirm, redirect, text1, text2, text3, cancelText, confirmText, redirectCancel } =
                toast;
            switch (type) {
                case 'ok':
                    return;
                case 'okCancel':
                    return;
                default:
                    return (
                        <Modal
                            visible={isModalOpen}
                            onConfirm={() => {
                                setIsModalOpen(false);
                                onConfirm && onConfirm();
                                redirect && redirect();
                                setToast();
                            }}
                            title={text1}
                        >
                            <div >{text2}</div>
                            {text3 && <div>{text3}</div>}
                        </Modal>
                    );
            }
        };
    */
    const modalOpen = ({ type, title, content, handle }) => {
        setContents({ type, title, content, handle })
        setIsOpen(true);
    }

    const modalClose = () => {
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
